<template><div><h1 id="浏览器对象-bom" tabindex="-1"><a class="header-anchor" href="#浏览器对象-bom" aria-hidden="true">#</a> 浏览器对象 BOM</h1>
<h2 id="判读浏览器是否支持-css-属性" tabindex="-1"><a class="header-anchor" href="#判读浏览器是否支持-css-属性" aria-hidden="true">#</a> 判读浏览器是否支持 CSS 属性</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 告知浏览器支持的指定css属性情况
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> <span class="token parameter">key</span> - css属性，是属性的名字，不需要加前缀
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> - 支持的属性情况
 */</span>
<span class="token keyword">function</span> <span class="token function">validateCssKey</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> jsKey <span class="token operator">=</span> <span class="token function">toCamelCase</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 有些css属性是连字符号形成</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>jsKey <span class="token keyword">in</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>style<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> key<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> validKey <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>
  <span class="token comment">// 属性名为前缀在js中的形式，属性值是前缀在css中的形式</span>
  <span class="token comment">// 经尝试，Webkit 也可是首字母小写 webkit</span>
  <span class="token keyword">const</span> prefixMap <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">Webkit</span><span class="token operator">:</span> <span class="token string">'-webkit-'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">Moz</span><span class="token operator">:</span> <span class="token string">'-moz-'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">ms</span><span class="token operator">:</span> <span class="token string">'-ms-'</span><span class="token punctuation">,</span>
    <span class="token constant">O</span><span class="token operator">:</span> <span class="token string">'-o-'</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> jsPrefix <span class="token keyword">in</span> prefixMap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> styleKey <span class="token operator">=</span> <span class="token function">toCamelCase</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>jsPrefix<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>jsKey<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>styleKey <span class="token keyword">in</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>style<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      validKey <span class="token operator">=</span> prefixMap<span class="token punctuation">[</span>jsPrefix<span class="token punctuation">]</span> <span class="token operator">+</span> key<span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> validKey<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 把有连字符号的字符串转化为驼峰命名法的字符串
 */</span>
<span class="token keyword">function</span> <span class="token function">toCamelCase</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> value<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">-(\w)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">matched<span class="token punctuation">,</span> letter</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> letter<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token doc-comment comment">/**
 * 检查浏览器是否支持某个css属性值（es6版）
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> <span class="token parameter">key</span> - 检查的属性值所属的css属性名
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> <span class="token parameter">value</span> - 要检查的css属性值（不要带前缀）
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> - 返回浏览器支持的属性值
 */</span>
<span class="token keyword">function</span> <span class="token function">valiateCssValue</span> <span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> prefix <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'-o-'</span><span class="token punctuation">,</span> <span class="token string">'-ms-'</span><span class="token punctuation">,</span> <span class="token string">'-moz-'</span><span class="token punctuation">,</span> <span class="token string">'-webkit-'</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> prefixValue <span class="token operator">=</span> prefix<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> item <span class="token operator">+</span> value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> eleStyle <span class="token operator">=</span> element<span class="token punctuation">.</span>style<span class="token punctuation">;</span>
  <span class="token comment">// 应用每个前缀的情况，且最后也要应用上没有前缀的情况，看最后浏览器起效的何种情况</span>
  <span class="token comment">// 这就是最好在prefix里的最后一个元素是''</span>
  prefixValue<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    eleStyle<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> item<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> eleStyle<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 检查浏览器是否支持某个css属性值
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> <span class="token parameter">key</span> - 检查的属性值所属的css属性名
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> <span class="token parameter">value</span> - 要检查的css属性值（不要带前缀）
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> - 返回浏览器支持的属性值
 */</span>
<span class="token keyword">function</span> <span class="token function">valiateCssValue</span> <span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> prefix <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'-o-'</span><span class="token punctuation">,</span> <span class="token string">'-ms-'</span><span class="token punctuation">,</span> <span class="token string">'-moz-'</span><span class="token punctuation">,</span> <span class="token string">'-webkit-'</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> prefixValue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> prefix<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    prefixValue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>prefix<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> value<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">var</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> eleStyle <span class="token operator">=</span> element<span class="token punctuation">.</span>style<span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> prefixValue<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    eleStyle<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> prefixValue<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> eleStyle<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token keyword">function</span> <span class="token function">validCss</span> <span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> validCss <span class="token operator">=</span> <span class="token function">validateCssKey</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>validCss<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> validCss<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token function">valiateCssValue</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="返回当前网页地址" tabindex="-1"><a class="header-anchor" href="#返回当前网页地址" aria-hidden="true">#</a> 返回当前网页地址</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">currentURL</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获取滚动条位置" tabindex="-1"><a class="header-anchor" href="#获取滚动条位置" aria-hidden="true">#</a> 获取滚动条位置</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getScrollPosition</span><span class="token punctuation">(</span><span class="token parameter">el <span class="token operator">=</span> window</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>pageXOffset <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token operator">?</span> el<span class="token punctuation">.</span>pageXOffset <span class="token operator">:</span> el<span class="token punctuation">.</span>scrollLeft<span class="token punctuation">,</span>
    <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>pageYOffset <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token operator">?</span> el<span class="token punctuation">.</span>pageYOffset <span class="token operator">:</span> el<span class="token punctuation">.</span>scrollTop
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获取url中的参数" tabindex="-1"><a class="header-anchor" href="#获取url中的参数" aria-hidden="true">#</a> 获取url中的参数</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getURLParameters</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> url<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">([^?=&amp;]+)(=([^&amp;]*))</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> v</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span>v<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> v<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">'='</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> v<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">'='</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="页面跳转-是否记录在history中" tabindex="-1"><a class="header-anchor" href="#页面跳转-是否记录在history中" aria-hidden="true">#</a> 页面跳转，是否记录在history中</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">redirect</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> asLink <span class="token operator">=</span> <span class="token boolean">true</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  asLink <span class="token operator">?</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href <span class="token operator">=</span> url <span class="token operator">:</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="滚动条滚动到指定位置" tabindex="-1"><a class="header-anchor" href="#滚动条滚动到指定位置" aria-hidden="true">#</a> 滚动条滚动到指定位置</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 解决平滑滚动存在兼容性问题</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">yORxy</span><span class="token operator">:</span> number <span class="token operator">|</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> number<span class="token punctuation">;</span> y<span class="token operator">:</span> number <span class="token punctuation">}</span><span class="token punctuation">,</span>
  params<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">smooth</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
    <span class="token literal-property property">callBack</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">|</span> Function<span class="token punctuation">;</span>
    <span class="token literal-property property">averageStep</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
  <span class="token punctuation">}</span></span>
<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> xy <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> smooth<span class="token punctuation">,</span> callback<span class="token punctuation">,</span> averageStep <span class="token punctuation">}</span> <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">smooth</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">callback</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
      <span class="token literal-property property">averageStep</span><span class="token operator">:</span> <span class="token number">50</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    params
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> isSmooth <span class="token operator">=</span> smooth <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token boolean">true</span> <span class="token operator">:</span> smooth<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> yORxy <span class="token operator">===</span> <span class="token string">"number"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    xy<span class="token punctuation">.</span>y <span class="token operator">=</span> yORxy<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    xy <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>xy<span class="token punctuation">,</span> yORxy<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isSmooth<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span><span class="token function">scrollTo</span><span class="token punctuation">(</span>xy<span class="token punctuation">.</span>x<span class="token punctuation">,</span> xy<span class="token punctuation">.</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> callback <span class="token operator">&amp;&amp;</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">let</span> scrollTop <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollTop <span class="token operator">||</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollTop<span class="token punctuation">;</span>
  <span class="token keyword">let</span> scrollLeft <span class="token operator">=</span>
    document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollLeft <span class="token operator">||</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollLeft<span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">scrollFn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>scrollLeft <span class="token operator">===</span> xy<span class="token punctuation">.</span>x <span class="token operator">&amp;&amp;</span> scrollTop <span class="token operator">===</span> xy<span class="token punctuation">.</span>y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> callback <span class="token operator">&amp;&amp;</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    scrollTop <span class="token operator">=</span>
      scrollTop <span class="token operator">-</span> averageStep <span class="token operator">&lt;=</span> xy<span class="token punctuation">.</span>y <span class="token operator">?</span> xy<span class="token punctuation">.</span>y <span class="token operator">:</span> scrollTop <span class="token operator">-</span> averageStep<span class="token punctuation">;</span>
    scrollLeft <span class="token operator">=</span>
      scrollLeft <span class="token operator">-</span> averageStep <span class="token operator">&lt;=</span> xy<span class="token punctuation">.</span>x <span class="token operator">?</span> xy<span class="token punctuation">.</span>x <span class="token operator">:</span> scrollLeft <span class="token operator">-</span> averageStep<span class="token punctuation">;</span>
    window<span class="token punctuation">.</span><span class="token function">scrollTo</span><span class="token punctuation">(</span>scrollLeft<span class="token punctuation">,</span> scrollTop<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>scrollFn<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function">scrollFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="复制文本" tabindex="-1"><a class="header-anchor" href="#复制文本" aria-hidden="true">#</a> 复制文本</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">copy</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'textarea'</span><span class="token punctuation">)</span>
  el<span class="token punctuation">.</span>value <span class="token operator">=</span> str
  el<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'readonly'</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span>
  el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>position <span class="token operator">=</span> <span class="token string">'absolute'</span>
  el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token string">'-9999px'</span>
  el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>top <span class="token operator">=</span> <span class="token string">'-9999px'</span>
  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span>
  <span class="token keyword">const</span> selected <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getSelection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>rangeCount <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">?</span> document<span class="token punctuation">.</span><span class="token function">getSelection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getRangeAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token boolean">false</span>
  el<span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  document<span class="token punctuation">.</span><span class="token function">execCommand</span><span class="token punctuation">(</span><span class="token string">'copy'</span><span class="token punctuation">)</span>
  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>selected<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">getSelection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">removeAllRanges</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    document<span class="token punctuation">.</span><span class="token function">getSelection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addRange</span><span class="token punctuation">(</span>selected<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="检测设备类型" tabindex="-1"><a class="header-anchor" href="#检测设备类型" aria-hidden="true">#</a> 检测设备类型</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">detectDeviceType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token string">'Mobile'</span> <span class="token operator">:</span> <span class="token string">'Desktop'</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dom相关属性" tabindex="-1"><a class="header-anchor" href="#dom相关属性" aria-hidden="true">#</a> dom相关属性</h2>
<details class="custom-container details"><summary>点击查看配置</summary>
<p>网页可见区域宽： document.body.clientWidth;</p>
<p>网页可见区域高： document.body.clientHeight;</p>
<p>网页可见区域宽： document.body.offsetWidth (包括边线的宽);</p>
<p>网页可见区域高： document.body.offsetHeight (包括边线的宽);</p>
<p>网页正文全文宽： document.body.scrollWidth;</p>
<p>页正文全文高： document.body.scrollHeight;</p>
<p>网页被卷去的高： document.body.scrollTop;</p>
<p>网页被卷去的左： document.body.scrollLeft;</p>
<p>网页正文部分上： window.screenTop;</p>
<p>网页正文部分左： window.screenLeft;</p>
<p>屏幕分辨率的高： window.screen.height;</p>
<p>屏幕分辨率的宽： window.screen.width;</p>
<p>屏幕可用工作区高度： window.screen.availHeight;</p>
<p>屏幕可用工作区宽度：window.screen.availWidth;</p>
<p>scrollHeight 获取对象的滚动高度。</p>
<p>scrollLeft 设置或获取位于对象左边界和窗口中目前可见内容的最左端之间的距离</p>
<p>scrollTop 设置或获取位于对象最顶端和窗口中可见内容的最顶端之间的距离</p>
<p>scrollWidth 获取对象的滚动宽度</p>
<p>offsetHeight 获取对象相对于版面或由父坐标</p>
<p>offsetParent 属性指定的父坐标的高度</p>
<p>offsetLeft 获取对象相对于版面或由</p>
<p>offsetParent 属性指定的父坐标的计算左侧位置</p>
<p>offsetTop 获取对象相对于版面或由</p>
<p>offsetTop 属性指定的父坐标的计算顶端位置</p>
<p>event.clientX 相对文档的水平座标</p>
<p>event.clientY 相对文档的垂直座标</p>
<p>event.offsetX 相对容器的水平坐标</p>
<p>event.offsetY 相对容器的垂直坐标</p>
<p>document.documentElement.scrollTop 垂直方向滚动的值event.clientX+document.documentElement.scrollTop 相对文档的水平座标+垂直方向滚动的量</p>
</details>
</div></template>


