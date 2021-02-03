// utility modules
const path = require('path');
const webpack = require('webpack');

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    // start file
    entry: {
        index: './index.jsx'
    },
    // field with index.js
    context: path.resolve(__dirname, "src"),
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        historyApiFallback: {
            index: 'index.html' //при ошибке перехода переходить на страницу по-умолчанию 
            //historyApiFallback: {
            //index: 'index.html'
            //},
        }
    },
    // rules for converting docs
    module: {
        rules: [{
            test: /\.jsx?$/,
            include: path.resolve(__dirname, 'src'),
            loader: 'babel-loader',
            exclude: path.resolve(__dirname, 'node_modules'),
            options: {
                presets: ['@babel/env', '@babel/react'],
                plugins: ['@babel/plugin-proposal-class-properties']
            }
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }), // очистка доп. модулей
        new HtmlWebpackPlugin({
            template: 'index.html' // генерация Html
        }),
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};