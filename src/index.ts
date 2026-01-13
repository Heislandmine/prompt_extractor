import { readFileSync } from 'fs';

const extractPngSig = (path: string) => {
  const buffer = readFileSync(path);

  return buffer.subarray(0, 8);
};

const arg = process.argv[2];

if (arg) {
  console.log(extractPngSig(arg).toString('hex'));
}
