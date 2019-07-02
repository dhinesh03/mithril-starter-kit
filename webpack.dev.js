const webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
            test: /\.(sa|sc|c)ss$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                    hmr: true,
                    // if hmr does not work, this is a forceful method.
                    reloadAll: true,
                },
            }, {
                loader: 'css-loader',
                options: { sourceMap: true },
            }, {
                loader: 'postcss-loader',
            }, {
                loader: 'sass-loader',
                options: { sourceMap: true },
            }],
        }, {
            test: /\.js$/,
            enforce: 'pre',
            exclude: /node_modules/,
            loader: 'eslint-loader',
            options: {
                cache: true,
                configFile: '.eslintrc.js',
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
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[id].css',
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
});