import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import {
    ProgressPlugin,
    DefinePlugin,
    type WebpackPluginInstance,
    HotModuleReplacementPlugin,
} from 'webpack';

type BuildPluginsProps = {
	path: string;
	isDev: boolean;
};

export function buildPlugins({
    path,
    isDev,
}: BuildPluginsProps): WebpackPluginInstance[] {
    const plugins = [
        new HtmlWebpackPlugin({template: path}),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: '[id].css',
        }),
        new ProgressPlugin(),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
    ];

    if (isDev) {
        plugins.push(new HotModuleReplacementPlugin());
        plugins.push(new ReactRefreshWebpackPlugin());
    }

    return plugins;
}
