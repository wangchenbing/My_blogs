<template><div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 查看npm当前镜像源</span>
npm config <span class="token keyword">get</span> registry  

<span class="token comment">// 设置npm镜像源为淘宝镜像</span>
npm config <span class="token keyword">set</span> registry https<span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">registry.npm.taobao.org</span><span class="token regex-delimiter">/</span></span>  

<span class="token comment">//清除npm缓存 </span>
npm cache clean <span class="token operator">--</span>force
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="镜像源地址" tabindex="-1"><a class="header-anchor" href="#镜像源地址" aria-hidden="true">#</a> 镜像源地址</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm <span class="token operator">--</span><span class="token operator">-</span> https<span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">registry.npmjs.org</span><span class="token regex-delimiter">/</span></span>

cnpm <span class="token operator">--</span><span class="token operator">-</span> https<span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">r.cnpmjs.org</span><span class="token regex-delimiter">/</span></span>

taobao <span class="token operator">--</span><span class="token operator">-</span> https<span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">registry.npm.taobao.org</span><span class="token regex-delimiter">/</span></span>

nj <span class="token operator">--</span><span class="token operator">-</span> https<span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">registry.nodejitsu.com</span><span class="token regex-delimiter">/</span></span>

rednpm <span class="token operator">--</span><span class="token operator">-</span> https<span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">registry.mirror.cqupt.edu.cn</span><span class="token regex-delimiter">/</span></span>

npmMirror <span class="token operator">--</span><span class="token operator">-</span> https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>skimdb<span class="token punctuation">.</span>npmjs<span class="token punctuation">.</span>com<span class="token operator">/</span>registry<span class="token operator">/</span>

deunpm <span class="token operator">--</span><span class="token operator">-</span> http<span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">registry.enpmjs.org</span><span class="token regex-delimiter">/</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="登录npm" tabindex="-1"><a class="header-anchor" href="#登录npm" aria-hidden="true">#</a> 登录npm</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>  npm login 

  wangchenbing-js

  Houhuiyouqi1258

  wcb_houhuiyouqi@163.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


