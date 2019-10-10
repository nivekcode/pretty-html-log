import { findTheme } from './theme-finder';
import { MATERIAL_THEME } from '../../lib/themes/material';
import { VSCODE_THEME } from '../../lib/themes/vscode';
import { DRACULA_THEME } from '../../lib/themes/dracula';
import { phlLog } from './logger';
import chalk from 'chalk';

jest.mock('./logger');

describe('Theme finder', () => {
  it('should return the material theme', () => {
    expect(findTheme('material')).toEqual(MATERIAL_THEME);
  });

  it('should return the vscode theme', () => {
    expect(findTheme('vscode')).toEqual(VSCODE_THEME);
  });

  it('should return the darcula theme', () => {
    expect(findTheme('dracula')).toEqual(DRACULA_THEME);
  });

  it('should return the darcula theme if we pass in a unknown theme', () => {
    expect(findTheme('something unknown')).toEqual(DRACULA_THEME);
    expect(phlLog).toHaveBeenCalled();
  });

  it('should print a warning message when we pass an unknown theme', () => {
    const theme = 'something unknown';
    findTheme(theme);
    expect(phlLog).toHaveBeenCalledWith(
      chalk.hex('#FFA500')(
        `"${theme}" is not a known theme - please pass in a valid value (material, vscode or dracula)`
      )
    );
    phlLog(
      chalk.hex('#FFA500')(
        `will fall back to the default theme which is "darcula"`
      )
    );
  });
});
