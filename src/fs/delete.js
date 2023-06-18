import { rm as removeFile } from 'fs/promises';

const filesFolder = 'files';
const fileToRemove = 'fileToRemove.txt';
const fileToRemovePath = new URL(
  `${filesFolder}/${fileToRemove}`,
  import.meta.url
);

const remove = async () => {
  try {
    await removeFile(fileToRemovePath);
  } catch {
    throw new Error('FS operation failed');
  }
};

await remove();
