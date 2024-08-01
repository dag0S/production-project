import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
  {
    plugins: ["i18next"],
  },
  {
    rules: {
      "react/jsx-indent": [2, 2],
      indent: [2, 2],
      "react/react-in-jsx-scope": "off",
      "react/jsx-filename-extension": [
        2,
        { extensions: [".js", ".jsx", ".tsx"] },
      ],
      "no-unused-vars": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "react/jsx-props-no-spreading": "warn",
      "i18next/no-literal-string": ["error", { markupOnly: true }],
    },
  },
  {
    extends: ["plugin:i18next/recommended"],
  },
];