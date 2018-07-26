const {
  SNIPPET_CASE_BLOCK_REGEX,
	SNIPPET_EXTRA_BLOCK_REGEX,
	CASE_BLOCK_START,
	EXTRA_BLOCK_START,
	TOKEN_KEY,
	TOKEN_ID,
  TOKEN_DESC,
  TOKEN_AUTHOR
} = require('./constants');

const { trimWhiteSpace, removeStrFromFirst } = require('../utils');

const parser = {

   parseEachToken (token, replacer, where) {
    if (token.includes(replacer[0])) {
      where[replacer[1]] = trimWhiteSpace(removeStrFromFirst(token, replacer[0]));
    }
  },

   parseHeaderLine(headerLine) {
    let tokens = headerLine.split(',');
    let parsedVal = {};
    tokens.forEach(token => {
      token = trimWhiteSpace(token);
      this.parseEachToken(token, TOKEN_KEY, parsedVal);
      this.parseEachToken(token, TOKEN_ID, parsedVal);
      this.parseEachToken(token, TOKEN_DESC, parsedVal);
      this.parseEachToken(token, TOKEN_AUTHOR, parsedVal);
    });
    return parsedVal;
  },

  tokenCreator(snippetsContent, matcher){
    return snippetsContent.match(matcher).map(match => match.split('\n'));
  },

  parseBlock(caseMatches, header) {
    const parsedBlocks = caseMatches.reduce((obj, val, i) => {

      let headerLine = removeStrFromFirst(val[0], header);

      val.pop();
      val.shift();
      
      obj[i] = {};
      obj[i]['meta'] = this.parseHeaderLine(headerLine);
      obj[i]['snippet'] = val.join('\n');

      return obj;
    }, {});
    return parsedBlocks;
  },

  parseSnippets(snippetsContent) {
    let caseBlockTokens = this.tokenCreator(snippetsContent, SNIPPET_CASE_BLOCK_REGEX);
    let extraBlockTokens = this.tokenCreator(snippetsContent, SNIPPET_EXTRA_BLOCK_REGEX);
    let blocks = this.parseBlock(caseBlockTokens, CASE_BLOCK_START);
    let extras = this.parseBlock(extraBlockTokens, EXTRA_BLOCK_START);
    return {
      blocks, extras
    }
  }
  
};

module.exports = parser;