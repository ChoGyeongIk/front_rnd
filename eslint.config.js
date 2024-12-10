/**
 * .eslint.js
 *
 * ESLint configuration file.
 */

import pluginVue from "eslint-plugin-vue";
import vueTsEslintConfig from "@vue/eslint-config-typescript";

export default [
    {
        name: "app/files-to-lint",
        files: ["**/*.{ts,mts,tsx,vue}"],
    },

    {
        name: "app/files-to-ignore",
        ignores: ["**/dist/**", "**/dist-ssr/**", "**/coverage/**"],
    },

    ...pluginVue.configs["flat/recommended"],
    ...vueTsEslintConfig(),

    {
        extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/typescript/recommended", "plugin:prettier/recommended"],
        rules: {
            "@typescript-eslint/no-unused-expressions": [
                "error",
                {
                    allowShortCircuit: true,
                    allowTernary: true,
                },
            ],
            "prettier/prettier": [
                "error",
                {
                    printWidth: 140,
                    htmlWhitespaceSensitivity: "ignore",
                },
            ],
            "vue/multi-word-component-names": "off",
            "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
            "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
            "vue/require-v-for-key": "off", // v-for에 key를 요구하는 규칙을 끔
            "vue/no-reserved-component-names": "off", // 예약된 컴포넌트 이름에 대한 경고 끄기
            "@typescript-eslint/no-var-requires": "off", // ts 환경에서 require에 대한 경고 끄기
            "@typescript-eslint/no-empty-function": "off", // 빈 함수에 대한 경고 끄기
            "@typescript-eslint/no-explicit-any": "off", // 'any' 타입 사용에 대한 경고 끄기
            indent: "off", // 탭 너비 설정
            "vue/script-indent": "off", // Vue의 <script> 들여쓰기 적용
            "vue/html-indent": ["error", 4], // Vue의 <style> 들여쓰기 적용
            quotes: ["error", "double", { avoidEscape: true, allowTemplateLiterals: true }], // 큰따옴표를 기본으로, 백틱 및 작은따옴표도 허용
            "comma-dangle": ["error", "always-multiline"], // 객체나 배열에서 마지막 쉼표를 허용
            semi: ["error", "always"], // 세미콜론 필수
            "arrow-parens": ["error", "always"], // 화살표 함수 매개변수 괄호 항상 사용
            "object-curly-spacing": ["error", "always"], // 중괄호 안에 공백 추가
        },
    },
];
