module.exports = {
    root: true,

    env: {
        node: true,
    },
    parserOptions: {
        parser: "babel-eslint",
    },

    extends: [
        "plugin:vue/recommended",
        "@vue/airbnb",
        "plugin:vue/essential",
    ],

    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        indent: ["error", 4],
        quotes: ["error", "double"],
        "vue/script-indent": ["error", 4, { baseIndent: 1 }],
        "vue/html-indent": ["error", 4, { baseIndent: 1 }],
    },
    overrides: [
        {
            files: ["*.vue"],
            rules: {
                indent: "off",
            },
        },
    ],
};