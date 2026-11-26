/**
 * Service worker cache version, derived from the precached files.
 *
 *   node scripts/cache-version.js           print the expected version
 *   node scripts/cache-version.js --write   update CACHE_VERSION in sw.js
 *   node scripts/cache-version.js --check   exit 1 if sw.js is out of date
 *
 * The version is a hash of every file in PRECACHE_URLS, so it changes
 * exactly when a precached file changes. Text files are hashed with LF
 * line endings, so Windows (CRLF) and Linux checkouts agree.
 */

import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { join } from 'node:path';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const SW = join(ROOT, 'sw.js');
const TEXT = /\.(js|css|html|json|svg|md|txt|webmanifest)$/i;
const VERSION_LINE = /const CACHE_VERSION = '([^']*)';/;

export function precachedFiles(swSource = readFileSync(SW, 'utf8')) {
  const list = swSource.match(/const PRECACHE_URLS = \[([\s\S]*?)\];/);
  if (!list) throw new Error('PRECACHE_URLS not found in sw.js');
  return [...list[1].matchAll(/'\.\/([^'?]*)(?:\?[^']*)?'/g)]
    .map(m => m[1])
    .filter(path => path !== '');  // './' is served as index.html, listed separately
}

export function expectedCacheVersion() {
  const hash = createHash('sha256');
  for (const path of [...new Set(precachedFiles())].sort()) {
    const file = join(ROOT, path);
    if (!existsSync(file)) throw new Error(`Precached file missing: ${path}`);
    let content = readFileSync(file);
    if (TEXT.test(path)) content = Buffer.from(content.toString('utf8').replace(/\r\n/g, '\n'));
    hash.update(path).update('\0').update(content).update('\0');
  }
  return `loner-${hash.digest('hex').slice(0, 10)}`;
}

export function currentCacheVersion() {
  return readFileSync(SW, 'utf8').match(VERSION_LINE)?.[1];
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const expected = expectedCacheVersion();
  const current = currentCacheVersion();
  if (process.argv.includes('--write')) {
    if (expected !== current) {
      writeFileSync(SW, readFileSync(SW, 'utf8').replace(VERSION_LINE, `const CACHE_VERSION = '${expected}';`));
    }
    console.log(`CACHE_VERSION = '${expected}'${expected === current ? ' (unchanged)' : ''}`);
  } else if (process.argv.includes('--check')) {
    if (expected !== current) {
      console.error(`sw.js CACHE_VERSION is '${current}', expected '${expected}'. Run: npm run cache-version`);
      process.exit(1);
    }
    console.log('CACHE_VERSION is up to date');
  } else {
    console.log(expected);
  }
}
