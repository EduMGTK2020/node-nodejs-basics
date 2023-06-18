import { readdir } from 'fs/promises';

const filesFolder = 'files';
const fileFolderPath = new URL(filesFolder, import.meta.url);

const list = async () => {
  try {
    const listFiles = await readdir(fileFolderPath);
    console.log(listFiles);
  } catch {
    throw new Error('FS operation failed');
  }
};

await list();
