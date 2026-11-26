/**
 * LONER ASSISTANT v2.3 - Backstory (Loner: Character Builder's Guide)
 *
 * Lifepath fragments: backstory as scattered d66 clues, not a biography.
 * Marks: a short line written whenever the self shifts at an Identity
 * Checkpoint. Both live on the character sheet.
 */

import { getCharacter, updateCharacter } from './db/database.js';
import { escapeHtml } from './ui.js';
import { TableSystem } from './tables.js';

const SOURCE = 'character-builders-guide';

export const LIFEPATH_TABLES = [
  ['lifepath_origins', 'Origins'],
  ['lifepath_formative_events', 'Formative Events'],
  ['lifepath_key_relationships', 'Key Relationships'],
  ['lifepath_defining_loss', 'Defining Loss'],
  ['lifepath_what_changed_you', 'What Changed You'],
  ['lifepath_false_memory', 'A Memory That May Be False'],
  ['lifepath_cant_let_go', "Something You Can't Let Go"]
];

/**
 * Roll one Lifepath fragment, from the given table or a random one.
 */
export function rollLifepathFragment(tableId = null) {
  const [id, label] = tableId
    ? LIFEPATH_TABLES.find(([t]) => t === tableId)
    : LIFEPATH_TABLES[Math.floor(Math.random() * LIFEPATH_TABLES.length)];
  return { table: label, text: TableSystem.roll(SOURCE, id).result };
}

const removeButton = (onclick) =>
  `<button type="button" title="Remove" onclick="${onclick}" style="margin-left: 0.4rem; border: none; background: none; cursor: pointer; font-weight: 700; padding: 0;">&times;</button>`;

/**
 * Lifepath + Marks section for the character sheet modal.
 */
export function renderSection(character) {
  const id = character.id;
  const lifepath = character.lifepath || [];
  const marks = character.marks || [];

  return `
    <div class="form-group">
      <label>Lifepath</label>
      ${lifepath.length === 0 ? '<p class="text-muted" style="font-size: 0.85rem;">No fragments yet. Roll a few: you collect clues, not a biography.</p>' : `
        <ul style="margin: 0 0 0.5rem 1rem; padding: 0;">
          ${lifepath.map((f, i) => `
            <li style="margin-bottom: 0.25rem;">
              <span class="text-muted" style="font-size: 0.75rem;">${escapeHtml(f.table)}:</span>
              ${escapeHtml(f.text)}
              ${removeButton(`Backstory.removeLifepath(${id}, ${i})`)}
            </li>
          `).join('')}
        </ul>
      `}
      <div style="display: flex; gap: 0.5rem;">
        <select id="lifepath-table" style="flex: 1;">
          ${LIFEPATH_TABLES.map(([t, label]) => `<option value="${t}">${escapeHtml(label)}</option>`).join('')}
        </select>
        <button type="button" class="btn btn-sm btn-outline" onclick="Backstory.rollLifepath(${id})">Roll</button>
      </div>
    </div>
    <div class="form-group">
      <label>Marks</label>
      ${marks.length === 0 ? '' : `
        <ul style="margin: 0 0 0.5rem 1rem; padding: 0;">
          ${marks.map((m, i) => `
            <li style="margin-bottom: 0.25rem; font-style: italic;">
              "${escapeHtml(m)}"
              ${removeButton(`Backstory.removeMark(${id}, ${i})`)}
            </li>
          `).join('')}
        </ul>
      `}
      <details style="font-size: 0.85rem; margin-bottom: 0.5rem;">
        <summary class="text-muted" style="cursor: pointer;">Identity Checkpoint: when to write a Mark</summary>
        <p class="text-muted" style="margin: 0.5rem 0 0.25rem;">
          When you achieve or abandon your Goal, forgive (or fail to), break a personal rule, accept a truth you denied, or lose or reclaim a defining tag, pause and ask:
        </p>
        <ul class="text-muted" style="margin: 0 0 0 1rem; padding: 0;">
          <li>What part of me just died?</li>
          <li>What part of me was just born?</li>
          <li>What tag needs to change to reflect this?</li>
        </ul>
      </details>
      <div style="display: flex; gap: 0.5rem;">
        <input type="text" id="new-mark" placeholder='e.g., "This time, I didn&#39;t flinch."' style="flex: 1;">
        <button type="button" class="btn btn-sm btn-outline" onclick="Backstory.addMark(${id})">Add</button>
      </div>
    </div>
  `;
}

async function update(characterId, changes) {
  await updateCharacter(characterId, changes);
  await window.viewCharacterSheet(characterId);
}

export async function rollLifepath(characterId) {
  const tableId = document.getElementById('lifepath-table').value;
  const character = await getCharacter(characterId);
  await update(characterId, { lifepath: [...(character.lifepath || []), rollLifepathFragment(tableId)] });
}

export async function removeLifepath(characterId, index) {
  const character = await getCharacter(characterId);
  await update(characterId, { lifepath: (character.lifepath || []).filter((_, i) => i !== index) });
}

export async function addMark(characterId) {
  const text = document.getElementById('new-mark').value.trim();
  if (!text) return;
  const character = await getCharacter(characterId);
  await update(characterId, { marks: [...(character.marks || []), text] });
}

export async function removeMark(characterId, index) {
  const character = await getCharacter(characterId);
  await update(characterId, { marks: (character.marks || []).filter((_, i) => i !== index) });
}

export const Backstory = {
  renderSection,
  rollLifepath,
  removeLifepath,
  addMark,
  removeMark
};
