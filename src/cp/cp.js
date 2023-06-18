import { fork } from 'child_process';

const filesFolder = 'files';
const fileChildProcess = 'script.js';
const fileChildProcessPath = new URL(
  `${filesFolder}/${fileChildProcess}`,
  import.meta.url
);

const spawnChildProcess = async (args) => {
  // first variant
  const childProcess = fork(fileChildProcessPath, args, { silent: true });
  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);

  // or the second implementation in one line if you don't like the first one :)
  // fork(fileChildProcessPath, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['arg1', 'arg2', 'arg3']);
