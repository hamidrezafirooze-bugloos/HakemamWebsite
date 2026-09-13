import fs from 'node:fs';
import path from 'node:path';
import { ASSET_MAP } from './asset-map.mjs';

const SRC_DIR = path.resolve('project/uploads');
const OUT_DIR = path.resolve('app/public/assets');

fs.mkdirSync(OUT_DIR, { recursive: true });

for (const [orig, slug] of Object.entries(ASSET_MAP)) {
  const from = path.join(SRC_DIR, orig);
  const to = path.join(OUT_DIR, slug);
  fs.copyFileSync(from, to);
  console.log(orig, '->', slug);
}
console.log('Done. Copied', Object.keys(ASSET_MAP).length, 'files.');
