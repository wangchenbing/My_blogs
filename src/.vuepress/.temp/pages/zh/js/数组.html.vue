<template><div><h2 id="判断是不是数组" tabindex="-1"><a class="header-anchor" href="#判断是不是数组" aria-hidden="true">#</a> 判断是不是数组</h2>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span>
<span class="token comment">//1.instanceof判断</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr <span class="token keyword">instanceof</span> <span class="token class-name">Array</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//2.constructor</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span>constructor <span class="token operator">===</span> Array<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* 注意：
    使用instaceof和construcor,被判断的array必须是在当前页面声明的！比如，一个页面（父页面）有一个框架，
    框架中引用了一个页面（子页面），在子页面中声明了一个array，并将其赋值给父页面的一个变量，这时判断该变量，
    Array == object.constructor;会返回false；
原因：
    1、array属于引用型数据，在传递过程中，仅仅是引用地址的传递。
    2、每个页面的Array原生对象所引用的地址是不一样的，在子页面声明的array，所对应的构造函数，
    是子页面的Array对象；父页面来进行判断，使用的Array并不等于子页面的Array。 */</span>

<span class="token comment">//3.Object.prototype.toString.call()   可检验函数,数字</span>
 <span class="token keyword">const</span> num <span class="token operator">=</span> <span class="token number">1</span>
 <span class="token keyword">const</span> <span class="token function-variable function">fun</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span><span class="token punctuation">}</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token operator">===</span><span class="token string">'[object Array]'</span><span class="token punctuation">)</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token operator">===</span><span class="token string">'[object Number]'</span><span class="token punctuation">)</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>fun<span class="token punctuation">)</span><span class="token operator">===</span><span class="token string">'[object Function]'</span><span class="token punctuation">)</span>

<span class="token comment">//4.Array.isArray()</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> Set()</h2>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">//数组去重es6方法</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> newa <span class="token operator">=</span>  <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newa<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="push" tabindex="-1"><a class="header-anchor" href="#push" aria-hidden="true">#</a> push()</h2>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">// 从后面添加元素，返回值为添加完后的数组的长度</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment">// 6</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token comment">// [1,2,3,4,5,5]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pop" tabindex="-1"><a class="header-anchor" href="#pop" aria-hidden="true">#</a> pop()</h2>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">//从后面删除元素，只能是一个，返回值是删除的元素**</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment">// 5</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>  <span class="token comment">//[1,2,3,4]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="shift" tabindex="-1"><a class="header-anchor" href="#shift" aria-hidden="true">#</a> shift()</h2>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">// 从前面删除元素，只能删除一个 返回值是删除的元素**</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">// 1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>   <span class="token comment">// [2,3,4,5]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="unshift" tabindex="-1"><a class="header-anchor" href="#unshift" aria-hidden="true">#</a> unshift()</h2>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">//从前面添加元素, 返回值是添加完后的数组的长度**</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>    <span class="token comment">// 6</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>  <span class="token comment">//[2,1,2,3,4,5]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="splice-i-n-x" tabindex="-1"><a class="header-anchor" href="#splice-i-n-x" aria-hidden="true">#</a> splice(i,n,x)</h2>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">/* 
  新数组 = 原数组.splice(删除起始索引index（从0开始）, 需要删除的个数, 新的元素1, 新的元素2...);
  上方语法中，第三个及之后的参数，表示：删除元素之后，向原数组中添加新的元素，这些元素将会自动插入到起始位置索引的前面。
  也可以理解成：删除了哪些元素，就在那些元素的所在位置补充新的内容
 */</span>
<span class="token comment">//参数： i 索引值      n:个数   x:新更改值</span>
<span class="token keyword">let</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr1<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>     <span class="token comment">//[3,4]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr2<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">)</span>     <span class="token comment">//[2]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr1<span class="token punctuation">)</span><span class="token comment">//[1,2,5]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span><span class="token comment">//[1,9,3,4,5]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="concat" tabindex="-1"><a class="header-anchor" href="#concat" aria-hidden="true">#</a> concat()</h2>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">//连接两个数组 返回值为连接后的新数组,不改变原数组</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">// [1,2,3,4,5,1,2]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>   <span class="token comment">// [1,2,3,4,5]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="str-split" tabindex="-1"><a class="header-anchor" href="#str-split" aria-hidden="true">#</a> str.split()</h2>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">//将字符串转化为数组,生成一个新数组</span>
<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">'123456'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// ["1", "2", "3", "4", "5", "6"]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sort" tabindex="-1"><a class="header-anchor" href="#sort" aria-hidden="true">#</a> sort()</h2>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">//将数组进行排序,返回值是排好的数组，默认是按照最左边的数字进行排序，不是按照数字大小排序的。</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> arr1 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span>a <span class="token operator">-</span> b<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr1<span class="token punctuation">)</span>   <span class="token comment">// [1, 2, 3, 4, 6, 10, 22]</span>
<span class="token keyword">let</span> arr2 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span>b<span class="token operator">-</span>a<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span>  <span class="token comment">// [22, 10, 6, 4, 3, 2, 1]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reverse" tabindex="-1"><a class="header-anchor" href="#reverse" aria-hidden="true">#</a> reverse()</h2>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">//将数组反转,返回值是反转后的数组,改变原数组</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>    <span class="token comment">// [5,4,3,2,1]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>    <span class="token comment">// [5,4,3,2,1]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="slice-start-end" tabindex="-1"><a class="header-anchor" href="#slice-start-end" aria-hidden="true">#</a> slice(start,end)</h2>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">//切去索引值start到索引值end的数组，不包含end索引的值，返回值是切出来的数组,返回新数组可用于字符串**</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment">// [2,3]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>    <span class="token comment">//  [1,2,3,4,5]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="foreach-value-index-arr" tabindex="-1"><a class="header-anchor" href="#foreach-value-index-arr" aria-hidden="true">#</a> forEach((value,index,arr)=&gt;{})</h2>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">//遍历数组,无return  即使有return，也不会返回任何值，并且会影响原来的数组**</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span>
arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span>index<span class="token punctuation">,</span>array</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">value:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">    index:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>index<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">     array:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>array<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>   
<span class="token comment">//  value:1    index:0     array:1,2,3,4,5</span>
<span class="token comment">//  value:2    index:1     array:1,2,3,4,5</span>
<span class="token comment">//  value:3    index:2     array:1,2,3,4,5</span>
<span class="token comment">//  value:4    index:3     array:1,2,3,4,5</span>
<span class="token comment">//  value:5    index:4     array:1,2,3,4,5</span>

<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span>
arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span>index<span class="token punctuation">,</span>array</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    value <span class="token operator">=</span> value <span class="token operator">*</span> <span class="token number">2</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">value:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">    index:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>index<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">     array:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>array<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>   
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
<span class="token comment">// value:2    index:0     array:1,2,3,4,5</span>
<span class="token comment">// value:4    index:1     array:1,2,3,4,5</span>
<span class="token comment">// value:6    index:2     array:1,2,3,4,5</span>
<span class="token comment">// value:8    index:3     array:1,2,3,4,5</span>
<span class="token comment">// value:10   index:4     array:1,2,3,4,5</span>
<span class="token comment">// [1, 2, 3, 4, 5]</span>

<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span> 
<span class="token keyword">var</span> res <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span>index<span class="token punctuation">,</span>arr</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>     
 arr<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> item <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span> 
 <span class="token keyword">return</span> arr 
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [2,4,6,8]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="map-value-index-arr" tabindex="-1"><a class="header-anchor" href="#map-value-index-arr" aria-hidden="true">#</a> map((value,index,arr)=&gt;{})</h2>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">//映射数组(遍历数组),有return 返回一个新数组 。</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span>
arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span> <span class="token parameter">item</span><span class="token operator">=></span><span class="token punctuation">{</span>
        item<span class="token operator">=</span> item <span class="token operator">*</span> <span class="token number">2</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">item:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>item<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>   
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token comment">// [1,2,3,4,5]</span>

<span class="token keyword">var</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span> 
<span class="token keyword">var</span> res1 <span class="token operator">=</span> arr1<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span>index<span class="token punctuation">,</span>arr</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span> 
 item <span class="token operator">=</span> item <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">;</span> 
 <span class="token keyword">return</span> item<span class="token punctuation">;</span> 
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1,2,3,4]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [3,6,9,12]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="filter-value-index-arr" tabindex="-1"><a class="header-anchor" href="#filter-value-index-arr" aria-hidden="true">#</a> filter((value,index,arr)=&gt;{})</h2>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">//过滤数组，返回一个满足要求的数组**</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> arr1 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> value<span class="token operator">&lt;</span><span class="token number">3</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr1<span class="token punctuation">)</span>    <span class="token comment">// [1, 2]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="every-value-index-arr" tabindex="-1"><a class="header-anchor" href="#every-value-index-arr" aria-hidden="true">#</a> every((value,index,arr)=&gt;{})</h2>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">//依据判断条件，数组的元素是否全满足，若满足则返回ture**</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> arr1 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span>value<span class="token operator">&lt;</span><span class="token number">3</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr1<span class="token punctuation">)</span> <span class="token comment">// false</span>
<span class="token keyword">let</span> arr2 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span>value<span class="token operator">&lt;</span><span class="token number">6</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span>  <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="some" tabindex="-1"><a class="header-anchor" href="#some" aria-hidden="true">#</a> some()</h2>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">//依据判断条件，数组的元素是否有一个满足，若有一个满足则返回ture**</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> arr1 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span>value<span class="token operator">&lt;</span><span class="token number">3</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr1<span class="token punctuation">)</span> <span class="token comment">// true</span>
<span class="token keyword">let</span> arr2 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span>value<span class="token operator">></span><span class="token number">6</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reduce-value-index-arr-initialvalue" tabindex="-1"><a class="header-anchor" href="#reduce-value-index-arr-initialvalue" aria-hidden="true">#</a> reduce((value,index,arr)=&gt;{}, initialValue)</h2>
<blockquote>
<p>迭代数组的所有项，累加器，数组中的每个值（从左到右）合并，最终计算为一个值
实行方法：回调函数第一次执行时，preValue 和 curValue 可以是一个值，如果 initialValue 在调用 reduce() 时被提供，
那么第一个 preValue 等于initialValue ，并且curValue 等于数组中的第一个值；如果initialValue 未被提供，那么preValue 等于数组中的第一个值.</p>
</blockquote>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">/* 参数： (value,index,arr)=>{} 必选 --上一次调用回调返回的值，或者是提供的初始值（initialValue）
(currentValue 必选 --数组中当前被处理的数组项
index 可选 --当前数组项在数组中的索引值
array 可选 --原数组)
initialValue: 可选 --初始值 */</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> arr1 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">pre<span class="token punctuation">,</span>item<span class="token punctuation">,</span>index<span class="token punctuation">,</span>array</span><span class="token punctuation">)</span> <span class="token operator">=></span><span class="token punctuation">{</span>
   <span class="token keyword">return</span> pre<span class="token operator">+</span> item
 <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr1<span class="token punctuation">)</span>    <span class="token comment">// 10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reduceright-value-index-arr-initialvalue" tabindex="-1"><a class="header-anchor" href="#reduceright-value-index-arr-initialvalue" aria-hidden="true">#</a> reduceRight((value,index,arr)=&gt;{}, initialValue)</h2>
<blockquote>
<p>实行方法：reduceRight()首次调用回调函数(value,index,arr)=&gt;{}fn时，prevValue 和 curValue 可以是两个值之一。
如果调用 reduceRight() 时提供了 initialValue 参数，则 prevValue 等于 initialValue，curValue 等于数组中的最后一个值。
如果没有提供 initialValue 参数，则 prevValue 等于数组最后一个值， curValue 等于数组中倒数第二个值。</p>
</blockquote>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">//与arr.reduce()功能一样，不同的是，reduceRight()从数组的末尾向前将数组中的数组项做累加。</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> arr1 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">reduceRight</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">pre<span class="token punctuation">,</span> item</span><span class="token punctuation">)</span> <span class="token operator">=></span><span class="token punctuation">{</span>
			<span class="token keyword">return</span>  pre<span class="token operator">+</span> item
   <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr1<span class="token punctuation">)</span>    <span class="token comment">// 10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="indexof-i-n" tabindex="-1"><a class="header-anchor" href="#indexof-i-n" aria-hidden="true">#</a> indexOf(i,n)</h2>
<blockquote>
<p>i:想要查询的元素,n:起始位置
和arr.indexOf()的功能一样，不同的是从后往前查找
<strong>注意</strong>，这两个方法不能用来搜索<code v-pre>NaN</code>的位置，即它们无法确定数组成员是否包含<code v-pre>NaN</code>。</p>
</blockquote>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">//indexof()方法的功能是搜索数组中的元素，并返回它所在的位置，如果元素不存在，则返回-1</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span>
<span class="token comment">//查找2这个元素,且从第三位开始找</span>
<span class="token keyword">let</span> arr1 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr1<span class="token punctuation">)</span>  <span class="token comment">// 5</span>

<span class="token keyword">let</span> arr2 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span>  <span class="token comment">// -1</span>

<span class="token keyword">let</span> arr3 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span>  <span class="token comment">// -1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="lastindexof" tabindex="-1"><a class="header-anchor" href="#lastindexof" aria-hidden="true">#</a> lastIndexOf()</h2>
<blockquote>
<p><strong>注意</strong>，这两个方法不能用来搜索<code v-pre>NaN</code>的位置，即它们无法确定数组成员是否包含<code v-pre>NaN</code>。</p>
</blockquote>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">//和arr.indexOf()的功能一样，不同的是从后往前查找</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> arr1 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr1<span class="token punctuation">)</span>  <span class="token comment">// 5</span>

<span class="token keyword">let</span> arr2 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span>  <span class="token comment">// -1</span>

<span class="token keyword">let</span> arr3 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span>  <span class="token comment">// -1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="array-from" tabindex="-1"><a class="header-anchor" href="#array-from" aria-hidden="true">#</a> Array.from()</h2>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">//将伪数组变成数组，就是只要有length的就可以转成数组。 ---es6</span>
<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">'12345'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span>    <span class="token comment">// ["1", "2", "3", "4", "5"]</span>

<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token operator">:</span><span class="token string">'a'</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token operator">:</span><span class="token string">'b'</span><span class="token punctuation">,</span><span class="token literal-property property">length</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment">// ["a", "b"]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="array-of" tabindex="-1"><a class="header-anchor" href="#array-of" aria-hidden="true">#</a> Array.of()</h2>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">//将一组值转换成数组，类似于声明数组    ---es6</span>
<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">'11'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment">// ['11']</span>
<span class="token comment">//等价于</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token string">'11'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">// ['11]</span>

<span class="token comment">//ps:但是new Array()有缺点，就是参数问题引起的重载</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment">//[empty × 2]  是个空数组</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>    <span class="token comment">// [2]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="find-value-index-arr" tabindex="-1"><a class="header-anchor" href="#find-value-index-arr" aria-hidden="true">#</a> find((value,index,arr)=&gt;{})</h2>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">//找到第一个符合条件的数组成员</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> arr1 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> index<span class="token punctuation">,</span> array</span><span class="token punctuation">)</span> <span class="token operator">=></span>value <span class="token operator">></span> <span class="token number">2</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr1<span class="token punctuation">)</span>   <span class="token comment">// 3</span>

<span class="token keyword">let</span> arr2 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> index<span class="token punctuation">,</span> array</span><span class="token punctuation">)</span> <span class="token operator">=></span>value <span class="token operator">></span> <span class="token number">6</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span>   <span class="token comment">// undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="findindex-value-index-arr" tabindex="-1"><a class="header-anchor" href="#findindex-value-index-arr" aria-hidden="true">#</a> findIndex((value,index,arr)=&gt;{})</h2>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">// 找到第一个符合条件的数组成员的索引值</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> arr1 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> index<span class="token punctuation">,</span> array</span><span class="token punctuation">)</span> <span class="token operator">=></span> value <span class="token operator">></span> <span class="token number">3</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr1<span class="token punctuation">)</span>  <span class="token comment">// 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="arr-fill-target-start-end" tabindex="-1"><a class="header-anchor" href="#arr-fill-target-start-end" aria-hidden="true">#</a> arr.fill(target, start, end)</h2>
<blockquote>
<p>参数： target -- 待填充的元素  start -- 开始填充的位置-索引  end -- 终止填充的位置-索引（不包括该位置)</p>
</blockquote>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">//使用给定的值，填充一个数组,ps:填充完后会改变原数组**</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>

<span class="token keyword">const</span> arr1 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">//改变原数组</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr1<span class="token punctuation">)</span> <span class="token comment">//[ 0, 0, 0, 0, 0 ]</span>

<span class="token keyword">let</span> arr2 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span> <span class="token comment">// [ 1, 2, 0, 0, 0 ]</span>

<span class="token keyword">let</span> arr3 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr3<span class="token punctuation">)</span> <span class="token comment">// [ 1, 2, 0, 0, 5 ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="includes-t-s" tabindex="-1"><a class="header-anchor" href="#includes-t-s" aria-hidden="true">#</a> includes(T,S)</h2>
<blockquote>
<p>参数： T -- 查找元素  S -- 开始填充的位置</p>
</blockquote>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">//判断一个数组是否包含一个指定的值,返回布尔值</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">NaN</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> arr1 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr1<span class="token punctuation">)</span>   <span class="token comment">// ture</span>

<span class="token keyword">let</span> arr2 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span>    <span class="token comment">// false</span>

<span class="token keyword">let</span> arr3 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr3<span class="token punctuation">)</span>  <span class="token comment">// true</span>

<span class="token keyword">let</span> arr4 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr4<span class="token punctuation">)</span>    <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- =============================================================================================================================================== -->
<h2 id="entries" tabindex="-1"><a class="header-anchor" href="#entries" aria-hidden="true">#</a> entries()</h2>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">//遍历数组的键名和键值</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>

<span class="token keyword">let</span> arr1 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> e <span class="token keyword">of</span> arr1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// [0,1] [1,2] [2,3] [3,4]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>entries() 方法返回迭代数组。</p>
<p>迭代数组中每个值 前一个是索引值作为 key， 数组后一个值作为 value。</p>
<h2 id="arr-flat-infinity-数组拍平" tabindex="-1"><a class="header-anchor" href="#arr-flat-infinity-数组拍平" aria-hidden="true">#</a> arr.flat(Infinity) 数组拍平</h2>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> b  <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">flat</span><span class="token punctuation">(</span><span class="token number">Infinity</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>    <span class="token comment">//[ 1, 2, 3, 4 ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pop方法" tabindex="-1"><a class="header-anchor" href="#pop方法" aria-hidden="true">#</a> pop方法</h2>
<blockquote>
<p>用于<strong>删除</strong>数组的<strong>最后一个元素</strong>，并<strong>返回被删除的这个元素</strong>。</p>
<p>注意，该方法<strong>会改变原数组</strong></p>
</blockquote>
<p>语法：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>被删除的元素 <span class="token operator">=</span> 数组<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// 方法就是打点调用的函数 , 所以是数组打点调用他们</span>
<span class="token keyword">let</span> del <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[11, 22, 33]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>del<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//44</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="unshift-方法" tabindex="-1"><a class="header-anchor" href="#unshift-方法" aria-hidden="true">#</a> unshift()方法</h2>
<blockquote>
<p>用于在数组的<strong>第一个位置添加元素</strong>，并返回添加新元素后的数组长度。插入元素后，其他元素的索引会依次调整。</p>
<p>注意，该方法<strong>会改变原数组。</strong></p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token punctuation">,</span> <span class="token number">8</span> <span class="token punctuation">,</span> <span class="token number">9</span> <span class="token punctuation">,</span><span class="token number">16</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> size <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token number">100</span> <span class="token punctuation">,</span> <span class="token number">110</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[100, 110, 1, 8, 9, 16]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>size<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//6</span>

<span class="token comment">//unshift()方法可以接受多个参数，这些参数都会添加到目标数组头部。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="shift-1" tabindex="-1"><a class="header-anchor" href="#shift-1" aria-hidden="true">#</a> shift()</h2>
<blockquote>
<p>删除数组中的<strong>第一个</strong>元素，返回结果为<strong>被删除的元素</strong>。</p>
<p>注意，该方法会<strong>改变原数组</strong></p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"云牧"</span><span class="token punctuation">,</span> <span class="token string">"夕颜"</span><span class="token punctuation">,</span> <span class="token string">"大鱼"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> del <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//["夕颜", "大鱼"]</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>del<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//云牧</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>splice()方法会以数组形式返回被删除替换的项</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span>  arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"a"</span> <span class="token punctuation">,</span> <span class="token string">"b"</span> <span class="token punctuation">,</span> <span class="token string">"c"</span> <span class="token punctuation">,</span> <span class="token string">"d"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> newArr <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newArr<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// ["b" , "c"]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="题目1" tabindex="-1"><a class="header-anchor" href="#题目1" aria-hidden="true">#</a> 题目1</h2>
<blockquote>
<p><strong>求数组中每一项的总和、平均数</strong></p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 求数组的总和</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span>  <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 累加器</span>
<span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token comment">// 遍历数组  每遍历到一个数字  就把这个数字累加到累加器之中</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    sum <span class="token operator">+=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sum <span class="token operator">/</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="题目2" tabindex="-1"><a class="header-anchor" href="#题目2" aria-hidden="true">#</a> 题目2</h2>
<blockquote>
<p><strong>求数组的最大值和最小值</strong></p>
</blockquote>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">32</span><span class="token punctuation">,</span> <span class="token number">46</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token number">56</span><span class="token punctuation">,</span> <span class="token number">98</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>


    <span class="token comment">// 定义两个变量  max表示当前寻找到的最大值  默认是arr[0]</span>
    <span class="token comment">//			   min表示当前寻找到的最小值  默认是arr[0]</span>
    <span class="token keyword">let</span> max <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> min <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>


    <span class="token comment">//  遍历数组  从下标为1的项开始遍历</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 如果你遍历的这项 比当前最大值大  那么就让当前最大值成为这个项</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">></span> max<span class="token punctuation">)</span><span class="token punctuation">{</span>
            max <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> min<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// 否则如果你遍历的这项 比当前最小值小  那么就让当前最小值成为这个项</span>
            min <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>max <span class="token punctuation">,</span> min<span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方式 1：</strong></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 原始数组</span>
    
    
    <span class="token keyword">function</span> <span class="token function">reverseArr</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> newArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            newArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>arr<span class="token punctuation">.</span>length <span class="token operator">-</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> newArr<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">reverseArr</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//或者</span>
    <span class="token keyword">function</span> <span class="token function">reverseArr</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> newArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            newArr<span class="token punctuation">[</span>newArr<span class="token punctuation">.</span>length<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> newArr<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方式 2：（算法里比较常见的方式）</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">reverseArr</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> temp <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        arr<span class="token punctuation">[</span>arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> i<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> arr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数组的方法清单" tabindex="-1"><a class="header-anchor" href="#数组的方法清单" aria-hidden="true">#</a> 数组的方法清单</h2>
<h2 id="数组的类型相关" tabindex="-1"><a class="header-anchor" href="#数组的类型相关" aria-hidden="true">#</a> 数组的类型相关</h2>
<table>
<thead>
<tr>
<th style="text-align:left">方法</th>
<th style="text-align:left">描述</th>
<th style="text-align:left">备注</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Array.isArray()</td>
<td style="text-align:left">判断是否为数组</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">toString()</td>
<td style="text-align:left">将数组转换为字符串</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">Array.from(arrayLike)</td>
<td style="text-align:left">将<strong>伪数组</strong>转化为<strong>真数组</strong></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">Array.of(value1, value2, value3)</td>
<td style="text-align:left">创建数组：将<strong>一系列值</strong>转换成数组</td>
<td style="text-align:left"></td>
</tr>
</tbody>
</table>
<p>注意，获取数组的长度是用<code v-pre>length</code>属性，不是方法。</p>
<h2 id="数组元素的添加和删除" tabindex="-1"><a class="header-anchor" href="#数组元素的添加和删除" aria-hidden="true">#</a> 数组元素的添加和删除</h2>
<table>
<thead>
<tr>
<th style="text-align:left">方法</th>
<th style="text-align:left">描述</th>
<th style="text-align:left">备注</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">push()</td>
<td style="text-align:left">向数组的<strong>最后面</strong>插入一个或多个元素，返回结果为新数组的<strong>长度</strong></td>
<td style="text-align:left">会改变原数组</td>
</tr>
<tr>
<td style="text-align:left">pop()</td>
<td style="text-align:left">删除数组中的<strong>最后一个</strong>元素，返回结果为<strong>被删除的元素</strong></td>
<td style="text-align:left">会改变原数组</td>
</tr>
<tr>
<td style="text-align:left">unshift()</td>
<td style="text-align:left">在数组<strong>最前面</strong>插入一个或多个元素，返回结果为新数组的<strong>长度</strong></td>
<td style="text-align:left">会改变原数组</td>
</tr>
<tr>
<td style="text-align:left">shift()</td>
<td style="text-align:left">删除数组中的<strong>第一个</strong>元素，返回结果为<strong>被删除的元素</strong></td>
<td style="text-align:left">会改变原数组</td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">slice()</td>
<td style="text-align:left">从数组中<strong>提取</strong>指定的一个或多个元素，返回结果为<strong>新的数组</strong></td>
<td style="text-align:left">不会改变原数组</td>
</tr>
<tr>
<td style="text-align:left">splice()</td>
<td style="text-align:left">从数组中<strong>删除</strong>指定的一个或多个元素，返回结果为<strong>被删除元素组成的新数组</strong></td>
<td style="text-align:left">会改变原数组</td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">fill()</td>
<td style="text-align:left">填充数组：用固定的值填充数组，返回结果为<strong>新的数组</strong></td>
<td style="text-align:left">不会改变原数组</td>
</tr>
</tbody>
</table>
<h2 id="数组的合并和拆分" tabindex="-1"><a class="header-anchor" href="#数组的合并和拆分" aria-hidden="true">#</a> 数组的合并和拆分</h2>
<table>
<thead>
<tr>
<th style="text-align:left">方法</th>
<th style="text-align:left">描述</th>
<th style="text-align:left">备注</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">concat()</td>
<td style="text-align:left">合并数组：连接两个或多个数组，返回结果为<strong>新的数组</strong></td>
<td style="text-align:left">不会改变原数组</td>
</tr>
<tr>
<td style="text-align:left">join()</td>
<td style="text-align:left">将数组转换为字符串，返回结果为<strong>转换后的字符串</strong></td>
<td style="text-align:left">不会改变原数组</td>
</tr>
<tr>
<td style="text-align:left">split()</td>
<td style="text-align:left">将字符串按照指定的分隔符，组装为数组</td>
<td style="text-align:left">不会改变原字符串</td>
</tr>
</tbody>
</table>
<p>注意，<code v-pre>split()</code>是字符串的方法，不是数组的方法。</p>
<h2 id="数组排序" tabindex="-1"><a class="header-anchor" href="#数组排序" aria-hidden="true">#</a> 数组排序</h2>
<table>
<thead>
<tr>
<th style="text-align:left">方法</th>
<th style="text-align:left">描述</th>
<th style="text-align:left">备注</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">reverse()</td>
<td style="text-align:left">反转数组，返回结果为<strong>反转后的数组</strong></td>
<td style="text-align:left">会改变原数组</td>
</tr>
<tr>
<td style="text-align:left">sort()</td>
<td style="text-align:left">对数组的元素,默认按照<strong>Unicode 编码</strong>，从小到大进行排序</td>
<td style="text-align:left">会改变原数组</td>
</tr>
</tbody>
</table>
<h2 id="查找数组的元素" tabindex="-1"><a class="header-anchor" href="#查找数组的元素" aria-hidden="true">#</a> 查找数组的元素</h2>
<table>
<thead>
<tr>
<th style="text-align:left">方法</th>
<th style="text-align:left">描述</th>
<th style="text-align:left">备注</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">indexOf(value)</td>
<td style="text-align:left">从前往后索引，检索一个数组中是否含有指定的元素</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">lastIndexOf(value)</td>
<td style="text-align:left">从后往前索引，检索一个数组中是否含有指定的元素</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">includes(item)</td>
<td style="text-align:left">数组中是否包含指定的内容</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">find(function())</td>
<td style="text-align:left">找出<strong>第一个</strong>满足「指定条件返回 true」的元素</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">findIndex(function())</td>
<td style="text-align:left">找出<strong>第一个</strong>满足「指定条件返回 true」的元素的 index</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">every()</td>
<td style="text-align:left">确保数组中的每个元素都满足「指定条件返回 true」，则停止遍历，此方法才返回 true</td>
<td style="text-align:left">全真才为真。要求每一项都返回 true，最终的结果才返回 true</td>
</tr>
<tr>
<td style="text-align:left">some()</td>
<td style="text-align:left">数组中只要有一个元素满足「指定条件返回 true」，则停止遍历，此方法就返回 true</td>
<td style="text-align:left">一真即真。只要有一项返回 true，最终的结果就返回 true</td>
</tr>
</tbody>
</table>
<h2 id="遍历数组" tabindex="-1"><a class="header-anchor" href="#遍历数组" aria-hidden="true">#</a> 遍历数组</h2>
<table>
<thead>
<tr>
<th style="text-align:left">方法</th>
<th style="text-align:left">描述</th>
<th style="text-align:left">备注</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">for 循环</td>
<td style="text-align:left">这个大家都懂</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">forEach()</td>
<td style="text-align:left">和 for 循环类似，但需要兼容 IE8 以上</td>
<td style="text-align:left">forEach() 没有返回值。也就是说，它的返回值是 undefined</td>
</tr>
<tr>
<td style="text-align:left">map()</td>
<td style="text-align:left">对原数组中的每一项进行加工，将组成新的数组</td>
<td style="text-align:left">不会改变原数组</td>
</tr>
<tr>
<td style="text-align:left">filter()</td>
<td style="text-align:left">过滤数组：返回结果是 true 的项，将组成新的数组，返回结果为<strong>新的数组</strong></td>
<td style="text-align:left">不会改变原数组</td>
</tr>
<tr>
<td style="text-align:left">reduce</td>
<td style="text-align:left">接收一个函数作为累加器，返回值是回调函数累计处理的结果</td>
<td style="text-align:left"></td>
</tr>
</tbody>
</table>
<p><strong>下面的数组方法改变了原来数组</strong></p>
<blockquote>
<p>arr.push()
arr.unshift()
arr.pop()
arr.shift()
arr.splice()
arr.reverse()
arr.sort()</p>
</blockquote>
</div></template>


