const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');
const rules = require('./rules');

module.exports = {
    context: paths.contextPath,
    entry: {
        main: paths.entryPath,
    },
    module: {
        rules
    },
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['*', '.js', '.scss', '.css']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: paths.templatePath,
        }),
        new webpack.ProvidePlugin({
            m: 'mithril' //Global access
        }),
    ]
};
