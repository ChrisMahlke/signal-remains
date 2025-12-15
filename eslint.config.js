import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import jsxA11y from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import sonarjs from "eslint-plugin-sonarjs";
import security from "eslint-plugin-security";

export default tseslint.config(
  { ignores: ["dist", "node_modules", "public", "vite.config.ts"] },
  sonarjs.configs.recommended,
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: "./tsconfig.app.json",
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      react: react,
      "jsx-a11y": jsxA11y,
      import: importPlugin,
      security: security,
    },
    rules: {
      // React Hooks
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      // React specific rules
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "react/jsx-no-undef": "error",
      "react/jsx-pascal-case": "error",
      "react/jsx-no-duplicate-props": "error",
      "react/jsx-curly-brace-presence": [
        "error",
        { props: "never", children: "never" },
      ],
      "react/jsx-boolean-value": ["error", "never"],
      "react/jsx-closing-bracket-location": ["error", "line-aligned"],
      "react/jsx-closing-tag-location": "error",
      "react/jsx-equals-spacing": ["error", "never"],
      "react/jsx-indent": ["error", 2],
      "react/jsx-indent-props": ["error", 2],
      "react/jsx-max-props-per-line": [
        "error",
        { maximum: 1, when: "multiline" },
      ],
      "react/jsx-no-bind": ["error", { allowArrowFunctions: true }],
      "react/jsx-no-target-blank": "error",
      "react/jsx-sort-props": [
        "error",
        { callbacksLast: true, shorthandFirst: true },
      ],
      "react/jsx-tag-spacing": "error",
      "react/jsx-wrap-multilines": "error",

      // Accessibility
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/anchor-has-content": "error",
      "jsx-a11y/anchor-is-valid": "error",
      "jsx-a11y/aria-props": "error",
      "jsx-a11y/aria-proptypes": "error",
      "jsx-a11y/aria-unsupported-elements": "error",
      "jsx-a11y/click-events-have-key-events": "error",
      "jsx-a11y/heading-has-content": "error",
      "jsx-a11y/html-has-lang": "error",
      "jsx-a11y/iframe-has-title": "error",
      "jsx-a11y/img-redundant-alt": "error",
      "jsx-a11y/no-access-key": "error",
      "jsx-a11y/no-distracting-elements": "error",
      "jsx-a11y/no-redundant-roles": "error",
      "jsx-a11y/role-has-required-aria-props": "error",
      "jsx-a11y/role-supports-aria-props": "error",
      "jsx-a11y/scope": "error",
      "jsx-a11y/tabindex-no-positive": "error",

      // TypeScript strict rules
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/explicit-function-return-type": [
        "error",
        { allowExpressions: true },
      ],
      "@typescript-eslint/explicit-module-boundary-types": "error",
      "@typescript-eslint/no-non-null-assertion": "error",
      "@typescript-eslint/prefer-nullish-coalescing": "error",
      "@typescript-eslint/prefer-optional-chain": "error",
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/await-thenable": "error",
      "@typescript-eslint/no-misused-promises": "error",
      "@typescript-eslint/require-await": "error",
      "@typescript-eslint/no-unnecessary-type-assertion": "error",
      "@typescript-eslint/prefer-as-const": "error",
      "@typescript-eslint/no-inferrable-types": "error",
      "@typescript-eslint/no-var-requires": "error",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports" },
      ],
      "@typescript-eslint/consistent-type-exports": "error",
      "@typescript-eslint/array-type": ["error", { default: "array-simple" }],
      "@typescript-eslint/ban-ts-comment": [
        "error",
        { "ts-expect-error": "allow-with-description" },
      ],

      // Import rules
      "import/no-unresolved": "off", // Disabled for TypeScript projects
      "import/named": "off", // Disabled for TypeScript projects
      "import/default": "off", // Disabled for TypeScript projects
      "import/namespace": "off", // Disabled for TypeScript projects
      "import/no-duplicates": "error",

      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
            "type",
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],

      // SonarJS rules are now handled by sonarjs.configs.recommended
      // You can override specific rules here if needed

      // Security rules
      "security/detect-object-injection": "warn",
      "security/detect-non-literal-regexp": "warn",
      "security/detect-unsafe-regex": "warn",

      // Console logging (for production code review)
      "no-console": "warn",

      // General code quality
      "no-var": "error",
      "prefer-const": "error",
      "no-debugger": "error",
      "no-alert": "error",
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-new-func": "error",
      "no-script-url": "error",
      "prefer-template": "error",
      "template-curly-spacing": "error",
      "arrow-spacing": "error",
      "block-spacing": "error",
      "brace-style": "error",
      "comma-dangle": ["error", "always-multiline"],
      "comma-spacing": "error",
      "comma-style": "error",
      "computed-property-spacing": "error",
      "eol-last": "error",
      "func-call-spacing": "error",
      indent: ["error", 2, { SwitchCase: 1 }],
      "key-spacing": "error",
      "keyword-spacing": "error",
      "linebreak-style": "error",
      "lines-between-class-members": "error",
      "max-len": [
        "error",
        { code: 250, ignoreUrls: true, ignoreStrings: true },
      ],
      "new-cap": "error",
      "new-parens": "error",
      "no-array-constructor": "error",
      "no-lonely-if": "error",
      "no-mixed-operators": "error",
      "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],
      "no-nested-ternary": "error",
      "no-new-object": "error",
      "no-trailing-spaces": "error",
      "no-unneeded-ternary": "error",
      "object-curly-newline": ["error", { multiline: true, consistent: true }],
      "object-curly-spacing": "error",
      "object-property-newline": [
        "error",
        { allowAllPropertiesOnSameLine: true },
      ],
      "one-var": ["error", "never"],
      "operator-linebreak": "error",
      "padded-blocks": ["error", "never"],
      "prefer-object-spread": "error",
      "quote-props": ["error", "as-needed"],
      quotes: ["error", "single", { avoidEscape: true }],
      semi: ["error", "always"],
      "semi-spacing": "error",
      "semi-style": "error",
      "space-before-blocks": "error",
      "space-before-function-paren": [
        "error",
        { anonymous: "always", named: "never", asyncArrow: "always" },
      ],
      "space-in-parens": "error",
      "space-infix-ops": "error",
      "space-unary-ops": "error",
      "spaced-comment": "error",
      "switch-colon-spacing": "error",
      "template-tag-spacing": "error",
      "unicode-bom": "error",
      "wrap-regex": "error",
    },
  },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      // Basic JavaScript rules for non-TypeScript files
      "no-var": "error",
      "prefer-const": "error",
      "no-console": "warn",
      "no-debugger": "error",
    },
  }
);
