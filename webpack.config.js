var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
//安装之后，在运行webpack的路径下，运行webpack-dev-server，就可以启动服务器，实现自动刷新
module.exports = {
    mode: 'development',
    entry: {
        index: './src/script/main.js',
        enter: './src/script/enter.js',
        register: './src/script/register.js',
        shoppingTrolley: './src/script/shopping-trolley.js',

    },
    output: {
        path: __dirname + '/build',		//必须指定绝对路径
        filename: 'js/[name].bundle.main.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            chunks: ['index'],
            inject: 'false'
        }),
        new HtmlWebpackPlugin({
            template: './src/html/enter.html',
            filename: 'html/enter.html',
            chunks: ['enter'],
            inject: 'false'
        }),
        new HtmlWebpackPlugin({
            template: './src/html/register.html',
            filename: 'html/register.html',
            chunks: ['register'],
            inject: 'false'
        }),
        new HtmlWebpackPlugin({
            template: './src/html/shopping-trolley.html',
            filename: 'html/shopping-trolley.html',
            chunks: ['shoppingTrolley'],
            inject: 'false'
        }),
        new CleanWebpackPlugin(['build'])

    ],
    module: {
        rules: [
            {
                test: /\.scss$/,	//扩展名为scss的文件
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", 	// translates CSS into CommonJS
                    "sass-loader" 	// compiles Sass to CSS, using Node Sass by default
                ]
            }
        ]
    }
};