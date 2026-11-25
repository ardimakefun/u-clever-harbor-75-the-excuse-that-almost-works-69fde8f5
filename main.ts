// The Excuse That Almost Works — u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5
// Deterministic, Node 22 stdlib only. Writes one line (<=20 words, 1-140 chars)
// to /output/entry.txt: the text a gamer sends the boss to skip work on
// GTA 6 launch week. The laugh comes from the excuse's own logic — the
// plumber, called to fix water, caused the flood — while the detail stays
// boring, specific and almost believable to a tired manager.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Sorry boss, the plumber flooded my kitchen Thursday and I'm mopping up till the floor dries.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
