import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as p}from"./app.8225ebca.js";const e={},t=p(`<h1 id="call" tabindex="-1"><a class="header-anchor" href="#call" aria-hidden="true">#</a> Call</h1><blockquote><p>call\u7684\u4F7F\u7528\uFF0C\u53EF\u4EE5\u6539\u53D8this\u6307\u5411\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\u5BBF\u4E3B\u5BF9\u8C61\uFF0C\u4E5F\u5C31\u662F\u8981\u6539\u53D8\u7684this\u6307\u5411\uFF0C\u540E\u9762\u7684\u53C2\u6570\u5168\u90E8\u4E3A\u5F53\u524D\u51FD\u6570\u7684\u5B9E\u53C2</p></blockquote><p>\u5E94\u7528\u573A\u666F: \u7ECF\u5E38\u505A\u7EE7\u627F.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">sex<span class="token punctuation">,</span>like</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>sex <span class="token operator">=</span> sex
    <span class="token keyword">this</span><span class="token punctuation">.</span>like <span class="token operator">=</span> like
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>  
  <span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5F20\u4E09&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">19</span>
  <span class="token punctuation">}</span>
  <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span><span class="token string">&#39;\u7537&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;\u6253\u7BEE\u7403&#39;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="apply" tabindex="-1"><a class="header-anchor" href="#apply" aria-hidden="true">#</a> Apply</h1><blockquote><p>apply\uFF1A\u53EF\u4EE5\u6539\u53D8this\u6307\u5411\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\u5BBF\u4E3B\u5BF9\u8C61\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E3A\u6570\u7EC4\uFF0C\u6570\u7EC4\u6BCF\u4E00\u9879\u4E3A\u5F53\u524D\u51FD\u6570\u7684\u6240\u6709\u5B9E\u53C2</p></blockquote><p>\u5E94\u7528\u573A\u666F: \u7ECF\u5E38\u8DDF\u6570\u7EC4\u6709\u5173\u7CFB</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">sex<span class="token punctuation">,</span>like</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>sex <span class="token operator">=</span> sex
    <span class="token keyword">this</span><span class="token punctuation">.</span>like <span class="token operator">=</span> like
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>  
  <span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5F20\u4E09&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">19</span>
  <span class="token punctuation">}</span>
  <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token string">&#39;\u7537&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;\u6253\u7BEE\u7403&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="bind" tabindex="-1"><a class="header-anchor" href="#bind" aria-hidden="true">#</a> bind</h1><blockquote><p>\u53EF\u4EE5\u6539\u53D8this\u6307\u5411\uFF0Cbind\u4F1A\u57FA\u4E8E\u539F\u51FD\u6570\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u51FD\u6570\uFF0C\u5E76\u6539\u53D8\u5176his\u6307\u5411\uFF0C\u6307\u5411bind\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF0C\u4E00\u65E6\u901A\u8FC7bind\u6539\u53D8this\u6307\u5411\u4E4B\u540E\uFF0C \u540E\u7EED\u4E0D\u7BA1\u901A\u8FC7\u4EC0\u4E48\u65B9\u5F0F\u8C03\u7528\uFF0Cthis\u90FD\u4E0D\u4F1A\u5728\u6539\u53D8\u4E86</p><p>\u5982\u679C\u53EA\u662F\u60F3\u6539\u53D8 this \u6307\u5411\uFF0C\u5E76\u4E14\u4E0D\u60F3\u8C03\u7528\u8FD9\u4E2A\u51FD\u6570\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u4F7F\u7528bind</p></blockquote><p>\u5E94\u7528\u573A\u666F:\u4E0D\u8C03\u7528\u51FD\u6570,\u4F46\u662F\u8FD8\u60F3\u6539\u53D8this\u6307\u5411</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">sex<span class="token punctuation">,</span>like</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>sex <span class="token operator">=</span> sex
    <span class="token keyword">this</span><span class="token punctuation">.</span>like <span class="token operator">=</span> like
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>  
  <span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5F20\u4E09&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">19</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">var</span> fn1 <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span><span class="token string">&#39;\u7537&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;\u6253\u7BEE\u7403&#39;</span><span class="token punctuation">)</span>
  <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E09\u8005\u7684\u5F02\u540C" tabindex="-1"><a class="header-anchor" href="#\u4E09\u8005\u7684\u5F02\u540C" aria-hidden="true">#</a> \u4E09\u8005\u7684\u5F02\u540C:</h2><blockquote><p>\u5171\u540C\u70B9:\u90FD\u53EF\u4EE5\u6539\u53D8this\u7684\u6307\u5411</p><p>\u4E0D\u540C\u70B9:</p><p>1.call\u548Capply\u4F1A\u8C03\u7528\u51FD\u6570,\u5E76\u4E14\u6539\u53D8\u51FD\u6570\u5185\u90E8this\u7684\u6307\u5411</p><p>2.call \u548C apply\u4F20\u9012\u7684\u53C2\u6570\u4E0D\u4E00\u6837,call\u4F20\u9012\u53C2\u6570\u4F7F\u7528\u9017\u53F7\u9694\u5F00,apply\u4F7F\u7528\u6570\u7EC4\u4F20\u9012</p><p>3.bind \u4E0D\u4F1A\u8C03\u7528\u51FD\u6570, \u53EF\u4EE5\u6539\u53D8\u51FD\u6570\u5185\u90E8this\u6307\u5411.</p></blockquote>`,14),o=[t];function c(l,i){return s(),a("div",null,o)}const k=n(e,[["render",c],["__file","call && apply && bind.html.vue"]]);export{k as default};