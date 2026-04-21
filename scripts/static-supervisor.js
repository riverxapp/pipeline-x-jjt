import { execSync } from "child_process";
import fs from "fs";
import "./static-server.js";
import { startGitPoll } from "./git-poll.js";

const BRANCH = process.env.PREVIEW_BRANCH || "main";
const REPO_URL = process.env.REPO_URL;

if (!REPO_URL) {
  console.error("[supervisor] REPO_URL env var is required");
  process.exit(1);
}

process.chdir("/app"); // 🔑 FORCE cwd

console.log("[supervisor] ensuring git repo");

if (!fs.existsSync(".git")) {
  execSync("git init", { stdio: "inherit", cwd: "/app" });
  execSync(`git remote add origin ${REPO_URL}`, { stdio: "inherit", cwd: "/app" });
} else {
  // Ensure origin always matches provided repo URL
  execSync(`git remote set-url origin ${REPO_URL}`, { stdio: "inherit", cwd: "/app" });
}

// align working tree to target branch
execSync("git config --global --add safe.directory /app", { stdio: "inherit" });
execSync("git fetch origin --depth=1", { stdio: "inherit", cwd: "/app" });
execSync(`git reset --hard origin/${BRANCH}`, { stdio: "inherit", cwd: "/app" });
execSync("git clean -fd", { stdio: "inherit", cwd: "/app" });

console.log("[supervisor] static preview running");

// 🔑 start polling ONLY after git is ready
startGitPoll();
