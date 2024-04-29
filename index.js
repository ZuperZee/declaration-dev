const ts = require("typescript");
const path = require("path");

const max_depth = 999;
const entryFile = "./types/global.d.ts";
const typeDefs = getAllTypeDefinitions(entryFile, max_depth);
typeDefs.forEach((typeDef) => {
  console.log(typeDef);
});

function getAllTypeDefinitions(entryFile, max_depth) {
  const rootFile = path.resolve(entryFile);
  const program = ts.createProgram([rootFile], { allowJs: true });
  const checker = program.getTypeChecker();
  const visitedFiles = new Set();
  const typeDefinitions = new Set();

  function visit(node, depth) {
    if (ts.isImportDeclaration(node) && node.importClause) {
      const symbol = checker.getSymbolAtLocation(node.moduleSpecifier);
      if (symbol && symbol.declarations) {
        symbol.declarations.forEach((declaration) => {
          const sourceFile = declaration.getSourceFile();
          const filePath = sourceFile.fileName;
          if (filePath.endsWith(".d.ts") && !visitedFiles.has(filePath)) {
            visitedFiles.add(filePath);
            typeDefinitions.add(filePath);
            exploreFile(sourceFile, depth + 1);
          }
        });
      }
    }

    ts.forEachChild(node, (n) => visit(n, depth));
  }

  function exploreFile(sourceFile, depth) {
    if (max_depth < depth) {
      return;
    }
    ts.forEachChild(sourceFile, (n) => visit(n, depth + 1));
  }

  const sourceFiles = program.getSourceFiles();
  sourceFiles.forEach((sourceFile) => {
    if (sourceFile.fileName === rootFile) {
      exploreFile(sourceFile, 0);
    }
  });

  return typeDefinitions;
}
