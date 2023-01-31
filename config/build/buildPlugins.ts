import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ProgressPlugin, WebpackPluginInstance } from "webpack";

interface BuildPluginsProps {
  path: string;
}

export function buildPlugins({
  path,
}: BuildPluginsProps): WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({ template: path }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "[id].css",
    }),
    new ProgressPlugin(),
  ];
}
