const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: './dist/app.bundle.js'
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Custom template',
        minify: {
            collapseWhitespace: true
        },
        hash: true,
        template: './src/index.ejs', // Load a custom template (ejs by default see the FAQ for details)
    })],
};