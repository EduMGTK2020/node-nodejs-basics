import { readdir, stat, mkdir, copyFile } from "fs/promises";

const filesFolder = "files";
const filesCopyFolder = "files_copy";

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

const copy = async () => {
  const filesOriginPath = getAbsolutePath(filesFolder);
  const filesCopyPath = getAbsolutePath(filesCopyFolder);

  if (!(await pathExist(filesOriginPath)) || (await pathExist(filesCopyPath))) {
    throw new Error("FS operation failed");
  } else {
    const [filesNameToCopy] = await Promise.all([
      readdir(filesOriginPath),
      mkdir(filesCopyPath),
    ]);
    const copyPromises = filesNameToCopy.map((name) => {
      const fileFrom = getAbsolutePath(`${filesOriginPath}/${name}`);
      const fileTo = getAbsolutePath(`${filesCopyPath}/${name}`);
      return copyFile(fileFrom, fileTo);
    });
    await Promise.all(copyPromises);
  }
};

await copy();
