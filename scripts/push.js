const { exec } = require('child_process');
function runCommand(cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        reject(stderr || error.message);
      } else {
        resolve(stdout);
      }
    });
  });
}

async function gitCommitPush() {
  const commitMsg = "update note";  // 这里写你的固定提交信息
  try {
    console.log('Adding files...');
    await runCommand('git add .');

    console.log(`Committing with message: "${commitMsg}"`);
    await runCommand(`git commit -m "${commitMsg}"`);

    console.log('Pushing to remote...');
    const pushOutput = await runCommand('git push');
    console.log(pushOutput);

    console.log('Done!');
  } catch (err) {
    console.error('Error:', err);
  }
}


gitCommitPush();
