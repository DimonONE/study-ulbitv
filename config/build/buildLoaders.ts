import { RuleSetRule } from "webpack";

export function buildLoaders(): RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const cssLoaders = {
    test: /\.s[ac]ss$/i,
    use: ["style-loader", "css-loader", "sass-loader"],
  };

  return [
    // послєдоватєльность лоадеру має значення. Тому виносимо в окремі константи
    typescriptLoader,
    cssLoaders,
  ];
}
