const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: './src/app.js',
        contact: './src/contact.js'
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].bundle.js'
    },
    module:{
        rules:[{
            test: /\.scss/,
            use: ExtractTextPlugin.extract({
                fallbackLoader: 'style-loader',
                loader:['css-loader','sass-loader'],
                publicPath: '/dist'
            })
        },
        {        
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }]
    },
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        compress: true,
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
        disable: false,
        allChunks: true
    })],
};