// entry ==> output (bundle.js) nerede?
const path = require("path");

module.exports = {
	entry: "./src/app.js",
	output: {
		path: path.join(__dirname + "/public/"),
		filename: "bundle.js",
	},
	module: {
		rules: [
			{
				loader: "babel-loader",
				test: /\.js$/,
				exclude: /node_modules/,
			},
			{   
                test:/\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
		],
	},
	devtool: "eval-cheap-module-source-map", //hataları sourcemap kullanarak direkt olarak component kodlarında gösterir..
	devServer: {
		// development sırasında server oluşturmak için...
		contentBase: path.join(__dirname, "public"),
		port: 3000,
	},
};

// loader
