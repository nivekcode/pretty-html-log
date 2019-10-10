import chalk from 'chalk';
import { highlight } from '../lib/pretty-html-log';
import { THEMES } from '../lib/themes/themes';

export const printHelp = () => {
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
};
