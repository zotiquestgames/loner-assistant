/**
 * LONER ASSISTANT v2.0 - Scene Structure (Loner 4th Edition)
 *
 * Framing a Scene (Where/Who/What before rolling anything) and
 * Closing a Scene (resolved/blocked/abandoned, then Scene Transition).
 */

import { getState } from './state.js';
import { getSession, updateSessionFrame } from './db/database.js';
import { showAlert } from './toast.js';
import * as Editor from './editor.js';
import * as UI from './ui.js';
import { rollScene, resetDeadEndCounter, rollD6, interpretOracleRoll } from './oracle.js';

/**
 * Render the current scene frame (or blank inputs) into the Scene Frame panel
 */
export function displaySceneFrame(session) {
  const whereInput = document.getElementById('frame-where');
  const whoInput = document.getElementById('frame-who');
  const whatInput = document.getElementById('frame-what');
  if (!whereInput || !whoInput || !whatInput) return;

  const frame = (session && session.frame) || {};
  whereInput.value = frame.where || '';
  whoInput.value = frame.who || '';
  whatInput.value = frame.what || '';
}

/**
 * Save the three framing answers and drop a note in the session
 */
export async function saveSceneFrame() {
  const state = getState();

  if (!state.sessionId) {
    showAlert('No active session. Create or select a campaign first!', 'error');
    return;
  }

  const frame = {
    where: (document.getElementById('frame-where').value || '').trim(),
    who: (document.getElementById('frame-who').value || '').trim(),
    what: (document.getElementById('frame-what').value || '').trim()
  };

  if (!frame.where && !frame.who && !frame.what) {
    showAlert('Fill in at least one of Where / Who / What to frame the scene', 'error');
    return;
  }

  await updateSessionFrame(state.sessionId, frame);

  Editor.insertBlock(
    'Scene Frame',
    `Where: ${frame.where || '—'} | Who: ${frame.who || '—'} | What: ${frame.what || '—'}`,
    'var(--accent-yes)'
  );

  showAlert('Scene framed', 'success');
}

/**
 * Show the Closing a Scene prompt: resolved / blocked / abandoned, or the
 * fallback oracle question when none of the three conditions is clearly met.
 */
export function showCloseScenePrompt() {
  const html = `
    <p class="text-muted" style="margin-bottom: 1rem;">
      A scene ends when the goal is resolved, blocked, or abandoned. If none of those feel clearly true yet, ask the oracle instead: <em>"Has this scene run its course?"</em>
    </p>
    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
      <button class="btn btn-primary" onclick="SceneSystem.closeScene('resolved')">Goal Resolved</button>
      <button class="btn btn-primary" onclick="SceneSystem.closeScene('blocked')">Goal Blocked</button>
      <button class="btn btn-outline" onclick="SceneSystem.closeScene('abandoned')">Goal Abandoned</button>
    </div>
    <div style="margin-top: 1rem; padding-top: 1rem; border-top: var(--border-w) solid var(--border-hairline);">
      <button class="btn btn-secondary" onclick="SceneSystem.askIfSceneHasRunCourse()" style="width: 100%;">
        Ask the Oracle: "Has this scene run its course?"
      </button>
    </div>
  `;
  UI.showModal('Close Scene', html);
}

/**
 * Fallback for when none of resolved/blocked/abandoned is clearly met:
 * ask the oracle. A Yes of any kind closes the scene (and rolls the Scene
 * Transition, same as the other closing reasons); a No means the scene
 * still has something worth pursuing, so play continues.
 */
export async function askIfSceneHasRunCourse() {
  UI.closeModal();

  const chance = rollD6();
  const risk = rollD6();
  const result = interpretOracleRoll(chance, risk);

  Editor.insertBlock(
    'Has this scene run its course?',
    `${result.formatted} (Chance: ${chance}, Risk: ${risk})`,
    result.answer === 'Yes' ? 'var(--accent-yes)' : 'var(--accent-no)'
  );

  if (result.answer === 'Yes') {
    if (typeof window.EventManager !== 'undefined') {
      await window.EventManager.logEvent('scene', 'Scene closed: ran its course', { chance, risk });
    }
    resetDeadEndCounter();
    await rollScene();
  } else {
    showAlert('Still something here - keep playing the scene', 'info');
  }
}

/**
 * Close the scene for the given reason, log it, and immediately roll the
 * Scene Transition to open the next one.
 */
export async function closeScene(reason) {
  UI.closeModal();

  const labels = {
    resolved: 'Goal resolved',
    blocked: 'Goal blocked',
    abandoned: 'Goal abandoned'
  };
  const label = labels[reason] || 'Scene closed';

  Editor.insertBlock('Scene Closed', label, 'var(--accent-no)');

  if (typeof window.EventManager !== 'undefined') {
    await window.EventManager.logEvent('scene', `Scene closed: ${label}`, { reason });
  }

  resetDeadEndCounter();
  await rollScene();
}

export const SceneSystem = {
  displaySceneFrame,
  saveSceneFrame,
  showCloseScenePrompt,
  askIfSceneHasRunCourse,
  closeScene
};
