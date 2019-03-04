const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    module: {
        rules: [{
            test: /(\.css|\.scss)$/,
            use: ExtractTextPlugin.extract({
                use: [{
                    loader: 'css-loader',
                    options: { sourceMap: true },
                }, {
                    loader: 'postcss-loader',
                }, {
                    loader: 'sass-loader',
                    options: { sourceMap: true },
                }],
            }),
        }],
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin({
            filename: (getPath) => getPath('css/[name]-[hash].css'),
            allChunks: true,
        }),
    ],
    optimization: {
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: true,
            }),
        ],
    },
});