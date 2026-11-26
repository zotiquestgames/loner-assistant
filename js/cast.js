/**
 * LONER ASSISTANT v2.3 - Cast tools (Loner: Character Emulator)
 *
 * Cast Twists: when the Twist Counter fills on a roll about an NPC, the
 * Twist can land on that NPC instead of the wider fiction.
 * Faction Beats: one Character roll for an organization, made at a Scene
 * Transition when the closed scene touched its interests. At most one per
 * transition; the result is discovered later, so it goes in Last Seen.
 */

import { getState } from './state.js';
import { getNPCsForCampaign, updateNPC } from './db/database.js';
import { showAlert } from './toast.js';
import { showModal, closeModal, escapeHtml } from './ui.js';
import * as Editor from './editor.js';
import { TableSystem } from './tables.js';
import {
  rollChanceRisk,
  interpretOracleRoll,
  registerDoubles,
  runMeanwhileProcedure,
  sceneTransitionCount
} from './oracle.js';

const FACTION_BEAT_RESULTS = {
  'Yes, and...': 'Acts decisively, and the move is public at once: a raid, a statement, a takeover.',
  'Yes...': 'Acts as expected and advances its Agenda somewhere off-screen.',
  'Yes, but...': 'Acts, but the move costs it something or opens a gap the Protagonist can use.',
  'No, but...': 'Holds, but a sign of its intent leaks out.',
  'No...': 'Holds. Nothing changes before the next scene.',
  'No, and...': 'Backs off. Its Agenda shifts, it fractures internally, or it loses ground to a rival.'
};

let factionBeatUsedAt = -1;

/**
 * Roll the Cast Twists table in place of the standard Twist result.
 */
export async function rollCastTwist() {
  const roll = TableSystem.roll('character-emulator', 'cast_twists');
  document.getElementById('cast-twist-btn')?.remove();
  const target = document.getElementById('cast-twist-result');
  if (target) {
    target.innerHTML = `
      <div style="margin-top: 0.5rem;"><strong>Cast Twist:</strong> ${escapeHtml(roll.result)}</div>
      <div style="font-size: 0.8rem; margin-top: 0.25rem; color: var(--text-muted); font-style: italic;">
        If they had no Agenda or Disposition, this gives them one. On "Someone else steps in", check the Cast List before inventing a stranger.
      </div>
    `;
  }

  Editor.insertBlock('Cast Twist', `${roll.result} (replaces the Twist above)`, 'var(--accent-no)');

  if (typeof window.EventManager !== 'undefined') {
    await window.EventManager.logEvent('twist', `Cast Twist: ${roll.result}`, { rolls: roll.rolls });
  }
}

/**
 * Open the Faction Beat prompt.
 * @param {boolean} fromMeanwhile - offer a way back to the Meanwhile prompt.
 */
export async function showFactionBeat(fromMeanwhile = false) {
  if (factionBeatUsedAt === sceneTransitionCount) {
    showAlert('One Faction Beat per Scene Transition', 'info');
    return;
  }

  const state = getState();
  if (!state.campaignId) {
    showAlert('Select a campaign first', 'error');
    return;
  }

  const factions = (await getNPCsForCampaign(state.campaignId))
    .filter(n => n.kind === 'faction' && n.status !== 'gone');

  if (factions.length === 0) {
    showModal('Faction Beat', `
      <p class="text-muted">
        No factions yet. Create an NPC, tick <strong>Faction</strong>, and give it a Concept and an Agenda to run Faction Beats.
      </p>
    `);
    return;
  }

  const options = factions.map(f => {
    const label = `${f.name}${f.concept ? ` (${f.concept})` : ''}${f.agenda ? ` — Agenda: ${f.agenda}` : ''}`;
    return `<option value="${f.id}">${escapeHtml(label)}</option>`;
  }).join('');

  showModal('Faction Beat', `
    <p class="text-muted" style="margin-bottom: 1rem;">
      Ask a closed question from the faction's side, so that <em>Yes</em> means it advances its Agenda. Advantage or Disadvantage come from its Concept and what the last scene did to it, never from the Agenda.
    </p>
    <div class="form-group">
      <label>Faction</label>
      <select id="faction-beat-npc">${options}</select>
    </div>
    <div class="form-group">
      <label>Modifier</label>
      <div class="choice-row">
        <label class="choice"><input type="radio" name="faction-beat-modifier" value="normal" checked> Normal</label>
        <label class="choice"><input type="radio" name="faction-beat-modifier" value="advantage"> Advantage</label>
        <label class="choice"><input type="radio" name="faction-beat-modifier" value="disadvantage"> Disadvantage</label>
      </div>
    </div>
    <button class="btn btn-primary" onclick="CastSystem.rollFactionBeat(${fromMeanwhile})" style="width: 100%;">
      Does it advance its Agenda?
    </button>
    <div id="faction-beat-result" style="margin-top: 1rem;"></div>
  `);
}

export async function rollFactionBeat(fromMeanwhile = false) {
  if (factionBeatUsedAt === sceneTransitionCount) {
    showAlert('One Faction Beat per Scene Transition', 'info');
    return;
  }

  const npcId = parseInt(document.getElementById('faction-beat-npc').value, 10);
  const modifier = document.querySelector('input[name="faction-beat-modifier"]:checked').value;
  const factions = await getNPCsForCampaign(getState().campaignId);
  const faction = factions.find(f => f.id === npcId);
  if (!faction) return;

  factionBeatUsedAt = sceneTransitionCount;
  document.getElementById('faction-beat-btn')?.remove();

  const { chanceDice, riskDice } = rollChanceRisk(modifier);
  const result = interpretOracleRoll(chanceDice, riskDice);
  const meaning = FACTION_BEAT_RESULTS[result.formatted];

  document.getElementById('faction-beat-result').innerHTML = `
    <div class="oracle-result ${result.answer === 'Yes' ? 'yes' : 'no'}">${result.formatted}</div>
    <div class="oracle-result-detail">
      ${escapeHtml(faction.name)}: ${meaning}
      <div style="font-size: 0.8rem; margin-top: 0.25rem;">Rolled: Chance ${chanceDice}, Risk ${riskDice}</div>
    </div>
    <p class="text-muted" style="font-size: 0.85rem; margin: 0.75rem 0 0.5rem;">
      The result is discovered, not narrated live: write it in Last Seen and reveal it when the fiction gives you a natural moment.
    </p>
    <div class="form-group">
      <label>Last Seen</label>
      <input type="text" id="faction-beat-last-seen" value="${escapeHtml(faction.lastSeen || '')}" placeholder="What did they do, and where?">
    </div>
    <button class="btn btn-primary" onclick="CastSystem.saveFactionLastSeen(${npcId}, ${fromMeanwhile})" style="width: 100%;">
      ${fromMeanwhile ? 'Save Last Seen and Back to Meanwhile' : 'Save Last Seen'}
    </button>
  `;

  Editor.insertBlock(
    `Faction Beat - ${faction.name}`,
    `${result.formatted} (Chance: ${chanceDice}, Risk: ${riskDice}) ${meaning}`,
    result.answer === 'Yes' ? 'var(--accent-yes)' : 'var(--accent-no)'
  );

  if (typeof window.EventManager !== 'undefined') {
    await window.EventManager.logEvent('scene', `Faction Beat: ${faction.name} - ${result.formatted}`, {
      npcId, chanceDice, riskDice, modifier
    });
  }

  // Equal dice count toward the Twist as usual; if it fires here, the
  // faction is the NPC for Cast Twists purposes.
  if (result.isDoubles) {
    await registerDoubles();
  }
}

export async function saveFactionLastSeen(npcId, fromMeanwhile = false) {
  const lastSeen = document.getElementById('faction-beat-last-seen').value.trim();
  await updateNPC(npcId, { lastSeen });
  showAlert('Last Seen updated', 'success');

  if (fromMeanwhile) {
    await runMeanwhileProcedure();
  } else {
    closeModal();
  }
}

export const CastSystem = {
  rollCastTwist,
  showFactionBeat,
  rollFactionBeat,
  saveFactionLastSeen
};
