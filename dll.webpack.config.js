const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');

const CWD = process.cwd();
const DLL_CTX = path.join(CWD, 'dll');

module.exports = {
    mode: process.env.NODE_ENV,
    context: CWD,
    entry: [
        /* 
            package names, E.g.:
            'react',
            'jquery'
        */
        './dep'
    ],
    devtool: false,
    // generate vendors file
    output: {
        path: DLL_CTX,
        filename: 'vendors.dll.js',
        library: '[name]_[hash]' // library name of dll bundle, same as DllPlugin option
    },
    plugins: [
        // generate manifest file
        new webpack.DllPlugin({
            context: DLL_CTX, // context of content in manifest
            name: '[name]_[hash]', // name of the exposed dll function (name in manifest.json)
            path: path.join(DLL_CTX, 'manifest.json') // output path
        }),
        new CleanPlugin('dll', {
            root: CWD,
            verbose: true
        })
    ]
}
