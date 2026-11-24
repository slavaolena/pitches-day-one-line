// A Day of One-Line Pitches entry (Node 22, standard library only)
// Writes one persuasive sentence to /output/entry.txt

import { mkdirSync, writeFileSync } from 'node:fs';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(OUTPUT_DIR, { recursive: true });

const pitch = "Your friend has a great app idea but can't code - on make.fun they describe it in plain English, an AI agent builds the whole thing, tests it, and ships it. No setup, no cost to try, just results they can show friends.";

writeFileSync(`${OUTPUT_DIR}/entry.txt`, pitch);
console.log(`Pitch written to ${OUTPUT_DIR}/entry.txt (${pitch.length} chars)`);
