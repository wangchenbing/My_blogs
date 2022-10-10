<template><div><accordion/><div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>accordion-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>accordion-item<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>bg1.jpg<span class="token punctuation">)</span></span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>accordion-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>背景1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
      ···
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code>  <span class="token selector">.accordion-container </span><span class="token punctuation">{</span>
      <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
      <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
      <span class="token property">justify-content</span><span class="token punctuation">:</span> flex-start<span class="token punctuation">;</span>
      <span class="token property">align-items</span><span class="token punctuation">:</span> flex-start<span class="token punctuation">;</span>
      <span class="token selector">.accordion-item </span><span class="token punctuation">{</span>
        <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
        <span class="token property">transition</span><span class="token punctuation">:</span> width 0.5s<span class="token punctuation">;</span>
        <span class="token property">background-repeat</span><span class="token punctuation">:</span> no-repeat<span class="token punctuation">;</span>
        <span class="token property">background-size</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span>
        <span class="token property">background-position</span><span class="token punctuation">:</span> center center<span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
        <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
        <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        &amp;<span class="token punctuation">:</span><span class="token function">not</span><span class="token punctuation">(</span><span class="token punctuation">:</span>hover<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token property">width</span><span class="token punctuation">:</span> 20%<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector"><span class="token parent important">&amp;</span>:hover </span><span class="token punctuation">{</span>
          <span class="token property">width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span>
          <span class="token selector"><span class="token parent important">&amp;</span>::after </span><span class="token punctuation">{</span>
            <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token selector"><span class="token parent important">&amp;</span>::after</span><span class="token punctuation">{</span>
          <span class="token property">content</span><span class="token punctuation">:</span><span class="token string">''</span><span class="token punctuation">;</span>
          <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
          <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
          <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
          <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
          <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
          <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> .4<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token property">z-index</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
          <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
          <span class="token property">transition</span><span class="token punctuation">:</span> opacity 0.5s<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.accordion-title </span><span class="token punctuation">{</span>
          <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
          <span class="token property">font-size</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>
          <span class="token property">z-index</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


