import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const questionsRoot = path.join(process.cwd(), "Questions");

if (!fs.existsSync(questionsRoot)) {
  console.warn("Questions/ folder not found; starting without local exam data.");
  process.exit(0);
}

execSync("npm run prepare:data", { stdio: "inherit" });