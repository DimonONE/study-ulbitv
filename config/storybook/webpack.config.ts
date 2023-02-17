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

    if(config?.module?.rules) {
        config.module.rules = config.module?.rules?.map((rule: RuleSetRule | '...') => {
            const ruleTestSvg = rule !== '...' 
                && rule.test instanceof RegExp 
                && rule.test.toString().includes('svg');

            if(ruleTestSvg) {
                return {...rule, exclude: /\.svg$/i}; 
            }
    
            return rule;
        });
    
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });
    }

    return config;
};