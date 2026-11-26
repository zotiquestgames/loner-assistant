/**
 * LONER ASSISTANT v2.4 - Cinematic Action (Loner: Cinematic Action)
 *
 * Action Points: 3 per conflict or chase, spent one at a time to gain
 * Advantage, cancel a failure, avoid a consequence, or do the impossible.
 * Push Yourself recovers 3 AP once per session, at a cost.
 * Chases: 2-3 Oracle questions with optional Distant/Close/Caught tracking.
 * Intensity: Low/Medium/High per scene, shifted by Twists, never more than
 * three High scenes in a row.
 */

import { getState } from './state.js';
import { getSession, updateSession } from './db/database.js';
import { showAlert } from './toast.js';
import { showModal, closeModal, escapeHtml } from './ui.js';
import * as Editor from './editor.js';
import {
  rollChanceRisk,
  interpretOracleRoll,
  registerDoubles,
  rollOracle,
  lastOracleResult
} from './oracle.js';

const MAX_AP = 3;
const DISTANCE = ['Caught', 'Close', 'Distant'];
const INTENSITY = ['Low', 'Medium', 'High'];

const CHASE_QUESTIONS = {
  gain: { label: 'Can I gain distance?', protagonistSide: true },
  close: { label: 'Do they close in?', protagonistSide: false },
  escape: { label: 'Do I escape?', protagonistSide: true }
};

const IMPOSSIBLE_COSTS = {
  frailty: 'Gain a new Frailty',
  tag: 'Burn a Tag',
  escalate: 'Circumstances escalate'
};

const PUSH_COSTS = {
  consequence: 'Take a serious consequence',
  tag: 'Burn a tag',
  escalate: 'Escalate the situation'
};

let pool = null;   // { source: 'conflict' | 'chase', ap, baseline }
let chase = null;  // { pursuer, distance, pendingAdvantage, last, over }

function note(title, text, color = 'var(--accent-yes)') {
  Editor.insertBlock(title, text, color);
}

// ---------------------------------------------------------------- pool

export function startPool(source) {
  pool = { source, ap: MAX_AP, baseline: lastOracleResult };
  render();
}

export function endPool(source) {
  if (pool && pool.source === source) {
    pool = null;
    render();
  }
}

function spend(what) {
  if (!pool) {
    showAlert('Action Points are only available during a conflict or a chase', 'info');
    return false;
  }
  if (pool.ap < 1) {
    showAlert('No Action Points left. Push Yourself to recover them.', 'info');
    return false;
  }
  pool.ap--;
  note('Action Point', `${what} (${pool.ap}/${MAX_AP} left)`);
  return true;
}

export function gainAdvantage() {
  if (!pool) return spend('Gain Advantage');

  if (chase) {
    if (chase.pendingAdvantage) {
      showAlert('Advantage is already set for the next chase roll', 'info');
      return;
    }
    if (!spend('Gain Advantage on the next chase roll')) return;
    chase.pendingAdvantage = true;
    render();
    return;
  }

  const radio = (value) => document.querySelector(`input[name="conflict-modifier"][value="${value}"]`);
  const current = document.querySelector('input[name="conflict-modifier"]:checked')?.value;
  if (current === 'advantage') {
    showAlert('Already at Advantage: an Action Point adds nothing here. Save it.', 'info');
    return;
  }
  if (current === 'disadvantage') {
    if (!spend('Gain Advantage: cancels the Disadvantage on the next conflict roll')) return;
    radio('normal').checked = true;
  } else {
    if (!spend('Gain Advantage on the next conflict roll')) return;
    radio('advantage').checked = true;
  }
  render();
}

export async function cancelFailure() {
  if (chase && chase.last && chase.last.result.answer === 'No') {
    if (!spend(`Cancel a Failure: reroll "${CHASE_QUESTIONS[chase.last.question].label}"`)) return;
    chase.distance = chase.last.distanceBefore;
    chase.over = null;
    await chaseRoll(chase.last.question);
    return;
  }

  if (pool && lastOracleResult && lastOracleResult !== pool.baseline && lastOracleResult.answer === 'No') {
    if (!spend('Cancel a Failure: reroll the last Oracle question, and keep the new answer')) return;
    pool.baseline = null;
    await rollOracle();
    render();
    return;
  }

  showAlert('Cancel a Failure rerolls a No: roll the Oracle or a chase question first', 'info');
}

export function avoidConsequence() {
  if (spend('Avoid a Consequence: the complication is erased from the scene')) render();
}

export function showDoImpossible() {
  if (!pool) return spend('Do the Impossible');
  if (pool.ap < 1) return spend('Do the Impossible');

  showModal('Do the Impossible', `
    <p class="text-muted" style="margin-bottom: 1rem;">
      Spend 1 AP to roll for something that should automatically fail. Whatever the Oracle says, you pay a narrative cost.
    </p>
    <div class="form-group">
      <label>What are you attempting?</label>
      <input type="text" id="impossible-attempt" placeholder="e.g., Jump the motorcycle across the canyon">
    </div>
    <div class="form-group">
      <label>The cost</label>
      <select id="impossible-cost">
        ${Object.entries(IMPOSSIBLE_COSTS).map(([k, v]) => `<option value="${k}">${v}</option>`).join('')}
      </select>
      <input type="text" id="impossible-cost-detail" placeholder="e.g., Wounded / Cover compromised" style="margin-top: 0.5rem;">
      <p class="text-muted" style="font-size: 0.8rem; margin-top: 0.25rem;">Body or identity at risk: a Frailty. A capability strained: burn a Tag. The world changes: escalate. When in doubt, escalate.</p>
    </div>
    <button class="btn btn-primary" onclick="ActionSystem.doImpossible()" style="width: 100%;">Spend 1 AP</button>
  `);
}

export function doImpossible() {
  const attempt = document.getElementById('impossible-attempt').value.trim() || 'the impossible';
  const cost = IMPOSSIBLE_COSTS[document.getElementById('impossible-cost').value];
  const detail = document.getElementById('impossible-cost-detail').value.trim();
  if (!spend(`Do the Impossible: ${attempt}. Cost: ${cost}${detail ? ` (${detail})` : ''}. Now roll the Oracle.`)) return;

  if (chase) {
    chase.distance = 2;
    chase.over = null;
  }
  closeModal();
  render();
}

export async function showPushYourself() {
  if (!pool) {
    showAlert('Push Yourself works in the middle of a conflict or a chase', 'info');
    return;
  }
  const session = await currentSession();
  if (session?.pushYourselfUsed) {
    showAlert('Push Yourself is already used this session', 'info');
    return;
  }

  showModal('Push Yourself', `
    <p class="text-muted" style="margin-bottom: 1rem;">
      Once per adventure (one session), recover 3 Action Points. Choose the price.
    </p>
    <div class="form-group">
      <label>The price</label>
      <select id="push-cost">
        ${Object.entries(PUSH_COSTS).map(([k, v]) => `<option value="${k}">${v}</option>`).join('')}
      </select>
      <input type="text" id="push-detail" placeholder="e.g., Three more guards arrive" style="margin-top: 0.5rem;">
    </div>
    <button class="btn btn-primary" onclick="ActionSystem.pushYourself()" style="width: 100%;">Recover 3 AP</button>
  `);
}

export async function pushYourself() {
  if (!pool) return;
  const cost = PUSH_COSTS[document.getElementById('push-cost').value];
  const detail = document.getElementById('push-detail').value.trim();
  const state = getState();
  if (state.sessionId) {
    await updateSession(state.sessionId, { pushYourselfUsed: true });
  }
  pool.ap = MAX_AP;
  note('Push Yourself', `${cost}${detail ? `: ${detail}` : ''}. Back to ${MAX_AP} AP.`, 'var(--accent-no)');
  closeModal();
  render();
}

// --------------------------------------------------------------- chase

export function startChase() {
  const pursuer = (document.getElementById('chase-pursuer')?.value || '').trim() || 'The pursuers';
  chase = { pursuer, distance: 1, pendingAdvantage: false, last: null, over: null };
  startPool('chase');
  note('Chase', `${pursuer} close in. Distance: Close.`, 'var(--accent-no)');
}

function protagonistDelta(result) {
  if (result.answer === 'Yes') return result.modifier === 'but' ? 0 : 1;
  return result.modifier === 'and' ? -2 : -1;
}

export async function chaseRoll(question) {
  if (!chase || chase.over) return;
  const q = CHASE_QUESTIONS[question];

  let modifier = document.querySelector('input[name="chase-modifier"]:checked')?.value || 'normal';
  const usedAdvantage = chase.pendingAdvantage;
  if (usedAdvantage) {
    modifier = modifier === 'disadvantage' ? 'normal' : 'advantage';
    chase.pendingAdvantage = false;
  }

  const { chanceDice, riskDice } = rollChanceRisk(modifier);
  const result = interpretOracleRoll(chanceDice, riskDice);
  const distanceBefore = chase.distance;

  let delta = q.protagonistSide ? protagonistDelta(result) : -protagonistDelta(result);
  // AP Advantage in a chase guarantees one step in your favor
  if (usedAdvantage) delta += 1;
  chase.distance = Math.max(0, Math.min(2, chase.distance + delta));

  if (question === 'escape') {
    chase.over = result.answer === 'Yes' ? 'escaped' : 'caught';
  } else if (chase.distance === 0) {
    chase.over = 'caught';
  }
  chase.last = { question, distanceBefore, result };

  const custom = (document.getElementById('chase-question')?.value || '').trim();
  note(
    `Chase - ${custom || q.label}`,
    `${result.formatted} (Chance: ${chanceDice}, Risk: ${riskDice}). Distance: ${DISTANCE[chase.distance]}${chase.over ? ` - ${chase.over === 'escaped' ? 'you escape' : 'you are caught'}` : ''}`,
    result.answer === 'Yes' ? 'var(--accent-yes)' : 'var(--accent-no)'
  );

  render();

  // Chases are not Harm & Luck conflicts: equal dice count toward the Twist
  if (result.isDoubles) {
    await registerDoubles();
  }
}

export function endChase() {
  if (!chase) return;
  const outcome = chase.over === 'escaped' ? 'Escaped' : chase.over === 'caught' ? 'Caught' : `Ended at ${DISTANCE[chase.distance]}`;
  note('Chase Over', `${chase.pursuer}: ${outcome}.`, 'var(--accent-no)');
  chase = null;
  endPool('chase');
}

// ----------------------------------------------------------- intensity

async function currentSession() {
  const state = getState();
  return state.sessionId ? await getSession(state.sessionId) : null;
}

function trailingHigh(history) {
  let n = 0;
  for (let i = history.length - 1; i >= 0 && history[i] === 'High'; i--) n++;
  return n;
}

async function saveIntensity(intensity) {
  const state = getState();
  if (state.sessionId) await updateSession(state.sessionId, { intensity });
}

export async function setIntensity(level) {
  const session = await currentSession();
  if (!session) {
    showAlert('No active session', 'error');
    return;
  }
  const intensity = session.intensity || { history: [], next: null };
  const history = [...intensity.history];
  const before = history.length ? history.slice(0, -1) : history;

  if (level === 'High' && trailingHigh(before) >= 3) {
    showAlert('After three High scenes in a row, this scene must be Low or Medium', 'error');
    return;
  }

  if (history.length) history[history.length - 1] = level;
  else history.push(level);

  await saveIntensity({ history: history.slice(-20), next: intensity.next });
  render();
}

export async function onSceneTransition() {
  const session = await currentSession();
  const intensity = session?.intensity;
  if (!intensity || intensity.history.length === 0) return;

  const history = [...intensity.history];
  let level = intensity.next || history[history.length - 1];
  if (level === 'High' && trailingHigh(history) >= 3) {
    level = 'Medium';
    showAlert('Three High scenes in a row: this scene starts at Medium', 'info');
  }
  history.push(level);
  await saveIntensity({ history: history.slice(-20), next: null });
  render();
}

export async function onTwist() {
  const session = await currentSession();
  const intensity = session?.intensity;
  if (!intensity || intensity.history.length === 0) return;

  const current = intensity.history[intensity.history.length - 1];
  const next = current === 'Low' ? 'Low' : 'High';
  await saveIntensity({ history: intensity.history, next });
  note('Intensity', `Twist during a ${current} scene: the next scene starts at ${next}.`);
  render();
}

// -------------------------------------------------------------- render

function apHTML(session) {
  if (!pool) {
    return '<p class="text-muted" style="font-size: 0.85rem;">Start a conflict or a chase to get 3 Action Points.</p>';
  }
  const dots = '●'.repeat(pool.ap) + '○'.repeat(MAX_AP - pool.ap);
  const pushUsed = session?.pushYourselfUsed;
  return `
    <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.5rem;">
      <span style="font-size: 1.3rem; letter-spacing: 3px;">${dots}</span>
      <span class="text-muted" style="font-size: 0.8rem;">${pool.ap}/${MAX_AP} AP (${pool.source})</span>
    </div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.25rem;">
      <button class="btn btn-sm btn-secondary" onclick="ActionSystem.gainAdvantage()">Gain Advantage</button>
      <button class="btn btn-sm btn-secondary" onclick="ActionSystem.cancelFailure()">Cancel a Failure</button>
      <button class="btn btn-sm btn-secondary" onclick="ActionSystem.avoidConsequence()">Avoid Consequence</button>
      <button class="btn btn-sm btn-secondary" onclick="ActionSystem.showDoImpossible()">Do the Impossible</button>
    </div>
    <button class="btn btn-sm btn-outline" onclick="ActionSystem.showPushYourself()" style="width: 100%; margin-top: 0.25rem;" ${pushUsed ? 'disabled' : ''}>
      ${pushUsed ? 'Push Yourself used this session' : 'Push Yourself (recover 3 AP)'}
    </button>
  `;
}

function chaseHTML() {
  if (!chase) {
    return `
      <div style="display: flex; gap: 0.5rem;">
        <input type="text" id="chase-pursuer" placeholder="Who is chasing you?" style="flex: 1;">
        <button class="btn btn-sm btn-primary" onclick="ActionSystem.startChase()">Start Chase</button>
      </div>
    `;
  }

  const track = DISTANCE.slice().reverse().map((label, i) => {
    const value = 2 - i;
    const active = chase.distance === value;
    return `<span class="status-badge" style="background: ${active ? 'var(--accent-no)' : 'var(--text-muted)'}; opacity: ${active ? 1 : 0.45};">${label}</span>`;
  }).join(' ');

  const over = chase.over
    ? `<p style="font-weight: 700; margin: 0.5rem 0;">${chase.over === 'escaped' ? 'You escape.' : 'You are caught.'}${chase.over === 'caught' && pool?.ap ? ' Do the Impossible can still turn it around.' : ''}</p>`
    : '';

  const radio = (value, label) => `
    <label style="display: flex; align-items: center; gap: 0.3rem; text-transform: none; font-size: 0.8rem;">
      <input type="radio" name="chase-modifier" value="${value}" ${value === 'normal' ? 'checked' : ''} style="width: auto; margin: 0;"> ${label}
    </label>`;

  return `
    <p style="font-size: 0.85rem; margin-bottom: 0.4rem;"><strong>${escapeHtml(chase.pursuer)}</strong></p>
    <div style="display: flex; gap: 0.25rem; margin-bottom: 0.5rem;">${track}</div>
    ${over}
    ${chase.over ? '' : `
      <div style="display: flex; gap: 0.75rem; margin-bottom: 0.5rem;">
        ${radio('normal', 'Normal')}${radio('advantage', 'Advantage')}${radio('disadvantage', 'Disadvantage')}
      </div>
      ${chase.pendingAdvantage ? '<p class="text-muted" style="font-size: 0.8rem;">AP Advantage on the next roll: +1 step in your favor.</p>' : ''}
      <input type="text" id="chase-question" placeholder="Your question (optional), e.g. Can I lose them in the market?" style="margin-bottom: 0.4rem;">
      <div style="display: flex; flex-direction: column; gap: 0.25rem;">
        ${Object.entries(CHASE_QUESTIONS).map(([k, q]) => `<button class="btn btn-sm btn-secondary" onclick="ActionSystem.chaseRoll('${k}')">${q.label}</button>`).join('')}
      </div>
    `}
    <button class="btn btn-sm btn-outline" onclick="ActionSystem.endChase()" style="width: 100%; margin-top: 0.4rem;">End Chase</button>
  `;
}

function intensityHTML(session) {
  if (!session) return '<p class="text-muted" style="font-size: 0.85rem;">No active session</p>';
  const intensity = session.intensity || { history: [], next: null };
  const current = intensity.history[intensity.history.length - 1];
  const highs = trailingHigh(intensity.history);
  return `
    <div style="display: flex; gap: 0.25rem;">
      ${INTENSITY.map(l => `<button class="btn btn-sm ${l === current ? 'btn-primary' : 'btn-outline'}" style="flex: 1;" onclick="ActionSystem.setIntensity('${l}')">${l}</button>`).join('')}
    </div>
    <p class="text-muted" style="font-size: 0.8rem; margin-top: 0.4rem;">
      ${current ? `This scene: ${current}.` : 'Set the intensity of the current scene to start tracking.'}
      ${intensity.next ? ` Next scene: ${intensity.next} (after a Twist).` : ''}
      ${highs >= 3 ? ' Three High scenes in a row: the next must be Low or Medium.' : ''}
    </p>
  `;
}

export async function render() {
  const container = document.getElementById('cinematic-content');
  if (!container) return;
  const session = await currentSession();
  const section = (title, body) => `
    <div style="margin-bottom: 1rem;">
      <div style="font-family: var(--font-heading); font-size: 0.75rem; letter-spacing: var(--tracking-caps); text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.4rem;">${title}</div>
      ${body}
    </div>`;
  container.innerHTML =
    section('Action Points', apHTML(session)) +
    section('Chase', chaseHTML()) +
    section('Intensity', intensityHTML(session));
}

export const ActionSystem = {
  startPool,
  endPool,
  gainAdvantage,
  cancelFailure,
  avoidConsequence,
  showDoImpossible,
  doImpossible,
  showPushYourself,
  pushYourself,
  startChase,
  chaseRoll,
  endChase,
  setIntensity,
  onSceneTransition,
  onTwist,
  render
};
