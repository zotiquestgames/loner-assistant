/**
 * LONER ASSISTANT v2.1 - Oracle & Dice Rolling
 *
 * Handles all dice rolling and oracle consultation logic
 */

import { getState } from './state.js';
import { updateCampaignTwistCounter, getNPCsForCampaign, updateNPC, getCharacter, updateCharacterLuck } from './db/database.js';
import { showAlert } from './toast.js';
import { showModal, closeModal, escapeHtml } from './ui.js';
import * as Editor from './editor.js';
import { clearLeverage } from './leverage.js';
import { showFillBoxPrompt } from './status-track.js';
import { isEnabled } from './modules.js';
import {
  rollD6,
  rollChanceRisk,
  interpretOracleRoll,
  formatOracleResult,
  conflictDamage,
  deadEndOutcome,
  sceneTransition
} from './rules/oracle.js';

export { rollD6, rollChanceRisk, interpretOracleRoll, formatOracleResult };

// Current session state
let currentTwistCounter = 0;
let consecutiveDeadEnds = 0;

/**
 * Equal dice add 1 to the Twist Counter; at 3 the Twist fires.
 */
export async function registerDoubles() {
  currentTwistCounter++;
  updateTwistCounter();
  if (currentTwistCounter >= 3) {
    await triggerTwist();
  }
}

// Last Oracle panel result, so an Action Point can cancel a failure.
export let lastOracleResult = null;

export async function rollOracle() {
  // Get modifier selection
  const modifier = document.querySelector('input[name="modifier"]:checked').value;

  const { chanceDice, riskDice } = rollChanceRisk(modifier);

  // Interpret result
  const result = interpretOracleRoll(chanceDice, riskDice);
  lastOracleResult = result;

  // Display result
  displayOracleResult(result);

  // Show notification
  showAlert(`Oracle: ${result.answer}`, 'success');

  // Auto-insert into notes
  const colorMap = {
    'Yes': 'var(--accent-yes)',
    'No': 'var(--accent-no)'
  };

  Editor.insertBlock(
    'Oracle',
    `${result.formatted} (Chance: ${result.chanceDice}, Risk: ${result.riskDice})`,
    colorMap[result.answer]
  );

  // Check for doubles (twist counter)
  if (chanceDice === riskDice) {
    registerDoubles();
  }

  // Save to roll history if we have a session
  const resultText = `${result.answer}${result.isTwist ? ' (Twist!)' : ''}`;

  // AUTO-LOG THE ROLL
  if (typeof window.EventManager !== 'undefined') {
    await window.EventManager.logEvent(
      result.isDoubles ? 'twist' : 'oracle',
      `Oracle: ${resultText}`,
      {
        result: result.answer,
        modifier: modifier,
        chanceDice: chanceDice,
        riskDice: riskDice
      }
    );
  }

  return result;
}

/**
 * Display oracle result in UI
 */
function displayOracleResult(result) {
  const resultDiv = document.getElementById('oracle-result');

  const className = result.answer === 'Yes' ? 'yes' : 'no';

  const canBankLeverage = result.answer === 'Yes' && result.modifier === 'and' && !result.isDoubles && isEnabled('leverage');

  resultDiv.className = `oracle-result ${className}`;
  resultDiv.innerHTML = `
    <div class="oracle-result-main">${result.formatted}</div>
    <div class="oracle-result-detail">
      Chance: ${result.chanceDice} | Risk: ${result.riskDice}
      ${result.isDoubles ? ' | <strong>DOUBLES!</strong>' : ''}
    </div>
    ${canBankLeverage ? '<button class="btn btn-sm btn-outline" onclick="LeverageSystem.showBankPrompt()" style="margin-top: 0.5rem; width: 100%;">Bank as Leverage</button>' : ''}
  `;

  resultDiv.classList.remove('hidden');
}

/**
 * Update twist counter display and persist it
 */
export function updateTwistCounter() {
  const counterDisplay = document.getElementById('twist-count');
  if (counterDisplay) {
    counterDisplay.textContent = currentTwistCounter;

    if (currentTwistCounter >= 2) {
      counterDisplay.classList.add('danger');
    } else {
      counterDisplay.classList.remove('danger');
    }
  }

  // SAVE to database (campaign-level, so it persists across sessions)
  const state = getState();
  if (state.campaignId) {
    updateCampaignTwistCounter(state.campaignId, currentTwistCounter);
  }
}

/**
 * Restore the twist counter (e.g. when a session is loaded) without
 * re-writing it back to the database.
 */
export function setTwistCounter(value) {
  currentTwistCounter = value || 0;
  const counterDisplay = document.getElementById('twist-count');
  if (counterDisplay) {
    counterDisplay.textContent = currentTwistCounter;
    if (currentTwistCounter >= 2) {
      counterDisplay.classList.add('danger');
    } else {
      counterDisplay.classList.remove('danger');
    }
  }
}

/**
 * Reset twist counter
 */
export function resetTwistCounter() {
  currentTwistCounter = 0;
  updateTwistCounter();

  const twistResult = document.getElementById('twist-result');
  twistResult.classList.add('hidden');
  twistResult.innerHTML = '';
}

/**
 * Trigger a twist when counter reaches 3
 */
export async function triggerTwist() {
  // Roll 2d6 for twist
  const die1 = rollD6();
  const die2 = rollD6();

  const twistTable = {
    subjects: [
      'A third party',
      'The Protagonist',
      'An encounter',
      'A physical event',
      'An emotional event',
      'An object'
    ],
    actions: [
      'Appears',
      'Alters the location',
      'Helps the Protagonist',
      'Hinders the Protagonist',
      'Changes the goal',
      'Ends the scene'
    ]
  };

  const subject = twistTable.subjects[die1 - 1];
  const action = twistTable.actions[die2 - 1];

  // Display twist
  const twistResult = document.getElementById('twist-result');
  twistResult.innerHTML = `
    <strong>TWIST!</strong><br>
    ${subject} + ${action}
    <div style="font-size: 0.85rem; margin-top: 0.5rem; opacity: 0.8;">
      Rolled: ${die1}, ${die2}
    </div>
    <div style="font-size: 0.8rem; margin-top: 0.5rem; color: var(--text-muted); font-style: italic;">
      Twist Intensity: read the pressure first. If it's been building (failed rolls, low Luck, unresolved complications), play this at its most disruptive. If the scene's been clean, it's a shift, not a collapse.
    </div>
    <button id="cast-twist-btn" class="btn btn-sm btn-outline" onclick="CastSystem.rollCastTwist()" style="margin-top: 0.5rem; width: 100%;">
      Roll was about an NPC? Use Cast Twists instead
    </button>
    <div id="cast-twist-result"></div>
  `;
  twistResult.classList.remove('hidden');

  // Auto-insert into notes with emphasis
  Editor.insertBlock(
    'TWIST',
    `${subject} → ${action}`,
    'var(--accent-no)'
  );

  // LOG EVENT
  if (typeof window.EventManager !== 'undefined') {
    await window.EventManager.logEvent('twist', `${subject} → ${action}`, {
      subject: subject,
      action: action,
      die1: die1,
      die2: die2
    });
  }

  // Reset counter
  currentTwistCounter = 0;
  updateTwistCounter();

  // A Twist means the fiction has moved on - any held Leverage expires
  await clearLeverage();

  // Cinematic Action: a Twist sets the next scene's intensity
  await window.ActionSystem?.onTwist();

  // Show alert
  showAlert('Twist triggered! Check the twist panel.', 'success');
}

/**
 * Roll for scene type
 */
// Counts Scene Transitions, so per-transition limits (one Faction Beat per
// transition) can tell one transition from the next.
export let sceneTransitionCount = 0;

export async function rollScene() {
  sceneTransitionCount++;
  const roll = rollD6();
  const { sceneType, description } = sceneTransition(roll);

  const resultDiv = document.getElementById('scene-result');
  resultDiv.innerHTML = `
    <div style="font-weight: 600; margin-bottom: 0.25rem;">
      ${sceneType} Scene
    </div>
    <div style="font-size: 0.85rem; color: var(--text-muted);">
      ${description}
    </div>
    <div style="font-size: 0.75rem; margin-top: 0.25rem; opacity: 0.6;">
      Rolled: ${roll}
    </div>
    <button id="faction-beat-btn" class="btn btn-sm btn-outline" onclick="CastSystem.showFactionBeat()" style="margin-top: 0.5rem; width: 100%;">
      Faction Beat (the scene touched a faction's interests)
    </button>
  `;

  // Auto-insert into notes
  Editor.insertBlock(
    'Scene',
    `${sceneType} - ${description}`
  );

  // LOG EVENT
  if (typeof window.EventManager !== 'undefined') {
    await window.EventManager.logEvent('scene', `${sceneType} scene: ${description}`, {
      sceneType: sceneType,
      roll: roll
    });
  }

  await window.ActionSystem?.onSceneTransition();

  // Meanwhile is procedural, not just atmospheric (Loner 4e): the world
  // acts while the Protagonist is offstage. Run both steps.
  if (sceneType === 'Meanwhile') {
    await runMeanwhileProcedure();
  }
}

/**
 * Meanwhile procedure (Loner 4e "Scene Transition"):
 * 1. Update the opposition - cut to whoever holds power and update their tag.
 * 2. Ask the oracle whether an ally or wildcard acts independently.
 */
export async function runMeanwhileProcedure() {
  const state = getState();
  if (!state.campaignId) return;

  const npcs = await getNPCsForCampaign(state.campaignId);
  if (npcs.length === 0) {
    showAlert('Meanwhile: no NPCs yet to cut away to. Add one to use this fully.', 'info');
    return;
  }

  const npcOptions = npcs.map(n =>
    `<option value="${n.id}">${escapeHtml(n.name)}${n.tags && n.tags.length ? ' — ' + escapeHtml(n.tags.join(', ')) : ''}</option>`
  ).join('');

  showModal('Meanwhile', `
    <p class="text-muted" style="margin-bottom: 1rem;">
      Cut to whoever holds power over the situation and update their tag to reflect what they do next.
    </p>
    <div class="form-group">
      <label>Who holds power right now?</label>
      <select id="meanwhile-npc">${npcOptions}</select>
    </div>
    <div class="form-group">
      <label>Their new tag (what they're doing now)</label>
      <input type="text" id="meanwhile-tag" placeholder="e.g., Hired Someone to Find Her">
    </div>
    <button class="btn btn-primary" onclick="OracleSystem.applyMeanwhileTag()" style="width: 100%; margin-bottom: 0.5rem;">
      Update Their Tag
    </button>
    <button class="btn btn-outline" onclick="CastSystem.showFactionBeat(true)" style="width: 100%; margin-bottom: 1rem;">
      Power is held by a faction and its move isn't obvious? Faction Beat
    </button>
    <div style="padding-top: 1rem; border-top: var(--border-w) solid var(--border-hairline);">
      <p class="text-muted" style="margin-bottom: 0.5rem;">Then ask the oracle:</p>
      <button class="btn btn-secondary" onclick="OracleSystem.rollMeanwhileAlly()" style="width: 100%;">
        Does an ally or wildcard act independently?
      </button>
      <div id="meanwhile-ally-result" style="margin-top: 0.75rem;"></div>
    </div>
  `);
}

/**
 * Step 1 of Meanwhile: apply the updated tag to the chosen NPC
 */
export async function applyMeanwhileTag() {
  const npcId = parseInt(document.getElementById('meanwhile-npc').value, 10);
  const newTag = document.getElementById('meanwhile-tag').value.trim();

  if (!newTag) {
    showAlert('Enter a tag describing what they do next', 'error');
    return;
  }

  const npcs = await getNPCsForCampaign(getState().campaignId);
  const npc = npcs.find(n => n.id === npcId);
  if (!npc) return;

  const tags = [...(npc.tags || []), newTag];
  await updateNPC(npcId, { tags });

  Editor.insertBlock('Meanwhile', `${npc.name} → ${newTag}`, 'var(--accent-no)');

  if (typeof window.EventManager !== 'undefined') {
    await window.EventManager.logEvent('scene', `Meanwhile: ${npc.name} → ${newTag}`, { npcId, newTag });
  }

  showAlert(`${npc.name}'s tag updated`, 'success');
}

/**
 * Step 2 of Meanwhile: ask whether an ally or wildcard acts independently
 */
export async function rollMeanwhileAlly() {
  const chance = rollD6();
  const risk = rollD6();
  const result = interpretOracleRoll(chance, risk);

  const resultDiv = document.getElementById('meanwhile-ally-result');
  if (resultDiv) {
    resultDiv.innerHTML = `
      <div class="oracle-result ${result.answer.startsWith('No') ? 'no' : 'yes'}">
        ${result.formatted}
      </div>
      <div class="oracle-result-detail">
        ${result.answer.startsWith('No')
          ? 'They hold. Nothing changes on their end for now.'
          : 'Pick the NPC most affected by recent events and interpret their action through their current tags and goal.'}
      </div>
    `;
  }

  Editor.insertBlock('Meanwhile - Ally', `${result.formatted} (Chance: ${chance}, Risk: ${risk})`, 'var(--accent-yes)');

  if (typeof window.EventManager !== 'undefined') {
    await window.EventManager.logEvent('scene', `Meanwhile - ally acts independently: ${result.answer}`, { chance, risk });
  }
}

/**
 * Conflict system - roll for harm & luck
 */
let inConflict = false;
let characterLuck = 6;
let opponentLuck = 6;
let opponentName = 'Opponent';
let conflictCharacterId = null;

export async function startConflict() {
  // Get values from form
  opponentName = document.getElementById('opponent-name').value || 'Opponent';
  opponentLuck = parseInt(document.getElementById('opponent-luck-input').value) || 6;

  // Get character luck from the active character, if any
  conflictCharacterId = getState().characterId;
  if (conflictCharacterId) {
    const character = await getCharacter(conflictCharacterId);
    if (character) {
      characterLuck = character.luck;
    } else {
      conflictCharacterId = null;
      characterLuck = 6;
    }
  } else {
    characterLuck = 6;
  }

  inConflict = true;
  window.ActionSystem?.startPool('conflict');

  // Show active conflict UI, hide setup
  document.getElementById('conflict-setup').classList.add('hidden');
  document.getElementById('conflict-active').classList.remove('hidden');

  // Update labels
  document.getElementById('opponent-label').textContent = opponentName;

  updateLuckDisplay();

  // LOG EVENT
  if (typeof window.EventManager !== 'undefined') {
    await window.EventManager.logEvent('conflict', `Conflict started with ${opponentName}`, {
      opponentName: opponentName,
      opponentLuck: opponentLuck
    });
  }

  showAlert('Conflict started!', 'success');
}

export async function rollConflict() {
  if (!inConflict) {
    showAlert('Start a conflict first!', 'error');
    return;
  }

  // Get modifier from conflict-specific selector
  const modifier = document.querySelector('input[name="conflict-modifier"]:checked').value;

  let chanceDice, riskDice;

  if (modifier === 'advantage') {
    const chance1 = rollD6();
    const chance2 = rollD6();
    chanceDice = Math.max(chance1, chance2);
    riskDice = rollD6();
  } else if (modifier === 'disadvantage') {
    chanceDice = rollD6();
    const risk1 = rollD6();
    const risk2 = rollD6();
    riskDice = Math.max(risk1, risk2);
  } else {
    chanceDice = rollD6();
    riskDice = rollD6();
  }

  // Interpret for damage
  const result = interpretOracleRoll(chanceDice, riskDice);
  const { damage, targetIsCharacter, description } = conflictDamage(result);

  if (!targetIsCharacter) {
    opponentLuck -= damage;
  } else {
    characterLuck -= damage;

    if (conflictCharacterId) {
      await updateCharacterLuck(conflictCharacterId, Math.max(0, characterLuck));
    }
  }

  // Log event
  if (typeof window.EventManager !== 'undefined') {
    const damageDesc = targetIsCharacter
      ? `You take ${damage} harm (${characterLuck} luck remaining)`
      : `${opponentName} takes ${damage} harm (${opponentLuck} luck remaining)`;

    await window.EventManager.logEvent('conflict', damageDesc, {
      damage: damage,
      target: targetIsCharacter ? 'character' : 'opponent',
      characterLuck: characterLuck,
      opponentLuck: opponentLuck
    });
  }

  // Update display
  updateLuckDisplay();

  // Show result
  const resultDiv = document.getElementById('conflict-result');
  resultDiv.className = 'conflict-result ' + (targetIsCharacter ? 'damage-taken' : 'damage-dealt');
  resultDiv.innerHTML = `
    <div style="font-weight: 600; margin-bottom: 0.25rem;">
      ${description}
    </div>
    <div style="font-size: 0.9rem;">
      ${targetIsCharacter ? 'You' : opponentName} ${targetIsCharacter ? 'take' : 'takes'} ${damage} damage
    </div>
    <div style="font-size: 0.85rem; opacity: 0.8; margin-top: 0.25rem;">
      ${result.formatted} (Chance: ${chanceDice}, Risk: ${riskDice})
    </div>
  `;
  resultDiv.classList.remove('hidden');

  // Auto-insert conflict result into notes
  const damageText = targetIsCharacter
    ? `You take ${damage} damage (${result.formatted})`
    : `${opponentName} takes ${damage} damage (${result.formatted})`;

  Editor.insertBlock(
    'Conflict',
    damageText,
    targetIsCharacter ? 'var(--accent-no)' : 'var(--accent-yes)'
  );

  // Check for defeat
  if (characterLuck <= 0) {
    // Insert defeat into notes
    Editor.insertBlock('Conflict Ended', 'You have been defeated!', 'var(--accent-no)');
    showAlert('You have been defeated!', 'error');
    setTimeout(() => endConflict(), 2000);

    // Status Track (optional module): a defeat may leave a lasting mark
    const state = getState();
    if (state.characterId && isEnabled('status-track')) {
      const character = await getCharacter(state.characterId);
      if (character) {
        await showFillBoxPrompt(state.characterId, character.name);
      }
    }
  } else if (opponentLuck <= 0) {
    // Insert victory into notes
    Editor.insertBlock('Conflict Ended', `${opponentName} defeated!`, 'var(--accent-yes)');
    showAlert(`${opponentName} defeated!`, 'success');
    setTimeout(() => endConflict(), 2000);
  }
}

function updateLuckDisplay() {
  const charLuckDiv = document.getElementById('char-luck');
  const oppLuckDiv = document.getElementById('opponent-luck');

  charLuckDiv.textContent = Math.max(0, characterLuck);
  oppLuckDiv.textContent = Math.max(0, opponentLuck);

  // Add low class if luck is low
  if (characterLuck <= 2) {
    charLuckDiv.classList.add('low');
  } else {
    charLuckDiv.classList.remove('low');
  }

  if (opponentLuck <= 2) {
    oppLuckDiv.classList.add('low');
  } else {
    oppLuckDiv.classList.remove('low');
  }
}

export async function endConflict() {
  const winner = characterLuck > 0 ? 'Character' : opponentName;

  // LOG EVENT
  if (typeof window.EventManager !== 'undefined') {
    await window.EventManager.logEvent('conflict', `Conflict ended - ${winner} victorious`, {
      winner: winner,
      characterLuck: characterLuck,
      opponentLuck: opponentLuck
    });
  }

  inConflict = false;
  window.ActionSystem?.endPool('conflict');

  // Show setup, hide active
  document.getElementById('conflict-setup').classList.remove('hidden');
  document.getElementById('conflict-active').classList.add('hidden');

  // Clear result
  document.getElementById('conflict-result').classList.add('hidden');

  // Luck is scoped to a single conflict: reset it fully on the character's
  // sheet too, not just in memory, so the next conflict starts at full Luck.
  if (conflictCharacterId) {
    await updateCharacterLuck(conflictCharacterId, 6);
  }

  // Reset values
  characterLuck = 6;
  opponentLuck = 6;
  conflictCharacterId = null;
  document.getElementById('opponent-name').value = 'Opponent';
  document.getElementById('opponent-luck-input').value = 6;

  showAlert('Conflict ended', 'info');
}

/**
 * Dead Ends (Loner 4e): when a lead goes cold or a path closes entirely,
 * ask a single fixed question instead of continuing to question the
 * closed path.
 */
export async function rollDeadEnd() {
  const chance = rollD6();
  const risk = rollD6();
  const result = interpretOracleRoll(chance, risk);

  let guidance;
  const outcome = deadEndOutcome(result);
  if (outcome === 'forward') {
    consecutiveDeadEnds = 0;
    guidance = "Introduce a new element that points forward: an overlooked detail, an unexpected contact, an object that suggests a direction. It need not be obvious. It need only exist.";
  } else if (outcome === 'soft') {
    guidance = "The path remains closed, but the Protagonist understands something about why. That understanding may suggest a direction, or it may simply be closure.";
  } else {
    consecutiveDeadEnds++;
    guidance = consecutiveDeadEnds >= 2
      ? "Second dead end on this thread: don't ask the reframe question again. Something about the approach itself is blocked, not just the current angle. Pull back to the goal, to the world, to what the Protagonist knows for certain, and build the next scene from there."
      : "The dead end holds. Pull back to the Protagonist's goal and ask what other approach, person, or location might serve it. Start a new scene from there.";
  }

  const resultDiv = document.getElementById('dead-end-result');
  if (resultDiv) {
    resultDiv.innerHTML = `
      <div class="oracle-result ${result.answer.startsWith('No') ? 'no' : 'yes'}">${result.formatted}</div>
      <div class="oracle-result-detail">${guidance}</div>
    `;
    resultDiv.classList.remove('hidden');
  }

  Editor.insertBlock('Dead End', `${result.formatted} (Chance: ${chance}, Risk: ${risk})`, 'var(--accent-no)');

  if (typeof window.EventManager !== 'undefined') {
    await window.EventManager.logEvent('scene', `Dead End: ${result.answer}`, { chance, risk, consecutiveDeadEnds });
  }

  return result;
}

/**
 * Reset the consecutive dead-end counter (called when a scene closes
 * normally - a new approach means the streak is over).
 */
export function resetDeadEndCounter() {
  consecutiveDeadEnds = 0;
}
