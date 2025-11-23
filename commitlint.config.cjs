module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [2, "always", ["feat", "fix", "docs"]],
    "scope-enum": [2, "always", ["ui", "env", "test"]],
    "scope-empty": [2, "never"],
    "subject-empty": [2, "never"],

    // test
  },
};
