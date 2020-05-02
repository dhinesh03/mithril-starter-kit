const { resolve } = require('path');

const contextPath = resolve(__dirname, '../', '../', 'src');
const outputPath = resolve(__dirname, '../', '../', 'dist');
const bundleReportPath = resolve(outputPath, 'report.html');
const entryPath = resolve(contextPath, 'index.js');
const templatePath = resolve(contextPath, 'index.html');
const envDevPath = resolve(__dirname, '../', 'environment', '.env.development');
const envProdPath = resolve(__dirname, '../', 'environment', '.env.production');
const envPath = resolve(__dirname, '../', 'environment', '.env');
const eslintConfigPath = resolve(__dirname, '../', '../', '.eslintrc.js');
const nodeModulesPath = resolve(__dirname, '../', '../', 'node_modules');
const faviconPath = resolve(contextPath, 'images', 'favicon.png');

module.exports = {
    contextPath,
    outputPath,
    bundleReportPath,
    entryPath,
    templatePath,
    envDevPath,
    envProdPath,
    envPath,
    eslintConfigPath,
    nodeModulesPath,
    faviconPath,
};
