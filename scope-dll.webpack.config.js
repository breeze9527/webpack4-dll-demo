const path = require('path');
const webpack = require('webpack');

const CWD = process.cwd();
const SCOPE_DLL_DIST = path.join(CWD, 'scope-dll');

module.exports = {
    mode: process.env.NODE_ENV,
    context: CWD,
    entry: [
        './deps/dep1',
        './deps/dep2'
    ],
    output: {
        path: SCOPE_DLL_DIST,
        filename: 'scope-dll.js',
        library: '[name]_[hash]'
    },
    devtool: false,
    plugins: [
        new webpack.DllPlugin({
            context: path.join(CWD, 'deps'),
            name: '[name]_[hash]',
            path: path.join(CWD, 'scope-dll/manifest.json')
        })
    ]
}
