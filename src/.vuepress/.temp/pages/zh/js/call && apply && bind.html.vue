<template><div><h1 id="call" tabindex="-1"><a class="header-anchor" href="#call" aria-hidden="true">#</a> Call</h1>
<blockquote>
<p>call的使用，可以改变this指向，第一个参数为宿主对象，也就是要改变的this指向，后面的参数全部为当前函数的实参</p>
</blockquote>
<p>应用场景:  经常做继承.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">sex<span class="token punctuation">,</span>like</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>sex <span class="token operator">=</span> sex
    <span class="token keyword">this</span><span class="token punctuation">.</span>like <span class="token operator">=</span> like
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>  
  <span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'张三'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">19</span>
  <span class="token punctuation">}</span>
  <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span><span class="token string">'男'</span><span class="token punctuation">,</span><span class="token string">'打篮球'</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="apply" tabindex="-1"><a class="header-anchor" href="#apply" aria-hidden="true">#</a> Apply</h1>
<blockquote>
<p>apply：可以改变this指向，第一个参数为宿主对象，第二个参数为数组，数组每一项为当前函数的所有实参</p>
</blockquote>
<p>应用场景:  经常跟数组有关系</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">sex<span class="token punctuation">,</span>like</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>sex <span class="token operator">=</span> sex
    <span class="token keyword">this</span><span class="token punctuation">.</span>like <span class="token operator">=</span> like
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>  
  <span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'张三'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">19</span>
  <span class="token punctuation">}</span>
  <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token string">'男'</span><span class="token punctuation">,</span><span class="token string">'打篮球'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="bind" tabindex="-1"><a class="header-anchor" href="#bind" aria-hidden="true">#</a> bind</h1>
<blockquote>
<p>可以改变this指向，bind会基于原函数创建一个新的函数，并改变其his指向，指向bind的第一个参数，一旦通过bind改变this指向之后，
后续不管通过什么方式调用，this都不会在改变了</p>
<p>如果只是想改变 this 指向，并且不想调用这个函数的时候，可以使用bind</p>
</blockquote>
<p>应用场景:不调用函数,但是还想改变this指向</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">sex<span class="token punctuation">,</span>like</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>sex <span class="token operator">=</span> sex
    <span class="token keyword">this</span><span class="token punctuation">.</span>like <span class="token operator">=</span> like
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>  
  <span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'张三'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">19</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">var</span> fn1 <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span><span class="token string">'男'</span><span class="token punctuation">,</span><span class="token string">'打篮球'</span><span class="token punctuation">)</span>
  <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三者的异同" tabindex="-1"><a class="header-anchor" href="#三者的异同" aria-hidden="true">#</a> 三者的异同:</h2>
<blockquote>
<p>共同点:都可以改变this的指向</p>
<p>不同点:</p>
<p>1.call和apply会调用函数,并且改变函数内部this的指向</p>
<p>2.call 和 apply传递的参数不一样,call传递参数使用逗号隔开,apply使用数组传递</p>
<p>3.bind  不会调用函数, 可以改变函数内部this指向.</p>
</blockquote>
</div></template>


