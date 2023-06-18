import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';

const filesFolder = 'files';
const file = 'fileToWrite.txt';
const filePath = new URL(`${filesFolder}/${file}`, import.meta.url);

const write = async () => {
  const writeStream = createWriteStream(filePath);
  await pipeline(process.stdin, writeStream);
};

await write();
