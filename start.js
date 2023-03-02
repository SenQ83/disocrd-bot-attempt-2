const { spawn } = require('child_process');
const child = spawn('node', ['index.js']);

child.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

child.stderr.on('data', (data) => {
  console.error(`stderr:
