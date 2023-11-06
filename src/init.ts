import { exec } from "./exec";

export const init = () => {
  exec("git init");
  exec("pnpm init");
  exec("pnpm add -D typescript @types/node");
  exec("pnpm tsc --init");
  exec("mkdir src");
  exec("touch src/index.ts");
  exec('echo "console.log("Hello world!")" > src/index.ts');
  exec('echo "node_modules" > .gitignore');
  exec('echo "dist" > .gitignore');
};
