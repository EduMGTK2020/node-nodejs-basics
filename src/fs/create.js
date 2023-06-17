import { writeFile } from "fs/promises";

const fileName = "fresh.txt";
const fileContent = "I am fresh and young";
const filesFolder = "files";

const create = async () => {
  const filePath = new URL(`${filesFolder}/${fileName}`, import.meta.url);
  try {
    await writeFile(filePath, fileContent, { flag: "wx" });
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await create();
