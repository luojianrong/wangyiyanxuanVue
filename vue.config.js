const path = require("path")
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    outputDir:"sellerDist",  //打包输出的文件名
    lintOnSave: false,    //是否开启eslint
    devServer:{   //是否开启自动打开浏览器
        open:true
    },
    configureWebpack:{
        //原生webpack的所有配置
        devServer:{  //配置端口号
            port:8088,
            proxy: {
                '/4000': {   //跨域键名
                    target: 'http://localhost:4000',  //目标服务器地址
                    changeOrigin: true,
                    pathRewrite: {
                        '^/4000': '' //重写路径
                    },
                }
            }
        },
        resolve: {
            //配置别名
            alias: {
                'components': resolve('src/components'),
                "pages":resolve('src/pages')
            }
        },
    }
}
