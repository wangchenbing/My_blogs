<template><div><p>在父级盒子开启flex布局</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code>  <span class="token property">display</span><span class="token punctuation">:</span>flex<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="设置主轴方向" tabindex="-1"><a class="header-anchor" href="#设置主轴方向" aria-hidden="true">#</a> 设置主轴方向</h2>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code>  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>垂直
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column-reverse<span class="token punctuation">;</span>反向垂直
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> row<span class="token punctuation">;</span>水平
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> row-reverse<span class="token punctuation">;</span>反向水平
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="主轴分布" tabindex="-1"><a class="header-anchor" href="#主轴分布" aria-hidden="true">#</a> 主轴分布</h2>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code>  <span class="token property">justify-content</span><span class="token punctuation">:</span> space-around<span class="token punctuation">;</span>
  <span class="token comment">/* 在一行中平均分配 */</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>
  <span class="token comment">/* 在一行中对顶分配 */</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> space-evenly<span class="token punctuation">;</span>
  <span class="token comment">/* 所有格子间隔一样 */</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>//子元素居中对齐
  <span class="token property">justify-content</span><span class="token punctuation">:</span> flex-end<span class="token punctuation">;</span>//从尾部开始排列
  <span class="token property">justify-content</span><span class="token punctuation">:</span> flex-start<span class="token punctuation">;</span>//默认值<span class="token punctuation">,</span>从头开始
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="侧轴分布" tabindex="-1"><a class="header-anchor" href="#侧轴分布" aria-hidden="true">#</a> 侧轴分布</h2>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code>  <span class="token comment">/* 参数同上 */</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>//侧轴剧中
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="整体多行布局" tabindex="-1"><a class="header-anchor" href="#整体多行布局" aria-hidden="true">#</a> 整体多行布局</h2>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code>参数同上
  <span class="token property">align-content</span><span class="token punctuation">:</span> center
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="子盒子是否换行" tabindex="-1"><a class="header-anchor" href="#子盒子是否换行" aria-hidden="true">#</a> 子盒子是否换行</h2>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code>  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>//换行
  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>//默认不换行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性解释" tabindex="-1"><a class="header-anchor" href="#属性解释" aria-hidden="true">#</a> 属性解释</h2>
<h3 id="flexbox" tabindex="-1"><a class="header-anchor" href="#flexbox" aria-hidden="true">#</a> flexbox</h3>
<p>对Flex容器设置display:flex或者display:inline-flex</p>
<flex-flexbox/><div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>wrap<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token selector">.wrap </span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="flex-direction" tabindex="-1"><a class="header-anchor" href="#flex-direction" aria-hidden="true">#</a> flex-direction</h3>
<p>控制Flex项目沿着主轴（Main Axis）(父容器) 的排列方向</p>
<flex-flexDirection/><div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token selector">.wrap </span><span class="token punctuation">{</span>
  flex-direction：row || column || row-reverse || column-reverse
                <span class="token comment">// 水平（顺）|| 垂直（顺）|| 水平（逆）|| 垂直（逆）</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="flex-wrap" tabindex="-1"><a class="header-anchor" href="#flex-wrap" aria-hidden="true">#</a> flex-wrap</h3>
<p>控制Flex项目是否换行，默认值是nowrap，不换行</p>
<flex-flexWrap/><div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token selector">.wrap </span><span class="token punctuation">{</span>
  flex-wrap：wrap || nowrap || wrap-reverse
            <span class="token comment">// 换行（正）|| 不换行 || 换行（反）</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="flex-flow" tabindex="-1"><a class="header-anchor" href="#flex-flow" aria-hidden="true">#</a> flex-flow</h3>
<p>flex-direction和flex-wrap两个属性的组合属性</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token selector">.wrap </span><span class="token punctuation">{</span>
  flex-flow：row wrap|| row nowrap || column wrap || column nowrap 等等
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="justify-content" tabindex="-1"><a class="header-anchor" href="#justify-content" aria-hidden="true">#</a> justify-content</h3>
<p>Flex项目在整个Main-Axis上的对齐方式(父容器X轴)，默认是flex-start，起始端对齐</p>
<flex-flexJustifyContent/><div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token selector">.wrap </span><span class="token punctuation">{</span>
   justify-content：flex-start || flex-end || center || space-between || space-around
                  <span class="token comment">// 起始端对齐 → || 末尾段对齐 ← || 居中对齐 || 首尾两端均匀分布 || 均匀分布（首尾两端的子容器到父容器的距离是子容器间距的一半）</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="align-items" tabindex="-1"><a class="header-anchor" href="#align-items" aria-hidden="true">#</a> align-items</h3>
<p>Flex项目在Cross-Axis对齐方式(父容器Y轴)，默认是flex-start，起始端对齐</p>
<flex-flexAlignItems/><div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token selector">.wrap </span><span class="token punctuation">{</span>
   align-items：flex-start || flex-end || center || baseline || stretch
                  <span class="token comment">// 起始端对齐 ↓ || 末尾段对齐 ↑ || 居中对齐 || 基线对齐（默认是指首行文字） || 子容器沿Y轴方向的尺寸拉伸至与父容器一致</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="align-content" tabindex="-1"><a class="header-anchor" href="#align-content" aria-hidden="true">#</a> align-content</h3>
<p>该属性只针对子容器多行排列时，设置行与行之间的对齐方式，对单行无效。</p>
<flex-flexAlignContent/><div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token selector">.wrap </span><span class="token punctuation">{</span>
   align-content：flex-start || flex-end || center || space-around || space-between || stretch
                  <span class="token comment">// 起始端对齐 ↓ || 末尾段对齐 ↑ || 居中对齐 || 等边距均匀分布 || 等间距均匀分布 || 拉伸对齐</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="order" tabindex="-1"><a class="header-anchor" href="#order" aria-hidden="true">#</a> order</h3>
<p>改变子容器的排列顺序，覆盖 HTML 代码中的顺序，默认值为 0，可以为负值，数值越小排列越靠前。</p>
<flex-flexOrder/><div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token selector">.wrap </span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span>flex<span class="token punctuation">;</span>
  <span class="token selector">div</span><span class="token punctuation">{</span>
    <span class="token property">order</span><span class="token punctuation">:</span>1<span class="token comment">//数字</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="flex-basis" tabindex="-1"><a class="header-anchor" href="#flex-basis" aria-hidden="true">#</a> flex-basis</h3>
<p>在不伸缩的情况下子容器的原始尺寸。主轴为横向时代表宽度，主轴为纵向时代表高度。</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token selector">.wrap </span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span>flex<span class="token punctuation">;</span>
  <span class="token comment">// 主轴为横向时代表宽度</span>
  flex-direction：row<span class="token punctuation">;</span>
  <span class="token selector">div</span><span class="token punctuation">{</span>
    <span class="token property">flex-basis</span><span class="token punctuation">:</span>120px<span class="token punctuation">;</span><span class="token comment">//数字</span>
    <span class="token property">height</span><span class="token punctuation">:</span>80px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 或者</span>

  <span class="token comment">// 主轴为纵向时代表高度</span>
  <span class="token comment">// flex-direction：column;</span>
  <span class="token comment">// div{</span>
  <span class="token comment">//   flex-basis:120px;//数字</span>
  <span class="token comment">//   width:80px;</span>
  <span class="token comment">// }</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="flex-grow" tabindex="-1"><a class="header-anchor" href="#flex-grow" aria-hidden="true">#</a> flex-grow</h3>
<p>父容器剩余空间按 1:2 的比例分配给子容器</p>
<flex-flexGrow/><div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token selector">.wrap </span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span>flex<span class="token punctuation">;</span>
  <span class="token selector">.div1</span><span class="token punctuation">{</span>
    <span class="token property">flex-grow</span><span class="token punctuation">:</span>1
  <span class="token punctuation">}</span>
  <span class="token selector">.div2</span><span class="token punctuation">{</span>
    <span class="token property">flex-grow</span><span class="token punctuation">:</span>2
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="flex-shrink" tabindex="-1"><a class="header-anchor" href="#flex-shrink" aria-hidden="true">#</a> flex-shrink</h3>
<p>子容器超出的部分按 1:2 的比例从子容器中减去</p>
<flex-flexShrink/><div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token selector">.wrap </span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span>flex<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
  <span class="token selector">.div1,.div2</span><span class="token punctuation">{</span>
    <span class="token property">flex-basis</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span>
    <span class="token comment">// 设置基础宽度，且超出父容器宽度</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.div1</span><span class="token punctuation">{</span>
    <span class="token property">flex-shrink</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.div2</span><span class="token punctuation">{</span>
    <span class="token property">flex-shrink</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="align-self" tabindex="-1"><a class="header-anchor" href="#align-self" aria-hidden="true">#</a> align-self</h3>
<p>每个子容器可以单独定义沿交叉(父容器Y)轴的排列的方式，此属性与父容器 align-items 属性完全一致，如果两者同时设置则以子容器的 align-self 属性为准。</p>
<flex-flexAlignSelf/><div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token selector">.wrap </span><span class="token punctuation">{</span>
   align-self：flex-start || flex-end || center || baseline || stretch
              <span class="token comment">// 起始端对齐 || 末尾段对齐|| 居中对齐 || 基线对齐（默认是指首行文字） || 子容器沿Y轴方向的尺寸拉伸至与父容器一致</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


