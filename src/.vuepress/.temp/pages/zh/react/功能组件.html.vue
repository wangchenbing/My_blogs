<template><div>
<CodeDemo id="code-demo-0" type="react" title="%E4%B8%80%E4%B8%AA%E5%87%BD%E6%95%B0%E5%BC%8F%20React%20Demo" code="eNpNkD1OxDAQha8yMhRZaZf0S5KGGgooMdJ6nVkScOzIP8tKkQsaRMMtkLgD4jq5B3b+tN1I771v3kxHXgzZEq6ksdCBM/hgmUXwkMM9Mm6vqaQST63SFko8MCcsJCvIC+ioBBiDjw0aw55xDQbt7Tg/BcKMSyiB/u+3//6hZDUQ52TFZClQB+8ZFM4wya7/eu8/Py67aYffRQKAnzgardMSkjGYlfURuGDG3LEGc0r26kRJMYpB5qrE4uiw1YG2sRU2uKlUi1k6KIvPtExCXQZAq95QH5wIJyh5I2r+mndTa7/4AZZ6CyKNjMmRpaHXMMfysTpZE27i669CQ7iYt8xfFUpvYS8cRntw+3+/Wo8y">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token operator">=</span> React<span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>message<span class="token punctuation">,</span> setMessage<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">" 强大"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setMessage</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">十分</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>message<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"box"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>code<span class="token operator">></span>vuepress<span class="token operator">-</span>theme<span class="token operator">-</span>hope<span class="token operator">&lt;</span><span class="token operator">/</span>code<span class="token operator">></span>
      <span class="token operator">&lt;</span>span id<span class="token operator">=</span><span class="token string">"powerful"</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span>handler<span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token punctuation">{</span>message<span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.box #powerful</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeDemo></div></template>


