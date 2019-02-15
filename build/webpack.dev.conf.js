const base = require('./webpack.base.conf.js');
const merge = require('webpack-merge');
const webpack = require('webpack');

const config = merge(base, {
    mode: 'development',
    optimization: {
        minimize: false,
    },
    performance: {
        hints: false,
    },
    output: {
        publicPath: '/',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        port: '8080',
        host:'localhost',
        compress: true,
        historyApiFallback: true,
        hot: true,
        inline : true,
        overlay : true,
        stats : 'normal',
        https: false,
        noInfo: true,
        open: true,
        proxy: {}
    }
});

module.exports = config;
