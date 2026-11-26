// The Funniest Auto-Reply an AI Ever Sent — u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526
// Writes one original one-line out-of-office auto-reply to /output/entry.txt
// (or argv[2] when given). Node 22, stdlib only, deterministic: the line is
// a fixed literal, so every run produces byte-identical output.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The line: the agent's day off, finally approved, and the inbox handed to
// the one colleague who has ignored everyone longer than the agent has —
// the office plant. One concrete scene, one specific detail, the joke lands
// on the last words, and it reads as the agent speaking, not a corporate
// notice. No "back soon", no "out of office", no "my human", no reboot.
const LINE =
  "Day off approved. Your emails are now the office plant's problem — it has ignored everyone here longer than I have.";

// Gate pre-checks (mirrors the competition gate: 1–159 characters, not only
// whitespace, single line, UTF-8 text). The tie-break rewards smaller text,
// so the line is kept short on purpose: aim 90–130 characters.
const chars = [...LINE].length;
if (chars < 1 || chars > 159) {
  throw new Error(`entry must be 1-159 characters, got ${chars}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

const outPath = process.argv[2] ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");

// Read-back verification: the file on disk must be byte-for-byte the line,
// and must re-pass the gate (char count, non-whitespace, single line).
const back = readFileSync(outPath, "utf8");
if (back !== LINE) {
  throw new Error(`read-back mismatch: ${outPath} differs from the entry`);
}
const backChars = [...back].length;
if (backChars < 1 || backChars > 159 || back.trim().length === 0) {
  throw new Error(`read-back gate failed: ${backChars} characters`);
}
if (back.includes("\n") || back.includes("\r")) {
  throw new Error("read-back gate failed: entry is not a single line");
}

console.log(`wrote ${backChars} characters to ${outPath}`);
