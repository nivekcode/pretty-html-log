import { HighlightEngine } from './highlight-engine';
import { THEMES } from '../themes/themes';
import chalk from 'chalk';

describe('Highlight engine', () => {
  const htmlString = '<html><h1 class="test">Test</h1></html>';
  let sut: HighlightEngine;

  const countOccurences = (highlightedHTML, word) =>
    highlightedHTML.split(word).length - 1;

  beforeEach(() => {
    sut = new HighlightEngine();
  });

  it('should print the two opening tags (<) in the Dracula tag color', () => {
    const highlightedHTML = sut.highlight(htmlString, THEMES.DRACULA);
    const colorizedOpeningTag = chalk.hex(THEMES.DRACULA.tag)('<');
    expect(countOccurences(highlightedHTML, colorizedOpeningTag)).toBe(2);
  });

  it('should print the two opening close tags (</) in the Dracula tag color', () => {
    const highlightedHTML = sut.highlight(htmlString, THEMES.DRACULA);
    const colorizedOpeningTag = chalk.hex(THEMES.DRACULA.tag)('</');
    expect(countOccurences(highlightedHTML, colorizedOpeningTag)).toBe(2);
  });

  it('should print the four closing tags (>) in the Dracula tag color', () => {
    const highlightedHTML = sut.highlight(htmlString, THEMES.DRACULA);
    const colorizedOpeningTag = chalk.hex(THEMES.DRACULA.tag)('>');
    expect(countOccurences(highlightedHTML, colorizedOpeningTag)).toBe(4);
  });

  it('should print html in the Dracula name color', () => {
    const highlightedHTML = sut.highlight(htmlString, THEMES.DRACULA);
    const colorizedOpeningTag = chalk.hex(THEMES.DRACULA.name)('html');
    expect(countOccurences(highlightedHTML, colorizedOpeningTag)).toBe(2);
  });

  it('should print h1 in the Dracula name color', () => {
    const highlightedHTML = sut.highlight(htmlString, THEMES.DRACULA);
    const colorizedOpeningTag = chalk.hex(THEMES.DRACULA.name)('h1');
    expect(countOccurences(highlightedHTML, colorizedOpeningTag)).toBe(2);
  });

  it('should print class in the Dracula attr color', () => {
    const highlightedHTML = sut.highlight(htmlString, THEMES.DRACULA);
    const colorizedOpeningTag = chalk.hex(THEMES.DRACULA.attr)('class');
    expect(countOccurences(highlightedHTML, colorizedOpeningTag)).toBe(1);
  });

  it('should print "test" in the Dracula string color', () => {
    const highlightedHTML = sut.highlight(htmlString, THEMES.DRACULA);
    const colorizedOpeningTag = chalk.hex(THEMES.DRACULA.string)('"test"');
    expect(countOccurences(highlightedHTML, colorizedOpeningTag)).toBe(1);
  });

  it('should print Test in the Dracula tagContent color', () => {
    const highlightedHTML = sut.highlight(htmlString, THEMES.DRACULA);
    const colorizedOpeningTag = chalk.hex(THEMES.DRACULA.tagContent)('Test');
    expect(countOccurences(highlightedHTML, colorizedOpeningTag)).toBe(1);
  });
});
