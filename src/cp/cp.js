import { fork } from 'child_process';

const filesFolder = 'files';
const fileChildProcess = 'script.js';
const fileChildProcessPath = new URL(
  `${filesFolder}/${fileChildProcess}`,
  import.meta.url
);

const spawnChildProcess = async (args) => {
  fork(fileChildProcessPath, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['arg1', 'arg2', 'arg3']);
