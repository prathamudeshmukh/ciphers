module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
      "airbnb-base",
      "plugin:@typescript-eslint/recommended",
  ],
    settings: {
        "import/resolver": {
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
                moduleDirectory: ["node_modules", "src"],
                path: ["src"]
            }
        }
    },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    test:'readonly',
    expect:'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
      "import/extensions": "off",
      semi: "off",
  },
};
