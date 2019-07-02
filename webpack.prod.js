const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.(sa|sc|c)ss$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
            }, {
                loader: 'css-loader',
                options: { sourceMap: true },
            }, {
                loader: 'postcss-loader',
            }, {
                loader: 'sass-loader',
                options: { sourceMap: true },
            }],
        }],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name]-[hash].css',
            chunkFilename: 'css/[id]-[hash].css',
        }),
    ],
    optimization: {
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: true,
            }),
            new OptimizeCSSAssetsPlugin({}),
        ],
    },
});