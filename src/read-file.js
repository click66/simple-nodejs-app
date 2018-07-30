const fs = require('fs');

/**
 * Read a file and return the contents as a string
 *
 * @param {String} filePath
 * @returns {String}
 */
function readFile(filePath) {
  return fs.readFileSync(filePath, 'utf8').toString();
}

module.exports = readFile;
