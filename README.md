<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

**Table of Contents** _generated with [DocToc](https://github.com/thlorenz/doctoc)_

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Pretty HTML log

![Logo](https://raw.githubusercontent.com/kreuzerk/pretty-html-log/master/src/assets/phl-logo-white.png)

pretty-html-log is a tool that allows you to highlight and pretty print your html string to console.

- [Getting started 🚀](#getting-started-)
- [API](#api)
  - [Themes 🎨](#themes-)
- [Usage over Javascript / Typescript 👨‍💻](#usage-over-javascript--typescript-%E2%80%8D)
  - [Simple usage](#simple-usage)
  - [Choose your theme](#choose-your-theme)
- [Use as Script 📜](#use-as-script-)
  - [Simple usage](#simple-usage-1)
  - [Choose your theme](#choose-your-theme-1)
  - [Help menu](#help-menu)
- [Credits](#credits)

# Getting started 🚀

There are two ways to use pretty-html-log

- Use it in your typescript / javascript code
- Use it via command line or in your npm scripts

The module is available as node module and can
be installed with the following command.

```
npm install pretty-html-log
```

> ☝️ If you use it via command line tool you can always directly execute
> the bin with npx (no npm install needed).
>
>       npx pretty-html-log '<html><h1 class="test"></h1></html>'

# API

- **htmlString** **_(required)_** a raw html string
- **theme** _(optional)_ an optional theme (more bellow)

## Themes 🎨

Currently pretty-html-log provides 3 different themes:

- Dracula _(default)_
- Material
- Vscode

# Usage over Javascript / Typescript 👨‍💻

If you want to use this module inside your code you can simply import the hightlight function from
_pretty-html-log_.

## Simple usage

![](https://raw.githubusercontent.com/kreuzerk/pretty-html-log/master/src/assets/phl-simple-usage.png)

## Choose your theme

The highlight function also accepts a theme as a second optional argument.
A theme can be imported and then passed to the module.

![](https://raw.githubusercontent.com/kreuzerk/pretty-html-log/master/src/assets/phl-theme-usage.png)

# Use as Script 📜

Sometimes it makes sense to pretty print an HTML string inside your build process
or maybe you want to just pretty print a string over the console.

## Simple usage

To just pretty print and highlight a HTML string simply type the following command:

![](https://raw.githubusercontent.com/kreuzerk/pretty-html-log/master/src/assets/phl-simple-script-usage.png)

## Choose your theme

The command line tool also allows you to choose your theme. Simply use -t or --theme and pass
one of the following strings as an argument:

- vscode
- material
- dracula

![](https://raw.githubusercontent.com/kreuzerk/pretty-html-log/master/src/assets/phl-theme-usage-script.png)

## Help menu

Of course you don't have to remember those commands - theres a help menu available which you
can use at any point to look up the docs.

Simply type

![](https://raw.githubusercontent.com/kreuzerk/pretty-html-log/master/src/assets/phl-script-help.png)

# Credits

The core alogrithm is taken from [highlight.js](https://github.com/highlightjs/highlight.js).
Even though it has been rewritten to specifically support HTML and not all languages.
Furthermore the code of pretty-html-log is written in Typescript and optimized for HTML highlighting in the console.
