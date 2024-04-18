/** @type {import("prettier").Config} */
export default {
  trailingComma: 'all',
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  printWidth: 80,
  quoteProps: 'as-needed',
  jsxSingleQuote: true,
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  endOfLine: 'lf',
  proseWrap: 'preserve',
  htmlWhitespaceSensitivity: 'css',
  singleAttributePerLine: true,
  overrides: [{ files: '**/*.module.css', options: { printWidth: 160 } }],
};
