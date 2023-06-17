import { rm as removeFile } from "fs/promises";

const getAbsolutePath = (path) => {
  return new URL(path, import.meta.url);
};

const filesFolder = "files";
const fileToRemove = "fileToRemove.txt";
const fileToRemovePath = getAbsolutePath(`${filesFolder}/${fileToRemove}`);

const remove = async () => {
  try {
    await removeFile(fileToRemovePath);
  } catch {
    throw new Error("FS operation failed");
  }
};

await remove();
