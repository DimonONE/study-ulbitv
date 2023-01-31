import { RuleSetRule } from "webpack"

export function buildLoaders(): RuleSetRule[] {
  
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  return [
    // послєдоватєльность лоадеру має значення. Тому виносимо в окремі константи
    typescriptLoader
  ]
};