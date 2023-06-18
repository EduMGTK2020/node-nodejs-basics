import { createReadStream } from 'fs';
import { pipeline } from 'stream/promises';

const filesFolder = 'files';
const file = 'fileToRead.txt';
const filePath = new URL(`${filesFolder}/${file}`, import.meta.url);

const read = async () => {
  const readStream = createReadStream(filePath);
  await pipeline(readStream, process.stdout);
};

await read();
