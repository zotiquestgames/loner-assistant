import { test } from 'node:test';
import assert from 'node:assert/strict';
import { supplements } from '../data/table-registry.js';
import templates from '../data/tables/templates/world-builders-guide.js';

const filled = (v) => typeof v === 'string' && v.trim().length > 0;

function checkTable(where, table) {
  const e = table.entries;
  assert.ok(Array.isArray(e), `${where}: entries must be an array`);
  switch (table.rollType) {
    case '1d6':
      assert.equal(e.length, 6, `${where}: 1d6 needs 6 entries`);
      assert.ok(e.every(filled), `${where}: empty entry`);
      break;
    case '1d66':
      assert.equal(e.length, 36, `${where}: 1d66 needs 36 entries`);
      assert.ok(e.every(filled), `${where}: empty entry`);
      break;
    case '2d6':
      assert.equal(e.length, 6, `${where}: 2d6 needs 6 rows`);
      e.forEach((row, i) => {
        assert.equal(row.length, 6, `${where}: row ${i + 1} needs 6 entries`);
        assert.ok(row.every(filled), `${where}: empty entry in row ${i + 1}`);
      });
      break;
    case 'subtable':
      assert.equal(e.length, 6, `${where}: subtable needs 6 lists`);
      e.forEach((list, i) => assert.ok(list.length > 0 && list.every(filled), `${where}: list ${i + 1}`));
      break;
    case 'origins':
      assert.equal(e.length, 6, `${where}: origins needs 6 entries`);
      e.forEach((o, i) => {
        assert.ok(filled(o.name), `${where}: origin ${i + 1} needs a name`);
        for (const k of ['skills', 'frailties', 'gear']) {
          assert.ok(Array.isArray(o[k]) && o[k].length === 6 && o[k].every(filled),
            `${where}: origin ${i + 1} needs 6 ${k}`);
        }
      });
      break;
    case 'random':
      assert.ok(e.length > 0 && e.every(filled), `${where}: random table needs entries`);
      break;
    default:
      assert.fail(`${where}: unknown rollType ${table.rollType}`);
  }
}

test('every registered supplement loads and every table can be rolled', async () => {
  const ids = new Set();
  for (const meta of supplements.filter(s => s.enabled)) {
    const { default: supp } = await import(new URL(`../data/${meta.file}`, import.meta.url));
    assert.ok(supp?.supplement && supp?.tables, `${meta.file}: missing supplement/tables`);
    assert.ok(!ids.has(supp.supplement.id), `duplicate supplement id ${supp.supplement.id}`);
    ids.add(supp.supplement.id);
    for (const [key, table] of Object.entries(supp.tables)) {
      checkTable(`${meta.file} > ${key}`, table);
    }
  }
});

test('custom table templates are complete d66 tables', () => {
  assert.equal(templates.length, 2);
  for (const t of templates) checkTable(`template ${t.id}`, t);
});
