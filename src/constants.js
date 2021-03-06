const KEYWORDS = {
    JEKI: "jeki",
    NIGBATI: "nigbati",
    SOPE: "sope",
    TABI: "tabi",
    OOTO: "ooto",
    IRO: "iro",
    ISE: "ise",
    FUN: "fun",
    PADA: "pada",
    KURO: "kuro",
    SE: "se",
    YI: "yi",
    IRU: "iru",
    PADASI: "padasi",
    GBE_WOLE: "gbewole",
    WOKE: "woke",
};

const SYMBOLS = {
    STR_QUOTE: '"',
    PERIOD: ".",
    OR: "||",
    AND: "&&",
    BINARY_AND: "&",
    L_THAN: "<",
    G_THAN: ">",
    G_THAN_OR_EQ: ">=",
    L_THAN_OR_EQ: "<=",
    NOT_EQ: "!=",
    EQ: "==",
    ASSIGN: "=",
    PLUS: "+",
    MINUS: "-",
    MULTIPLY: "*",
    DIVIDE: "/",
    REMAINDER: "%",
    L_PAREN: "{",
    R_PAREN: "}",
    COMMA: ",",
    COMMENT: "#",
    L_BRACKET: "(",
    R_BRACKET: ")",
    L_SQ_BRACKET: "[",
    R_SQ_BRACKET: "]",
    STATEMENT_TERMINATOR: ";",
    NEW_LINE: "\n",
    TAB_SPACE: "\t",
    EMPTY_SPACE: " ",
    EXCLAMATION_POINT: "!",
    PIPE: "|",
    COLON: ":",
    BACK_TICK: "`",
};

const LIST = {
    PUNCTUATIONS: [
        SYMBOLS.L_BRACKET, SYMBOLS.R_BRACKET, SYMBOLS.L_PAREN,
        SYMBOLS.R_PAREN, SYMBOLS.STATEMENT_TERMINATOR, SYMBOLS.COMMA,
        SYMBOLS.L_SQ_BRACKET, SYMBOLS.R_SQ_BRACKET, SYMBOLS.COLON, SYMBOLS.BACK_TICK,
    ],
    OPERATORS: [
        SYMBOLS.PLUS, SYMBOLS.MINUS, SYMBOLS.MULTIPLY,
        SYMBOLS.DIVIDE, SYMBOLS.REMAINDER, SYMBOLS.L_THAN,
        SYMBOLS.G_THAN, SYMBOLS.EQ, SYMBOLS.EXCLAMATION_POINT,
        SYMBOLS.PIPE, SYMBOLS.BINARY_AND, SYMBOLS.ASSIGN,
    ],
    WHITESPACES: [
        SYMBOLS.EMPTY_SPACE, SYMBOLS.TAB_SPACE, SYMBOLS.NEW_LINE,
    ],
    KEYWORDS: [
        KEYWORDS.JEKI, KEYWORDS.NIGBATI, KEYWORDS.SE, KEYWORDS.SOPE,
        KEYWORDS.TABI, KEYWORDS.OOTO, KEYWORDS.IRO, KEYWORDS.ISE,
        KEYWORDS.FUN, KEYWORDS.PADA, KEYWORDS.KURO, KEYWORDS.YI,
        KEYWORDS.IRU, KEYWORDS.PADASI, KEYWORDS.GBE_WOLE, KEYWORDS.WOKE,
    ],
};

const REGEX = {
    DIGIT: /[0-9]/i,
    IDENTIFIER: /[a-zA-Z]|[ÁÀÉÈẸẸ́Ẹ̀ẸĒÍÌÓÒỌỌ́Ọ̀ỌÚÙṢáàéèẹẹ́ẹíìóòọọ́ọ̀úùṣŃń]/i,
};

const constants = {
    KW: KEYWORDS,
    SYM: SYMBOLS,
    LIST: LIST,
    REGEX: REGEX,
    KEYWORD: "keyword",
    VARIABLE: "variable",
    STRING: "string",
    ARRAY: "array",
    ARRAY_ELEM: "arrayElement",
    NUMBER: "number",
    PROGRAM: "program",
    PUNCTUATION: "punctuation",
    OPERATOR: "operator",
    GET_JEKI: "getJeki",
    CALL_ISE: "callIse",
    EXP_PUNC: "expression_punctuations",
    YL_EXT: ".yl",
};

module.exports = constants;
