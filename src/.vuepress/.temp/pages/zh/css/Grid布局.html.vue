<template><div><p>grid布局</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token comment">/* 在父级盒子开启flex布局 */</span>
  <span class="token property">display</span><span class="token punctuation">:</span>grid<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="间距" tabindex="-1"><a class="header-anchor" href="#间距" aria-hidden="true">#</a> 间距</h2>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code>  <span class="token comment">/* 行间距 */</span>
  <span class="token property">row-gap</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
  <span class="token comment">/* 列间距 */</span>
  <span class="token property">column-gap</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
  <span class="token comment">/* 行列缩写*/</span>
  <span class="token property">grid-gap</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="行列" tabindex="-1"><a class="header-anchor" href="#行列" aria-hidden="true">#</a> 行列</h2>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code>  <span class="token comment">/*列数 repeat自动重复多少列每列宽度 */</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>4<span class="token punctuation">,</span> 80px<span class="token punctuation">)</span><span class="token punctuation">;</span> 
  <span class="token comment">/* 按照比例等分,每行个数 */</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>4<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">/* 设置某一列最小宽度 */</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 1fr <span class="token function">minmax</span><span class="token punctuation">(</span>400px<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span> 
  <span class="token comment">/* 设置某一列自适应 */</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 100px auto 100px<span class="token punctuation">;</span>  
  <span class="token comment">/* 行数 参数同上 */</span>
  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>4<span class="token punctuation">,</span> 80px<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="主轴分布" tabindex="-1"><a class="header-anchor" href="#主轴分布" aria-hidden="true">#</a> 主轴分布</h2>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code>  <span class="token property">justify-content</span><span class="token punctuation">:</span> space-around<span class="token punctuation">;</span>
  <span class="token comment">/* 在一行中平均分配 */</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>
  <span class="token comment">/* 在一行中对顶分配 */</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> space-evenly<span class="token punctuation">;</span>
  <span class="token comment">/* 所有格子间隔一样 */</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>//子元素居中对齐
  <span class="token property">justify-content</span><span class="token punctuation">:</span> flex-end<span class="token punctuation">;</span>//从尾部开始排列
  <span class="token property">justify-content</span><span class="token punctuation">:</span> flex-start<span class="token punctuation">;</span>//默认值<span class="token punctuation">,</span>从头开始
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="侧轴分布" tabindex="-1"><a class="header-anchor" href="#侧轴分布" aria-hidden="true">#</a> 侧轴分布,</h2>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token comment">/* 同上 */</span>
<span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


