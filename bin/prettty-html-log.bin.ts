#!/usr/bin/env node
import * as packgeJSON from '../package.json';
import chalk from 'chalk';
import commander from 'commander';
import { highlight } from '../lib/pretty-html-log';
import { Theme } from '../lib/themes/theme.model';
import { THEMES } from '../lib/themes/themes';

const phlLog = (message: string) =>
  console.log(chalk.bgCyan.black('[pretty-html-log]:'), message);

const findTheme = (theme: string): Theme => {
  switch (theme) {
    case 'material':
      return THEMES.MATERIAL;
    case 'dracula':
      return THEMES.DRACULA;
    case 'vscode':
      return THEMES.VSCODE;
    default:
      phlLog(
        chalk.hex('#FFA500')(
          `"${theme}" is not a known theme - please pass in a valid value (material, vscode or dracula)`
        )
      );
      phlLog(
        chalk.hex('#FFA500')(
          `will fall back to the default theme which is "darcula"`
        )
      );
      return THEMES.DRACULA;
  }
};

commander.on('--help', function() {
  console.log('');
  console.log(chalk.bold.underline.cyan('Description:'));
  console.log(
    `pretty-html-log is a tool that allows you to highlight and pretty print your html string to console.`
  );

  console.log('');
  console.log(chalk.bold.underline.cyan('Parameters:'));
  console.log(chalk.bold.blue('htmlString'), ' ', chalk.bold.red('(required)'));
  console.log(
    chalk.bold.blue('theme'),
    ' ',
    chalk.bold.green(`(optional) - valid types: dracula, material or vscode`)
  );

  console.log('');

  console.log(chalk.bold.underline.cyan('Examples:'));

  console.log(chalk.cyan('Simple usage: '));
  console.log(chalk.green('Type this command'));
  console.log(
    chalk.italic(
      'pretty-html-log "<html><body><h1 class="foo">Text</h1></body></html>"'
    )
  );
  console.log('');
  console.log(chalk.underline.green('Result:'));
  console.log(highlight('<html><body><h1 class="foo">Text</h1></body></html>'));

  console.log('');

  console.log(chalk.cyan('Usage with a theme of your choice: '));
  console.log(chalk.green('The following commands are equal'));
  console.log(
    chalk.italic(
      'pretty-html-log "<html><body><h1 class="foo">Text</h1></body></html>" -t vscode'
    )
  );
  console.log(
    chalk.italic(
      'pretty-html-log "<html><body><h1 class="foo">Text</h1></body></html>" --theme=vscode'
    )
  );

  console.log('');

  console.log(chalk.underline.green('Result:'));
  console.log(
    highlight(
      '<html><body><h1 class="foo">Text</h1></body></html>',
      THEMES.VSCODE
    )
  );
});

commander
  .version(packgeJSON.version)
  .arguments('<htmlString>')
  .option(
    '-t --theme <string>',
    'specifies the theme which will be used to highlight your htmlString - valid types: dracula, material or vscode'
  )
  .action(function(htmlString: string) {
    const { theme: passedInTheme } = commander;
    const theme = findTheme(passedInTheme);
    console.log(highlight(htmlString, theme));
  })
  .parse(process.argv);
