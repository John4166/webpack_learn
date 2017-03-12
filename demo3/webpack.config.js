/**
 * Created by Administrator on 2017/2/27. 引入html生产插件 html-webpack-plugin
 */
var htmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    entry:{
        main:'./main.js'
        ,mian2:'./mian2.js'
    },
    output:{
        path:'./dist',
        filename:'js/[name]-bundle.js'
        //,publicPath:'http://cdn.com' //上线，可以应用绝对公用路径
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'./index.html'
            ,filename:'html/index-[hash].html'
            ,inject:'head'     //生成的js文件放在html的head还是body,false表示禁用
            ,title:"plugin set title : webpack is good"
            ,date:new Date()
            ,minify:{    //压缩html
                removeComments:true
                ,collapseWhitespace:true
            }

        })
    ]
};