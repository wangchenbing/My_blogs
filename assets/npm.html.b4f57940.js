import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as e}from"./app.8225ebca.js";const r={},p=e(`<h2 id="npm" tabindex="-1"><a class="header-anchor" href="#npm" aria-hidden="true">#</a> npm</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u67E5\u770Bnpm\u5F53\u524D\u955C\u50CF\u6E90</span>
npm config <span class="token keyword">get</span> registry  

<span class="token comment">// \u8BBE\u7F6Enpm\u955C\u50CF\u6E90\u4E3A\u6DD8\u5B9D\u955C\u50CF</span>
npm config <span class="token keyword">set</span> registry https<span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">registry.npm.taobao.org</span><span class="token regex-delimiter">/</span></span>  

<span class="token comment">//\u6E05\u9664npm\u7F13\u5B58 </span>
npm cache clean <span class="token operator">--</span>force
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u955C\u50CF\u6E90\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#\u955C\u50CF\u6E90\u5730\u5740" aria-hidden="true">#</a> \u955C\u50CF\u6E90\u5730\u5740</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm <span class="token operator">--</span><span class="token operator">-</span> https<span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">registry.npmjs.org</span><span class="token regex-delimiter">/</span></span>

cnpm <span class="token operator">--</span><span class="token operator">-</span> https<span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">r.cnpmjs.org</span><span class="token regex-delimiter">/</span></span>

taobao <span class="token operator">--</span><span class="token operator">-</span> https<span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">registry.npm.taobao.org</span><span class="token regex-delimiter">/</span></span>

nj <span class="token operator">--</span><span class="token operator">-</span> https<span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">registry.nodejitsu.com</span><span class="token regex-delimiter">/</span></span>

rednpm <span class="token operator">--</span><span class="token operator">-</span> https<span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">registry.mirror.cqupt.edu.cn</span><span class="token regex-delimiter">/</span></span>

npmMirror <span class="token operator">--</span><span class="token operator">-</span> https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>skimdb<span class="token punctuation">.</span>npmjs<span class="token punctuation">.</span>com<span class="token operator">/</span>registry<span class="token operator">/</span>

deunpm <span class="token operator">--</span><span class="token operator">-</span> http<span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">registry.enpmjs.org</span><span class="token regex-delimiter">/</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u767B\u5F55npm" tabindex="-1"><a class="header-anchor" href="#\u767B\u5F55npm" aria-hidden="true">#</a> \u767B\u5F55npm</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  npm login 

  wangchenbing-js

  Houhuiyouqi1258

  wcb_houhuiyouqi@163.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nvm" tabindex="-1"><a class="header-anchor" href="#nvm" aria-hidden="true">#</a> nvm</h2><p>\u5B89\u88C5nvm brew install nvm</p><p>\u6210\u529F\u540E echo &quot;source $(brew --prefix nvm)/nvm.sh&quot; &gt;&gt; .bash_profile</p><p>\u4FEE\u6539\u540E\u9700\u8981\u91CD\u65B0\u5B9A\u5411\u6765\u6E90 . ~/.bash_profile</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>nvm list \u662F\u67E5\u627E\u672C\u7535\u8111\u4E0A\u6240\u6709\u7684node\u7248\u672C
nvm list \u67E5\u770B\u5DF2\u7ECF\u5B89\u88C5\u7684\u7248\u672C
nvm list installed \u67E5\u770B\u5DF2\u7ECF\u5B89\u88C5\u7684\u7248\u672C
nvm list available \u67E5\u770B\u7F51\u7EDC\u53EF\u4EE5\u5B89\u88C5\u7684\u7248\u672C
nvm ls<span class="token operator">-</span>remote\u67E5\u770B\u53EF\u5B89\u88C5\u7684\u7248\u672C
nvm install <span class="token operator">&lt;</span>version<span class="token operator">&gt;</span> \u5B89\u88C5\u6307\u5B9A\u7248\u672Cnode
nvm use <span class="token operator">&lt;</span>version<span class="token operator">&gt;</span> \u5207\u6362\u4F7F\u7528\u6307\u5B9A\u7684\u7248\u672Cnode
nvm ls \u5217\u51FA\u6240\u6709\u7248\u672C
nvm current\u663E\u793A\u5F53\u524D\u7248\u672C
nvm alias <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>version<span class="token operator">&gt;</span> ## \u7ED9\u4E0D\u540C\u7684\u7248\u672C\u53F7\u6DFB\u52A0\u522B\u540D
nvm unalias <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span> ## \u5220\u9664\u5DF2\u5B9A\u4E49\u7684\u522B\u540D
nvm reinstall<span class="token operator">-</span>packages <span class="token operator">&lt;</span>version<span class="token operator">&gt;</span> ## \u5728\u5F53\u524D\u7248\u672Cnode\u73AF\u5883\u4E0B\uFF0C\u91CD\u65B0\u5168\u5C40\u5B89\u88C5\u6307\u5B9A\u7248\u672C\u53F7\u7684npm\u5305
nvm on \u6253\u5F00nodejs\u63A7\u5236
nvm off \u5173\u95EDnodejs\u63A7\u5236
nvm proxy \u67E5\u770B\u8BBE\u7F6E\u4E0E\u4EE3\u7406
nvm uninstall <span class="token operator">&lt;</span>version<span class="token operator">&gt;</span> \u5378\u8F7D\u5236\u5B9A\u7684\u7248\u672C
nvm use <span class="token punctuation">[</span>version<span class="token punctuation">]</span> <span class="token punctuation">[</span>arch<span class="token punctuation">]</span> \u5207\u6362\u5236\u5B9A\u7684node\u7248\u672C\u548C\u4F4D\u6570
nvm root <span class="token punctuation">[</span>path<span class="token punctuation">]</span> \u8BBE\u7F6E\u548C\u67E5\u770Broot\u8DEF\u5F84
nvm version \u67E5\u770B\u5F53\u524D\u7684\u7248\u672C

<span class="token comment">// nvm\u4E0B\u8F7D\u6162\u5207\u6362\u6DD8\u5B9D\u6E90</span>
<span class="token comment">// NVM_NODEJS_ORG_MIRROR=https://npm.taobao.org/mirrors/node</span>

<span class="token comment">//vscode\u4E0B\u8F7D\u6162</span>
<span class="token comment">// \u5C06 \u94FE\u63A5\u4E2D http://az764295.vo.msecnd.net </span>
<span class="token comment">// \u66FF\u6362\u4E3A http://vscode.cdn.azure.cn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),o=[p];function i(t,l){return s(),a("div",null,o)}const v=n(r,[["render",i],["__file","npm.html.vue"]]);export{v as default};
