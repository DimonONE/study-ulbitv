import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";

export function buildResolvers(options: BuildOptions): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
    mainFiles: ["index"],
    modules: [options.paths.srcPath, "node_modules"],
    alias: {},
    preferRelative: true,
  };
}
