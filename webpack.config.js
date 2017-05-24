const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const isProd = process.env.NODE_ENV === 'production'; // true / false
const cssDev = ['style-loader', 'css-loader', 'sass-loader'];
const cssProd = ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use:['css-loader','sass-loader'],
                    publicPath: '/dist'
                });
var cssConfig = isProd ? cssProd : cssDev;
module.exports = {
    entry: {
        app: './src/app.js',
        contact: './src/contact.js',
        lsn_01: './src/prezent/js/main.js'
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: './js/[name].bundle.js'
    },
    module:{
        rules:[{
            test: /\.(scss|sass)$/,
            use: cssConfig
        },
        {        
            test: /\.jsx?$/,
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
        port: 9001,
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
    new HtmlWebpackPlugin({
        title: 'lesson 01',
        hash: true,
        chunks: ['lsn_01'],
        filename: "./prezent/index.html",
        template: './src/prezent/index.html',
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