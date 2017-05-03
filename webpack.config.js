const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'app.bundle.js'
    },
    module:{
        rules:[{
            test: /\.scss/,
            use: ExtractTextPlugin.extract({
                fallbackLoader: 'style-loader',
                loader:['css-loader','sass-loader'],
                publicPath: '/dist'
            })
        }]
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Custom template',
        minify: {
            collapseWhitespace: false
        },
        hash: true,
        template: './src/index.ejs', // Load a custom template (ejs by default see the FAQ for details)
    }),
    new ExtractTextPlugin({
        filename: "styles.css",
        disable: false,
        allChunks: true
    })],
};