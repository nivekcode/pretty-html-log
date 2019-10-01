import {HighlightEngine} from './core/highlight-engine';
import * as prettier from 'prettier';
import {Theme} from './themes/theme.model';
import {THEMES} from './themes/themes';

const highlightEngine = new HighlightEngine();

export const highlight = (value: string, theme: Theme = THEMES.DRACULA) => highlightEngine.highlight(prettier.format(value, {
    parser: 'html'
}), theme);
