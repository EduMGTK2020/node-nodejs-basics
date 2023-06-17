import { readFile } from "fs/promises";

const getAbsolutePath = (path) => {
  return new URL(path, import.meta.url);
};

const filesFolder = "files";
const fileName = "fileToRead.txt";
const filePath = getAbsolutePath(`${filesFolder}/${fileName}`);
const encoding = "utf-8";

const read = async () => {
  try {
    const fileData = await readFile(filePath, encoding);
    console.log(fileData);
  } catch {
    throw new Error("FS operation failed");
  }
};

await read();
