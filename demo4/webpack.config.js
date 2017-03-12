/**
 * Created by Administrator on 2017/2/27.一个入口文件，输出多个html文件，打包输出
 */
var htmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    entry:{
        a:'./a.js'
        ,b:'./b.js'
        ,c:'./c.js'
    },
    output:{
        path:'./dist',
        filename:'js/[name]-bundle.js'
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'./index.html'
            ,filename:'html/a.html'
            ,title:'this is a.html'
            ,chunks:['a','b']


        })
        ,new htmlWebpackPlugin({
            template:'./index.html'
            ,filename:'html/b.html'
            ,title:'this is b.html'
            ,chunks:['c','b']

        })
    ]
};