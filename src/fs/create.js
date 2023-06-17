import { writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const fileName = 'fresh.txt';
const fileContent = 'I am fresh and young';
const fileFolder = 'files';

const create = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = path.resolve(`${__dirname}/${fileFolder}/${fileName}`);
  
    try {
        await writeFile(filePath, fileContent, { flag: 'wx' });  
    } 
    catch(err) {
        throw Error('FS operation failed');
    }
};

await create();