var webpack = require('webpack');
module.exports = {
	lintOnSave: false,
	filenameHashing: false,
	publicPath: process.env.NODE_ENV === "production" ? "./" : "./",

  devServer: {
    index: "index.html",
    open: true,
    port: 8080, // 埠號
    host: "localhost",
    // historyApiFallback: {
    //  index: '/front.html'
    //与output的publicPath有关(HTMLplugin生成的html默认为index.html)
    // },
    proxy: {
     "/api": {
       target: "http://example.com/api/",
       ws: true,
       changOrigin: true,
       pathRewrite: {
         "^/api": "",
       },
     },
    }
}

}
