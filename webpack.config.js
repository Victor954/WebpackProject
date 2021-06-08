const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const isProduction = process.env.ENV_NODE_MODE === 'production';
const isDevelopment = !isProduction;

module.exports = {
    context: path.resolve(__dirname,'src'),
    mode: 'development',
    entry: {
        main: './index.js'
    },
    output: {
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    optimization:{
        splitChunks:{
            chunks: 'all'
        },
        minimize: isDevelopment,
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin()
        ],
    },
    devtool: isDevelopment ? 'source-map' : false,
    devServer: {
        port: 7000
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },
            {
                test: '/\.css$/i',
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  MiniCssExtractPlugin.loader,
                  "css-loader",
                  {
                    loader: "sass-loader",
                    options: {
                      // Prefer `dart-sass`
                      implementation: require("sass"),
                    },
                  }
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
            minify: {
                collapseWhitespace: isDevelopment
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename:'[name].[contenthash].css'
        }),
        new CopyWebpackPlugin({
            patterns:[
            {
                from: path.resolve(__dirname,'src/favicon.ico'),
                to: path.resolve(__dirname,'dist')
            }]
        }),
        new ESLintPlugin({
            extensions: [`js`]
        })
    ]
}