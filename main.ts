// Alien Field Notes: The Two Day Earth Review — make.fun entry.
// Writes one line (at most 200 characters) to /output/entry.txt:
// a review of planet Earth left by an alien tourist. Beautiful
// world, would visit again — one star off, because the dominant
// species invented a device to talk to anyone on Earth, then uses
// it to avoid talking to anyone.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Beautiful world, would visit again. One star off: the dominant species invented a device to talk to anyone on Earth, then uses it to avoid talking to anyone.";

// Gate guard: the entry must be 1–200 characters and not only whitespace.
if (entry.length < 1 || entry.length > 200 || entry.trim().length === 0) {
  throw new Error(`entry is ${entry.length} characters, must be 1-200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
