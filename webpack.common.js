const {
    resolve,
} = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: resolve(__dirname, 'src'),
    entry: [
        './styles/vendor-scss.js',
        './index.js',
    ],
    output: {
        path: resolve(__dirname, 'dist/'),
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
            test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                publicPath: '../', // override the default path
                outputPath: 'fonts/',
            },
        }, {
            test: /\.(png|jpg|gif)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                publicPath: '../',
                outputPath: 'images/',
            },
        }, {
            test: /\.js$/,
            include: resolve(__dirname, 'src/'),
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'env', 'stage-3'],
                },
            }],
        }],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            //favicon: './styles/images/favicon.png',
        }),
        new webpack.ProvidePlugin({
            m: 'mithril', //Global access
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function(module) {
                return module.context && module.context.indexOf('node_modules') !== -1;
            },
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            minChunks: Infinity,
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
    ],
};