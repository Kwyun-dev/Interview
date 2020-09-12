const path = require("path"); //nodejs里面的基本包，用来处理路径
const VueLoaderPlugin = require("vue-loader/lib/plugin");
// const ExtractPlugin = require("extract-text-webpack-plugin");
const HTMLPlugin = require("html-webpack-plugin");
const { config } = require("process");
const webpack = require("webpack");

const isDev = process.env.NODE_ENV === "development";
if(isDev) {
    config.devServer = {
        port: 8000,
        host: '0.0.0.0',
        overlay: {
            errors: true,
        }
    }
}

//__dirname表示文件相对于工程的路径
module.exports = {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? '"development"': '"production"'
            }
        }),
        new VueLoaderPlugin(),
        new HTMLPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                // loader: ExtractPlugin.extract('style-loader', 'css-loader!sass-loader');
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            esModule: false,
                            limit: 1024 * 20,
                            name: '[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    mode: 'development'
}