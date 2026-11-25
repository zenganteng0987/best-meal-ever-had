import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One sentence about the best meal I ever had: my grandmother's rendang
// in Padang, soft beef and rain on the tin roof. The gate allows at most
// 200 characters, so the sentence is kept short and concrete on purpose.
const entry =
  "The best meal I ever had was my grandmother's rendang at her kitchen table in Padang, the beef so soft it fell apart on my tongue while rain drummed on the tin roof outside.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
