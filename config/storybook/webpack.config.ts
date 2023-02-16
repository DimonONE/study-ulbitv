import path from 'path';
import webpack, { RuleSetRule } from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({config}: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: '',
        entry: '',
        html: '',
        srcPath: path.resolve(__dirname, '..', '..', 'src')
    };

    const cssLoader = buildCssLoader(true);

    config.resolve?.modules?.push(paths.srcPath);
    config.resolve?.extensions?.push('.ts', '.tsx');
    config.module?.rules?.push(cssLoader);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    config.module.rules = config.module?.rules?.map((rule: RuleSetRule) => {
        if(/svg/.test(rule.test as string)) {
            return {...rule, exclude: /\.svg/i}; 
        }

        return rule;
    });

    config.module?.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });

    return config;
};