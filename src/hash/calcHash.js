import { readFile } from 'fs/promises';
import { createHash } from 'crypto';

const filesFolder = 'files';
const fileToHash = 'fileToCalculateHashFor.txt';
const fileToHashPath = new URL(`${filesFolder}/${fileToHash}`, import.meta.url);

const calculateHash = async () => {
  try {
    const data = await readFile(fileToHashPath);
    const hash = createHash('sha256').update(data);
    const hex = hash.digest('hex');
    console.log(hex);
  } catch {
    throw new Error('FS operation failed');
  }
};

await calculateHash();
