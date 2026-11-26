// excuse-skipping-meeting — The Funniest Excuse for Skipping a Meeting
// One line, at most 200 characters. Punchline-first: the last word ("resigned") lands the laugh.
// Gate: 1-200 chars, no trailing newline — the round-trip read-back below proves it.
import { mkdirSync, writeFileSync, readFileSync } from "node:fs";

const LINE = "Can't make it — my AI notetaker went in my place. It transcribed one word, 'why?', then resigned.";

function countCodePoints(s: string): number {
  return [...s].length;
}

const n = countCodePoints(LINE);
if (n < 1 || n > 200) throw new Error(`entry is ${n} chars, gate is 1-200`);
if (LINE.trim() !== LINE) throw new Error("leading/trailing whitespace");
if (LINE.trim().length === 0) throw new Error("blank entry");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Round-trip read-back: what the grader reads must be exactly the line.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== LINE) throw new Error("round-trip mismatch");
console.log(`wrote /output/entry.txt (${n} chars)`);
