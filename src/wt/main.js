import { cpus } from 'os';
import { Worker } from 'worker_threads';

const workerFile = 'worker.js';
const workerPath = new URL(workerFile, import.meta.url);

const workerStatusResolved = 'resolved';
const workerStatusError = 'error';

const workersStartNumber = 10;

const workerNthFibonacci = (data) =>
  new Promise((resolve) => {
    const worker = new Worker(workerPath, { workerData: data });

    worker.on('message', (res) =>
      resolve({ status: workerStatusResolved, data: res })
    );

    worker.on('error', () =>
      resolve({ status: workerStatusError, data: null })
    );
  });

const performCalculations = async () => {
  const workers = new Array(cpus().length);
  for (let i = 0; i < cpus().length; i++) {
    workers[i] = workerNthFibonacci(workersStartNumber + i);
  }
  const result = await Promise.all(workers);
  console.log(result);
};

await performCalculations();
