import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';

const getAbsolutePath = (path) => {
  return new URL(path, import.meta.url);
};

const filesFolder = 'files';
const file = 'fileToWrite.txt';
const filePath = getAbsolutePath(`${filesFolder}/${file}`);

const write = async () => {
  const writeStream = createWriteStream(filePath);
  await pipeline(process.stdin, writeStream);
};

await write();
