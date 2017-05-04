const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const isProd = process.env.NODE_ENV === 'production'; // true / false
const cssDev = ['style-loader', 'css-loader', 'sass-loader'];
const cssProd = ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader:['css-loader','sass-loader'],
                    publicPath: '/dist'
                });
var cssConfig = isProd ? cssProd : cssDev;
module.exports = {
    entry: {
        app: './src/app.js',
        contact: './src/contact.js'
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: './js/[name].bundle.js'
    },
    module:{
        rules:[{
            test: /\.scss/,
            use: cssConfig
        },
        {        
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        },
        {        
            test: /\.(jpe?g|gif|png|svg)$/i,
            use: [
                'file-loader?name=[name].[ext]&outputPath=images/',
                {
                    loader: 'image-webpack-loader',
                    query: {
                    progressive: true,
                    optimizationLevel: 7,
                    interlaced: false,
                    pngquant: {
                        quality: '65-90',
                        speed: 4
                    },
                    mozjpeg: {
                        quality: 65
                    },
                    svgo:{
                    plugins: [
                        {
                        removeViewBox: false
                        },
                        {
                        removeEmptyAttrs: false
                        }
                    ]
                    }
                }
            }]
        }]
    },
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        compress: true,
        hot: true,
        port: 9000,
        stats: "errors-only",
        open: true
    },
    plugins: [
    new HtmlWebpackPlugin({
        title: 'Custom template',
        minify: {
            collapseWhitespace: false
        },
        hash: true,
        excludeChunks: ['contact'],
        template: './src/index.ejs', // Load a custom template (ejs by default see the FAQ for details)
    }),
    new HtmlWebpackPlugin({
        title: 'Contact page',
        hash: true,
        chunks: ['contact'],
        filename: "contact.html",
        template: './src/contact.ejs',
    }),
    new ExtractTextPlugin({
        filename: "styles.css",
        disable: !isProd,
        allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    ],
};