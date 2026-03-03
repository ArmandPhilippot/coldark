/**
 * @type {import('lint-staged').Configuration}
 */
const config = {
  "*": [
    "cspell --no-must-find-files --no-progress",
    "prettier --write --ignore-unknown",
  ],
};

export default config;
