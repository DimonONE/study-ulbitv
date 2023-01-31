import webpack from "webpack";
import path from "path";
import { BuildEnv, BuildPaths } from "./config/build/types/config";
import { buildConfigOptions } from "./config/build/buildConfigOptions";

export default (env: BuildEnv) => {
  const PATHS: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
  };

  const mode = env.mode || "development";
  const isDev = mode === "development";
  const PORT = env.port || 3000;

  const config: webpack.Configuration = buildConfigOptions({
    mode,
    isDev,
    paths: PATHS,
    port: PORT,
  });

  return config;
};
