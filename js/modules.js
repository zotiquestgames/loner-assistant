/**
 * LONER ASSISTANT v2.4 - Optional modules per campaign
 *
 * Every optional rules module can be switched on or off for a campaign.
 * Switched-off modules hide their Play panel and stop prompting. The
 * 4th Edition modules start on; the supplement modules start off.
 */

import { updateCampaign } from './db/database.js';
import { getState } from './state.js';
import { showModal, closeModal, showAlert, escapeHtml } from './ui.js';

export const MODULES = [
  {
    id: 'leverage', name: 'Leverage', source: 'Loner 4e', panel: 'leverage', default: true,
    description: 'Bank a "Yes, and..." to spend later as Advantage or to soften a No.'
  },
  {
    id: 'challenge-tracks', name: 'Challenge Tracks', source: 'Loner 4e', panel: 'challenge-tracks', default: true,
    description: 'Box trackers for pursuits that span several scenes or sessions.'
  },
  {
    id: 'status-track', name: 'Status Track', source: 'Loner 4e', panel: null, default: true,
    description: 'Lasting consequences after a defeat in a conflict.'
  },
  {
    id: 'cinematic', name: 'Cinematic Action', source: 'Cinematic Action', panel: 'cinematic', default: false,
    description: 'Action Points, chases, and scene intensity.'
  },
  {
    id: 'temporal', name: 'Time Travel', source: 'The Path Not Taken', panel: 'temporal', default: false,
    description: 'Time loops, timeline leaps, and the Time-Web.'
  }
];

let active = null; // module settings of the campaign currently applied

function settingsFor(campaign) {
  const saved = campaign?.modules || {};
  return Object.fromEntries(MODULES.map(m => [m.id, saved[m.id] ?? m.default]));
}

export function isEnabled(id) {
  const settings = active || settingsFor(null);
  return settings[id] !== false;
}

/**
 * Show or hide module panels for the given campaign.
 */
export function applyModules(campaign) {
  active = settingsFor(campaign);
  for (const m of MODULES) {
    if (!m.panel) continue;
    document.querySelector(`[data-panel-id="${m.panel}"]`)?.classList.toggle('module-off', !active[m.id]);
  }
}

export function showModuleSettings() {
  const { campaignId } = getState();
  if (!campaignId) {
    showAlert('Select a campaign first', 'error');
    return;
  }
  const settings = active || settingsFor(null);
  showModal('Optional Modules', `
    <p class="text-muted" style="margin-bottom: 1rem;">
      Choose the optional rules this campaign uses. Switched-off modules hide their panels; nothing is deleted.
    </p>
    <div class="module-list">
      ${MODULES.map(m => `
        <label class="module-option">
          <input type="checkbox" data-module="${m.id}" ${settings[m.id] ? 'checked' : ''}>
          <span>
            <strong>${escapeHtml(m.name)}</strong> <span class="text-muted">(${escapeHtml(m.source)})</span><br>
            <span class="text-muted">${escapeHtml(m.description)}</span>
          </span>
        </label>
      `).join('')}
    </div>
    <button class="btn btn-primary" onclick="ModuleSettings.save()" style="width: 100%; margin-top: 1rem;">Save</button>
  `);
}

export async function save() {
  const { campaignId } = getState();
  const modules = {};
  document.querySelectorAll('[data-module]').forEach(input => {
    modules[input.dataset.module] = input.checked;
  });
  await updateCampaign(campaignId, { modules });
  applyModules({ modules });
  closeModal();
  showAlert('Modules updated', 'success');
}

export const ModuleSettings = {
  showModuleSettings,
  save,
  isEnabled
};
