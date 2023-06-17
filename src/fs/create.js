import path from 'path';
import { writeFile } from 'fs/promises';

const fileName = 'fresh.txt';
const fileContent = 'I am fresh and young';
const filesFolder = 'src/fs/files';

const create = async () => {
    const filePath = path.resolve(filesFolder, fileName);
    try {
        await writeFile(filePath, fileContent, { flag: 'wx' });  
    } 
    catch(err) {
        throw new Error('FS operation failed');
    }
};

await create();