import { writeFile } from 'fs/promises';

const filesFolder = 'files';
const fileName = 'fresh.txt';
const fileContent = 'I am fresh and young';
const filePath = new URL(`${filesFolder}/${fileName}`, import.meta.url);

const create = async () => {
  try {
    await writeFile(filePath, fileContent, { flag: 'wx' });
  } catch {
    throw new Error('FS operation failed');
  }
};

await create();
