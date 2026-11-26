/**
 * LONER ASSISTANT v2.4 - Temporal play (Loner: The Path Not Taken)
 *
 * Time Loop Mode: Checkpoints, a Loop Counter, a Persist List, and Wear &
 * Tear tags rolled on every reset. Time Leap Mode: Fixed Points, Leap
 * Nodes with divergences and Paradox Stress, timeline collapse. The
 * Time-Web records it all as a graph. State lives on the campaign, since
 * loops and leaps span sessions.
 */

import { getState } from './state.js';
import { getCampaign, updateCampaign } from './db/database.js';
import { showAlert } from './toast.js';
import { showModal, closeModal, escapeHtml } from './ui.js';
import * as Editor from './editor.js';
import { rollD6, rollChanceRisk, interpretOracleRoll, registerDoubles } from './oracle.js';

const WEAR = {
  'Temporal Migraine': 'Your next scene after a reset is played at Disadvantage.',
  'Déjà-Flare': 'The next tie on the Oracle counts as a Twist + "Memory Bleed".',
  'Ghost Echo': 'You glimpsed another version of yourself (Echo-Self on the Time-Web).'
};

const FALLOUT = [
  'Memory Scorch: permanently erase one non-Memory tag from your character sheet.',
  'Echo Overrun: an uncontrolled Time Ghost appears. Treat it as a new Rival tag.',
  'World Glitch: add the global tag Physics Soft (Advantage for weird solutions, Disadvantage for standard tech or logic).',
  'Relationship Flip: choose one current Ally. They re-enter the story as a Nemesis.',
  'Body Lag: add the Frailty Chrono Fatigue until you clear two Quiet Scenes.',
  'Second-Order Reprieve: remove one ✶ and heal one wear tag.'
];

const DIVERGENCES = [
  'Has a key NPC role flipped?',
  'Is an old enemy now an ally?',
  'Is one Sensitive Tag rewritten?'
];

const PROMPTS = [
  'Have I done this before?',
  'Have I pushed this event further than before?',
  'Can I push the checkpoint?',
  'Is this moment now fixed?',
  'Can I leap now?',
  'Does this world recognize me?',
  'Has the Paradox caught up?'
];

function emptyState() {
  return {
    memoryTag: '',
    sensitiveTags: [],
    persistList: [],
    wearTags: [],
    loopCounter: 0,
    loopActive: false,
    activeCheckpoint: null,
    leapingDisabled: false,
    drift: 0,
    paradoxTag: '',
    counters: { C: 0, F: 0, L: 0 },
    current: '0',
    nodes: [{ id: '0', type: 'origin', description: 'The present', tags: [], stress: 0, parent: null, edge: null, loops: 0 }]
  };
}

async function load() {
  const { campaignId } = getState();
  if (!campaignId) return null;
  const campaign = await getCampaign(campaignId);
  return campaign?.temporal || null;
}

async function save(t) {
  await updateCampaign(getState().campaignId, { temporal: t });
  await render();
}

function node(t, id) {
  return t.nodes.find(n => n.id === id);
}

// The Leap Node you are in: the current node, or the nearest leap above it
// (a Checkpoint declared inside a leap still lives in that timeline).
function currentLeap(t) {
  let n = node(t, t.current);
  while (n && n.type !== 'leap' && n.type !== 'origin') n = node(t, n.parent);
  return n?.type === 'leap' ? n : null;
}

function label(t, n) {
  if (n.type === 'origin') return 'Node 0';
  let p = node(t, n.parent);
  while (p && p.type !== 'leap' && p.type !== 'origin') p = node(t, p.parent);
  return n.type === 'checkpoint' && p?.type === 'leap' ? `${n.id}@${p.id}` : n.id;
}

function addNode(t, type, prefix, description, edge = 'forward') {
  t.counters[prefix]++;
  const n = {
    id: `${prefix}${t.counters[prefix]}`, type, description, tags: [], stress: 0,
    parent: t.current, edge, loops: 0
  };
  t.nodes.push(n);
  t.current = n.id;
  return n;
}

function note(title, text, color = 'var(--accent-no)') {
  Editor.insertBlock(title, text, color);
}

async function ask(question, modifier = 'normal') {
  const { chanceDice, riskDice } = rollChanceRisk(modifier);
  const result = interpretOracleRoll(chanceDice, riskDice);
  note(question, `${result.formatted} (Chance: ${chanceDice}, Risk: ${riskDice})`,
    result.answer === 'Yes' ? 'var(--accent-yes)' : 'var(--accent-no)');
  if (result.isDoubles) await registerDoubles();
  return result;
}

async function requireState() {
  const t = await load();
  if (!t) showAlert('Set up temporal play first', 'info');
  return t;
}

// --------------------------------------------------------------- setup

export async function showSetup() {
  if (!getState().campaignId) {
    showAlert('Select a campaign first', 'error');
    return;
  }
  const t = (await load()) || emptyState();
  showModal('Temporal Play Setup', `
    <p class="text-muted" style="margin-bottom: 1rem;">
      The Memory Tag never changes, however time shifts. Sensitive Tags (up to three) are the ones time is likely to rewrite.
    </p>
    <div class="form-group">
      <label>Memory Tag</label>
      <input type="text" id="temporal-memory" value="${escapeHtml(t.memoryTag)}" placeholder="e.g., I Was There When It Fell">
    </div>
    <div class="form-group">
      <label>Sensitive Tags (comma-separated, up to 3)</label>
      <input type="text" id="temporal-sensitive" value="${escapeHtml(t.sensitiveTags.join(', '))}" placeholder="e.g., Loyal to the Order, Find My Brother">
    </div>
    <button class="btn btn-primary" onclick="TimeSystem.saveSetup()" style="width: 100%;">Save</button>
  `);
}

export async function saveSetup() {
  const t = (await load()) || emptyState();
  t.memoryTag = document.getElementById('temporal-memory').value.trim();
  t.sensitiveTags = document.getElementById('temporal-sensitive').value
    .split(',').map(s => s.trim()).filter(Boolean).slice(0, 3);
  closeModal();
  await save(t);
}

// ----------------------------------------------------------- time loop

export async function showCheckpointForm() {
  const t = await requireState();
  if (!t) return;
  const pushing = t.loopActive;
  showModal(pushing ? 'Push Ahead to a New Checkpoint' : 'Declare a Checkpoint', `
    ${pushing ? `<p class="text-muted" style="margin-bottom: 1rem;">You can push ahead when you reach a new location or NPC, after three resets, or when the Twist Counter hits 3 and you succeed at the scene's goal. Pushing ahead erases every Temporal Migraine.</p>` : ''}
    <div class="form-group">
      <label>Where is the Checkpoint?</label>
      <input type="text" id="checkpoint-desc" placeholder="e.g., The entrance to the facility">
    </div>
    <button class="btn btn-primary" onclick="TimeSystem.declareCheckpoint()" style="width: 100%;">Declare</button>
  `);
}

export async function declareCheckpoint() {
  const t = await requireState();
  if (!t) return;
  const desc = document.getElementById('checkpoint-desc').value.trim();
  const pushing = t.loopActive;

  const n = addNode(t, 'checkpoint', 'C', desc);
  t.activeCheckpoint = n.id;
  t.loopActive = true;
  t.loopCounter = 0;

  if (pushing) {
    t.wearTags = t.wearTags.filter(w => w !== 'Temporal Migraine');
    note('Push Ahead', `New Checkpoint ${label(t, n)}${desc ? `: ${desc}` : ''}. Temporal Migraines erased; you may also erase one more wear tag.`);
  } else {
    note('Checkpoint', `${label(t, n)}${desc ? `: ${desc}` : ''}. Loop Counter 0.`);
  }
  closeModal();
  await save(t);
}

export async function resetLoop() {
  const t = await requireState();
  if (!t || !t.loopActive) {
    showAlert('Declare a Checkpoint first', 'info');
    return;
  }
  t.loopCounter++;
  const cp = node(t, t.activeCheckpoint);
  cp.loops = t.loopCounter;
  t.current = cp.id;

  const roll = rollD6();
  let wear;
  if (roll <= 2) wear = 'Temporal Migraine';
  else if (roll <= 4) wear = 'Déjà-Flare';
  else if (roll === 5) wear = 'Ghost Echo';

  if (wear) {
    t.wearTags.push(wear);
    if (wear === 'Ghost Echo') cp.tags.push(`Echo-Self @ ${label(t, cp)}`);
  }

  note('Loop Reset', `Back to ${label(t, cp)}. Loop Counter ${t.loopCounter}. Wear & Tear (${roll}): ${wear ? `${wear}. ${WEAR[wear]}` : 'Loop Mastery: add one learned fact to the Persist List.'}`);

  if (t.loopCounter >= 6) {
    showAlert('Loop Counter 6 with no new Checkpoint: the character may be Consumed (optional ending)', 'error');
  } else if (t.loopCounter >= 3) {
    showAlert('Three resets: you can declare a new Checkpoint', 'info');
  }

  await save(t);
  if (!wear) showPersistPrompt('Loop Mastery: what did you learn for good?');
}

export function showPersistPrompt(title = 'Add to the Persist List') {
  showModal(title, `
    <p class="text-muted" style="margin-bottom: 1rem;">Gear, information, or facts the character carries through every reset. Mark what they remember from a past loop as Recalled.</p>
    <div class="form-group">
      <input type="text" id="persist-item" placeholder="e.g., The guard rotation (Recalled)">
    </div>
    <button class="btn btn-primary" onclick="TimeSystem.addPersist()" style="width: 100%;">Add</button>
  `);
}

export async function addPersist() {
  const t = await requireState();
  const item = document.getElementById('persist-item').value.trim();
  if (!t || !item) return;
  t.persistList.push(item);
  closeModal();
  await save(t);
}

export async function removePersist(i) {
  const t = await requireState();
  if (!t) return;
  t.persistList.splice(i, 1);
  await save(t);
}

export async function removeWear(i) {
  const t = await requireState();
  if (!t) return;
  const [removed] = t.wearTags.splice(i, 1);
  note('Wear Tag Erased', removed, 'var(--accent-yes)');
  await save(t);
}

export async function ritual() {
  const result = await ask('Did the ritual take?');
  showAlert(result.answer === 'Yes' && result.modifier !== 'but'
    ? 'The ritual took: erase one wear tag'
    : 'The ritual did not take', 'info');
}

export async function askLoopBroken() {
  const t = await requireState();
  if (!t || !t.loopActive) return;
  const result = await ask('Is the loop finally broken?');
  if (result.answer === 'Yes' && result.modifier === 'but') {
    showAlert('Not quite: the loop cracks, but holds. Push on.', 'info');
  } else if (result.answer === 'Yes') {
    const cp = node(t, t.activeCheckpoint);
    t.current = cp.id;
    addNode(t, 'fixed', 'F', `Breakthrough at ${label(t, cp)}`);
    t.loopActive = false;
    t.activeCheckpoint = null;
    note('Breakthrough', 'The loop is broken. The final Checkpoint becomes a Fixed Point; play continues forward.', 'var(--accent-yes)');
    await save(t);
  } else if (result.modifier === 'and') {
    showAlert('Something fundamental has broken: move toward Consumed, or trigger a Leap', 'error');
  } else {
    showAlert('Not yet. The character pushes on.', 'info');
  }
}

export async function acceptLoop() {
  const t = await requireState();
  if (!t || !t.loopActive) return;
  t.loopActive = false;
  t.activeCheckpoint = null;
  note('Acceptance', 'The character stops trying to change the outcome. Loop Mode disengages.');
  await save(t);
}

// ----------------------------------------------------------- time leap

export async function showFixedPointForm() {
  const t = await requireState();
  if (!t) return;
  showModal('Declare a Fixed Point', `
    <p class="text-muted" style="margin-bottom: 1rem;">An event the timeline will not allow you to change, across every Leap Node.</p>
    <div class="form-group">
      <label>The event</label>
      <input type="text" id="fixed-desc" placeholder="e.g., The bridge was never saved">
    </div>
    <div class="form-group">
      <label>How it locked</label>
      <select id="fixed-how">
        <option value="Declaration">Declaration: the fiction says it can't change</option>
        <option value="Milestone">Milestone: a major goal is fully completed</option>
        <option value="Oracle Lock-In">Oracle Lock-In: a "Yes, and..." you chose to lock</option>
      </select>
    </div>
    <button class="btn btn-primary" onclick="TimeSystem.declareFixedPoint()" style="width: 100%;">Lock It</button>
  `);
}

export async function declareFixedPoint() {
  const t = await requireState();
  if (!t) return;
  const desc = document.getElementById('fixed-desc').value.trim();
  const how = document.getElementById('fixed-how').value;
  const n = addNode(t, 'fixed', 'F', desc);
  n.tags.push(how);
  note('Fixed Point', `${n.id}: ${desc || 'locked'} (${how}). You may leap now.`);
  closeModal();
  await save(t);
}

export async function leap() {
  const t = await requireState();
  if (!t) return;
  if (t.leapingDisabled) {
    showAlert('You can no longer leap', 'info');
    return;
  }
  const n = addNode(t, 'leap', 'L', '', 'leap');
  t.drift++;
  await save(t);

  const rows = [];
  for (const q of DIVERGENCES) {
    const r = await ask(`Leap ${n.id}: ${q}`);
    const diverges = r.answer === 'Yes' || (r.answer === 'No' && r.modifier === 'and');
    rows.push({ q, r, diverges });
  }

  showModal(`Leap to ${n.id}`, `
    <p class="text-muted" style="margin-bottom: 1rem;">
      Copy your character sheet as it is and add <strong>Temporal Drift +${t.drift}</strong>. Each Yes or "No, and..." adds a world tag to the Leap Node.
    </p>
    ${rows.map((row, i) => `
      <div class="form-group">
        <label>${escapeHtml(row.q)} ${row.r.formatted}</label>
        ${row.diverges
          ? `<input type="text" class="leap-world-tag" data-index="${i}" placeholder="World tag, e.g., Defected from the Order">`
          : '<p class="text-muted" style="font-size: 0.85rem;">No divergence here.</p>'}
      </div>
    `).join('')}
    <div class="form-group">
      <label>What is this timeline like?</label>
      <input type="text" id="leap-desc" placeholder="e.g., The city is flooded">
    </div>
    <button class="btn btn-primary" onclick="TimeSystem.saveLeap('${n.id}')" style="width: 100%;">Save Leap Node</button>
  `);
}

export async function saveLeap(nodeId) {
  const t = await requireState();
  if (!t) return;
  const n = node(t, nodeId);
  n.description = document.getElementById('leap-desc').value.trim();
  document.querySelectorAll('.leap-world-tag').forEach(input => {
    if (input.value.trim()) n.tags.push(input.value.trim());
  });
  note('Leap', `${n.id}${n.description ? `: ${n.description}` : ''}${n.tags.length ? ` [${n.tags.join(', ')}]` : ''}. Temporal Drift +${t.drift}.`);
  closeModal();
  await save(t);
}

async function addStressTo(t, n, reason) {
  n.stress++;
  note('Paradox Stress', `${n.id} ${'✶'.repeat(n.stress)}${reason ? `: ${reason}` : ''}. Play with Disadvantage.`);
  if (n.stress >= 3 && !n.entity) {
    n.entity = 'Paradox Entity';
    n.tags.push('Paradox Entity (Nemesis)');
    showAlert('Three ✶: a Paradox Entity appears. Treat it as a Nemesis tag.', 'error');
  }
}

export async function addStress() {
  const t = await requireState();
  if (!t) return;
  const n = currentLeap(t);
  if (!n) {
    showAlert('Paradox Stress goes on Leap Nodes', 'info');
    return;
  }
  await addStressTo(t, n, 'an action contradicted a Fixed Point');
  await save(t);
}

export async function askStable() {
  const t = await requireState();
  if (!t) return;
  const current = currentLeap(t);
  if (!current) {
    showAlert('Ask this inside a Leap Node', 'info');
    return;
  }
  const r = await ask('Is this timeline stable?');
  if (r.answer === 'No' && r.modifier === 'and') {
    const roll = rollD6();
    const fallout = FALLOUT[roll - 1];
    note('Timeline Collapse', `Fallout (${roll}): ${fallout}`);
    t.current = current.id;
    const n = addNode(t, 'leap', 'L', 'After the collapse', 'leap');
    n.stress = roll === 6 ? 1 : 2;
    t.drift++;
    showAlert(`Collapse! Fallout: ${fallout.split(':')[0]}. Auto-leap to ${n.id}.`, 'error');
  } else if (r.answer === 'No' && !r.modifier) {
    await addStressTo(t, current, 'the timeline holds, for now');
  } else {
    showAlert('The timeline holds', 'success');
  }
  await save(t);
}

export async function acceptTimeline() {
  const t = await requireState();
  if (!t) return;
  const n = currentLeap(t);
  if (!n) return;
  t.nodes.forEach(x => { x.stress = 0; });
  t.leapingDisabled = true;
  n.tags.push('Prime timeline');
  note('Acceptance', `${n.id} is the new Prime timeline. All ✶ removed. No more leaps.`, 'var(--accent-yes)');
  await save(t);
}

export function showResolveParadox() {
  showModal('Paradox Resolution', `
    <p class="text-muted" style="margin-bottom: 1rem;">You confronted the Paradox Entity: defeated it, bargained with it, or absorbed it. It becomes a permanent tag, and you cannot leap anymore.</p>
    <div class="form-group">
      <input type="text" id="paradox-tag" value="Haunted by Paradox">
    </div>
    <button class="btn btn-primary" onclick="TimeSystem.resolveParadox()" style="width: 100%;">Resolve</button>
  `);
}

export async function resolveParadox() {
  const t = await requireState();
  if (!t) return;
  const tag = document.getElementById('paradox-tag').value.trim();
  if (!tag) return;
  closeModal();
  t.paradoxTag = tag;
  t.leapingDisabled = true;
  note('Paradox Resolution', `${tag}. You cannot leap anymore.`, 'var(--accent-yes)');
  await save(t);
}

export async function setCurrent(nodeId) {
  const t = await requireState();
  if (!t) return;
  t.current = nodeId;
  await save(t);
  await showTimeWeb();
}

export async function addNodeTag(nodeId) {
  const t = await requireState();
  const input = document.getElementById(`node-tag-${nodeId}`);
  if (!t || !input.value.trim()) return;
  node(t, nodeId).tags.push(input.value.trim());
  await save(t);
  await showTimeWeb();
}

export async function askPrompt() {
  const q = document.getElementById('temporal-prompt').value;
  await ask(q);
}

// ------------------------------------------------------------ time-web

function layout(t) {
  const pos = {};
  const used = new Set();
  let maxRow = 0;
  for (const n of t.nodes) {
    if (!n.parent) {
      pos[n.id] = { col: 0, row: 0 };
    } else {
      const p = pos[n.parent];
      const col = p.col + 1;
      let row = n.edge === 'leap' ? maxRow + 1 : p.row;
      while (used.has(`${col},${row}`)) row++;
      pos[n.id] = { col, row };
    }
    used.add(`${pos[n.id].col},${pos[n.id].row}`);
    maxRow = Math.max(maxRow, pos[n.id].row);
  }
  return { pos, maxRow };
}

function timeWebSVG(t) {
  const { pos, maxRow } = layout(t);
  const W = 120, H = 90, PAD = 40;
  const cols = Math.max(...Object.values(pos).map(p => p.col)) + 1;
  const width = cols * W + PAD;
  const height = (maxRow + 1) * H + PAD;
  const xy = (id) => ({ x: PAD + pos[id].col * W, y: PAD + pos[id].row * H });
  const stroke = 'stroke: var(--text); fill: none; stroke-width: 2;';

  const edges = t.nodes.filter(n => n.parent).map(n => {
    const a = xy(n.parent), b = xy(n.id);
    return `<line x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}" style="${stroke}" ${n.edge === 'leap' ? 'stroke-dasharray="6 5"' : ''}/>`;
  }).join('');

  const shapes = t.nodes.map(n => {
    const { x, y } = xy(n.id);
    let shape;
    if (n.type === 'checkpoint') shape = `<circle cx="${x}" cy="${y}" r="13" style="fill: var(--text); stroke: var(--text);"/>`;
    else if (n.type === 'leap') shape = `<circle cx="${x}" cy="${y}" r="13" style="fill: var(--surface-card, var(--bg-primary)); stroke: var(--text); stroke-width: 2;"/>`;
    else if (n.type === 'fixed') shape = `<rect x="${x - 13}" y="${y - 13}" width="26" height="26" style="fill: var(--surface-card, var(--bg-primary)); stroke: var(--text); stroke-width: 2;"/>`;
    else shape = `<circle cx="${x}" cy="${y}" r="6" style="fill: var(--text-muted);"/>`;
    const current = n.id === t.current
      ? `<circle cx="${x}" cy="${y}" r="20" style="fill: none; stroke: var(--accent-no); stroke-width: 2;"/>` : '';
    const loops = n.loops ? `<text x="${x - 30}" y="${y - 16}" style="fill: var(--text); font-size: 12px;">↺${n.loops}</text>` : '';
    const stress = n.stress ? `<text x="${x + 14}" y="${y - 14}" style="fill: var(--accent-no); font-size: 13px;">${'✶'.repeat(n.stress)}</text>` : '';
    return `${current}${shape}${loops}${stress}<text x="${x}" y="${y + 30}" text-anchor="middle" style="fill: var(--text); font-size: 12px; font-weight: 700;">${escapeHtml(label(t, n))}</text>`;
  }).join('');

  return `<svg viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" style="max-width: 100%; height: auto;" role="img" aria-label="Time-Web">${edges}${shapes}</svg>`;
}

export async function showTimeWeb() {
  const t = await requireState();
  if (!t) return;
  const typeName = { origin: 'Present', checkpoint: 'Checkpoint', fixed: 'Fixed Point', leap: 'Leap' };
  showModal('Time-Web', `
    <div style="overflow-x: auto; margin-bottom: 1rem;">${timeWebSVG(t)}</div>
    <p class="text-muted" style="font-size: 0.8rem; margin-bottom: 0.75rem;">● Checkpoint &nbsp; ◯ Leap &nbsp; □ Fixed Point &nbsp; — forward &nbsp; - - leap &nbsp; ↺ loops &nbsp; ✶ Paradox Stress. The ringed node is where you are.</p>
    <table style="width: 100%; border-collapse: collapse; font-size: 0.85rem;">
      <tr><th style="text-align: left;">Node</th><th style="text-align: left;">Type</th><th style="text-align: left;">Description / Tags</th><th></th></tr>
      ${t.nodes.map(n => `
        <tr style="border-top: var(--border-w) solid var(--border-hairline);">
          <td style="padding: 0.3rem 0.3rem 0.3rem 0; font-weight: 700;">${escapeHtml(label(t, n))}</td>
          <td style="padding: 0.3rem;">${typeName[n.type]}${n.stress ? ` ${'✶'.repeat(n.stress)}` : ''}</td>
          <td style="padding: 0.3rem;">
            ${escapeHtml(n.description || '')}
            ${n.tags.length ? `<div class="text-muted" style="font-size: 0.8rem;">${n.tags.map(escapeHtml).join(', ')}</div>` : ''}
            <div style="display: flex; gap: 0.25rem; margin-top: 0.25rem;">
              <input type="text" id="node-tag-${n.id}" placeholder="Add tag" style="flex: 1; padding: 0.2rem 0.4rem; font-size: 0.8rem;">
              <button class="btn btn-sm btn-outline" onclick="TimeSystem.addNodeTag('${n.id}')">+</button>
            </div>
          </td>
          <td style="padding: 0.3rem; white-space: nowrap;">
            ${n.id === t.current ? '<span class="text-muted">here</span>' : `<button class="btn btn-sm btn-outline" onclick="TimeSystem.setCurrent('${n.id}')">Go here</button>`}
          </td>
        </tr>
      `).join('')}
    </table>
  `);
}

// -------------------------------------------------------------- render

export async function render() {
  const container = document.getElementById('temporal-content');
  if (!container) return;
  if (!getState().campaignId) {
    container.innerHTML = '<p class="text-muted" style="font-size: 0.85rem;">No campaign selected</p>';
    return;
  }
  const t = await load();
  if (!t) {
    container.innerHTML = `
      <p class="text-muted" style="font-size: 0.85rem; margin-bottom: 0.5rem;">Time loops and timeline leaps, from <em>The Path Not Taken</em>.</p>
      <button class="btn btn-sm btn-primary" onclick="TimeSystem.showSetup()" style="width: 100%;">Set Up Temporal Play</button>
    `;
    return;
  }

  const current = node(t, t.current);
  const inLeap = !!currentLeap(t);
  const small = (s) => `<div style="font-size: 0.85rem; margin-bottom: 0.3rem;">${s}</div>`;
  const remove = (fn) => `<button type="button" onclick="${fn}" style="border: none; background: none; cursor: pointer; font-weight: 700; padding: 0 0 0 0.3rem;">&times;</button>`;
  const btn = (fn, text, cls = 'btn-secondary', disabled = false) =>
    `<button class="btn btn-sm ${cls}" onclick="${fn}" ${disabled ? 'disabled' : ''}>${text}</button>`;

  container.innerHTML = `
    ${small(`<strong>Memory Tag:</strong> ${escapeHtml(t.memoryTag || '—')}`)}
    ${t.sensitiveTags.length ? small(`<strong>Sensitive:</strong> ${t.sensitiveTags.map(escapeHtml).join(', ')}`) : ''}
    ${t.drift ? small(`<strong>Temporal Drift</strong> +${t.drift}`) : ''}
    ${t.paradoxTag ? small(`<strong>${escapeHtml(t.paradoxTag)}</strong>`) : ''}
    ${small(`<strong>Now at:</strong> ${escapeHtml(label(t, current))}${current.stress ? ` ${'✶'.repeat(current.stress)}` : ''}`)}

    <div style="margin: 0.75rem 0 0.4rem; font-size: 0.75rem; letter-spacing: var(--tracking-caps); text-transform: uppercase; color: var(--text-muted);">Time Loop</div>
    ${t.loopActive ? small(`Checkpoint <strong>${escapeHtml(label(t, node(t, t.activeCheckpoint)))}</strong>, Loop Counter <strong>${t.loopCounter}</strong>`) : ''}
    ${t.wearTags.length ? `<div style="margin-bottom: 0.3rem;">${t.wearTags.map((w, i) => `<span class="tag-chip" title="${escapeHtml(WEAR[w] || '')}">${escapeHtml(w)}${remove(`TimeSystem.removeWear(${i})`)}</span>`).join(' ')}</div>` : ''}
    ${t.persistList.length ? small(`<strong>Persist:</strong> ${t.persistList.map((p, i) => `${escapeHtml(p)}${remove(`TimeSystem.removePersist(${i})`)}`).join(', ')}`) : ''}
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.25rem;">
      ${btn('TimeSystem.showCheckpointForm()', t.loopActive ? 'Push Ahead' : 'Declare Checkpoint')}
      ${btn('TimeSystem.resetLoop()', 'Reset Loop', 'btn-secondary', !t.loopActive)}
      ${btn("TimeSystem.showPersistPrompt()", '+ Persist', 'btn-outline')}
      ${btn('TimeSystem.ritual()', 'Reset Ritual', 'btn-outline', !t.wearTags.length)}
      ${btn('TimeSystem.askLoopBroken()', 'Loop broken?', 'btn-outline', !t.loopActive)}
      ${btn('TimeSystem.acceptLoop()', 'Accept', 'btn-outline', !t.loopActive)}
    </div>

    <div style="margin: 0.75rem 0 0.4rem; font-size: 0.75rem; letter-spacing: var(--tracking-caps); text-transform: uppercase; color: var(--text-muted);">Time Leap</div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.25rem;">
      ${btn('TimeSystem.showFixedPointForm()', 'Fixed Point')}
      ${btn('TimeSystem.leap()', 'Leap', 'btn-secondary', t.leapingDisabled)}
      ${btn('TimeSystem.addStress()', '+ ✶ Stress', 'btn-outline', !inLeap)}
      ${btn('TimeSystem.askStable()', 'Stable?', 'btn-outline', !inLeap)}
      ${btn('TimeSystem.acceptTimeline()', 'Make Prime', 'btn-outline', !inLeap || t.leapingDisabled)}
      ${btn('TimeSystem.showResolveParadox()', 'Resolve Paradox', 'btn-outline', !t.nodes.some(n => n.entity) || t.leapingDisabled)}
    </div>

    <div style="display: flex; gap: 0.25rem; margin-top: 0.75rem;">
      <select id="temporal-prompt" style="flex: 1; font-size: 0.8rem;">
        ${PROMPTS.map(p => `<option>${p}</option>`).join('')}
      </select>
      ${btn('TimeSystem.askPrompt()', 'Ask')}
    </div>
    <div style="display: flex; gap: 0.25rem; margin-top: 0.5rem;">
      ${btn('TimeSystem.showTimeWeb()', 'Open Time-Web', 'btn-primary')}
      ${btn('TimeSystem.showSetup()', 'Setup', 'btn-outline')}
    </div>
  `;
}

export const TimeSystem = {
  showSetup,
  saveSetup,
  showCheckpointForm,
  declareCheckpoint,
  resetLoop,
  showPersistPrompt,
  addPersist,
  removePersist,
  removeWear,
  ritual,
  askLoopBroken,
  acceptLoop,
  showFixedPointForm,
  declareFixedPoint,
  leap,
  saveLeap,
  addStress,
  askStable,
  acceptTimeline,
  showResolveParadox,
  resolveParadox,
  setCurrent,
  addNodeTag,
  askPrompt,
  showTimeWeb,
  render
};
