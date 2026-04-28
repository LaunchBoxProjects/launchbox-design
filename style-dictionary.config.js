const StyleDictionary = require('style-dictionary');
const fs = require('fs');

let rawTokens = fs.readFileSync('./tokens/tokens.json', 'utf8');

rawTokens = rawTokens.replace(/\{color\./g, '{Primitives.color.');
rawTokens = rawTokens.replace(/\{font\./g, '{Primitives.font.');

fs.writeFileSync('./tokens/tokens.fixed.json', rawTokens);

module.exports = {
  source: ['tokens/tokens.fixed.json'],
  expand: {
    typesMap: {
      typography: true
    }
  },
  platforms: {
    css: {
      transformGroup: 'css',
      prefix: 'lb',
      buildPath: 'src/styles/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
          options: {
            outputReferences: true
          }
        }
      ]
    },
    js: {
      transformGroup: 'js',
      buildPath: 'src/styles/',
      files: [
        {
          destination: 'tokens.js',
          format: 'javascript/es6'
        }
      ]
    }
  }
}