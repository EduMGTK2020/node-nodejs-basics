import { stat, rename as renameFile } from "fs/promises";

const pathExist = async (path) => {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
};

const getAbsolutePath = (path) => {
  return new URL(path, import.meta.url);
};

const filesFolder = "files";
const wrongFile = "wrongFilename.txt";
const properFile = "properFilename.md";

const wrongFilePath = getAbsolutePath(`${filesFolder}/${wrongFile}`);
const properFilePath = getAbsolutePath(`${filesFolder}/${properFile}`);

const rename = async () => {
  if (!(await pathExist(wrongFilePath)) || (await pathExist(properFilePath))) {
    throw new Error("FS operation failed");
  } else {
    await renameFile(wrongFilePath, properFilePath);
  }
};

await rename();
