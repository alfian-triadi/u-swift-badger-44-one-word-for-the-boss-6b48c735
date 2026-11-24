import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "Meetingasaurus";

if (WORD.length < 1 || WORD.length > 30 || /\s/.test(WORD)) {
  throw new Error("WORD must be a single word of 1..30 characters with no whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
