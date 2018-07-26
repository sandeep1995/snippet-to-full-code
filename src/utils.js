const fs = require('fs-extra');

const getFileContent = (filePath) => fs.readFileSync(filePath).toString();

const removeStrFromFirst = (from, what) => from.slice(what.length);

const trimWhiteSpace = (str) => str.replace(/^\s+|\s+$/g, '');

module.exports = {
  getFileContent,
  removeStrFromFirst,
  trimWhiteSpace
}