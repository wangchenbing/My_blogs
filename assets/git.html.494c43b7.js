import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as e,d as i,b as l,r as t}from"./app.242ae5b0.js";const c={},o=l(`<h1 id="git-\u5E38\u7528\u547D\u4EE4\u624B\u518C" tabindex="-1"><a class="header-anchor" href="#git-\u5E38\u7528\u547D\u4EE4\u624B\u518C" aria-hidden="true">#</a> Git \u5E38\u7528\u547D\u4EE4\u624B\u518C</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token comment"># \u67E5\u770B\u5DE5\u4F5C\u533A\u72B6\u6001\uFF08\u4FEE\u6539/\u6682\u5B58\u7684\u6587\u4EF6\uFF09</span>
<span class="token function">git</span> status

<span class="token comment"># \u62C9\u53D6\u8FDC\u7A0Bmaster\u5206\u652F\u6700\u65B0\u4EE3\u7801</span>
<span class="token function">git</span> pull origin master

<span class="token comment"># \u67E5\u770B\u6240\u6709\u5206\u652F\uFF08\u672C\u5730+\u8FDC\u7A0B\uFF09</span>
<span class="token function">git</span> branch <span class="token parameter variable">-a</span>

<span class="token comment"># \u5F3A\u5236\u5220\u9664\u672C\u5730\u5206\u652F\uFF08\u614E\u7528\uFF09</span>
<span class="token function">git</span> branch <span class="token parameter variable">-D</span> dev2020422

<span class="token comment"># \u6062\u590D\u6700\u8FD1\u6682\u5B58\u7684\u4FEE\u6539\uFF08pop\u5E76\u5220\u9664stash\u8BB0\u5F55\uFF09</span>
<span class="token function">git</span> stash
<span class="token function">git</span> stash pop

<span class="token comment"># \u786C\u91CD\u7F6E\u5230\u4E0A\u6B21\u63D0\u4EA4\uFF08\u4E22\u5F03\u6240\u6709\u4FEE\u6539\uFF09</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span>

<span class="token comment"># \u8F6F\u91CD\u7F6E\u5230\u4E0A\u6B21\u63D0\u4EA4\uFF08\u4FDD\u7559\u4FEE\u6539\u4E3A\u5DF2\u6682\u5B58\u72B6\u6001\uFF09</span>
<span class="token function">git</span> reset <span class="token parameter variable">--soft</span> HEAD^
<span class="token function">git</span> reset <span class="token parameter variable">--soft</span> <span class="token operator">&lt;</span>commit-id<span class="token operator">&gt;</span>

<span class="token comment"># \u5F3A\u5236\u5173\u8054\u4E3B\u5206\u652F</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> origin/main

<span class="token comment"># \u67E5\u770B\u6700\u8FD1\u6761\u8BE6\u7EC6\u63D0\u4EA4\u8BB0\u5F55</span>
<span class="token function">git</span> log <span class="token parameter variable">-2</span>
<span class="token function">git</span> log <span class="token parameter variable">--oneline</span>

<span class="token comment"># \u67E5\u770B\u5F53\u524D\u914D\u7F6E</span>
<span class="token function">git</span> config user.name
<span class="token function">git</span> config user.email

<span class="token comment"># \u5168\u5C40\u914D\u7F6E\u7528\u6237\u4FE1\u606F\uFF08\u9700\u66FF\u6362\u4E3A\u4F60\u7684\u4FE1\u606F\uFF09</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;\u4F60\u7684\u59D3\u540D&quot;</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;\u4F60\u7684\u90AE\u7BB1@example.com&quot;</span>

<span class="token comment"># \u7B2C\u4E00\u6B21\u62C9\u53D6\u5206\u4E4B\u8BBE\u7F6E</span>
username\uFF1Agitee\u4E0A\u7ED1\u5B9A\u7684\u90AE\u7BB1
Password\uFF1Agitee\u767B\u9646\u5BC6\u7801
Username <span class="token keyword">for</span> <span class="token string">&#39;https://github.com&#39;</span><span class="token builtin class-name">:</span> wcb_houhuiyouqi@126.com
Password <span class="token keyword">for</span> <span class="token string">&#39;https://1512wcb_houhuiyouqi@126.com@github.com&#39;</span>\uFF1A\u5F00\u673A\u5BC6\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function r(p,d){const n=t("PDF");return a(),e("div",null,[o,i(n,{url:"/assets/pdf/git.pdf",zoom:"25"})])}const u=s(c,[["render",r],["__file","git.html.vue"]]);export{u as default};
