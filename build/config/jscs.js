module.exports = {
  src: [ 'src/js/**/*.js' ],
  options: {
    excludeFiles: [
      'src/js/intro.js',
      'src/js/outro.js',
      'src/js/vendor/**/*.js'
    ],
    requireCurlyBraces: [
      'if',
      'else',
      'for',
      'while',
      'do',
      'try',
      'catch'
    ],
    requireSpaceAfterKeywords: [
      'if',
      'else',
      'for',
      'while',
      'do',
      'switch',
      'return',
      'try',
      'catch'
    ],
    requireSpaceBeforeBlockStatements: true,
    requireParenthesesAroundIIFE: true,
    requireSpacesInConditionalExpression: true,
    requireSpacesInFunctionExpression: {
      beforeOpeningCurlyBrace: true
    },
    // TODO: add back when node-jscs gets patched to support object-literal
    // shorthand methods
    disallowSpacesInFunctionExpression: {
      beforeOpeningRoundBrace: true
    },
    requireSpacesInAnonymousFunctionExpression: {
      beforeOpeningCurlyBrace: true
    },
    // TODO: add back when node-jscs gets patched to support object-literal
    // shorthand methods
    disallowSpacesInAnonymousFunctionExpression: {
      beforeOpeningRoundBrace: true
    },
    requireSpacesInNamedFunctionExpression: {
      beforeOpeningCurlyBrace: true
    },
    disallowSpacesInNamedFunctionExpression: {
      beforeOpeningRoundBrace: true
    },
    requireSpacesInFunctionDeclaration: {
      beforeOpeningCurlyBrace: true
    },
    disallowSpacesInFunctionDeclaration: {
      beforeOpeningRoundBrace: true
    },
    // TODO: this breaks multiple `export let foo = 'bar';`
    requireMultipleVarDecl: true,
    requireBlocksOnNewline: true,
    // except for `catch`
    disallowEmptyBlocks: true,
    requireSpacesInsideObjectBrackets: 'all',
    requireSpacesInsideArrayBrackets: 'all',
    // TODO: put back in after jscs fixes this
    disallowSpaceAfterObjectKeys: true,
    requireOperatorBeforeLineBreak: [
      '?',
      '=',
      '+',
      '-',
      '/',
      '*',
      '==',
      '===',
      '!=',
      '!==',
      '>',
      '>=',
      '<',
      '<='
    ],
    disallowSpaceBeforePostfixUnaryOperators: true,
    requireSpacesInConditionalExpression: true,
    requireSpaceAfterBinaryOperators: true,
    disallowSpaceAfterPrefixUnaryOperators: true,
    requireSpacesInConditionalExpression: true,
    disallowSpaceAfterPrefixUnaryOperators: [
      '++',
      '--',
      '+',
      '-'
    ],
    disallowSpaceBeforePostfixUnaryOperators: [
      '++',
      '--'
    ],
    requireSpaceBeforeBinaryOperators: [
      '+',
      '-',
      '\/',
      '*',
      '=',
      '==',
      '===',
      '!=',
      '!==',
      '>',
      '>=',
      '<',
      '<='
    ],
    requireSpaceAfterBinaryOperators: [
      '+',
      '-',
      '\/',
      '*',
      '=',
      '==',
      '===',
      '!=',
      '!==',
      '>',
      '>=',
      '<',
      '<='
    ],
    disallowKeywords: [
      'with'
    ],
    disallowMultipleLineStrings: true,
    disallowMultipleLineBreaks: true,
    disallowKeywordsOnNewLine: [
      'else',
      'catch'
    ],
    requireLineFeedAtFileEnd: true,
    validateLineBreaks: 'LF',
    validateQuoteMarks: '\'',
    validateIndentation: 2,
    disallowMixedSpacesAndTabs: true,
    disallowTrailingWhitespace: true,
    disallowTrailingComma: true,
    requireCapitalizedConstructors: true,
    requireDotNotation: true,

    // custom rules
    additionalRules: [ 'build/stylerules/*.js' ],
    disallowNoVarOnFirstLine: 'all',
  }
};
