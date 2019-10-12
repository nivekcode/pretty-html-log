import { addConsoleLogPrettyHtml, highlight } from '../lib/pretty-html-log';

// Simple usage
const someHTML = '<html><div id="someId" class="test">Test</div></html>';
console.log(highlight(someHTML));

// patch console
addConsoleLogPrettyHtml();
console.logPrettyHTML(someHTML);
