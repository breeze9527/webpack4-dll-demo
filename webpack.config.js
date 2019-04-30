const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

const CWD = process.cwd();
const DLL_DIST = path.join(CWD, 'dll');
const SCOPE_DLL_DIST = path.join(CWD, 'scope-dll');

module.exports = {
    mode: process.env.NODE_ENV,
    context: CWD,
    entry: './index',
    devtool: false,
    output: {
        path: path.join(CWD, 'dist'),
        filename: '[name].[hash].js'
    },
    plugins: [
        // reference dll
        new webpack.DllReferencePlugin({
            manifest: path.join(DLL_DIST, 'manifest.json')
        }),
        new webpack.DllReferencePlugin({
            scope: 'scoped',
            manifest: path.join(SCOPE_DLL_DIST, 'manifest.json')
        }),
        // generate index.html
        new HtmlPlugin({
            template: path.join(CWD, './index.html')
        }),
        // insert vendors.js into html
        new AddAssetHtmlPlugin([
            {
                filepath: path.join(DLL_DIST, 'dll.js'),
                includeSourcemap: false
            },
            {
                filepath: path.join(SCOPE_DLL_DIST, 'scope-dll.js'),
                includeSourcemap: false
            }
        ])
    ]
}
