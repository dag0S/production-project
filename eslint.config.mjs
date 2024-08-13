import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      // Чтобы не импортировать React
      "react/react-in-jsx-scope": "off",
      // Чтобы можно было создавать неиспользованные переменные
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      // Кол-во пробелов в табе
      "react/jsx-indent": [2, 2],
      // Для пропсов
      "react/prop-types": "off",
      // memo
      "react/display-name": "off",
    },
  },
];
