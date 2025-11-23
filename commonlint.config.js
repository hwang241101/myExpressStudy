import { rules } from "eslint-config-airbnb-base";

export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [2, "always", ["feat", "fix", "docs"]],
    "scope-enum": [2, "always", ["ui", "logic", "env"]],
    "scope-empty": [2, "never"],
    "subject-empty": [2, "never"],
  },
};
// test
