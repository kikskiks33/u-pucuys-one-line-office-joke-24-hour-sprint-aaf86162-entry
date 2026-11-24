// main.ts — one-line office joke entry
//
// This script has exactly one job: put our joke into /output/entry.txt
// so the grader can read it. No network, no randomness, no surprises —
// the same line comes out every single time you run it.
//
// The joke came out of one too many afternoons fighting the office
// printer. You ask it for a single page and it hands you a whole saga:
// a jam, a firmware update... and then, out of nowhere, a perfectly
// good excuse to call it a day. The third item is the twist — the
// printer's failure turns into the employee's win. That's the bit that
// makes it a joke and not just a complaint.

import { mkdirSync, writeFileSync } from "node:fs";

// The line itself — one sentence, no line breaks, well under 200 chars.
const punchline =
  "I asked the printer for one page and it gave me a paper jam, a firmware update, and a reason to go home early.";

// Make sure /output is there, then write the joke out as plain UTF-8.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", punchline, "utf8");
