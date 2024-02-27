import * as prettier from "prettier";

const options: prettier.Options = {
  proseWrap: "always",
  trailingComma: "all",
  singleQuote: true,
  semi: false,
  plugins: ["prettier-plugin-tailwindcss"],
};

module.exports = options;
