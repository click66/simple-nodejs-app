const fs = require('fs');

function parseCsv(filePath, hasHeader) {
  let lines = fs.readFileSync(filePath, 'utf8').toString().split('\n').filter((r) => r);
  let headings = [];

  if (hasHeader) {
    headings = lines[0].toString().split(',');
    lines = lines.slice(1);
  }

  return lines.map((lineArray) => {
    return lineArray.toString().split(',').reduce((line, currentValue, currentIndex) => {
      line[typeof headings[currentIndex] !== 'undefined' ? headings[currentIndex] : currentIndex] = currentValue;
      return line;
    }, {});
  });
}

module.exports = parseCsv;
