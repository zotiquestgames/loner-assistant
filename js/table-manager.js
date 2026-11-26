/**
 * LONER ASSISTANT v2.1 - Table Manager UI
 *
 * Interface for browsing and rolling tables
 */

import { TableSystem } from './tables.js';
import { showModal, closeModal, showAlert, showView } from './ui.js';
import { getState } from './state.js';
import * as Editor from './editor.js';

// Buttons rendered by this module use onclick="TableManager.method()" /
// onclick="CustomTables.method()" - both are curated window globals (see
// main.js), so keeping those references works fine under ES modules.
export const TableManager = {
  /**
   * Show the table browser
   */
  show() {
    showView('tools');
    this.render();
  },

  /**
   * Render the main table browser
   */
  render() {
    const container = document.getElementById('tools-grid');
    if (!container) return;

    container.innerHTML = `
      <div class="table-manager">
        <!-- Quick rolls: the generators used most, at the top -->
        <div class="panel tools-quick">
          <h3>Quick Rolls</h3>
          <div class="quick-actions">
            <button class="btn btn-primary" onclick="TableManager.rollAdventureMaker()" title="Roll Adventure Maker (Alt+T)">
              Adventure Maker
            </button>
            <button class="btn btn-primary" onclick="TableManager.rollBuildTheSetup()" title="Roll the 5W+H table to assemble a mission premise before your first scene">
              Build the Setup
            </button>
            <button class="btn btn-secondary" onclick="TableManager.rollGetInspired()" title="Get Inspired">
              Get Inspired
            </button>
          </div>
          <label class="tools-flavor">
            <span>Get Inspired flavor</span>
            <select id="inspired-flavor-select" onchange="TableManager.changeInspiredFlavor(this.value)">
              ${this.renderFlavorOptions()}
            </select>
          </label>
        </div>

        <!-- Recent rolls, near the top so results stay in view -->
        <div class="panel">
          <h3>Recent Rolls</h3>
          <div id="table-roll-history"></div>
        </div>

        <!-- Table browser: one collapsed group per product, with search -->
        <div class="panel table-browser">
          <div class="table-browser-head">
            <h3>Roll Tables</h3>
            <button class="btn btn-sm btn-outline" onclick="CustomTables.show()" title="Create and manage custom tables">
              Custom Tables
            </button>
          </div>
          <input type="search" id="table-search" class="table-search" placeholder="Search tables"
                 aria-label="Search tables" oninput="TableManager.filterTables(this.value)">
          <p id="table-search-empty" class="text-muted hidden">No tables match.</p>
          <div class="table-groups">
            ${this.renderGroups()}
          </div>
        </div>
      </div>
    `;

    this.loadRollHistory();
  },

  /**
   * Render flavor options
   */
  renderFlavorOptions() {
    const flavors = TableSystem.getInspiredFlavors();
    const active = TableSystem.getActiveInspiredFlavor();

    return flavors.map(flavor => `
      <option value="${flavor.id}" ${flavor.id === active ? 'selected' : ''}>
        ${flavor.name}
      </option>
    `).join('');
  },

  // Categories shown in the table browser, in display order
  BROWSER_CATEGORIES: {
    'adventure-maker': 'Adventure Maker',
    'random-tables': 'Random Tables',
    'get-inspired': 'Get Inspired',
    'custom': 'Custom Tables'
  },

  /**
   * Product name a supplement belongs to: "Cthulhu Adventure Tables" and
   * "Cthulhu Inspiration" both go under "Cthulhu".
   */
  groupName(supplement) {
    if (supplement.id === 'core-inspired') return 'Loner Core Rules';
    return supplement.name.replace(/ (Adventure Tables|Inspiration)$/, '');
  },

  /**
   * Collect browsable tables grouped by product, core first, custom last,
   * the rest in alphabetical order.
   */
  collectGroups() {
    const groups = new Map();

    for (const [suppId, supp] of Object.entries(TableSystem.registry)) {
      const name = suppId === 'custom' ? 'Custom Tables' : this.groupName(supp.supplement);
      for (const [tableId, table] of Object.entries(supp.tables)) {
        if (!(table.category in this.BROWSER_CATEGORIES)) continue;
        if (!groups.has(name)) groups.set(name, []);
        groups.get(name).push({
          supplementId: suppId,
          tableId,
          name: table.name,
          description: table.description || '',
          category: table.category
        });
      }
    }

    const order = [...groups.keys()].sort((a, b) => {
      const rank = n => (n === 'Loner Core Rules' ? 0 : n === 'Custom Tables' ? 2 : 1);
      return rank(a) - rank(b) || a.localeCompare(b);
    });
    return order.map(name => ({ name, tables: groups.get(name) }));
  },

  /**
   * Render the table groups as collapsed <details> blocks
   */
  renderGroups() {
    const groups = this.collectGroups();
    if (!groups.some(g => g.name === 'Custom Tables')) {
      groups.push({ name: 'Custom Tables', tables: [] });
    }

    return groups.map(group => {
      let body;
      if (group.tables.length === 0) {
        body = '<p class="text-muted">No custom tables yet. <a href="#" onclick="CustomTables.showCreateForm(); return false;">Create one</a></p>';
      } else {
        const categories = Object.keys(this.BROWSER_CATEGORIES)
          .filter(cat => group.tables.some(t => t.category === cat));
        body = categories.map(cat => `
          ${categories.length > 1 ? `<h4 class="table-group-category">${this.BROWSER_CATEGORIES[cat]}</h4>` : ''}
          <div class="table-list">
            ${group.tables.filter(t => t.category === cat).map(t => this.renderTableRow(t)).join('')}
          </div>
        `).join('');
      }

      return `
        <details class="table-group">
          <summary>
            <span class="table-group-name">${group.name}</span>
            <span class="table-group-count" data-total="${group.tables.length}">${group.tables.length}</span>
          </summary>
          <div class="table-group-body">${body}</div>
        </details>
      `;
    }).join('');
  },

  /**
   * One table: name and Roll button on one line, description below
   */
  renderTableRow(table) {
    const action = table.category === 'custom'
      ? `TableManager.rollCustomTable('${table.tableId}')`
      : `TableManager.rollTable('${table.supplementId}', '${table.tableId}')`;
    const search = `${table.name} ${table.description}`.toLowerCase().replace(/"/g, '&quot;');

    return `
      <div class="table-card" data-search="${search}">
        <div class="table-card-header">
          <h4>${table.name}</h4>
          <button class="btn btn-sm btn-secondary" onclick="${action}">Roll</button>
        </div>
        ${table.description ? `<p class="text-muted table-card-desc">${table.description}</p>` : ''}
      </div>
    `;
  },

  /**
   * Filter the table browser by name or description. With a query, groups
   * with matches open and the others hide; an empty query restores the list.
   */
  filterTables(query) {
    const q = query.trim().toLowerCase();
    let anyMatch = false;

    document.querySelectorAll('.table-browser .table-group').forEach(group => {
      let matches = 0;
      group.querySelectorAll('.table-card').forEach(card => {
        const hit = !q || card.dataset.search.includes(q);
        card.classList.toggle('hidden', !hit);
        if (hit) matches++;
      });
      group.querySelectorAll('.table-group-category').forEach(h => {
        const list = h.nextElementSibling;
        h.classList.toggle('hidden', !!q && !list.querySelector('.table-card:not(.hidden)'));
      });

      const count = group.querySelector('.table-group-count');
      count.textContent = q ? `${matches} / ${count.dataset.total}` : count.dataset.total;
      group.classList.toggle('hidden', !!q && matches === 0);
      group.open = !!q && matches > 0;
      if (matches > 0) anyMatch = true;
    });

    const empty = document.getElementById('table-search-empty');
    if (empty) empty.classList.toggle('hidden', !q || anyMatch);
  },

  /**
   * Roll Adventure Maker
   */
  async rollAdventureMaker() {
    const results = await TableSystem.rollAdventureMaker();

    // Show modal with full results
    showModal('Adventure Maker Results', `
      <div class="adventure-maker-results">
        <div class="result-section">
          <h4>Setting</h4>
          <p><strong>${results.setting.result}</strong></p>
          <p class="text-muted">Rolled: ${results.setting.rolls.join(', ')}</p>
        </div>

        <div class="result-section">
          <h4>Tone</h4>
          <p><strong>${results.tone.result}</strong></p>
        </div>

        <div class="result-section">
          <h4>Key Elements</h4>
          <ul>
            <li>${results.thing1.result}</li>
            <li>${results.thing2.result}</li>
          </ul>
        </div>

        <div class="result-section">
          <h4>Opposition</h4>
          <p><strong>${results.opposition.result}</strong></p>
        </div>

        <div class="result-section">
          <h4>Actions</h4>
          <p>${results.action1.result} → ${results.action2.result}</p>
        </div>

        <div class="result-section">
          <h4>Focus</h4>
          <p><strong>${results.thing3.result}</strong></p>
        </div>
      </div>
    `);

    // Also show a quick summary in the sidebar
    const resultDiv = document.getElementById('adventure-maker-result');
    if (resultDiv) {
      resultDiv.innerHTML = `
        <div class="adventure-summary">
          <div class="adventure-summary-item">
            <div class="adventure-summary-label">Setting</div>
            <div class="adventure-summary-value">${results.setting.result}</div>
          </div>
          <div class="adventure-summary-item">
            <div class="adventure-summary-label">Tone</div>
            <div class="adventure-summary-value">${results.tone.result}</div>
          </div>
          <div class="adventure-summary-item">
            <div class="adventure-summary-label">Opposition</div>
            <div class="adventure-summary-value">${results.opposition.result}</div>
          </div>
          <div style="text-align: center; margin-top: 0.5rem;">
            <button class="btn btn-sm btn-outline" onclick="TableManager.rollAdventureMaker()">
              Regenerate
            </button>
          </div>
        </div>
      `;
      resultDiv.classList.add('show');
    }

    this.loadRollHistory();
  },

  /**
   * Roll Build the Setup (5W+H premise table, 4th Edition)
   */
  async rollBuildTheSetup() {
    const results = await TableSystem.rollBuildTheSetup();

    showModal('Build the Setup', `
      <div class="adventure-maker-results">
        <div class="result-section">
          <h4>Who?</h4>
          <p><strong>${results.who.result}</strong></p>
        </div>
        <div class="result-section">
          <h4>What?</h4>
          <p><strong>${results.what.result}</strong></p>
        </div>
        <div class="result-section">
          <h4>When?</h4>
          <p><strong>${results.when.result}</strong></p>
        </div>
        <div class="result-section">
          <h4>Where?</h4>
          <p><strong>${results.where.result}</strong></p>
        </div>
        <div class="result-section">
          <h4>Why?</h4>
          <p><strong>${results.why.result}</strong></p>
        </div>
        <div class="result-section">
          <h4>How?</h4>
          <p><strong>${results.how.result}</strong></p>
        </div>
      </div>
    `);

    this.loadRollHistory();
  },

  /**
   * Initialize random tables panel - populate supplement selector
   */
  showRandomTablesPanel() {
    const selector = document.getElementById('random-tables-supplement');
    if (!selector) return;

    // Get all supplements that have random-tables
    const supplements = [];

    for (const [suppId, supplement] of Object.entries(TableSystem.registry)) {
      // Check if this supplement has any random tables
      const hasRandomTables = Object.values(supplement.tables).some(
        table => table.category === 'random-tables'
      );

      if (hasRandomTables) {
        supplements.push({
          id: suppId,
          name: supplement.supplement.name
        });
      }
    }

    if (supplements.length === 0) {
      selector.innerHTML = '<option value="">No supplements available</option>';
      return;
    }

    supplements.sort((a, b) => a.name.localeCompare(b.name));

    // Populate dropdown
    selector.innerHTML = '<option value="">-- Select Supplement --</option>' +
      supplements.map(supp => `
        <option value="${supp.id}">${supp.name}</option>
      `).join('');

    // Load last selected supplement if available
    const lastSelected = localStorage.getItem('loner-last-random-supplement');
    if (lastSelected && supplements.find(s => s.id === lastSelected)) {
      selector.value = lastSelected;
      this.showSupplementTables(lastSelected);
    }
  },

  /**
   * Show tables from a specific supplement
   */
  showSupplementTables(supplementId) {
    const container = document.getElementById('random-tables-list');
    if (!container) return;

    // Save selection
    if (supplementId) {
      localStorage.setItem('loner-last-random-supplement', supplementId);
    }

    if (!supplementId) {
      container.innerHTML = `
        <p class="text-muted" style="font-size: 0.85rem; text-align: center;">
          Select a supplement to see available tables
        </p>
      `;
      return;
    }

    const supplement = TableSystem.registry[supplementId];
    if (!supplement) {
      container.innerHTML = `
        <p class="text-muted" style="font-size: 0.85rem; text-align: center;">
          Supplement not found
        </p>
      `;
      return;
    }

    // Get all random tables from this supplement
    const tables = [];
    for (const [tableId, table] of Object.entries(supplement.tables)) {
      if (table.category === 'random-tables') {
        tables.push({
          id: tableId,
          name: table.name,
          description: table.description
        });
      }
    }

    if (tables.length === 0) {
      container.innerHTML = `
        <p class="text-muted" style="font-size: 0.85rem; text-align: center;">
          No random tables in this supplement
        </p>
      `;
      return;
    }

    // Render table list
    container.innerHTML = `
      <div style="margin-bottom: 0.5rem;">
        <div style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.25rem;">
          ${tables.length} table${tables.length !== 1 ? 's' : ''} available
        </div>
      </div>
      ${tables.map(table => `
        <button class="btn btn-sm btn-secondary random-table-btn"
                onclick="TableManager.rollTableQuick('${supplementId}', '${table.id}')"
                title="${table.description || ''}">
          ${table.name}
        </button>
      `).join('')}
    `;
  },

  /**
   * Roll a table quickly (from sidebar) - shows result in sidebar too
   */
  async rollTableQuick(supplementId, tableId) {
    const result = await TableSystem.roll(supplementId, tableId);

    // Log to database
    await TableSystem.logTableRoll(result.table, supplementId, result.result);

    // Insert to notes
    Editor.insertBlock(
      result.table,
      result.result,
      'var(--accent-no)'
    );

    // Log event
    if (typeof window.EventManager !== 'undefined') {
      await window.EventManager.logEvent('table-roll', `${result.table}: ${result.result}`, {
        supplement: result.supplement,
        rolls: result.rolls
      });
    }

    // Show toast notification with result
    showAlert(`${result.table}: ${result.result}`, 'success', 5000);

    this.loadRollHistory();
  },

  /**
   * Roll Get Inspired
   */
  async rollGetInspired() {
    const result = await TableSystem.rollGetInspired();

    // Update sidebar display
    const resultDiv = document.getElementById('inspiration-result');
    if (resultDiv) {
      resultDiv.innerHTML = `
        <div style="font-weight: 600; font-size: 1.1rem; margin-top: 0.5rem;">
          ${result.verb} + ${result.adjective} + ${result.noun}
        </div>
        <div style="font-size: 0.85rem; margin-top: 0.25rem; color: var(--text-muted);">
          "${result.formatted}"
        </div>
      `;
    }

    showAlert('Inspiration generated!', 'success');
    this.loadRollHistory();
  },

  /**
   * Roll a specific table
   */
  async rollTable(supplementId, tableId) {
    const result = await TableSystem.roll(supplementId, tableId);

    // Log to database
    await TableSystem.logTableRoll(result.table, supplementId, result.result);

    // Insert to notes
    Editor.insertBlock(
      result.table,
      result.result,
      'var(--accent-no)'
    );

    // Log event
    if (typeof window.EventManager !== 'undefined') {
      await window.EventManager.logEvent('table-roll', `${result.table}: ${result.result}`, {
        supplement: result.supplement,
        rolls: result.rolls
      });
    }

    showAlert(`Rolled: ${result.result}`, 'success');
    this.loadRollHistory();
  },

  /**
   * Roll the Things table (auto-picks Variant A/B/C per 4e's own 1d6 instruction)
   */
  async rollThings() {
    const result = TableSystem.rollThings();

    await TableSystem.logTableRoll(result.table, 'core-loner', result.result);

    Editor.insertBlock(result.table, result.result, 'var(--accent-no)');

    if (typeof window.EventManager !== 'undefined') {
      await window.EventManager.logEvent('table-roll', `${result.table}: ${result.result}`, {
        supplement: result.supplement,
        rolls: result.rolls
      });
    }

    showAlert(`Rolled: ${result.result}`, 'success');
    this.loadRollHistory();
  },

  /**
   * Roll a custom table
   */
  async rollCustomTable(tableId) {
    try {
      const result = await TableSystem.roll('custom', tableId);

      // Log to database
      await TableSystem.logTableRoll(result.table, 'custom', result.result);

      // Insert to notes
      Editor.insertBlock(
        result.table,
        result.result,
        'var(--accent-no)'
      );

      // Log event
      if (typeof window.EventManager !== 'undefined') {
        await window.EventManager.logEvent('custom-table-roll', `${result.table}: ${result.result}`, {
          rolls: result.rolls
        });
      }

      showAlert(`Rolled: ${result.result}`, 'success');
      this.loadRollHistory();
    } catch (error) {
      showAlert('Error rolling table: ' + error.message, 'error');
    }
  },

  /**
   * Change Get Inspired flavor
   */
  async changeInspiredFlavor(supplementId) {
    await TableSystem.setInspiredFlavor(supplementId);
  },

  /**
   * Show flavor picker in a modal
   */
  showFlavorPicker() {
    const flavors = TableSystem.getInspiredFlavors();
    const active = TableSystem.getActiveInspiredFlavor();

    const optionsHTML = flavors.map(flavor => `
      <div class="flavor-option ${flavor.id === active ? 'active' : ''}"
           onclick="TableManager.selectFlavor('${flavor.id}')">
        <div class="flavor-name">${flavor.name}</div>
        <div class="flavor-version">v${flavor.version}</div>
      </div>
    `).join('');

    showModal('Choose Get Inspired Flavor', `
      <div class="flavor-picker">
        ${optionsHTML}
      </div>
      <style>
        .flavor-picker {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .flavor-option {
          padding: 1rem;
          border: 2px solid var(--border);
          border-radius: var(--radius);
          cursor: pointer;
          transition: all 0.2s;
        }
        .flavor-option:hover {
          border-color: var(--primary);
          background: var(--bg-tertiary);
        }
        .flavor-option.active {
          border-color: var(--primary);
          background: var(--primary);
          color: white;
        }
        .flavor-name {
          font-weight: 600;
          margin-bottom: 0.25rem;
        }
        .flavor-version {
          font-size: 0.85rem;
          opacity: 0.7;
        }
      </style>
    `);
  },

  /**
   * Select a flavor
   */
  async selectFlavor(flavorId) {
    await TableSystem.setInspiredFlavor(flavorId);
    closeModal();

    // Refresh any displays if needed
    if (getState().sessionId) {
      this.loadRollHistory();
    }
  },

  /**
   * Load roll history
   */
  async loadRollHistory() {
    const history = await TableSystem.getSessionRollHistory();
    const container = document.getElementById('table-roll-history');

    if (!container) return;

    if (history.length === 0) {
      container.innerHTML = '<p class="text-muted">No rolls yet this session</p>';
      return;
    }

    container.innerHTML = history.slice(0, 5).map(roll => `
      <div class="roll-history-item">
        <div class="roll-history-header">
          <strong>${roll.tableName}</strong>
          <span class="text-muted">${this.formatTime(roll.timestamp)}</span>
        </div>
        <div>${roll.result}</div>
      </div>
    `).join('');
  },

  /**
   * Format timestamp
   */
  formatTime(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  }
};
