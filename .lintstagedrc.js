module.exports = {
  '**/*.[jt]s?(x)': (filenames) => {
    const name = filenames
      .map((file) => file.split(process.cwd())[1])
      .join(' --file ');
    return `next lint --fix --file ${name}`;
  },
};
