import {highlight} from '../lib/pretty-html-log';

const someHTML = '<html><div id="someId" class="test">Test</div></html>';

console.log(highlight(someHTML));
