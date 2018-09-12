const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: resolve(__dirname, 'src'),
    entry: {
        main: './index.js',
    },
    output: {
        path: resolve(__dirname, 'dist'),
        filename: '[name]-bundle.js',
        chunkFilename: '[name]-chunk.js',
    },
    module: {
        rules: [{
            test: /\.html$/,
            loader: 'html-loader',
            options: {
                interpolate: true,
            },
        }, {
            test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                publicPath: '../fonts/',
                outputPath: 'fonts/',
            },
        }, {
            test: /\.(png|jpg|gif)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                publicPath: '../images/',
                outputPath: 'images/',
            },
        }, {
            test: /\.js$/,
            include: resolve(__dirname, 'src/'),
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env'],
                    plugins: [
                        ['transform-react-jsx', {
                            'pragma': 'm',
                        }],
                    ],
                },
            }],
        }],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
        new webpack.ProvidePlugin({
            m: 'mithril', //Global access
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
    ],
    optimization: {
        runtimeChunk: true,
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
};