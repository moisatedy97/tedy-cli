import { exec } from "./exec";

export const init = () => {
  // // Install git
  // exec("git init");

  // // Install package.json, tsconfig.json and typescript
  // exec("pnpm init");
  // exec("pnpm add -D typescript @types/node");
  // exec("pnpm tsc --init");

  // // Create index.ts
  // exec("mkdir src");
  // exec("touch src/index.ts");
  // exec('echo "console.log("Hello world!")" > src/index.ts');

  // // Create gitignore
  // exec('echo "node_modules" > .gitignore');
  // exec('echo "dist" > .gitignore');

  exec("echo Hello");
  // exec("Powershell.exe New-Item -Path newFile.json -ItemType File");
  exec(
    'Powershell.exe Copy-Item -Path "./node_modules/tedy-cli/tsconfig.json" -Destination "./tsconfig.json"'
  );
};
