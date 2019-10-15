import * as prettier from 'prettier/standalone';
import htmlParser from 'prettier/parser-html';

import { HighlightEngine } from './core/highlight-engine';
import { Theme } from './themes/theme.model';
import { THEMES } from './themes/themes';

const highlightEngine = new HighlightEngine();

export const highlight = (value: string, theme: Theme = THEMES.DRACULA) =>
  highlightEngine.highlight(
    prettier.format(value, {
      parser: 'html',
      plugins: [htmlParser]
    }),
    theme
  );
