const restoreRegex = (regex) => {
    const parts = /\/(.*)\/(.*)/.exec(regex);
    return new RegExp(parts[1], parts[2]);
};

export const htmlParsingRules = {
    "contains": [
        {
            "className": "meta",
            "begin": "<!DOCTYPE",
            "end": ">",
            "relevance": 10,
            "contains": [
                {
                    "begin": "\\[",
                    "end": "\\]",
                    "compiled": true,
                    "lexemesRe": restoreRegex("/\\w+/gim"),
                    "beginRe": restoreRegex("/\\[/im"),
                    "endRe": restoreRegex("/\\]/im"),
                    "terminator_end": "\\]",
                    "relevance": 1,
                    "contains": [],
                    "terminators": restoreRegex("/\\]/gim")
                }
            ],
            "compiled": true,
            "lexemesRe": restoreRegex("/\\w+/gim"),
            "beginRe": restoreRegex("/<!DOCTYPE/im"),
            "endRe": restoreRegex("/>/im"),
            "terminator_end": ">",
            "terminators": restoreRegex("/\\[|>/gim")
        },
        {
            "className": "comment",
            "begin": "<!--",
            "end": "-->",
            "contains": [
                {
                    "begin": restoreRegex("/\\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\\b/"),
                    "compiled": true,
                    "lexemesRe": restoreRegex("/\\w+/gim"),
                    "beginRe": restoreRegex("/\\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\\b/im"),
                    "end": restoreRegex("/\\B|\\b/"),
                    "endRe": restoreRegex("/\\B|\\b/im"),
                    "terminator_end": "\\B|\\b",
                    "relevance": 1,
                    "contains": [],
                    "terminators": restoreRegex("/\\B|\\b/gim")
                },
                {
                    "className": "doctag",
                    "begin": "(?:TODO|FIXME|NOTE|BUG|XXX):",
                    "relevance": 0,
                    "compiled": true,
                    "lexemesRe": restoreRegex("/\\w+/gim"),
                    "beginRe": restoreRegex("/(?:TODO|FIXME|NOTE|BUG|XXX):/im"),
                    "end": restoreRegex("/\\B|\\b/"),
                    "endRe": restoreRegex("/\\B|\\b/im"),
                    "terminator_end": "\\B|\\b",
                    "contains": [],
                    "terminators": restoreRegex("/\\B|\\b/gim")
                }
            ],
            "relevance": 10,
            "compiled": true,
            "lexemesRe": restoreRegex("/\\w+/gim"),
            "beginRe": restoreRegex("/<!--/im"),
            "endRe": restoreRegex("/-->/im"),
            "terminator_end": "-->",
            "terminators": restoreRegex("/\\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\\b|(?:TODO|FIXME|NOTE|BUG|XXX):|-->/gim")
        },
        {
            "begin": "<\\!\\[CDATA\\[",
            "end": "\\]\\]>",
            "relevance": 10,
            "compiled": true,
            "lexemesRe": restoreRegex("/\\w+/gim"),
            "beginRe": restoreRegex("/<\\!\\[CDATA\\[/im"),
            "endRe": restoreRegex("/\\]\\]>/im"),
            "terminator_end": "\\]\\]>",
            "contains": [],
            "terminators": restoreRegex("/\\]\\]>/gim")
        },
        {
            "className": "meta",
            "begin": restoreRegex("/<\\?xml/"),
            "end": restoreRegex("/\\?>/"),
            "relevance": 10,
            "compiled": true,
            "lexemesRe": restoreRegex("/\\w+/gim"),
            "beginRe": restoreRegex("/<\\?xml/im"),
            "endRe": restoreRegex("/\\?>/im"),
            "terminator_end": "\\?>",
            "contains": [],
            "terminators": restoreRegex("/\\?>/gim")
        },
        {
            "begin": restoreRegex("/<\\?(php)?/"),
            "end": restoreRegex("/\\?>/"),
            "subLanguage": "php",
            "contains": [
                {
                    "begin": "/\\*",
                    "end": "\\*/",
                    "skip": true,
                    "compiled": true,
                    "lexemesRe": restoreRegex("/\\w+/gim"),
                    "beginRe": restoreRegex("/\\/\\*/im"),
                    "endRe": restoreRegex("/\\*\\//im"),
                    "terminator_end": "\\*/",
                    "relevance": 1,
                    "contains": [],
                    "terminators": restoreRegex("/\\*\\//gim")
                },
                {
                    "begin": "b\"",
                    "end": "\"",
                    "skip": true,
                    "compiled": true,
                    "lexemesRe": restoreRegex("/\\w+/gim"),
                    "beginRe": restoreRegex("/b\"/im"),
                    "endRe": restoreRegex("/\"/im"),
                    "terminator_end": "\"",
                    "relevance": 1,
                    "contains": [],
                    "terminators": restoreRegex("/\"/gim")
                },
                {
                    "begin": "b'",
                    "end": "'",
                    "skip": true,
                    "compiled": true,
                    "lexemesRe": restoreRegex("/\\w+/gim"),
                    "beginRe": restoreRegex("/b'/im"),
                    "endRe": restoreRegex("/'/im"),
                    "terminator_end": "'",
                    "relevance": 1,
                    "contains": [],
                    "terminators": restoreRegex("/'/gim")
                },
                {
                    "className": null,
                    "begin": "'",
                    "end": "'",
                    "illegal": null,
                    "contains": [],
                    "skip": true,
                    "compiled": true,
                    "lexemesRe": restoreRegex("/\\w+/gim"),
                    "beginRe": restoreRegex("/'/im"),
                    "endRe": restoreRegex("/'/im"),
                    "terminator_end": "'",
                    "relevance": 1,
                    "terminators": restoreRegex("/'/gim")
                },
                {
                    "className": null,
                    "begin": "\"",
                    "end": "\"",
                    "illegal": null,
                    "contains": [],
                    "skip": true,
                    "compiled": true,
                    "lexemesRe": restoreRegex("/\\w+/gim"),
                    "beginRe": restoreRegex("/\"/im"),
                    "endRe": restoreRegex("/\"/im"),
                    "terminator_end": "\"",
                    "relevance": 1,
                    "terminators": restoreRegex("/\"/gim")
                }
            ],
            "compiled": true,
            "lexemesRe": restoreRegex("/\\w+/gim"),
            "beginRe": restoreRegex("/<\\?(php)?/im"),
            "endRe": restoreRegex("/\\?>/im"),
            "terminator_end": "\\?>",
            "relevance": 1,
            "terminators": restoreRegex("/\\/\\*|b\"|b'|'|\"|\\?>/gim")
        },
        {
            "className": "tag",
            "begin": "<style(?=\\s|>|$)",
            "end": ">",
            "keywords": {
                "style": [
                    "name",
                    1
                ]
            },
            "contains": [
                {
                    "endsWithParent": true,
                    "illegal": restoreRegex("/</"),
                    "relevance": 0,
                    "contains": [
                        {
                            "className": "attr",
                            "begin": "[A-Za-z0-9\\._:-]+",
                            "relevance": 0,
                            "compiled": true,
                            "lexemesRe": restoreRegex("/\\w+/gim"),
                            "beginRe": restoreRegex("/[A-Za-z0-9\\._:-]+/im"),
                            "end": restoreRegex("/\\B|\\b/"),
                            "endRe": restoreRegex("/\\B|\\b/im"),
                            "terminator_end": "\\B|\\b",
                            "contains": [],
                            "terminators": restoreRegex("/\\B|\\b/gim")
                        },
                        {
                            "begin": restoreRegex("/=\\s*/"),
                            "relevance": 0,
                            "contains": [
                                {
                                    "className": "string",
                                    "endsParent": true,
                                    "variants": null,
                                    "begin": restoreRegex("/\"/"),
                                    "end": restoreRegex("/\"/"),
                                    "compiled": true,
                                    "lexemesRe": restoreRegex("/\\w+/gim"),
                                    "beginRe": restoreRegex("/\"/im"),
                                    "endRe": restoreRegex("/\"/im"),
                                    "terminator_end": "\"",
                                    "relevance": 1,
                                    "contains": [],
                                    "terminators": restoreRegex("/\"/gim")
                                },
                                {
                                    "className": "string",
                                    "endsParent": true,
                                    "variants": null,
                                    "begin": restoreRegex("/'/"),
                                    "end": restoreRegex("/'/"),
                                    "compiled": true,
                                    "lexemesRe": restoreRegex("/\\w+/gim"),
                                    "beginRe": restoreRegex("/'/im"),
                                    "endRe": restoreRegex("/'/im"),
                                    "terminator_end": "'",
                                    "relevance": 1,
                                    "contains": [],
                                    "terminators": restoreRegex("/'/gim")
                                },
                                {
                                    "className": "string",
                                    "endsParent": true,
                                    "variants": null,
                                    "begin": restoreRegex("/[^\\s\"'=<>`]+/"),
                                    "compiled": true,
                                    "lexemesRe": restoreRegex("/\\w+/gim"),
                                    "beginRe": restoreRegex("/[^\\s\"'=<>`]+/im"),
                                    "end": restoreRegex("/\\B|\\b/"),
                                    "endRe": restoreRegex("/\\B|\\b/im"),
                                    "terminator_end": "\\B|\\b",
                                    "relevance": 1,
                                    "contains": [],
                                    "terminators": restoreRegex("/\\B|\\b/gim")
                                }
                            ],
                            "compiled": true,
                            "lexemesRe": restoreRegex("/\\w+/gim"),
                            "beginRe": restoreRegex("/=\\s*/im"),
                            "end": restoreRegex("/\\B|\\b/"),
                            "endRe": restoreRegex("/\\B|\\b/im"),
                            "terminator_end": "\\B|\\b",
                            "terminators": restoreRegex("/\"|'|[^\\s\"'=<>`]+|\\B|\\b/gim")
                        }
                    ],
                    "compiled": true,
                    "lexemesRe": restoreRegex("/\\w+/gim"),
                    "begin": restoreRegex("/\\B|\\b/"),
                    "beginRe": restoreRegex("/\\B|\\b/im"),
                    "terminator_end": ">",
                    "illegalRe": restoreRegex("/</im"),
                    "terminators": restoreRegex("/[A-Za-z0-9\\._:-]+|=\\s*|>|</gim")
                }
            ],
            "starts": {
                "end": "</style>",
                "returnEnd": true,
                "subLanguage": [
                    "css",
                    "xml"
                ],
                "compiled": true,
                "lexemesRe": restoreRegex("/\\w+/gim"),
                "begin": restoreRegex("/\\B|\\b/"),
                "beginRe": restoreRegex("/\\B|\\b/im"),
                "endRe": restoreRegex("/<\\/style>/im"),
                "terminator_end": "</style>",
                "relevance": 1,
                "contains": [],
                "terminators": restoreRegex("/<\\/style>/gim")
            },
            "compiled": true,
            "lexemesRe": restoreRegex("/\\w+/gim"),
            "beginRe": restoreRegex("/<style(?=\\s|>|$)/im"),
            "endRe": restoreRegex("/>/im"),
            "terminator_end": ">",
            "relevance": 1,
            "terminators": restoreRegex("/\\B|\\b|>/gim")
        },
        {
            "className": "tag",
            "begin": "<script(?=\\s|>|$)",
            "end": ">",
            "keywords": {
                "script": [
                    "name",
                    1
                ]
            },
            "contains": [
                {
                    "endsWithParent": true,
                    "illegal": restoreRegex("/</"),
                    "relevance": 0,
                    "contains": [
                        {
                            "className": "attr",
                            "begin": "[A-Za-z0-9\\._:-]+",
                            "relevance": 0,
                            "compiled": true,
                            "lexemesRe": restoreRegex("/\\w+/gim"),
                            "beginRe": restoreRegex("/[A-Za-z0-9\\._:-]+/im"),
                            "end": restoreRegex("/\\B|\\b/"),
                            "endRe": restoreRegex("/\\B|\\b/im"),
                            "terminator_end": "\\B|\\b",
                            "contains": [],
                            "terminators": restoreRegex("/\\B|\\b/gim")
                        },
                        {
                            "begin": restoreRegex("/=\\s*/"),
                            "relevance": 0,
                            "contains": [
                                {
                                    "className": "string",
                                    "endsParent": true,
                                    "variants": null,
                                    "begin": restoreRegex("/\"/"),
                                    "end": restoreRegex("/\"/"),
                                    "compiled": true,
                                    "lexemesRe": restoreRegex("/\\w+/gim"),
                                    "beginRe": restoreRegex("/\"/im"),
                                    "endRe": restoreRegex("/\"/im"),
                                    "terminator_end": "\"",
                                    "relevance": 1,
                                    "contains": [],
                                    "terminators": restoreRegex("/\"/gim")
                                },
                                {
                                    "className": "string",
                                    "endsParent": true,
                                    "variants": null,
                                    "begin": restoreRegex("/'/"),
                                    "end": restoreRegex("/'/"),
                                    "compiled": true,
                                    "lexemesRe": restoreRegex("/\\w+/gim"),
                                    "beginRe": restoreRegex("/'/im"),
                                    "endRe": restoreRegex("/'/im"),
                                    "terminator_end": "'",
                                    "relevance": 1,
                                    "contains": [],
                                    "terminators": restoreRegex("/'/gim")
                                },
                                {
                                    "className": "string",
                                    "endsParent": true,
                                    "variants": null,
                                    "begin": restoreRegex("/[^\\s\"'=<>`]+/"),
                                    "compiled": true,
                                    "lexemesRe": restoreRegex("/\\w+/gim"),
                                    "beginRe": restoreRegex("/[^\\s\"'=<>`]+/im"),
                                    "end": restoreRegex("/\\B|\\b/"),
                                    "endRe": restoreRegex("/\\B|\\b/im"),
                                    "terminator_end": "\\B|\\b",
                                    "relevance": 1,
                                    "contains": [],
                                    "terminators": restoreRegex("/\\B|\\b/gim")
                                }
                            ],
                            "compiled": true,
                            "lexemesRe": restoreRegex("/\\w+/gim"),
                            "beginRe": restoreRegex("/=\\s*/im"),
                            "end": restoreRegex("/\\B|\\b/"),
                            "endRe": restoreRegex("/\\B|\\b/im"),
                            "terminator_end": "\\B|\\b",
                            "terminators": restoreRegex("/\"|'|[^\\s\"'=<>`]+|\\B|\\b/gim")
                        }
                    ],
                    "compiled": true,
                    "lexemesRe": restoreRegex("/\\w+/gim"),
                    "begin": restoreRegex("/\\B|\\b/"),
                    "beginRe": restoreRegex("/\\B|\\b/im"),
                    "terminator_end": ">",
                    "illegalRe": restoreRegex("/</im"),
                    "terminators": restoreRegex("/[A-Za-z0-9\\._:-]+|=\\s*|>|</gim")
                }
            ],
            "starts": {
                "end": "</script>",
                "returnEnd": true,
                "subLanguage": [
                    "actionscript",
                    "javascript",
                    "handlebars",
                    "xml",
                    "vbscript"
                ],
                "compiled": true,
                "lexemesRe": restoreRegex("/\\w+/gim"),
                "begin": restoreRegex("/\\B|\\b/"),
                "beginRe": restoreRegex("/\\B|\\b/im"),
                "endRe": restoreRegex("/<\\/script>/im"),
                "terminator_end": "</script>",
                "relevance": 1,
                "contains": [],
                "terminators": restoreRegex("/<\\/script>/gim")
            },
            "compiled": true,
            "lexemesRe": restoreRegex("/\\w+/gim"),
            "beginRe": restoreRegex("/<script(?=\\s|>|$)/im"),
            "endRe": restoreRegex("/>/im"),
            "terminator_end": ">",
            "relevance": 1,
            "terminators": restoreRegex("/\\B|\\b|>/gim")
        },
        {
            "className": "tag",
            "begin": "</?",
            "end": "/?>",
            "contains": [
                {
                    "className": "name",
                    "begin": restoreRegex("/[^\\/><\\s]+/"),
                    "relevance": 0,
                    "compiled": true,
                    "lexemesRe": restoreRegex("/\\w+/gim"),
                    "beginRe": restoreRegex("/[^\\/><\\s]+/im"),
                    "end": restoreRegex("/\\B|\\b/"),
                    "endRe": restoreRegex("/\\B|\\b/im"),
                    "terminator_end": "\\B|\\b",
                    "contains": [],
                    "terminators": restoreRegex("/\\B|\\b/gim")
                },
                {
                    "endsWithParent": true,
                    "illegal": restoreRegex("/</"),
                    "relevance": 0,
                    "contains": [
                        {
                            "className": "attr",
                            "begin": "[A-Za-z0-9\\._:-]+",
                            "relevance": 0,
                            "compiled": true,
                            "lexemesRe": restoreRegex("/\\w+/gim"),
                            "beginRe": restoreRegex("/[A-Za-z0-9\\._:-]+/im"),
                            "end": restoreRegex("/\\B|\\b/"),
                            "endRe": restoreRegex("/\\B|\\b/im"),
                            "terminator_end": "\\B|\\b",
                            "contains": [],
                            "terminators": restoreRegex("/\\B|\\b/gim")
                        },
                        {
                            "begin": restoreRegex("/=\\s*/"),
                            "relevance": 0,
                            "contains": [
                                {
                                    "className": "string",
                                    "endsParent": true,
                                    "variants": null,
                                    "begin": restoreRegex("/\"/"),
                                    "end": restoreRegex("/\"/"),
                                    "compiled": true,
                                    "lexemesRe": restoreRegex("/\\w+/gim"),
                                    "beginRe": restoreRegex("/\"/im"),
                                    "endRe": restoreRegex("/\"/im"),
                                    "terminator_end": "\"",
                                    "relevance": 1,
                                    "contains": [],
                                    "terminators": restoreRegex("/\"/gim")
                                },
                                {
                                    "className": "string",
                                    "endsParent": true,
                                    "variants": null,
                                    "begin": restoreRegex("/'/"),
                                    "end": restoreRegex("/'/"),
                                    "compiled": true,
                                    "lexemesRe": restoreRegex("/\\w+/gim"),
                                    "beginRe": restoreRegex("/'/im"),
                                    "endRe": restoreRegex("/'/im"),
                                    "terminator_end": "'",
                                    "relevance": 1,
                                    "contains": [],
                                    "terminators": restoreRegex("/'/gim")
                                },
                                {
                                    "className": "string",
                                    "endsParent": true,
                                    "variants": null,
                                    "begin": restoreRegex("/[^\\s\"'=<>`]+/"),
                                    "compiled": true,
                                    "lexemesRe": restoreRegex("/\\w+/gim"),
                                    "beginRe": restoreRegex("/[^\\s\"'=<>`]+/im"),
                                    "end": restoreRegex("/\\B|\\b/"),
                                    "endRe": restoreRegex("/\\B|\\b/im"),
                                    "terminator_end": "\\B|\\b",
                                    "relevance": 1,
                                    "contains": [],
                                    "terminators": restoreRegex("/\\B|\\b/gim")
                                }
                            ],
                            "compiled": true,
                            "lexemesRe": restoreRegex("/\\w+/gim"),
                            "beginRe": restoreRegex("/=\\s*/im"),
                            "end": restoreRegex("/\\B|\\b/"),
                            "endRe": restoreRegex("/\\B|\\b/im"),
                            "terminator_end": "\\B|\\b",
                            "terminators": restoreRegex("/\"|'|[^\\s\"'=<>`]+|\\B|\\b/gim")
                        }
                    ],
                    "compiled": true,
                    "lexemesRe": restoreRegex("/\\w+/gim"),
                    "begin": restoreRegex("/\\B|\\b/"),
                    "beginRe": restoreRegex("/\\B|\\b/im"),
                    "terminator_end": "/?>",
                    "illegalRe": restoreRegex("/</im"),
                    "terminators": restoreRegex("/[A-Za-z0-9\\._:-]+|=\\s*|\\/?>|</gim")
                }
            ],
            "compiled": true,
            "lexemesRe": restoreRegex("/\\w+/gim"),
            "beginRe": restoreRegex("/<\\/?/im"),
            "endRe": restoreRegex("/\\/?>/im"),
            "terminator_end": "/?>",
            "relevance": 1,
            "terminators": restoreRegex("/[^\\/><\\s]+|\\B|\\b|\\/?>/gim")
        }
    ],
    "compiled": true,
    "lexemesRe": restoreRegex(restoreRegex("/\\w+/gim")),
    "relevance": 1,
    "terminators": restoreRegex(restoreRegex("/<!DOCTYPE|<!--|<\\!\\[CDATA\\[|<\\?xml|<\\?(php)?|<style(?=\\s|>|$)|<script(?=\\s|>|$)|<\\/?/gim"))
};
