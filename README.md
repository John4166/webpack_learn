#webpack2.0入门教程

### 借鉴慕课网scott老师的[《webpack深入与实战》](http://www.imooc.com/learn/802)视频教程


### 如何运行
将本项目下载的本地.

> 1. 安装nodejs
> 2. 配置node环境变量(百度一下)
> 3. 安装git(最好安装一下，比命令行好用很多)
> 4. 命令行进入本案例目录(打开文件夹右键打开命令(或git bash here))
> 5. 输入命令npm install(最好使用cnpm淘宝镜像,安装cnpm方法百度)
> 6. 输入命令npm run demo1 (可运行demo1~7,原因稍后解释)

##webpack安装
###本地安装
1.打开git命令行工具，输入
```
mkdir webpack2 && cd webpack2
npm init -y
```
2.全局安装（这样才能使用webpack命令）
`npm i -g webpack

3.局部安装
`npm i --save-dev webpack`

输入`webpack -v` 出现版本号表示安装成功

网络没什么问题基本都能安装成功，网络慢的话建议使用cnpm


###demo1

安装好webpack,就可以测试

webpack编译方式有两种

1.直接命令行输入
`webpack index.js dist/bundle.js`
index.js是入口文件， dist/bundle.js是输出路径和输出文件

2.配置webpack.config.js
在根目录下，建立webpack.config.js文件

####最简单的webpack.config.js文件如下
```
module.exports={
    entry:'index.js',
    output:{
        filename:'bundle.js',
        path:'./dist'
    }
};
```


