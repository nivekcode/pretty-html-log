import chalk from 'chalk';

export const phlLog = (message: string) =>
  console.log(chalk.bgCyan.black('[pretty-html-log]:'), message);
