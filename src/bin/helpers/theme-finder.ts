import { Theme } from '../../lib/themes/theme.model';
import { THEMES } from '../../lib/themes/themes';
import chalk from 'chalk';
import { phlLog } from './logger';

export const findTheme = (theme: string = 'dracula'): Theme => {
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
