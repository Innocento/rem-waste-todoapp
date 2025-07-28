const fs = require('fs');

function readJSON(filename) {
  if (!fs.existsSync(filename)) return [];
  return JSON.parse(fs.readFileSync(filename));
}

function writeJSON(filename, data) {
  fs.writeFileSync(filename, JSON.stringify(data));
}

module.exports = { readJSON, writeJSON };