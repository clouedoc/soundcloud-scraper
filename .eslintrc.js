// This is a workaround for https://github.com/eslint/eslint/issues/3458
require('@rushstack/eslint-config/patch/modern-module-resolution');

module.exports = {
  extends: ["@rushstack/eslint-config/profile/node", "@rushstack/eslint-config/profile/mixins/friendly-locals", "@rushstack/eslint-config/mixins/packlets"],  // <---- put your profile string here
  parserOptions: { tsconfigRootDir: __dirname }
};