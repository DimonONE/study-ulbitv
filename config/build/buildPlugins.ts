import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import { ProgressPlugin, WebpackPluginInstance } from "webpack";

interface BuildPluginsProps {
  path: string
}

export function buildPlugins({ path }: BuildPluginsProps): WebpackPluginInstance[] {

  return [
    new HtmlWebpackPlugin({ template: path }),
    new ProgressPlugin(),
  ]
};