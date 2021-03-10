const fs = require("fs");

module.exports = {
  syntax: "postcss-scss",
  parser: "postcss-scss",
  plugins: [
    require("postcss-easy-import")({
      extensions: ".pcss",
    }),
    require("autoprefixer")({
      cascade: false,
    }),
    require("postcss-nested"),
    require("cssnano"),
  ],
};
