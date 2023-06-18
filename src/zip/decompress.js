import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { createGunzip } from 'zlib';

const getAbsolutePath = (path) => {
  return new URL(path, import.meta.url);
};

const filesFolder = 'files';
const fileToDecompess = 'fileToCompress.txt';
const fileArchive = 'archive.gz';
const fileToDecompessPath = getAbsolutePath(
  `${filesFolder}/${fileToDecompess}`
);
const fileArchivePath = getAbsolutePath(`${filesFolder}/${fileArchive}`);

const decompress = async () => {
  const readStream = createReadStream(fileArchivePath);
  const writeStream = createWriteStream(fileToDecompessPath);
  await pipeline(readStream, createGunzip(), writeStream);
};

await decompress();
