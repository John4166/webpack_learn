/**
 * Created by Administrator on 2017/2/27.
 * 新增html模板应用，还可以应用其他模板引擎jade等，具体看webpack loader章节
 * 新增处理图片文件loader
 */

var htmlWebpackPlugin=require('html-webpack-plugin');

var path=require('path');
/****1****/
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports={
    entry:'./src/app.js',
    output:{
        path:'./dist',
        filename:'js/[name]-bundle.js'
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'./index.html'
            ,filename:'index.html'
            ,inject:'body'
        })
        /****1****/
        ,new ExtractTextPlugin({
            filename:"css/style-[name].css"
        })
        ,new ExtractTextPlugin({
            filename:'scss/[name].scss'
        })

    ]
    ,module:{
        rules:[
        {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:path.resolve(__dirname,'node_modules'),
                query:{
                    presets:['latest']
                 } //特殊，添加babel的toes5的转化

         }
        ,{
                test:/\html$/,
                use:"html-loader"
            }
        ,{
                test:/\.css$/,
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:'css-loader?importLoaders=1'
                })
            }
            ,{
                test:/\.scss$/,
                use:ExtractTextPlugin.extract(['css-loader?importLoaders=1','sass-loader'])
            }

            ,{
                test:/\.(png|jpg|gif|svg)$/i,
                use:['file-loader?name=assets/[name].[ext]']
                //增加参数，设置打包好的文件路径等 [hash:5]--5位hash值 [ext]-h
                //url-loader?limit=10000,小于10k的文件

            }
        ]
    }
};