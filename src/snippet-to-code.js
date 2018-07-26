const { getFileContent } = require('./utils');
const parser = require('./parser');

const snippetToCode = (templateFilePath, snippetsFilePath) => {
  const templateContent = getFileContent(templateFilePath);
  const snippetsContent = getFileContent(snippetsFilePath);
  parser.parseSnippets(snippetsContent);
};

module.exports = snippetToCode;