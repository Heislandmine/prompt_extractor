const extractPngSig = (path: string) => {
  console.log(path);
};

const arg = process.argv[2];

if (arg) {
  extractPngSig(arg);
}
