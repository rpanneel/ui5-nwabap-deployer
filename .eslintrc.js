module.exports = {
    "env": {
        "node": true,
        "es6": true
    },
    "parserOptions": {
        "ecmaVersion": 8
    },
    "extends": ["eslint:recommended", "google"],
    "rules": {
        "quotes": [
            "error",
            "double",
            { "allowTemplateLiterals": true }
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-negated-condition": "off",
        "require-jsdoc": "off",
        "no-mixed-requires": "off",
        "max-len": "off",
        "no-implicit-coercion": [
            2,
            { "allow": ["!!"] }
        ],
        "comma-dangle": "off",
        "no-tabs": "off",
        "no-console": "off",
        "valid-jsdoc": "off",
        "linebreak-style": "off",
        "indent": "off",
        "no-async-promise-executor": "off",
        "no-prototype-builtins": "off",
        "object-curly-spacing": "off"
    },
    "root": true
};