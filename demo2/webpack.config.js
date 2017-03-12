/**
 * Created by Administrator on 2017/2/27.多文件 统一出口输出文件配置
 */
module.exports={
    entry:{
        a:'./a.js',
        c:'./c.js',
        b:'./b.js',
        main:'./main.js',
        index2:'./index2.js'
    },
    output:{
        path:'./dist',
        filename:'[name].bundle.js'
    }
};