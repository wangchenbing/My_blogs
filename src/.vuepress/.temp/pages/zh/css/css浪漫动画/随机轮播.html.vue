<template><div><carousel/><div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>carousel<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>carousel-ul<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>accordion-item<span class="token punctuation">"</span></span>
                <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flag<span class="token punctuation">"</span></span>
                <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(item,index) in carouselData<span class="token punctuation">"</span></span>
                <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{'backgroundImage':`url(${item.src})`,
                width: positionList[index].width,
                height: positionList[index].height,
                top: positionList[index].top,
                left: positionList[index].left,
                right: positionList[index].right,
                bottom: positionList[index].bottom
                }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>accordion-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{item.title}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'carousel'</span><span class="token punctuation">,</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">carouselData</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'背景1'</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">"https://www.zpzpup.com/assets/image/example/bg7.jpeg"</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'背景2'</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">"https://www.zpzpup.com/assets/image/example/bg8.jpeg"</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'背景3'</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">"https://www.zpzpup.com/assets/image/example/bg9.jpeg"</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'背景4'</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">"https://www.zpzpup.com/assets/image/example/bg10.jpeg"</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'背景5'</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">"https://www.zpzpup.com/assets/image/example/bg7.jpeg"</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token literal-property property">positionList</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'172px'</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">'500px'</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token string">'-20px'</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">'60px'</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'172px'</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">'500px'</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">'300px'</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token string">'100px'</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'172px'</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">'500px'</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">'-150px'</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token string">'60px'</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'172px'</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">'500px'</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token string">'-130px'</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token string">'140px'</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'172px'</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">'500px'</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token string">'-50px'</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token string">'10px'</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token literal-property property">flag</span><span class="token operator">:</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">mounted</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>flag <span class="token operator">=</span> <span class="token boolean">false</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">6000</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token function">start</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>flag <span class="token operator">=</span> <span class="token boolean">true</span>
                <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>positionList <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">shuffle</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>positionList<span class="token punctuation">)</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">shuffle</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">let</span> i <span class="token operator">=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
                <span class="token keyword">while</span> <span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">let</span> j <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> i<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">return</span> arr<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token selector">.carousel-ul</span><span class="token punctuation">{</span>
        <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span>600px<span class="token punctuation">;</span>
        <span class="token selector">.accordion-item</span><span class="token punctuation">{</span>
            <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
            <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
            <span class="token property">transition</span><span class="token punctuation">:</span> all 3s ease-out<span class="token punctuation">;</span>
            <span class="token selector">.accordion-title </span><span class="token punctuation">{</span>
                <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
                <span class="token property">font-size</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>
                <span class="token property">z-index</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
                <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


