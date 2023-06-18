import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { createGzip } from 'zlib';

const getAbsolutePath = (path) => {
  return new URL(path, import.meta.url);
};

const filesFolder = 'files';
const fileToCompess = 'fileToCompress.txt';
const fileArchive = 'archive.gz';
const fileToCompessPath = getAbsolutePath(`${filesFolder}/${fileToCompess}`);
const fileArchivePath = getAbsolutePath(`${filesFolder}/${fileArchive}`);

const compress = async () => {
  const readStream = createReadStream(fileToCompessPath);
  const writeStream = createWriteStream(fileArchivePath);
  await pipeline(readStream, createGzip(), writeStream);
};

await compress();
