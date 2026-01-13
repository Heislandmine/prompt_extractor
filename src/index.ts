import { readFileSync } from 'fs';

const extractPngSig = (path: string) => {
  const buffer = readFileSync(path);

  return buffer.subarray(0, 8);
};

/**
 * バイト列を1バイトずつスペースで区切られた文字列に変換する。
 * @param buffer 変換元のバイト列
 * @returns
 */
const bytesToSpacedHexString = (buffer: Buffer<ArrayBuffer>): string => {
  const arr = Array.from(buffer); // Buffer<ArrayBuffer>のままだと.mapで文字列の配列を作れないのでArrayに変換する。

  return arr.map((e) => e.toString(16).padStart(2, '0').toUpperCase()).join(' ');
};

const arg = process.argv[2];

if (arg) {
  const result = extractPngSig(arg);
  console.log(bytesToSpacedHexString(result));
}
