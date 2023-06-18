import { createReadStream } from 'fs';
import { pipeline } from 'stream/promises';

const getAbsolutePath = (path) => {
  return new URL(path, import.meta.url);
};

const filesFolder = 'files';
const file = 'fileToRead.txt';
const filePath = getAbsolutePath(`${filesFolder}/${file}`);

const read = async () => {
  const readStream = createReadStream(filePath);
  await pipeline(readStream, process.stdout);
};

await read();
