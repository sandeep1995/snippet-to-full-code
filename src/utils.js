const fs = require('fs-extra');
const path = require('path');

const getFileContent = (filePath) => fs.readFileSync(filePath).toString();

const writeFile = (filePath, content, cb) => {
  fs.writeFile(filePath, content, (err) => cb(err))
};

const removeStrFromFirst = (from, what) => from.slice(what.length);

const trimWhiteSpace = (str) => str.replace(/^\s+|\s+$/g, '');

const replaceAll = (str, what, replacement) => str.replace(new RegExp(what, 'g'), replacement);

const placeHolder = (name) => '\/\/{' + name +'}';

const compile = (template, blocks, key ) => {
  let { meta, snippet } = blocks[key];
    let holder = placeHolder(meta.key);
    return replaceAll(template, holder, snippet);
}

const writeToDisk = (content, directory, fileName) => {
  let nameOfFile = path.resolve(directory, fileName);
  fs.ensureDirSync(path.dirname(nameOfFile));
  writeFile(nameOfFile, content, (err) => {
    if (err) {
      console.error('Not able to write to disk', err);
    }
  });
}

module.exports = {
  getFileContent,
  removeStrFromFirst,
  trimWhiteSpace,
  replaceAll,
  placeHolder,
  compile,
  writeFile,
  writeToDisk
}