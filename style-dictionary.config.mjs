import StyleDictionary from 'style-dictionary';
import fs from 'fs';

let rawTokens = fs.readFileSync('./tokens/tokens.json', 'utf8');
rawTokens = rawTokens.replace(/\{color\./g, '{Primitives.color.');
rawTokens = rawTokens.replace(/\{font\./g, '{Primitives.font.');
fs.writeFileSync('./tokens/tokens.fixed.json', rawTokens);

const sd = new StyleDictionary({
  source: ['tokens/tokens.fixed.json'],
  expand: {
    typesMap: {
      typography: true
    }
  },
  hooks: {
    transforms: {
      'size/px': {
        type: 'value',
        filter: (token) => token.$type === 'fontSizes',
        transform: (token) => `${token.$value}px`
      }
    },
    transformGroups: {
      'css/extended': [
        'attribute/cti',
        'name/kebab',
        'size/rem',
        'color/css',
        'fontFamily/css',
        'size/px',
      ]
    }
  },
  platforms: {
    css: {
      transformGroup: 'css/extended',
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
});

await sd.buildAllPlatforms();