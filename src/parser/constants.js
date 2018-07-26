const SNIPPET_CASE_BLOCK_REGEX = /\/\/case-block.*\n((?!\n).*$\n)*\/\/end-case-block/gim;
const SNIPPET_EXTRA_BLOCK_REGEX = /\/\/extra-block.*\n((?!\n).*$\n)*\/\/end-extra-block/gim;

const CASE_BLOCK_START = '/\/\case-block ';
const EXTRA_BLOCK_START = '/\/\extra-block ';

const TOKEN_KEY = ['@key ', 'key'];
const TOKEN_ID = ['@id ', 'id'];
const TOKEN_DESC = ['@desc ', 'description'];
const TOKEN_AUTHOR = ['@author', 'author'];

module.exports = {
	SNIPPET_CASE_BLOCK_REGEX,
	SNIPPET_EXTRA_BLOCK_REGEX,
	CASE_BLOCK_START,
	EXTRA_BLOCK_START,
	TOKEN_KEY,
	TOKEN_ID,
	TOKEN_DESC,
	TOKEN_AUTHOR
}
