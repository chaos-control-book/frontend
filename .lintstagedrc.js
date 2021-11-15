module.exports = {
  'src/**/*.[jt]s?(x)': (filenames) =>
    filenames.length > 10
      ? 'eslint src --fix --color'
      : `eslint ${filenames.join(' ')} --fix --color`,
  'src/**/*.ts?(x)': () => 'tsc --noEmit --pretty -p tsconfig.json',
};
