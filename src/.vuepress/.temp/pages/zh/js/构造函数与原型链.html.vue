<template><div><h2 id="什么是构造函数" tabindex="-1"><a class="header-anchor" href="#什么是构造函数" aria-hidden="true">#</a> 什么是构造函数</h2>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>age</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">'zs'</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>构造函数是一个特殊的函数,用来初始化对象,为对象成员变量赋初始值,需要和new一起使用</p>
<p>new步骤:</p>
<blockquote>
<p>1.内存中创建一个空对象</p>
<p>2.我们将这个空对象的proto成员指向了构造函数对象prototype成员</p>
<p>3.我们将构造函数对象的this指针代替成空对象,然后在调用构造函数,于是构造的this就指向了新的空对象,
并且会往实例化对象身上挂在方法</p>
<p>4.返回实例化对象</p>
</blockquote>
<h2 id="静态成员和实例成员" tabindex="-1"><a class="header-anchor" href="#静态成员和实例成员" aria-hidden="true">#</a> 静态成员和实例成员</h2>
<blockquote>
<p>静态成员：在构造函数本身上添加的成员静态成员只能通过构造函数来访问</p>
<p>实例成员：在构造函数内部通过this添加的成员 实例成员只能通过实例化的对象来访问</p>
</blockquote>
<h2 id="构造函数原型prototype" tabindex="-1"><a class="header-anchor" href="#构造函数原型prototype" aria-hidden="true">#</a> 构造函数原型prototype</h2>
<blockquote>
<p>JavaScript 规定，每一个构造函数都有一个prototype 属性，指向另一个对象。注意这个prototype就是一个对象，这个对象的所有属性和方法，都会被构造函数所拥有。</p>
</blockquote>
<h2 id="对象原型" tabindex="-1"><a class="header-anchor" href="#对象原型" aria-hidden="true">#</a> 对象原型</h2>
<blockquote>
<p>对象都会有一个属性.__ *proto__*指向构造函数的prototype原型对象,之所以我们对象可以使用构造函数prototype
原型对象的属性和方法,就是因为对象有__proto__原型的存在.</p>
<p>__proto__对象原型和原型对象prototype是等价的</p>
<p>__proto__对象原型的意义就在于为对象的查找机制提供一个方向,或者说是一条线路,但是他是一个非标准属性,
因此实际开发中,不可以使用这个属性,他只是内部指向原型对象,prototype</p>
</blockquote>
<p><img src="@source/zh/js/img/duixiangyuanxing.png" alt="对象原型.png" loading="lazy"></p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code>    <span class="token keyword">function</span> <span class="token function">Star</span><span class="token punctuation">(</span><span class="token parameter">uname<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>uname <span class="token operator">=</span> uname<span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">Star</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">sing</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'我会唱歌'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//实例对象是构造函数所</span>
    <span class="token keyword">const</span> ldh <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Star</span><span class="token punctuation">(</span><span class="token string">'刘德华'</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 构造函数的实例对象</span>
    <span class="token keyword">const</span> zxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Star</span><span class="token punctuation">(</span><span class="token string">'张学友'</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ldh<span class="token punctuation">.</span><span class="token function">sing</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ldh<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ldh<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Star</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//true</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ldh<span class="token punctuation">.</span>__proto__<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 实例的__proto__指向构造函数的原型对象</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Star</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 构造函数的prototpye指向构造函数的原型对象</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="constructor-构造函数" tabindex="-1"><a class="header-anchor" href="#constructor-构造函数" aria-hidden="true">#</a> constructor 构造函数</h2>
<p>对象原型(<strong>proto</strong>)和构造函数(prototype)原型对象里面都有一个属性constructor属性,constructor我们称为构造函数,因为它指回构造函数本身.</p>
<p>constructor主要用于记录改对象引用哪个构造函数,他可以让原型对象重新指向原来的构造函数.</p>
<p><strong>为什么需要指向原来的构造函数</strong></p>
<p>但是如果方法比较多的话，大多人会采用一种更简洁的方法：直接使用一个对象字面形式替换原型对象，如下：</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token class-name">Person</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">sing</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'sing'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">movie</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'movie'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">'zs'</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>constructor<span class="token operator">===</span>Person<span class="token punctuation">)</span><span class="token comment">//false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>constructor<span class="token operator">===</span>Object<span class="token punctuation">)</span><span class="token comment">//true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用字面量形式改写了原型对象改变了构造函数的属性，因此他指向Object而不是Person.这是因为原型对象具有一个constructor属性，这是其他对象实例所没有的。当一个函数被创建时，它的prototype属性也被创建，且该原型对象的constructor属性指向该函数。当使用对象字面量形式改写原型对象时，其constructor属性将被置为泛用对象Object.为了避免这一点，需要在改写原型对象的时候手动重置constructor,如下：</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token class-name">Person</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">constructor</span><span class="token operator">:</span> Person<span class="token punctuation">,</span>
  <span class="token function-variable function">sing</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'sing'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">movie</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'movie'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">'zs'</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>constructor<span class="token operator">===</span>Person<span class="token punctuation">)</span><span class="token comment">//true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>constructor<span class="token operator">===</span>Object<span class="token punctuation">)</span><span class="token comment">//false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们修改了原来的原型对象,给原型对象赋值的事一个对象,则必须手动的利用constructor指回原来的构造函数</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code> <span class="token keyword">function</span> <span class="token function">Star</span><span class="token punctuation">(</span><span class="token parameter">uname<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">this</span><span class="token punctuation">.</span>uname <span class="token operator">=</span> uname<span class="token punctuation">;</span>
     <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
 <span class="token comment">// 很多情况下,我们需要手动的利用constructor 这个属性指回 原来的构造函数</span>
 <span class="token class-name">Star</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token punctuation">{</span>
 <span class="token comment">// 如果我们修改了原来的原型对象,给原型对象赋值的是一个对象,则必须手动的利用constructor指回原来的构造函数</span>
   <span class="token literal-property property">constructor</span><span class="token operator">:</span> Star<span class="token punctuation">,</span> <span class="token comment">// 手动设置指回原来的构造函数</span>
   <span class="token function-variable function">sing</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'我会唱歌'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token function-variable function">movie</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'我会演电影'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> zxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Star</span><span class="token punctuation">(</span><span class="token string">'张学友'</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>zxy<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="原型链" tabindex="-1"><a class="header-anchor" href="#原型链" aria-hidden="true">#</a> 原型链</h2>
<p>每个实例对象又有一个proto属性,指向的构造函数的原型对象,构造函数的原型对象也是一个对象,也有proto属性,这样一层一层往上找就形成了原型链</p>
<p><img src="@source/zh/js/img/yuanxinglian.png" alt="原型链.png" loading="lazy"></p>
<h2 id="构造函数实例和对象三角关系" tabindex="-1"><a class="header-anchor" href="#构造函数实例和对象三角关系" aria-hidden="true">#</a> 构造函数实例和对象三角关系</h2>
<ol>
<li>构造函数的prototype属性指向了构造函数原型对象</li>
<li>实例对象是由构造函数创建的,实例对象的__proto__属性指向了构造函数的原型对象</li>
<li>构造函数的原型对象的constructor属性指向了构造函数,实例对象的原型的constructor属性也指向了构造函数</li>
</ol>
<p><img src="@source/zh/js/img/sanjiaoguanxi.png" alt="构造函数实例和对象三角关系.png" loading="lazy"></p>
<h2 id="原型对象中的this指向" tabindex="-1"><a class="header-anchor" href="#原型对象中的this指向" aria-hidden="true">#</a> 原型对象中的this指向</h2>
<p>构造函数中的this和原型对象中的this,都指向我们new出来的实例对象</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code>  <span class="token keyword">function</span> <span class="token function">Star</span><span class="token punctuation">(</span><span class="token parameter">uname<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>uname <span class="token operator">=</span> uname<span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">var</span> that<span class="token punctuation">;</span>
  <span class="token class-name">Star</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">sing</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'我会唱歌'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      that <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">var</span> ldh <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Star</span><span class="token punctuation">(</span><span class="token string">'刘德华'</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 1. 在构造函数中,里面this指向的是对象实例 ldh</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>that <span class="token operator">===</span> ldh<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//true</span>
  <span class="token comment">// 2.原型对象函数里面的this 指向的是 实例对象 ldh</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


