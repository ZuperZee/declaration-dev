const ts = require("typescript");
const path = require("path");

const max_depth = 999;
const entryFile = "./types/global.d.ts";
const definitionFiles = getAllTypeDefinitions(entryFile, max_depth);
definitionFiles.forEach((typeDef) => {
  console.log(typeDef);
});

function getAllTypeDefinitions(entryFile, max_depth) {
  const rootFile = path.resolve(entryFile);
  const program = ts.createProgram([rootFile], { allowJs: true });
  const checker = program.getTypeChecker();
  const visitedFiles = new Set();
  const definitionFiles = new Set();

  let queue = program.getSourceFiles().filter((sourceFile) => {
    return sourceFile.fileName === rootFile;
  });

  // Add the root files to the visited and definition files
  for (const sourceFile of queue) {
    visitedFiles.add(sourceFile.fileName);
    definitionFiles.add(sourceFile.fileName);
  }

  // Used to keep track of the depth
  let nextQueue = [];
  let currentDepth = 1;

  while (queue.length > 0 || nextQueue.length > 0) {
    if (queue.length === 0) {
      if (currentDepth >= max_depth) {
        break;
      }
      queue = nextQueue;
      nextQueue = [];
      currentDepth += 1;
    }
    const sourceFile = queue.shift();

    ts.forEachChild(sourceFile, (node) => {
      if (ts.isImportDeclaration(node) && node.importClause) {
        const symbol = checker.getSymbolAtLocation(node.moduleSpecifier);
        if (symbol && symbol.declarations) {
          symbol.declarations.forEach((declaration) => {
            const sourceFile = declaration.getSourceFile();
            const filePath = sourceFile.fileName;
            if (filePath.endsWith(".d.ts") && !visitedFiles.has(filePath)) {
              visitedFiles.add(filePath);
              definitionFiles.add(filePath);
              nextQueue.push(sourceFile);
            }
          });
        }
      }
    });
  }

  return definitionFiles;
}
