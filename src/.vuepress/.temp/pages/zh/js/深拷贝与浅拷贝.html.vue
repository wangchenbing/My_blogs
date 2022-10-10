<template><div><p><strong>基本数据类型</strong> 保存在 栈内存,形式如下：栈内存中分别存储着变量的标识符以及变量的值。</p>
<p><img src="@source/zh/js/img/zhanneichun.png" alt="Untitled" loading="lazy"></p>
<p>var a = &quot;A&quot;;</p>
<p>在栈内存中是这样的</p>
<p><img src="@source/zh/js/img/Untitled.png" alt="Untitled" loading="lazy"></p>
<p><strong>引用类型</strong> 保存在堆内存中,栈内存存储的是变量的标识符以及对象在堆内存中的存储地址，当需要访问引用类型（如对象，数组等）的值时，首先从栈中获得该对象的地址指针，然后再从对应的堆内存中取得所需的数据。</p>
<p><img src="@source/zh/js/img/yingyong.png" alt="Untitled" loading="lazy"></p>
<p>var a = {name:“jack”};</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code>  <span class="token keyword">var</span> a<span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"jack"</span><span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> b<span class="token operator">=</span> a<span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token operator">===</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
  a<span class="token punctuation">.</span>age<span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//{ name: 'jack', age: 30 }</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//{ name: 'jack', age: 30 }</span>
  <span class="token comment">//改变 a 变量的值，会影响 b 的值。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>内存中是这样的：</p>
<p>var a = {name:&quot;jack&quot;,age:20};</p>
<p><img src="@source/zh/js/img/zhan1.png" alt="Untitled" loading="lazy"></p>
<p>var b = a;</p>
<p><img src="@source/zh/js/img/zhan2.png" alt="Untitled" loading="lazy"></p>
<p>a.age = 30;</p>
<p><img src="@source/zh/js/img/zhan3.png" alt="Untitled" loading="lazy"></p>
<p><strong>深浅拷贝</strong> 
的主要区别就是：复制的是引用(地址)还是复制的是实例。</p>
<p>深拷贝就是在堆内存中开辟一个新的值，一个全新的地址对应一个全新的值</p>
</div></template>


