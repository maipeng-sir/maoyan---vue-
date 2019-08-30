const path = require('path');
module.exports={
    publicPath:"maoyan",  //基本路径
    devServer:{
        proxy:{
            "/api":{
                target:"http://39.97.33.178",
                changeOrigin:true   //允许跨域
            }
        }
    },
    configureWebpack:{
        resolve:{
            alias:{      //别名配置
                "@":path.join(__dirname,"./src"),
                "api":path.join(__dirname,"./src/api"),
                "components":path.join(__dirname,"./src/components"),
                "lib":path.join(__dirname,"./src/lib"),
                "router":path.join(__dirname,"./src/router"),
                "store":path.join(__dirname,"./src/store"),
                "utils":path.join(__dirname,"./src/utils"),
                "views":path.join(__dirname,"./src/views")
            }
        }
    }
}