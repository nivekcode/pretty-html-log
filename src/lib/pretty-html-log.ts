import { HighlightEngine } from './core/highlight-engine';
import * as prettier from 'prettier';
import { Theme } from './themes/theme.model';
import { THEMES } from './themes/themes';
import { phlLog } from '../bin/helpers/logger';

const highlightEngine = new HighlightEngine();

export const highlight = (
  value: string,
  theme: Theme = THEMES.DRACULA
): string =>
  highlightEngine.highlight(
    prettier.format(value, {
      parser: 'html'
    }),
    theme
  );

export const addConsoleLogPrettyHtml = (): void => {
  (console as any).logPrettyHTML = (value: string, theme?: Theme) =>
    console.log(highlight(value, theme));
};

declare global {
  interface Console {
    logPrettyHTML: (value: string, theme?: Theme) => void;
  }
}
