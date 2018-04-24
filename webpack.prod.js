const path = require('path');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map',
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        })
    ]
});