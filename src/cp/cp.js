import { fork } from 'child_process';

const getAbsolutePath = (path) => {
  return new URL(path, import.meta.url);
};

const filesFolder = 'files';
const fileChildProcess = 'script.js';
const fileChildProcessPath = getAbsolutePath(
  `${filesFolder}/${fileChildProcess}`
);

const spawnChildProcess = async (args) => {
  fork(fileChildProcessPath, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['arg1', 'arg2', 'arg3']);
