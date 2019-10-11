const chalk = jest.genMockFromModule<any>('chalk');

chalk.hex = (hexcode: string) => (value: string) =>
  value === '<' ? 'Opening tag' + value : value;

chalk.bgCyan = {
  black: jest.fn()
};

module.exports = chalk;
