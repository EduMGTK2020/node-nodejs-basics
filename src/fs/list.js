import { readdir } from "fs/promises";

const getAbsolutePath = (path) => {
  return new URL(path, import.meta.url);
};

const filesFolder = "files";
const fileFolderPath = getAbsolutePath(filesFolder);

const list = async () => {
  try {
    const listFiles = await readdir(fileFolderPath);
    console.log(listFiles);
  } catch {
    throw new Error("FS operation failed");
  }
};

await list();
