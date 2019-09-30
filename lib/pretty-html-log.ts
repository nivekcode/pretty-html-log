import {HighlightEngine} from './core/highlight-engine';

const highlightEngine = new HighlightEngine();

export const highlight = (value) => highlightEngine.highlight(value);
