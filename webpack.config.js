const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const AddAssertHtmlPlugin = require('add-asset-html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');

const CWD = process.cwd();
const DLL_CTX = path.join(CWD, 'dll');

module.exports = {
    mode: process.env.NODE_ENV,
    context: CWD,
    entry: [
        './index.js'
    ],
    devtool: false,
    output: {
        path: path.join(CWD, 'dist'),
        filename: '[name].[hash].js'
    },
    plugins: [
        // reference dll
        new webpack.DllReferencePlugin({
            context: DLL_CTX,
            manifest: require(path.join(DLL_CTX, 'manifest.json'))
        }),
        // generate index.html
        new HtmlPlugin({
            template: path.join(CWD, './index.html')
        }),
        // insert vendors.js into html
        new AddAssertHtmlPlugin({
            filepath: path.join(DLL_CTX, 'vendors.dll.js'),
            includeSourcemap: false
        }),
        new CleanPlugin('dist', {
            root: CWD,
            verbose: true
        })
    ]
}
