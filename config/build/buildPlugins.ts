import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ProgressPlugin, DefinePlugin, WebpackPluginInstance } from "webpack";

interface BuildPluginsProps {
  path: string;
  isDev: boolean;
}

export function buildPlugins({
  path,
  isDev,
}: BuildPluginsProps): WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({ template: path }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "[id].css",
    }),
    new ProgressPlugin(),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
  ];
}
