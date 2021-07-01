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

const getOptimization = () => {

    return {
        splitChunks:{
            chunks: 'all'
        },
        minimize: isDevelopment,
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin()
        ],
    }
}

const getLoaders = () => {

    const getJsLoaders = () => {

        return [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }];
    }

    const getStyleLoaders = () => {

        return [{
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
        }];
    }

    const getFileLoaders = () => {

        return [{
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            use: ['file-loader']
        }]
    }

    return [
        ...getJsLoaders(),
        ...getStyleLoaders(),
        ...getFileLoaders()
    ]
}

const getPlugins = () => {

    const getPluginsDevelopment = () => {

        return [
            new ESLintPlugin({
                extensions: [`js`]
            })
        ]
    }

    const getPluginsDefault = () => {

        return [
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
            })
        ]
    }

    if (isDevelopment) {
        return [ ...getPluginsDefault() ,...getPluginsDevelopment() ];
    }

    return getPluginsDefault();
}

const sourceMap = isDevelopment ? 'source-map' : false;

module.exports = {
    context: path.resolve(__dirname,'src'),
    mode: 'development',
    entry: {
        main: './index.js'
    },
    output: {
        publicPath: "/",
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    optimization:getOptimization(),
    devtool: sourceMap,
    devServer: {
        port: 7000,
        historyApiFallback: true
    },
    module: {
        rules: getLoaders()
    },
    plugins: getPlugins()
}