const path = require('path');

module.exports = {
  entry: './Script.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname),
  },
};