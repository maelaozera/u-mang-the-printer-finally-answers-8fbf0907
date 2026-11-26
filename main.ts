// The Printer Finally Answers — u-mang-the-printer-finally-answers-8fbf0907
//
// Writes one line, in the office printer's own voice, to entry.txt.
// The line is a single comeback: the printer counts every sheet it has
// ever fed, notes the one thump, and lets the reader do the maths.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The printer's line: an error code, an exact lifetime sheet count,
// one observed thump, and a question that answers itself.
const ENTRY_LINE =
  "ERROR E-17: I have fed 41,209 sheets without complaint. " +
  "You thumped me once. Guess which of us is the problem.";

function main(): void {
  const trimmed = ENTRY_LINE.trim();
  if (trimmed.length < 1 || trimmed.length > 240) {
    throw new Error(`entry must be 1-240 characters, got ${trimmed.length}`);
  }
  if (trimmed.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }

  // One line, no setup, no second sentence: the whole joke lands at once.
  console.log(`entry: ${trimmed.length} characters`);

  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(join(OUTPUT_DIR, "entry.txt"), trimmed + "\n", "utf8");
}

main();
