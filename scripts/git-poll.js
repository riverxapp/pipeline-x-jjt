import { exec } from "child_process";
import { triggerReload } from "./static-server.js";

process.chdir("/app"); // 🔑 FORCE correct git root

const BRANCH = process.env.PREVIEW_BRANCH || "main";
let lastSha = null;

function run(cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, { cwd: "/app" }, (err, stdout) => {
      if (err) return reject(err.message);
      resolve(stdout.trim());
    });
  });
}

export async function startGitPoll() {
  console.log("[git-poll] started");

  // establish baseline SHA to avoid double reload on boot
  try {
    await run("git fetch --depth=1 origin");
    lastSha = await run(`git rev-parse origin/${BRANCH}`);
  } catch (e) {
    console.error("[git-poll] initial fetch failed", e);
  }

  async function poll() {
    try {
      await run("git fetch --depth=1 origin");
      const sha = await run(`git rev-parse origin/${BRANCH}`);

      if (sha !== lastSha) {
        console.log("[git-poll] update detected");
        await run(`git reset --hard origin/${BRANCH}`);
        lastSha = sha;
        triggerReload();
      }
    } catch (e) {
      console.error("[git-poll]", e);
    }

    setTimeout(poll, 2000);
  }

  poll();
}
