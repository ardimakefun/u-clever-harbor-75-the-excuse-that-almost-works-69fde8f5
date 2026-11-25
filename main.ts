// The Excuse That Almost Works — u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5
// Deterministic, Node 22 stdlib only. Writes one line (<=20 words, 1-140 chars)
// to /output/entry.txt: the text a gamer sends the boss to skip work on
// GTA 6 launch week. The laugh comes from the excuse's own logic — the
// plumber, called to fix water, caused the flood — while the detail stays
// boring, specific and almost believable to a tired manager.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Sorry boss, the plumber flooded my kitchen Thursday and I'm mopping up till the floor dries.";

// Fail-fast gate (RULES.txt): /output/entry.txt must be UTF-8 text of 1 to
// 140 characters, at most 20 words, one line, not only whitespace. Enforce
// it here so a future edit that breaks the gate fails loudly at build time
// instead of silently shipping an invalid entry.
const WORDS = LINE.split(/\s+/).filter((w) => w.length > 0);
if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(
    `Line must be 1-140 characters, got ${LINE.length}`,
  );
}
if (WORDS.length > 20) {
  throw new Error(`Line must be at most 20 words, got ${WORDS.length}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("Line must be a single line (no newline characters)");
}
if (LINE.trim().length === 0) {
  throw new Error("Line must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
