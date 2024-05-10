// cSpell Settings
// REF https://cspell.org/configuration/
module.exports = {
    $schema: "https://github.com/streetsidesoftware/cspell/raw/main/packages/cspell-types/cspell.schema.json",
    // Version of the setting file.
    version: "0.0.0",
    // language - current active spelling language
    language: "en",
    // words - list of words to be always considered correct
    words: [
        "abcjs",
        "afterbegin",
        "afterend",
        "aliyun",
        "araddon",
        "backlink",
        "beforebegin",
        "blockicon",
        "blockquote",
        "blockref",
        "breadcrumbmore",
        "cest",
        "contenteditable",
        "dailynote",
        "dateparse",
        "docpath",
        "doctree",
        "echarts",
        "editorcontent",
        "editortitleicon",
        "endregion",
        "epub",
        "fcontent",
        "fileannotationref",
        "filetree",
        "frontends",
        "frostime",
        "fullchain",
        "fullscreen",
        "fullwidth",
        "graphviz",
        "hpath",
        "iframe",
        "jsdeliver",
        "katex",
        "keymap",
        "liandi",
        "logf",
        "mindmap",
        "noneditableblock",
        "ofetch",
        "pandoc",
        "plantuml",
        "powf",
        "privkey",
        "protyle",
        "reponame",
        "setext",
        "siyuan",
        "succ",
        "terwer",
        "textmark",
        "topbar",
        "uuidv",
        "vitepress",
        "vuepress",
        "webdav",
        "webpake",
        "wechat",
        "yingyi",
        "zuoez",
        "zuoqiu",
    ],
    ignoreRegExpList: [
        String.raw`\d{14}-[0-9a-z]{7}`, // 块 ID
    ],
    // flagWords - list of words to be always considered incorrect
    // This is useful for offensive words and common spelling errors.
    // For example "hte" should be "the"
    flagWords: [
    ],
    ignorePaths: [
        "./package.json",
        "./pnpm-lock.yaml",

        "./node_modules/**",
        "./temp/**",

        "./docs/.vitepress/cache/**",
        "./docs/.vitepress/dist/**",
        "./docs/public/schemas/**",
        "./docs/snippets/siyuan-sdk/**",
        "./docs/zh-Hans/reference/template/sprig/**",
    ],
};
