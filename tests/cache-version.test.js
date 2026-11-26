import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { expectedCacheVersion, currentCacheVersion, precachedFiles } from '../scripts/cache-version.js';

const ROOT = fileURLToPath(new URL('..', import.meta.url));

function jsFiles(dir) {
  return readdirSync(join(ROOT, dir), { withFileTypes: true }).flatMap(entry => {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) return jsFiles(path);
    return entry.name.endsWith('.js') ? [relative('.', path).split(sep).join('/')] : [];
  });
}

test('every app module and data file is precached (or the app breaks offline)', () => {
  const precached = new Set(precachedFiles());
  const missing = [...jsFiles('js'), ...jsFiles('data')].filter(f => !precached.has(f));
  assert.deepEqual(missing, []);
});

test('sw.js CACHE_VERSION matches the precached files (run `npm run cache-version` after changing them)', () => {
  assert.equal(currentCacheVersion(), expectedCacheVersion());
});
