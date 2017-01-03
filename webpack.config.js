var path = require("path");
var webpack = require("webpack")
var TransferWebpackPlugin = require('transfer-webpack-plugin');
require('es6-promise').polyfill()

var isDebug = function () {
  	return process.env.NODE_MODE != 'release';
};

module.exports = {
	//设定入口文件（entry）配置 webpack 来指明它的位
	entry: {
		"example":'./src/entrys/appEntry',
	},
	
	output:{
		path: path.join(__dirname, 'dist'),//路径, // 输出文件的保存路径
        filename: "[name].min.js",
    	chunkFilename: "[name].[chunkhash].min.js",

        library: ["KDA"],
        libraryTarget: "umd"
	},

	//压缩代码
	plugins: isDebug() ? [] : [
		new webpack.DefinePlugin({
			"process.env": { 
				NODE_ENV: JSON.stringify("production") 
			}
		}),
	    new webpack.optimize.UglifyJsPlugin({
	       	compress: {
	         	warnings: false
	       	}
	    })
	],

  	//检查更新
	watch: true,
	
	module:{
		preLoaders: [
			/*
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|lib)/, // do not lint third-party code
				loader: 'eslint-loader'
			}
			*/
		],
		loaders: [
			//js|jsx
			{
				test: /\.(js|jsx)$/, 
				exclude: /node_modules/,
				loader: "babel"
			},
			//css|sass
	      	{
	      		test: /\.(css|scss)$/, 
	      		loader: "style!css!sass"
	      	},
	      	//img
	      	{
	      		test: /\.(png|jpe?g|gif)$/, 
	      		loader: "url",
	      		query: {
		          limit: 20000//小于10kb才会转成base
		        }
	      	},
	      	//html
	      	{
	      		test:/\.html$/,
	      		loader:'html'
	      	},

			//bootstrap fonts
			{ test: /\.(woff|woff2)$/,  loader: "url-loader?limit=10000&mimetype=application/font-woff" },
			{ test: /\.ttf$/,    loader: "file-loader" },
			{ test: /\.eot$/,    loader: "file-loader" },
			{ test: /\.svg$/,    loader: "file-loader" },
		]
	},

	resolve: {
		root: [path.join(__dirname, "./node_modules"), path.join(__dirname, "./src")]
  	},

  	//源码关联
  	devtool: isDebug() ? 'inline-source-map' : null,

	//配置服务器信息
	devServer: {
		contentBase: "./demo/",
		publicPath: "/dist/",

	    historyApiFallback: true,
	    hot: true,//自动刷新
	    inline: true,//内联模式，该模式下修改代码后，webpack将自动打包并且刷新浏览器
	    progress: true,
        host: "localhost",
	    port: 3006 //端口
	}
}
