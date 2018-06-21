const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        hot: true,
        contentBase: './dist',
        port: 3000,
        proxy: {
            '/api': 'http://localhost:3001',
        },
        /*overlay: {
            errors: true,
            warnings: true,
        },*/
    },
    module: {
        rules: [{
            test: /(\.css|\.scss)$/,
            use: [{
                loader: 'css-hot-loader',
            }].concat(ExtractTextPlugin.extract({
                use: [{
                    loader: 'css-loader',
                    options: { sourceMap: true },
                }, {
                    loader: 'sass-loader',
                    options: { sourceMap: true },
                }],
                // use style-loader in development
                fallback: 'style-loader',
            })),
        }, {
            test: /\.js$/,
            enforce: 'pre',
            exclude: /node_modules/,
            loader: 'eslint-loader',
            options: {
                cache: true,
                emitWarning: true,
                // Fail only on errors
                failOnWarning: false,
                failOnError: false,
                // Toggle autofix
                fix: false,
                formatter: require('eslint/lib/formatters/stylish'),
            },
        }],
    },
    plugins: [
        new ExtractTextPlugin({
            filename: (getPath) => getPath('css/[name].css'),
            allChunks: true,
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
});