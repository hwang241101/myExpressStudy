import eslint from "@eslint/js";
import airbnbBase from "eslint-config-airbnb-base";
import importPlugin from "eslint-plugin-import";
import prettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  // 기본 ESLint 추천 규칙
  eslint.configs.recommended,

  // 에어비앤비 베이스 규칙 (React 제외)
  {
    ...airbnbBase,
    plugins: {
      import: importPlugin,
    },
  },

  // Prettier와 충돌하는 규칙 OFF
  prettier,

  // Prettier를 ESLint 내부에서 실행 + error로 처리
  {
    plugins: { prettier: prettierPlugin },
    rules: {
      "prettier/prettier": "error",
    },
    languageOptions: {
      sourceType: "module",
      ecmaVersion: "latest",
      globals: {
        console: "readonly",
        process: "readonly",
        __dirname: "readonly",
      },
    },
    files: ["**/*.js"],
  },
];

// eslit와 prritier 두개 통합햇음
// ESlint는 선생님으로 코드의 문법을 알려줌
// prritier는 미용사로 코드를 정렬해줌
