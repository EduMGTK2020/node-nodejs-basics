import { Transform } from 'stream';
import { pipeline } from 'stream/promises';

const transform = async () => {
  const transformStream = new Transform({
    transform(data, _, cb) {
      const reverseString = data.toString().trim().split('').reverse().join('')+'\n\n';
      cb(null, reverseString);
    },
  });
  await pipeline(process.stdin, transformStream, process.stdout);
};

await transform();
