import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // Plain apostrophes and quotes in JSX text render fine; escaping them
      // all would only churn the page copy.
      "react/no-unescaped-entities": "off",
      // Performance hint (React Compiler rule), not a bug: keep it visible
      // as a warning without failing CI.
      "react-hooks/set-state-in-effect": "warn",
    },
  },
  {
    // Plain Node scripts (build helpers) use CommonJS.
    files: ["**/*.js", "**/*.cjs"],
    rules: { "@typescript-eslint/no-require-imports": "off" },
  },
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Vendored / minified browser scripts.
    "public/**",
  ]),
]);
