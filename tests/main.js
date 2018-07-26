const path = require('path');
const snippetToCode = require('../src');

const templateFilePath = path.resolve(__dirname, 'samples','title', 'plots', 'line', 'template.js');
const snippetsFilePath = path.resolve(__dirname, 'samples','title', 'tests', 'name', 'key.js');

snippetToCode(templateFilePath, snippetsFilePath);


