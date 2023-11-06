import { exec } from "./exec";

export const init = () => {
  // Install git
  exec("git init");

  // Install package.json, tsconfig.json and typescript
  exec("pnpm init");
  exec("pnpm add -D typescript @types/node");
  // exec("pnpm tsc --init");
  exec(
    `curl https://raw.githubusercontent.com/moisatedy97/tedy-cli/main/tsconfig.json > ./tsconfig.json`
  );

  // Create index.ts
  exec("mkdir src");
  exec("touch src/index.ts");

  // Create gitignore
  exec("touch .gitignore");
  exec('echo "node_modules" > .gitignore');
  exec('echo "dist" > .gitignore');

  // Copy .npmignore
  exec('echo "src" > .npmignore');
  exec('echo ".changeset" > .npmignore');
  exec('echo ".github" > .npmignore');
  exec('echo ".prettierrc" > .npmignore');
  exec('echo "pnpm-lock.yaml" > .npmignore');
  exec('echo "tsconfig.json" > .npmignore');

  // Copy prettierrc
  exec(
    `curl https://raw.githubusercontent.com/moisatedy97/tedy-cli/main/.prettierrc > ./prettierrc`
  );

  // Create github workflows
  exec("mkdir .github");
  exec("mkdir .github/workflows");
  exec(
    `curl https://raw.githubusercontent.com/moisatedy97/tedy-cli/main/.github/workflows/main.yml > .github/workflows/main.yml`
  );
  exec(
    `curl https://raw.githubusercontent.com/moisatedy97/tedy-cli/main/.github/workflows/publish.yml > .github/workflows/publish.yml`
  );

  // Edit package.json
  exec("npm pkg set 'main'='dist/index.js'");
  exec("npm pkg set 'modules'='dist/index.mjs'");
  exec("npm pkg set 'types'='dist/index.d.ts'");
  exec("npm pkg set 'license'='MIT'");
  exec("npm pkg set 'scripts.build'='tsup src/index.ts --format cjs,esm --dts'");
  exec("npm pkg set 'scripts.lint'='tsc'");
  exec("npm pkg set 'scripts.ci'='pnpm run lint && pnpm run build'");
  exec("npm pkg set 'scripts.release'='pnpm run lint && pnpm run build && pnpm changeset publish'");

  // Install changesets
  exec("pnpm add -D @changesets/cli");
  exec("pnpm changeset init");
  exec("npm pkg set 'version'='0.0.1'");

  // exec("Powershell.exe New-Item -Path newFile.json -ItemType File");
  // exec(
  //   'Powershell.exe Copy-Item -Path "./node_modules/tedy-cli/tsconfig.json" -Destination "./tsconfig.json"'
  // );
};
