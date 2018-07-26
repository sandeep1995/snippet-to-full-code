const { getFileContent, writeToDisk, compile } = require('./utils');
const parser = require('./parser');

const snippetToCode = (options) => {
  const {
    templateFilePath,
    snippetsFilePath,
    directoryPath
  } = options;

  directory = directoryPath || process.cwd();
  
  const templateContent = getFileContent(templateFilePath);
  const snippetsContent = getFileContent(snippetsFilePath);

  const { blocks, extras } = parser.parseSnippet(snippetsContent);

  Object.keys(blocks).forEach((key, i) => {
    let code = compile(templateContent, blocks, key);

    Object.keys(extras).forEach((eKey,j) => {

      let finalCode = compile(code, extras, eKey);
      let fileName = `code-${i}-${j}.js`;

      writeToDisk(finalCode, directory, fileName);
    });
  });
};

module.exports = snippetToCode;