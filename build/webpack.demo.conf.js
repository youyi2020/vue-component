const path = require('path');
const merge = require('webpack-merge');
const webpackDevConfig = require('./webpack.dev.conf');
const config = require('./config');
const htmlWebpackPlugin = require('html-webpack-plugin');

const webpackDemoConfig= merge(webpackDevConfig, {
    entry: path.resolve(config.examplesPath, 'index.js'),
    output: {
        filename: 'index.js',
        path: path.resolve(config.basePath, './dist'),
        publicPath: '/'
    },

    module: {
        rules: [{
            test: /\.md$/,
            use: [
            {
                loader: 'vue-loader'
            }, 
            {
                loader: 'vue-markdown-loader/lib/markdown-compiler',
                options: {
                    raw: true
                }
            }]
        }]
    }, 

    plugins: [
        new htmlWebpackPlugin({
            template: path.join(config.examplesPath, 'index.html'),
            favicon : path.join(config.examplesPath, 'favicon.ico'),
            inject: true
        })
    ]
});

module.exports = webpackDemoConfig;