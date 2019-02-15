const base = require('./webpack.base.conf.js');
const merge = require('webpack-merge');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

const config = merge(base, {
    mode: 'production',
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCssAssetsPlugin({
                cssProcessor: require('cssnano'),
                cssProcessorPluginOptions: {
                  preset: ['default', { discardComments: { removeAll: true }}],
                },
                canPrint: false,
                cssProcessorOptions: {safe: false}
            }),
        ],
    },
    output: {
        publicPath: './',
    },
    plugins: [
        new CleanWebpackPlugin(['dist'],{
            root: path.resolve(__dirname, '../'),
        }),
    ]
});


module.exports = config;