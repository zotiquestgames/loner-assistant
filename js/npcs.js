/**
 * LONER ASSISTANT v2.1 - NPC Management
 *
 * Manage non-player characters
 */

import * as LonerDB from './db/database.js';
import * as UI from './ui.js';
import { getState } from './state.js';
import { openFormModal, confirmAndDelete } from './crud/modal-form.js';
import { TableSystem } from './tables.js';

const EMULATOR = 'character-emulator';

/**
 * Get relationship color
 */
function getRelationshipColor(relationship) {
  switch (relationship) {
    case 'ally': return 'var(--success)';
    case 'enemy': return 'var(--danger)';
    default: return 'var(--text-muted)';
  }
}

/**
 * Quick-Build (Character Emulator): roll a table straight into a form field.
 */
export function rollIntoField(inputId, tableId) {
  const input = document.getElementById(inputId);
  if (!input) return;
  input.value = TableSystem.roll(EMULATOR, tableId).result;
}

/**
 * Concept rolls on Faction Concept for organizations, NPC Concept otherwise.
 */
export function rollConcept(prefix) {
  const isFaction = document.getElementById(`${prefix}-faction`)?.checked;
  rollIntoField(`${prefix}-concept`, isFaction ? 'faction_concept' : 'npc_concept');
}

function rollButton(onclick) {
  return `<button type="button" class="btn btn-sm btn-outline" onclick="${onclick}" title="Roll on the Character Emulator table">Roll</button>`;
}

function conceptFieldHTML(prefix, value) {
  return `
    <div class="form-group">
      <label>Concept</label>
      <div class="field-row">
        <input type="text" id="${prefix}-concept" placeholder="e.g., Wandering Monk" value="${UI.escapeHtml(value || '')}">
        ${rollButton(`NPCManager.rollConcept('${prefix}')`)}
      </div>
    </div>
  `;
}

/**
 * Cast List fields (Character Emulator): Agenda, Disposition, Voice,
 * Last Seen, plus whether this "NPC" is really a faction.
 */
function castFieldsHTML(prefix, n) {
  const v = (s) => UI.escapeHtml(s || '');
  const field = (key, label, value, tableId, placeholder) => `
    <div class="form-group">
      <label>${label}</label>
      <div class="field-row">
        <input type="text" id="${prefix}-${key}" value="${v(value)}" placeholder="${placeholder}">
        ${tableId ? rollButton(`NPCManager.rollIntoField('${prefix}-${key}', '${tableId}')`) : ''}
      </div>
    </div>
  `;
  return `
    <div class="form-group">
      <label class="choice">
        <input type="checkbox" id="${prefix}-faction" ${n.kind === 'faction' ? 'checked' : ''}>
        Faction (an organization, not a person)
      </label>
    </div>
    ${field('agenda', 'Agenda', n.agenda, 'npc_agenda', 'What they want right now')}
    ${field('disposition', 'Disposition', n.disposition, 'npc_disposition', 'Stance and awareness toward the Protagonist')}
    ${field('voice', 'Voice', n.voice, 'npc_voice', 'Their verbal signature')}
    ${field('lastSeen', 'Last Seen', n.lastSeen, null, 'Where, and what changed')}
  `;
}

function readCastFields(prefix) {
  const val = (key) => document.getElementById(`${prefix}-${key}`).value.trim();
  return {
    kind: document.getElementById(`${prefix}-faction`).checked ? 'faction' : 'person',
    agenda: val('agenda'),
    disposition: val('disposition'),
    voice: val('voice'),
    lastSeen: val('lastSeen')
  };
}

/**
 * Show new NPC form
 */
export function showNewNPCForm(prefill = null) {
  const p = prefill || {};
  const v = (s) => UI.escapeHtml(s || '');
  const skillsVal = Array.isArray(p.skills) ? p.skills.join(', ') : (p.skills || '');
  const gearVal = Array.isArray(p.gear) ? p.gear.join(', ') : (p.gear || '');
  const rel = p.relationship || 'neutral';

  const formHTML = `
    <form id="new-npc-form">
      <div class="form-group">
        <label>Name *</label>
        <input type="text" id="npc-name" required placeholder="NPC name" value="${v(p.name)}">
      </div>
      ${conceptFieldHTML('npc', p.concept)}
      <div class="form-group">
        <label>Skills (comma-separated)</label>
        <input type="text" id="npc-skills" placeholder="Exorcism, Investigation" value="${v(skillsVal)}">
      </div>
      <div class="form-group">
        <label>Frailty</label>
        <input type="text" id="npc-frailty" placeholder="Haunted Past" value="${v(p.frailty)}">
      </div>
      <div class="form-group">
        <label>Gear (comma-separated)</label>
        <input type="text" id="npc-gear" placeholder="Prayer Beads, Lantern" value="${v(gearVal)}">
      </div>
      <div class="form-group">
        <label>Relationship</label>
        <select id="npc-relationship">
          <option value="neutral" ${rel === 'neutral' ? 'selected' : ''}>Neutral</option>
          <option value="ally" ${rel === 'ally' ? 'selected' : ''}>Ally</option>
          <option value="enemy" ${rel === 'enemy' ? 'selected' : ''}>Enemy</option>
        </select>
      </div>
      ${castFieldsHTML('npc', p)}
      <div class="form-group">
        <label>Notes</label>
        <textarea id="npc-description" placeholder="What do you know about them?" rows="3">${v(p.description)}</textarea>
      </div>
      <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
        <button type="button" class="btn btn-outline" onclick="closeModal()">Cancel</button>
        <button type="submit" class="btn btn-primary">Create NPC</button>
      </div>
    </form>
  `;

  openFormModal('New NPC', 'new-npc-form', formHTML, () => createNewNPC());
}

/**
 * Create new NPC
 */
export async function createNewNPC() {
  const nameInput = document.getElementById('npc-name');

  if (!nameInput || !nameInput.value.trim()) {
    UI.showAlert('Please enter an NPC name', 'error');
    return;
  }

  try {
    const state = getState();

    if (!state.campaignId) {
      UI.showAlert('Please create or select a campaign first!', 'error');
      UI.closeModal();
      return;
    }

    const name = nameInput.value.trim();
    const splitList = (id) => document.getElementById(id).value
      .split(',').map(s => s.trim()).filter(s => s);

    const npcId = await LonerDB.createNPC(state.campaignId, {
      name,
      concept: document.getElementById('npc-concept').value.trim(),
      skills: splitList('npc-skills'),
      frailty: document.getElementById('npc-frailty').value.trim(),
      gear: splitList('npc-gear'),
      relationship: document.getElementById('npc-relationship').value,
      description: document.getElementById('npc-description').value.trim(),
      ...readCastFields('npc')
    });

    console.log('NPC created with ID:', npcId);

    UI.closeModal();
    UI.showAlert('NPC created!', 'success');

    // Always refresh the quick panel
    await showNPCPanel();

    // Reload NPCs list if on NPCs view
    if (document.getElementById('view-npcs').classList.contains('active')) {
      await loadNPCsList();
    }

  } catch (error) {
    console.error('Error creating NPC:', error);
    UI.showAlert('Error creating NPC: ' + error.message, 'error');
  }
}

/**
 * View NPC details
 */
function chipsHTML(items) {
  return `<div style="display: flex; flex-wrap: wrap; gap: 0.25rem;">
    ${items.map(i => `<span class="tag-chip">${UI.escapeHtml(i)}</span>`).join('')}
  </div>`;
}

export async function viewNPCDetails(npcId) {
  const npc = await LonerDB.db.npcs.get(npcId);
  const skills = npc.skills || [];
  const gear = npc.gear || [];

  const detailsHTML = `
    <div class="npc-details character-sheet">
      <div class="form-group">
        <label>Name</label>
        <div>${UI.escapeHtml(npc.name)}</div>
      </div>
      <div class="form-group">
        <label>Concept</label>
        <div>${UI.escapeHtml(npc.concept || '—')}</div>
      </div>
      <div class="form-group">
        <label>Skills</label>
        ${skills.length ? chipsHTML(skills) : '<div>None</div>'}
      </div>
      <div class="form-group">
        <label>Frailty</label>
        <div>${UI.escapeHtml(npc.frailty || '—')}</div>
      </div>
      <div class="form-group">
        <label>Gear</label>
        ${gear.length ? chipsHTML(gear) : '<div>None</div>'}
      </div>
      <div class="form-group">
        <label>Relationship</label>
        <div style="color: ${getRelationshipColor(npc.relationship)};">
          ${UI.escapeHtml(npc.relationship || 'neutral')}
        </div>
      </div>
      ${[['Agenda', npc.agenda], ['Disposition', npc.disposition], ['Voice', npc.voice], ['Last Seen', npc.lastSeen]]
        .filter(([, val]) => val)
        .map(([label, val]) => `
          <div class="form-group">
            <label>${label}</label>
            <div>${UI.escapeHtml(val)}</div>
          </div>
        `).join('')}
      ${npc.description ? `
        <div class="form-group">
          <label>Notes</label>
          <div>${UI.escapeHtml(npc.description)}</div>
        </div>
      ` : ''}
      ${npc.tags && npc.tags.length > 0 ? `
        <div class="form-group">
          <label>Tags</label>
          ${chipsHTML(npc.tags)}
        </div>
      ` : ''}
      <div style="display: flex; gap: 0.5rem; justify-content: flex-end; margin-top: 1rem;">
        <button class="btn btn-outline" onclick="editNPC(${npcId})">Edit</button>
        <button class="btn btn-danger" onclick="deleteNPCConfirm(${npcId})">Delete</button>
      </div>
    </div>
  `;

  UI.showModal(npc.name, detailsHTML);
}

/**
 * Edit NPC
 */
export async function editNPC(npcId) {
  const npc = await LonerDB.db.npcs.get(npcId);

  const v = (s) => UI.escapeHtml(s || '');
  const formHTML = `
    <form id="edit-npc-form">
      <div class="form-group">
        <label>Name *</label>
        <input type="text" id="edit-npc-name" required value="${v(npc.name)}">
      </div>
      ${conceptFieldHTML('edit-npc', npc.concept)}
      <div class="form-group">
        <label>Skills (comma-separated)</label>
        <input type="text" id="edit-npc-skills" value="${v((npc.skills || []).join(', '))}">
      </div>
      <div class="form-group">
        <label>Frailty</label>
        <input type="text" id="edit-npc-frailty" value="${v(npc.frailty)}">
      </div>
      <div class="form-group">
        <label>Gear (comma-separated)</label>
        <input type="text" id="edit-npc-gear" value="${v((npc.gear || []).join(', '))}">
      </div>
      <div class="form-group">
        <label>Relationship</label>
        <select id="edit-npc-relationship">
          <option value="neutral" ${npc.relationship === 'neutral' ? 'selected' : ''}>Neutral</option>
          <option value="ally" ${npc.relationship === 'ally' ? 'selected' : ''}>Ally</option>
          <option value="enemy" ${npc.relationship === 'enemy' ? 'selected' : ''}>Enemy</option>
        </select>
      </div>
      ${castFieldsHTML('edit-npc', npc)}
      <div class="form-group">
        <label>Notes</label>
        <textarea id="edit-npc-description" rows="3">${v(npc.description)}</textarea>
      </div>
      <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
        <button type="button" class="btn btn-outline" onclick="closeModal()">Cancel</button>
        <button type="submit" class="btn btn-primary">Save Changes</button>
      </div>
    </form>
  `;

  openFormModal('Edit NPC', 'edit-npc-form', formHTML, () => saveNPCEdit(npcId));
}

/**
 * Save NPC edits
 */
export async function saveNPCEdit(npcId) {
  const name = document.getElementById('edit-npc-name').value.trim();
  const splitList = (id) => document.getElementById(id).value
    .split(',').map(s => s.trim()).filter(s => s);

  if (!name) {
    UI.showAlert('Name is required', 'error');
    return;
  }

  try {
    await LonerDB.updateNPC(npcId, {
      name,
      concept: document.getElementById('edit-npc-concept').value.trim(),
      skills: splitList('edit-npc-skills'),
      frailty: document.getElementById('edit-npc-frailty').value.trim(),
      gear: splitList('edit-npc-gear'),
      relationship: document.getElementById('edit-npc-relationship').value,
      description: document.getElementById('edit-npc-description').value.trim(),
      ...readCastFields('edit-npc')
    });

    UI.closeModal();
    UI.showAlert('NPC updated!', 'success');

    // Always refresh displays
    await showNPCPanel();

    if (document.getElementById('view-npcs')?.classList.contains('active')) {
      await loadNPCsList();
    }

  } catch (error) {
    console.error('Error saving NPC:', error);
    UI.showAlert('Error saving NPC: ' + error.message, 'error');
  }
}

/**
 * Delete NPC with confirmation
 */
export async function deleteNPCConfirm(npcId) {
  const npc = await LonerDB.db.npcs.get(npcId);

  await confirmAndDelete(`Delete "${npc.name}"? This cannot be undone.`, async () => {
    await LonerDB.deleteNPC(npcId);
    UI.showAlert('NPC deleted', 'success');

    // Refresh displays
    await showNPCPanel();

    if (document.getElementById('view-npcs')?.classList.contains('active')) {
      await loadNPCsList();
    }
  }, { closeModalFirst: true });
}

/**
 * Load NPCs list view
 */
export async function loadNPCsList() {
  const state = getState();

  if (!state.campaignId) {
    const container = document.getElementById('npcs-list');
    if (container) {
      container.innerHTML = '<p class="text-muted text-center">Select a campaign first</p>';
    }
    return;
  }

  const npcs = await LonerDB.getNPCsForCampaign(state.campaignId);
  const container = document.getElementById('npcs-list');

  if (!container) return;

  if (npcs.length === 0) {
    container.innerHTML = '<p class="text-muted text-center">No NPCs yet. Create one!</p>';
    return;
  }

  container.innerHTML = npcs.map(npc => `
    <div class="card">
      <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.5rem;">
        <h3 style="margin: 0;">${UI.escapeHtml(npc.name)}</h3>
        <span style="display: flex; gap: 0.4rem;">
          ${npc.kind === 'faction' ? '<span class="status-badge" style="background: var(--text-muted);">faction</span>' : ''}
          ${npc.status === 'gone' ? '<span class="status-badge" style="background: var(--text-muted);">gone</span>' : ''}
          <span class="status-badge" style="background: ${getRelationshipColor(npc.relationship)};">
            ${UI.escapeHtml(npc.relationship || 'neutral')}
          </span>
        </span>
      </div>
      <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: ${npc.agenda ? '0.25rem' : '1rem'};">
        ${UI.escapeHtml(npc.concept || npc.description || 'No concept')}
      </p>
      ${npc.agenda ? `<p style="font-size: 0.85rem; margin-bottom: 1rem;"><strong>Agenda:</strong> ${UI.escapeHtml(npc.agenda)}</p>` : ''}
      ${(() => {
        const chips = (npc.skills && npc.skills.length ? npc.skills : (npc.tags || []));
        return chips.length ? `
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1rem;">
            ${chips.map(tag => `<span class="tag-chip">${UI.escapeHtml(tag)}</span>`).join('')}
          </div>
        ` : '';
      })()}
      <div class="card-footer">
        <span>Created: ${UI.formatDate(npc.createdAt)}</span>
        <div style="display: flex; gap: 0.5rem;">
          <button class="btn btn-sm btn-outline" onclick="viewNPCDetails(${npc.id})">View</button>
          <button class="btn btn-sm btn-outline" onclick="editNPC(${npc.id})">Edit</button>
          <button class="btn btn-sm btn-danger" onclick="deleteNPCConfirm(${npc.id})">Delete</button>
        </div>
      </div>
    </div>
  `).join('');
}

/**
 * Display NPC quick reference in the Play view sidebar panel
 */
export async function showNPCPanel() {
  const state = getState();
  if (!state.campaignId) {
    document.getElementById('npcs-quick-list').innerHTML = '<p class="text-muted">No campaign selected</p>';
    return;
  }

  const npcs = await LonerDB.getNPCsForCampaign(state.campaignId);
  const container = document.getElementById('npcs-quick-list');

  if (npcs.length === 0) {
    container.innerHTML = '<p class="text-muted">No NPCs yet</p>';
    return;
  }

  container.innerHTML = npcs.slice(0, 5).map(npc => {
    const sub = npc.concept
      || (npc.skills && npc.skills.length ? npc.skills.join(', ') : '')
      || (npc.tags && npc.tags.length ? npc.tags.join(', ') : '');
    return `
      <div class="quick-link-item" style="display: flex; justify-content: space-between; align-items: center; gap: 0.5rem;">
        <div onclick="viewNPCDetails(${npc.id})" style="cursor: pointer; flex: 1; min-width: 0;">
          <strong>${UI.escapeHtml(npc.name)}</strong>
          ${sub ? `<div style="font-size: 0.75rem; opacity: 0.7;">${UI.escapeHtml(sub)}</div>` : ''}
        </div>
        <button class="btn-icon" title="Update relationship tag" onclick="event.stopPropagation(); NPCManager.showRelationshipPrompt(${npc.id});">+</button>
      </div>
    `;
  }).join('');
}

/**
 * Quick-action: add or replace a relationship tag on an NPC without
 * leaving the Play view (Loner 4e "Relationships" - a relationship tag
 * earned through play works exactly like any other tag).
 */
export async function showRelationshipPrompt(npcId) {
  const state = getState();
  const npcs = await LonerDB.getNPCsForCampaign(state.campaignId);
  const npc = npcs.find(n => n.id === npcId);
  if (!npc) return;

  UI.showModal('Update Relationship', `
    <p class="text-muted" style="margin-bottom: 1rem;">
      A relationship with <strong>${UI.escapeHtml(npc.name)}</strong> that's been tested, strained, or deepened through play earns a tag, e.g. <em>Trusted Informant</em>, <em>Sworn Enemy</em>, <em>Uneasy Ally</em>.
    </p>
    ${npc.tags.length > 0 ? `<p style="font-size: 0.85rem; margin-bottom: 0.75rem;">Current tags: ${npc.tags.map(t => UI.escapeHtml(t)).join(', ')}</p>` : ''}
    <div class="form-group">
      <label>New relationship tag</label>
      <input type="text" id="relationship-tag-input" placeholder="e.g., Useful Ambiguity">
    </div>
    <button class="btn btn-primary" onclick="NPCManager.addRelationshipTag(${npcId})" style="width: 100%;">
      Add Tag
    </button>
  `);
}

/**
 * Add the entered tag to the NPC and close the prompt
 */
export async function addRelationshipTag(npcId) {
  const input = document.getElementById('relationship-tag-input');
  const newTag = (input.value || '').trim();
  if (!newTag) {
    UI.showAlert('Enter a tag first', 'error');
    return;
  }

  const state = getState();
  const npcs = await LonerDB.getNPCsForCampaign(state.campaignId);
  const npc = npcs.find(n => n.id === npcId);
  if (!npc) return;

  const tags = [...(npc.tags || []), newTag];
  await LonerDB.updateNPC(npcId, { tags });

  UI.closeModal();
  UI.showAlert(`${npc.name}: ${newTag}`, 'success');
  await showNPCPanel();
}

export const NPCManager = {
  showNPCPanel,
  showNewNPCForm,
  createNewNPC,
  viewNPCDetails,
  editNPC,
  saveNPCEdit,
  deleteNPCConfirm,
  showRelationshipPrompt,
  addRelationshipTag,
  loadNPCsList,
  rollIntoField,
  rollConcept
};
