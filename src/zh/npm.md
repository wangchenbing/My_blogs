---
title: npm/nvm
date: 2022-08-05
tag:
 - npm/nvm
---
## npm
```js
// 查看npm当前镜像源
npm config get registry  

// 设置npm镜像源为淘宝镜像
npm config set registry https://registry.npm.taobao.org/  

//清除npm缓存 
npm cache clean --force
```
### 镜像源地址
```js
npm --- https://registry.npmjs.org/

cnpm --- https://r.cnpmjs.org/

taobao --- https://registry.npm.taobao.org/

nj --- https://registry.nodejitsu.com/

rednpm --- https://registry.mirror.cqupt.edu.cn/

npmMirror --- https://skimdb.npmjs.com/registry/

deunpm --- http://registry.enpmjs.org/
```
### 登录npm
```
  npm login 

  wangchenbing-js

  Houhuiyouqi1258

  wcb_houhuiyouqi@163.com
```



## nvm

安装nvm
brew install nvm

成功后
echo "source $(brew --prefix nvm)/nvm.sh" >> .bash_profile

修改后需要重新定向来源
. ~/.bash_profile
```js
nvm list 是查找本电脑上所有的node版本
nvm list 查看已经安装的版本
nvm list installed 查看已经安装的版本
nvm list available 查看网络可以安装的版本
nvm ls-remote查看可安装的版本
nvm install <version> 安装指定版本node
nvm use <version> 切换使用指定的版本node
nvm ls 列出所有版本
nvm current显示当前版本
nvm alias <name> <version> ## 给不同的版本号添加别名
nvm unalias <name> ## 删除已定义的别名
nvm reinstall-packages <version> ## 在当前版本node环境下，重新全局安装指定版本号的npm包
nvm on 打开nodejs控制
nvm off 关闭nodejs控制
nvm proxy 查看设置与代理
nvm uninstall <version> 卸载制定的版本
nvm use [version] [arch] 切换制定的node版本和位数
nvm root [path] 设置和查看root路径
nvm version 查看当前的版本

// nvm下载慢切换淘宝源
// NVM_NODEJS_ORG_MIRROR=https://npm.taobao.org/mirrors/node

//vscode下载慢
// 将 链接中 http://az764295.vo.msecnd.net 
// 替换为 http://vscode.cdn.azure.cn
```