import {HighlightEngine} from './core/highlight-engine';
import * as prettier from 'prettier';

const highlightEngine = new HighlightEngine();

export const highlight = (value) => highlightEngine.highlight(prettier.format(value, {
    parser: 'html'
}));
