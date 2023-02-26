<template><div><h2 id="npm" tabindex="-1"><a class="header-anchor" href="#npm" aria-hidden="true">#</a> npm</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 查看npm当前镜像源</span>
npm config <span class="token keyword">get</span> registry  

<span class="token comment">// 设置npm镜像源为淘宝镜像</span>
npm config <span class="token keyword">set</span> registry https<span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">registry.npm.taobao.org</span><span class="token regex-delimiter">/</span></span>  

<span class="token comment">//清除npm缓存 </span>
npm cache clean <span class="token operator">--</span>force
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="镜像源地址" tabindex="-1"><a class="header-anchor" href="#镜像源地址" aria-hidden="true">#</a> 镜像源地址</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm <span class="token operator">--</span><span class="token operator">-</span> https<span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">registry.npmjs.org</span><span class="token regex-delimiter">/</span></span>

cnpm <span class="token operator">--</span><span class="token operator">-</span> https<span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">r.cnpmjs.org</span><span class="token regex-delimiter">/</span></span>

taobao <span class="token operator">--</span><span class="token operator">-</span> https<span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">registry.npm.taobao.org</span><span class="token regex-delimiter">/</span></span>

nj <span class="token operator">--</span><span class="token operator">-</span> https<span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">registry.nodejitsu.com</span><span class="token regex-delimiter">/</span></span>

rednpm <span class="token operator">--</span><span class="token operator">-</span> https<span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">registry.mirror.cqupt.edu.cn</span><span class="token regex-delimiter">/</span></span>

npmMirror <span class="token operator">--</span><span class="token operator">-</span> https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>skimdb<span class="token punctuation">.</span>npmjs<span class="token punctuation">.</span>com<span class="token operator">/</span>registry<span class="token operator">/</span>

deunpm <span class="token operator">--</span><span class="token operator">-</span> http<span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">registry.enpmjs.org</span><span class="token regex-delimiter">/</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="登录npm" tabindex="-1"><a class="header-anchor" href="#登录npm" aria-hidden="true">#</a> 登录npm</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>  npm login 

  wangchenbing-js

  Houhuiyouqi1258

  wcb_houhuiyouqi@163.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nvm" tabindex="-1"><a class="header-anchor" href="#nvm" aria-hidden="true">#</a> nvm</h2>
<p>安装nvm
brew install nvm</p>
<p>成功后
echo &quot;source $(brew --prefix nvm)/nvm.sh&quot; &gt;&gt; .bash_profile</p>
<p>修改后需要重新定向来源
. ~/.bash_profile</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>nvm list 是查找本电脑上所有的node版本
nvm list 查看已经安装的版本
nvm list installed 查看已经安装的版本
nvm list available 查看网络可以安装的版本
nvm ls<span class="token operator">-</span>remote查看可安装的版本
nvm install <span class="token operator">&lt;</span>version<span class="token operator">></span> 安装指定版本node
nvm use <span class="token operator">&lt;</span>version<span class="token operator">></span> 切换使用指定的版本node
nvm ls 列出所有版本
nvm current显示当前版本
nvm alias <span class="token operator">&lt;</span>name<span class="token operator">></span> <span class="token operator">&lt;</span>version<span class="token operator">></span> ## 给不同的版本号添加别名
nvm unalias <span class="token operator">&lt;</span>name<span class="token operator">></span> ## 删除已定义的别名
nvm reinstall<span class="token operator">-</span>packages <span class="token operator">&lt;</span>version<span class="token operator">></span> ## 在当前版本node环境下，重新全局安装指定版本号的npm包
nvm on 打开nodejs控制
nvm off 关闭nodejs控制
nvm proxy 查看设置与代理
nvm uninstall <span class="token operator">&lt;</span>version<span class="token operator">></span> 卸载制定的版本
nvm use <span class="token punctuation">[</span>version<span class="token punctuation">]</span> <span class="token punctuation">[</span>arch<span class="token punctuation">]</span> 切换制定的node版本和位数
nvm root <span class="token punctuation">[</span>path<span class="token punctuation">]</span> 设置和查看root路径
nvm version 查看当前的版本

<span class="token comment">// nvm下载慢切换淘宝源</span>
<span class="token comment">// NVM_NODEJS_ORG_MIRROR=https://npm.taobao.org/mirrors/node</span>

<span class="token comment">//vscode下载慢</span>
<span class="token comment">// 将 链接中 http://az764295.vo.msecnd.net </span>
<span class="token comment">// 替换为 http://vscode.cdn.azure.cn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


