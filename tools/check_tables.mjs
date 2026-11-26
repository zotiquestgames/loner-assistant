// Check the table data of Loner Assistant (pipeline routine 14).
//   node tools/check_tables.mjs
// Lists every 2d6 grid that is not 6 x 6 with text in every cell, and the
// supplements the character generator can use (Concepts with category
// 'character', plus Skills, Frailties, Gear and first-name tables).
// Exits 1 when a grid is broken.
import { supplements } from '../data/table-registry.js';

let bad = 0;
const generator = [];
for (const s of supplements) {
  if (!s.enabled) continue;
  const { tables } = (await import(new URL('../data/' + s.file, import.meta.url))).default;
  for (const [id, t] of Object.entries(tables)) {
    if (t.rollType !== '2d6') continue;
    const ok = Array.isArray(t.entries) && t.entries.length === 6 &&
      t.entries.every(r => r.length === 6 && r.every(c => typeof c === 'string' && c.trim()));
    if (!ok) { bad++; console.log(`broken grid: ${s.id} / ${id}`); }
  }
  const origins = tables.origins?.rollType === 'origins' ? tables.origins.entries : [];
  for (const o of origins) {
    for (const k of ['skills', 'frailties', 'gear']) {
      if (!Array.isArray(o[k]) || o[k].length !== 6 || !o[k].every(v => v && v.trim())) {
        bad++; console.log(`broken origin: ${s.id} / ${o.name} / ${k}`);
      }
    }
  }
  if (origins.length || ['concepts', 'skills', 'frailties', 'gear'].every(k => tables[k]?.category === 'character')) {
    const names = tables.names || (tables.female_names && tables.male_names);
    const missing = names ? [] : ['names'];
    generator.push(s.name + (missing.length ? ` (missing: ${missing.join(', ')})` : ''));
  }
}
console.log(`\ncharacter generator: ${generator.length} supplements`);
for (const g of generator) console.log(`  ${g}`);
process.exit(bad ? 1 : 0);
