<template><div><h2 id="类型注解" tabindex="-1"><a class="header-anchor" href="#类型注解" aria-hidden="true">#</a> 类型注解</h2>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">const</span> <span class="token literal-property property">a</span><span class="token operator">:</span> string <span class="token operator">=</span> <span class="token string">'foobar'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token literal-property property">b</span><span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token literal-property property">c</span><span class="token operator">:</span> boolean <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

<span class="token comment">// 严格模式下不允许为空 strictNullChecks 只用来检查类型</span>
<span class="token keyword">const</span> <span class="token literal-property property">d</span><span class="token operator">:</span> string <span class="token operator">=</span> <span class="token string">'234'</span><span class="token punctuation">;</span>

<span class="token comment">// 严格模式下void只能为undefind, 非严格模式可以为null</span>
<span class="token keyword">const</span> <span class="token literal-property property">e</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token literal-property property">f</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token literal-property property">g</span><span class="token operator">:</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>

<span class="token comment">// 任何es6新增对象，只能在es2015中使用，所以es5中不能使用</span>
<span class="token comment">// 如果设置了lib，需要引入DOM库，不然console等内置对象会报错</span>
<span class="token keyword">const</span> <span class="token literal-property property">h</span><span class="token operator">:</span> symbol <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// yarn tsc --locale zh-CN  中文错误消息提示</span>
<span class="token comment">// vscode自己提示使用typescript-locale设置zh-CN即可</span>
<span class="token keyword">const</span> <span class="token literal-property property">error</span><span class="token operator">:</span> string <span class="token operator">=</span> <span class="token string">'100'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h2>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">// 数组类型</span>
<span class="token keyword">const</span> <span class="token literal-property property">arr1</span><span class="token operator">:</span> Array<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>number</span><span class="token punctuation">></span></span><span class="token plain-text"> = [1,2];

const arr2: string[] = ['a', 'b']

// 数组类型应用
function sum(...args: number[]) </span><span class="token punctuation">{</span>
    <span class="token comment">// 判断成员是不是数字</span>
    <span class="token keyword">return</span> args<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prev<span class="token punctuation">,</span> current</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> prev <span class="token operator">+</span> current<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token plain-text">

sum(1,32);
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="object" tabindex="-1"><a class="header-anchor" href="#object" aria-hidden="true">#</a> Object</h2>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">const</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token function-variable function">object</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// [] {} () => {} object类型</span>

<span class="token keyword">const</span> <span class="token literal-property property">obj</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">foo</span><span class="token operator">:</span> number<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">foo</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 必须跟声明的一致，否则不行</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>元祖类型</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">// hook中都应用到</span>
<span class="token keyword">const</span> <span class="token literal-property property">tuple</span><span class="token operator">:</span> <span class="token punctuation">[</span>number<span class="token punctuation">,</span> string<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">'a'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> age <span class="token operator">=</span> tuple<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> name <span class="token operator">=</span> tuple<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">[</span>myAge<span class="token punctuation">,</span> myName<span class="token punctuation">]</span> <span class="token operator">=</span> tuple<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="枚举" tabindex="-1"><a class="header-anchor" href="#枚举" aria-hidden="true">#</a> 枚举</h2>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">// const postStatus = {</span>
<span class="token comment">//     Draft: 0,</span>
<span class="token comment">//     onPublished: 1,</span>
<span class="token comment">//     published: 2</span>
<span class="token comment">// }</span>

<span class="token comment">// 枚举类型</span>
<span class="token comment">// 如果不指定值，则从0开始累加</span>
<span class="token comment">// enum PostStatus {</span>
<span class="token comment">//     Draft = 0,</span>
<span class="token comment">//     onPublished = 1,</span>
<span class="token comment">//     Published = 2,</span>
<span class="token comment">// }</span>

<span class="token comment">// 字符串枚举</span>
<span class="token comment">// 如果加了const，则会使用真实值</span>
<span class="token keyword">const</span> <span class="token keyword">enum</span> PostStatus <span class="token punctuation">{</span>
    Draft <span class="token operator">=</span> <span class="token string">'aaa'</span><span class="token punctuation">,</span>
    onPublished <span class="token operator">=</span> <span class="token string">'bbb'</span><span class="token punctuation">,</span>
    Published <span class="token operator">=</span> <span class="token string">'ccc'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> post <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'hello ts'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">'ts 666'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">status</span><span class="token operator">:</span> PostStatus<span class="token punctuation">.</span>Draft<span class="token punctuation">,</span> <span class="token comment">// 0, 1, 2</span>
<span class="token punctuation">}</span>

<span class="token comment">// console.log(PostStatus[0]);</span>

<span class="token comment">// 枚举会影响编译后的结果</span>
<span class="token keyword">enum</span> Status <span class="token punctuation">{</span>
    Draft <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
    onPublished <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
    Published <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> post1  <span class="token operator">=</span><span class="token punctuation">{</span>
    <span class="token literal-property property">status</span><span class="token operator">:</span> Status<span class="token punctuation">.</span>onPublished
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>post1<span class="token punctuation">.</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数类型" tabindex="-1"><a class="header-anchor" href="#函数类型" aria-hidden="true">#</a> 函数类型</h2>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">// 加了问号标识可选参数，或者添加默认值</span>
<span class="token comment">// 可选参数必须出现在最后面</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">a</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token operator">...</span>rest<span class="token operator">:</span> number<span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span><span class="token operator">:</span> string <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">"1"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 参数个数必须要相同，形参和实参个数相同</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 函数类型标识</span>
<span class="token keyword">const</span> <span class="token function-variable function">fun2</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">a</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function-variable function">string</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">a</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">"fn"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="泛型" tabindex="-1"><a class="header-anchor" href="#泛型" aria-hidden="true">#</a> 泛型</h2>
<aside>
📌 可以通过T指定调用的时候再确定类型
</aside>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">function</span> identity<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">T</span></span><span class="token punctuation">></span></span><span class="token plain-text">(arg: T): T </span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> arg<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token plain-text">

identity</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>boolean</span><span class="token punctuation">></span></span><span class="token plain-text">(true);

window.onmousedown = function(mouseEvent: any) </span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mouseEvent<span class="token punctuation">.</span>button<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token plain-text">
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="any" tabindex="-1"><a class="header-anchor" href="#any" aria-hidden="true">#</a> any</h2>
<aside>
📌 any不会做任何类型检查，语法不会报错
</aside>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code>
<span class="token keyword">function</span> <span class="token function">stringify</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">value</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">stringify</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">stringify</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>类型断言</p>
<p>自己指定执行的结果类型</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">// 类型断言</span>
<span class="token comment">// 自己制定类型</span>

<span class="token keyword">const</span> nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">110</span><span class="token punctuation">,</span><span class="token number">22</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> res <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">i</span> <span class="token operator">=></span> i <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// const square1 = res * res; res推断为number或者undefined</span>

<span class="token keyword">const</span> num1 <span class="token operator">=</span> res <span class="token keyword">as</span> number<span class="token punctuation">;</span>
<span class="token keyword">const</span> num2 <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>number</span><span class="token punctuation">></span></span><span class="token plain-text">res; // jsx会跟&lt;>冲突 推荐as语法
const square = num1 * num1;
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="interface接口" tabindex="-1"><a class="header-anchor" href="#interface接口" aria-hidden="true">#</a> interface接口</h2>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">// 接口约束对象的结构</span>
<span class="token keyword">interface</span> <span class="token class-name">Post</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> string
    <span class="token literal-property property">content</span><span class="token operator">:</span> string
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">printPost</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">post</span><span class="token operator">:</span> Post</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>post<span class="token punctuation">.</span>title<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>post<span class="token punctuation">.</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">printPost</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="接口可选成员-只读成员" tabindex="-1"><a class="header-anchor" href="#接口可选成员-只读成员" aria-hidden="true">#</a> 接口可选成员&amp;只读成员</h2>
<aside>
📌 ？可选成员
</aside>
<aside>
📌 readonly 只读成员
</aside>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">// 接口约束对象的结构</span>
<span class="token keyword">interface</span> <span class="token class-name">Post</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> string
    <span class="token literal-property property">content</span><span class="token operator">:</span> string
    subTitle<span class="token operator">?</span><span class="token operator">:</span> string <span class="token comment">// 可选成员，undefined或者string</span>
    readonly summary<span class="token operator">:</span> string <span class="token comment">// 只读成员</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token literal-property property">hello</span><span class="token operator">:</span> Post <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'hello, ts'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">'javascript superset'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">summary</span><span class="token operator">:</span> <span class="token string">'简介'</span>
<span class="token punctuation">}</span>

<span class="token comment">// hello.summary = '234';</span>
<span class="token comment">// string类型的键值</span>
<span class="token keyword">interface</span> <span class="token class-name">Cache</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>prop<span class="token operator">:</span> string<span class="token punctuation">]</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token comment">// prop为自己定义，只是为了声明格式</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token literal-property property">cache</span><span class="token operator">:</span> Cache <span class="token operator">=</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

cache<span class="token punctuation">.</span>foo <span class="token operator">=</span> <span class="token string">'value'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类" tabindex="-1"><a class="header-anchor" href="#类" aria-hidden="true">#</a> 类</h2>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token comment">// 声明类型</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span> <span class="token comment">// = 'init name'</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> number<span class="token punctuation">;</span> <span class="token comment">// = 'init number'</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token comment">// this.gender = 0; 必须要声明再赋值</span>
  <span class="token punctuation">}</span>

  <span class="token function">sayHi</span><span class="token punctuation">(</span>msg<span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">i am </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">"a"</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>类-访问修饰符</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token comment">// 声明类型</span>
  <span class="token keyword">public</span> <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span> <span class="token comment">// 默认公有属性 建议添加</span>
  <span class="token keyword">private</span> <span class="token literal-property property">age</span><span class="token operator">:</span> number<span class="token punctuation">;</span> <span class="token comment">// 私有属性，只能在当前类进行访问</span>
  <span class="token keyword">protected</span> <span class="token literal-property property">gender</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span> <span class="token comment">// 受保护的类型,可以在继承的子类中进行访问</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>gender <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token comment">// this.gender = 0; 必须要声明再赋值</span>
  <span class="token punctuation">}</span>

  <span class="token function">sayHi</span><span class="token punctuation">(</span>msg<span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">i am </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> tom <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">"tom"</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token comment">// 如果构造函数是私有的，则只能内部进行new，然后通过静态方法返回回去</span>
  <span class="token keyword">private</span> <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>gender<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// console.log(this.age);</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">static</span> <span class="token keyword">of</span><span class="token punctuation">(</span>name<span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> number<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// console.log(tom.gender);</span>

<span class="token keyword">const</span> student <span class="token operator">=</span> Student<span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token string">"tom"</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类-只读属性" tabindex="-1"><a class="header-anchor" href="#类-只读属性" aria-hidden="true">#</a> 类-只读属性</h2>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token comment">// 声明类型</span>
  <span class="token keyword">public</span> <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span> <span class="token comment">// 默认公有属性 建议添加</span>
  <span class="token keyword">private</span> <span class="token literal-property property">age</span><span class="token operator">:</span> number<span class="token punctuation">;</span> <span class="token comment">// 私有属性，只能在当前类进行访问</span>
  readonly gender<span class="token operator">:</span> boolean<span class="token punctuation">;</span> <span class="token comment">// 只读属性</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>gender <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token comment">// this.gender = 0; 必须要声明再赋值</span>
  <span class="token punctuation">}</span>

  <span class="token function">sayHi</span><span class="token punctuation">(</span>msg<span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">i am </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> tom <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">"tom"</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类与接口" tabindex="-1"><a class="header-anchor" href="#类与接口" aria-hidden="true">#</a> 类与接口</h2>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">// interface EatAndRun {</span>
<span class="token comment">//   eat(food: string): void;</span>
<span class="token comment">//   run(distance: number): void;</span>
<span class="token comment">// }</span>
<span class="token keyword">interface</span> <span class="token class-name">Eat</span> <span class="token punctuation">{</span>
  <span class="token function">eat</span><span class="token punctuation">(</span>foo<span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Run</span> <span class="token punctuation">{</span>
  <span class="token function">run</span><span class="token punctuation">(</span>distance<span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 通过接口对类进行限制</span>

<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token keyword">implements</span> <span class="token class-name">Eat</span><span class="token punctuation">,</span> Run <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token function">eat</span><span class="token punctuation">(</span>food<span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">优雅的进餐</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>food<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">run</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">distance</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">直立行走</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>distance<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token keyword">implements</span> <span class="token class-name">Eat</span><span class="token punctuation">,</span> Run <span class="token punctuation">{</span>
  <span class="token function">eat</span><span class="token punctuation">(</span>food<span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">呼噜呼噜的吃</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>food<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">run</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">distance</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">爬行：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>distance<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="抽象类" tabindex="-1"><a class="header-anchor" href="#抽象类" aria-hidden="true">#</a> 抽象类</h2>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">// abstract定义抽象类</span>
abstract <span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  <span class="token function">eat</span><span class="token punctuation">(</span>food<span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">吃</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>food<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">//   父类定义了，子类必须去实现</span>
  abstract <span class="token function">run</span><span class="token punctuation">(</span>distance<span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  <span class="token function">run</span><span class="token punctuation">(</span>distance<span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">四条腿行走</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>distance<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
d<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token string">"好吃的"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

d<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="泛型-1" tabindex="-1"><a class="header-anchor" href="#泛型-1" aria-hidden="true">#</a> 泛型</h2>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">// 声明时候不声明，调用时候传递一个类型，为了复用代码</span>

<span class="token keyword">function</span> <span class="token function">createNumberArray</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">length</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span><span class="token operator">:</span> number<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> arr <span class="token operator">=</span> Array<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>number</span><span class="token punctuation">></span></span><span class="token plain-text">(length).fill(value);
  return arr;
}

function createStringArray(length: number, value: string): string[] </span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> arr <span class="token operator">=</span> Array<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span><span class="token punctuation">></span></span><span class="token plain-text">(length).fill(value);
  return arr;
}

const res = createNumberArray(4, 100);
console.log(res);

// 泛型
// 调用函数的时候再指定类型
function createArray</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">T</span></span><span class="token punctuation">></span></span><span class="token plain-text">(length: number, value: T) </span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> arr <span class="token operator">=</span> Array<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">T</span></span><span class="token punctuation">></span></span><span class="token plain-text">(length).fill(value);
  return arr;
}

const res1 = createArray</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span><span class="token punctuation">></span></span><span class="token plain-text">(3, "name");
const res4 = createArray</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>number</span><span class="token punctuation">></span></span><span class="token plain-text">(3, 4);
console.log(res1);
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类型声明" tabindex="-1"><a class="header-anchor" href="#类型声明" aria-hidden="true">#</a> 类型声明</h2>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> camelCase <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"lodash"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> parse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"query-string"</span><span class="token punctuation">;</span>
<span class="token comment">// query-string内置了声明文件</span>

<span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">"324"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 成员定义的时候没有确定类型，我们可以在使用的时候再给他声明类型</span>
<span class="token comment">// 兼容js模块来设计的</span>

<span class="token comment">// declare function camelCase(input: string): string;</span>

<span class="token comment">// 可以安装@types/lodash类型说明文件，就可以不用自己声明了</span>

<span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token function">camelCase</span><span class="token punctuation">(</span><span class="token string">"hello typed"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7隐式类型推断" tabindex="-1"><a class="header-anchor" href="#_7隐式类型推断" aria-hidden="true">#</a> 7隐式类型推断</h2>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">let</span> age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>

<span class="token comment">// age = 'string' // 不能赋值，因为推断你的类型为number</span>

<span class="token keyword">let</span> foo<span class="token punctuation">;</span>

foo <span class="token operator">=</span> <span class="token string">'string'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tsconfig-json文件说明" tabindex="-1"><a class="header-anchor" href="#tsconfig-json文件说明" aria-hidden="true">#</a> tsconfig.json文件说明</h2>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token string-property property">"target"</span><span class="token operator">:</span> <span class="token string">"es2015"</span><span class="token punctuation">,</span> <span class="token comment">// 转化js版本</span>
<span class="token string-property property">"lib"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"ES2015"</span><span class="token punctuation">,</span> <span class="token string">"DOM"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 指定类型库</span>
<span class="token string-property property">"outDir"</span><span class="token operator">:</span> <span class="token string">"dist"</span><span class="token punctuation">,</span> <span class="token comment">// 输出结果的目录</span>
<span class="token string-property property">"rootDir"</span><span class="token operator">:</span> <span class="token string">"src"</span><span class="token punctuation">,</span> <span class="token comment">// 需要编译目录</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


