import * as prettier from 'prettier';
import htmlParser from 'prettier/parser-html';

import { HighlightEngine } from './core/highlight-engine';
import { Theme } from './themes/theme.model';
import { THEMES } from './themes/themes';

const highlightEngine = new HighlightEngine();

export const highlight = (
  value: string,
  theme: Theme = THEMES.DRACULA
): string => {
  const options = prettier.resolveConfig.sync();
  return highlightEngine.highlight(
    prettier.format(value, {
      ...options,
      parser: 'html',
      plugins: [htmlParser]
    }),
    theme
  );
};
