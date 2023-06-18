import { readFile } from 'fs/promises';

const filesFolder = 'files';
const fileName = 'fileToRead.txt';
const filePath = new URL(`${filesFolder}/${fileName}`, import.meta.url);

const read = async () => {
  try {
    const fileData = await readFile(filePath, 'utf-8');
    console.log(fileData);
  } catch {
    throw new Error('FS operation failed');
  }
};

await read();
