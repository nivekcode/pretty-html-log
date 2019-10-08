#!/usr/bin/env node
import * as packgeJSON from '../package.json';
import commander from 'commander';
import { highlight } from '../lib/pretty-html-log';
import { printHelp } from './help-menu';
import { findTheme } from './helpers/theme-finder';

commander.on('--help', () => {
  printHelp();
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
