const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !=='production';
const path = require('path');

module.exports = {
    context: path.resolve(__dirname, '../'),
    entry: {
        'index' : './src/entry.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
        libraryTarget: 'umd',
        library: "TgBase"
    },
    resolve: {
        extensions: ['.vue', '.js', '.json'],
        alias:{
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname,'./src'),
        },
    },
    node: {
        setImmediate: false,
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.(png|jpe?g|gif|svg|mp4|webm|ogg|mp3|wav|flac|aac|woff2?|eot|ttf|otf)$/,
                loader: 'url-loader',
            },
            {
                test: /\.css$/,
                use: [
                    // devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.less/,
                use: [
                    // devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'style-loader' ,
                    'css-loader',
                    'postcss-loader',
                    'less-loader',

                ]
            },
        ]
    },

    plugins: [
        new VueLoaderPlugin(),
        // new MiniCssExtractPlugin({
        //     filename: devMode ? 'css/[name].css' : 'css/[name].[hash:8].css',
        //     chunkFilename: devMode ? 'css/[name].css' : 'css/[name].[hash:8].css',
        // })
    ],
};