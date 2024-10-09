import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as d,f as e}from"./app.8225ebca.js";const s={},l=e(`<h2 id="\u6B63\u5219\u8868\u8FBE\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6B63\u5219\u8868\u8FBE\u5F0F" aria-hidden="true">#</a> \u6B63\u5219\u8868\u8FBE\u5F0F</h2><h3 id="_1-\u6821\u9A8C\u6570\u5B57\u7684\u8868\u8FBE\u5F0F" tabindex="-1"><a class="header-anchor" href="#_1-\u6821\u9A8C\u6570\u5B57\u7684\u8868\u8FBE\u5F0F" aria-hidden="true">#</a> 1.\u6821\u9A8C\u6570\u5B57\u7684\u8868\u8FBE\u5F0F</h3><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u4EE3\u7801</summary><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1. \u6570\u5B57\uFF1A^[0-9]*$

2. n\u4F4D\u7684\u6570\u5B57\uFF1A^\\d{n}$

3. \u81F3\u5C11n\u4F4D\u7684\u6570\u5B57\uFF1A^\\d{n,}$

 
4. m-n\u4F4D\u7684\u6570\u5B57\uFF1A^\\d{m,n}$


5. \u96F6\u548C\u975E\u96F6\u5F00\u5934\u7684\u6570\u5B57\uFF1A^(0|[1-9][0-9]*)$

 
6. \u975E\u96F6\u5F00\u5934\u7684\u6700\u591A\u5E26\u4E24\u4F4D\u5C0F\u6570\u7684\u6570\u5B57\uFF1A^([1-9][0-9]*)+(.[0-9]{1,2})?$


7. \u5E261-2\u4F4D\u5C0F\u6570\u7684\u6B63\u6570\u6216\u8D1F\u6570\uFF1A^(\\-)?\\d+(\\.\\d{1,2})?$


8. \u6B63\u6570\u3001\u8D1F\u6570\u3001\u548C\u5C0F\u6570\uFF1A^(\\-|\\+)?\\d+(\\.\\d+)?$
 

9. \u6709\u4E24\u4F4D\u5C0F\u6570\u7684\u6B63\u5B9E\u6570\uFF1A^[0-9]+(.[0-9]{2})?$


10. \u67091~3\u4F4D\u5C0F\u6570\u7684\u6B63\u5B9E\u6570\uFF1A^[0-9]+(.[0-9]{1,3})?$


11. \u975E\u96F6\u7684\u6B63\u6574\u6570\uFF1A^[1-9]\\d*$ \u6216 ^([1-9][0-9]*){1,3}$ \u6216 ^\\+?[1-9][0-9]*$


12. \u975E\u96F6\u7684\u8D1F\u6574\u6570\uFF1A^\\-[1-9][]0-9&quot;*$ \u6216 ^-[1-9]\\d*$
 

13. \u975E\u8D1F\u6574\u6570\uFF1A^\\d+$ \u6216 ^[1-9]\\d*|0$
 

14. \u975E\u6B63\u6574\u6570\uFF1A^-[1-9]\\d*|0$ \u6216 ^((-\\d+)|(0+))$
 

15. \u975E\u8D1F\u6D6E\u70B9\u6570\uFF1A^\\d+(\\.\\d+)?$ \u6216 ^[1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*|0?\\.0+|0$
 

16. \u975E\u6B63\u6D6E\u70B9\u6570\uFF1A^((-\\d+(\\.\\d+)?)|(0+(\\.0+)?))$ \u6216 ^(-([1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*))|0?\\.0+|0$


17. \u6B63\u6D6E\u70B9\u6570\uFF1A^[1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*$ \u6216 ^(([0-9]+\\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\\.[0-9]+)|([0-9]*[1-9][0-9]*))$


18. \u8D1F\u6D6E\u70B9\u6570\uFF1A^-([1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*)$ \u6216 ^(-(([0-9]+\\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\\.[0-9]+)|([0-9]*[1-9][0-9]*)))$


19. \u6D6E\u70B9\u6570\uFF1A^(-?\\d+)(\\.\\d+)?$ \u6216 ^-?([1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*|0?\\.0+|0)$

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="_2-\u6821\u9A8C\u5B57\u7B26\u7684\u8868\u8FBE\u5F0F" tabindex="-1"><a class="header-anchor" href="#_2-\u6821\u9A8C\u5B57\u7B26\u7684\u8868\u8FBE\u5F0F" aria-hidden="true">#</a> 2.\u6821\u9A8C\u5B57\u7B26\u7684\u8868\u8FBE\u5F0F</h3><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u4EE3\u7801</summary><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1. \u6C49\u5B57\uFF1A^[\\u4e00-\\u9fa5]{0,}$


2. \u82F1\u6587\u548C\u6570\u5B57\uFF1A^[A-Za-z0-9]+$ \u6216 ^[A-Za-z0-9]{4,40}$
 

3. \u957F\u5EA6\u4E3A3-20\u7684\u6240\u6709\u5B57\u7B26\uFF1A^.{3,20}$


4. \u753126\u4E2A\u82F1\u6587\u5B57\u6BCD\u7EC4\u6210\u7684\u5B57\u7B26\u4E32\uFF1A^[A-Za-z]+$
 

5. \u753126\u4E2A\u5927\u5199\u82F1\u6587\u5B57\u6BCD\u7EC4\u6210\u7684\u5B57\u7B26\u4E32\uFF1A^[A-Z]+$


6. \u753126\u4E2A\u5C0F\u5199\u82F1\u6587\u5B57\u6BCD\u7EC4\u6210\u7684\u5B57\u7B26\u4E32\uFF1A^[a-z]+$


7. \u7531\u6570\u5B57\u548C26\u4E2A\u82F1\u6587\u5B57\u6BCD\u7EC4\u6210\u7684\u5B57\u7B26\u4E32\uFF1A^[A-Za-z0-9]+$


8. \u7531\u6570\u5B57\u300126\u4E2A\u82F1\u6587\u5B57\u6BCD\u6216\u8005\u4E0B\u5212\u7EBF\u7EC4\u6210\u7684\u5B57\u7B26\u4E32\uFF1A^\\w+$ \u6216 ^\\w{3,20}$


9. \u4E2D\u6587\u3001\u82F1\u6587\u3001\u6570\u5B57\u5305\u62EC\u4E0B\u5212\u7EBF\uFF1A^[\\u4E00-\\u9FA5A-Za-z0-9_]+$
 

10. \u4E2D\u6587\u3001\u82F1\u6587\u3001\u6570\u5B57\u4F46\u4E0D\u5305\u62EC\u4E0B\u5212\u7EBF\u7B49\u7B26\u53F7\uFF1A^[\\u4E00-\\u9FA5A-Za-z0-9]+$ \u6216 ^[\\u4E00-\\u9FA5A-Za-z0-9]{2,20}$


11. \u53EF\u4EE5\u8F93\u5165\u542B\u6709^%&amp;&#39;,;=?$\\&quot;\u7B49\u5B57\u7B26\uFF1A[^%&amp;&#39;,;=?$\\x22]+
 

12. \u7981\u6B62\u8F93\u5165\u542B\u6709~\u7684\u5B57\u7B26\uFF1A[^~\\x22]+


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="_3-\u7279\u6B8A\u9700\u6C42\u8868\u8FBE\u5F0F" tabindex="-1"><a class="header-anchor" href="#_3-\u7279\u6B8A\u9700\u6C42\u8868\u8FBE\u5F0F" aria-hidden="true">#</a> 3.\u7279\u6B8A\u9700\u6C42\u8868\u8FBE\u5F0F</h3><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u4EE3\u7801</summary><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1. Email\u5730\u5740\uFF1A^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$


2. \u57DF\u540D\uFF1A[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(/.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+/.?
 

3. InternetURL\uFF1A[a-zA-z]+://[^\\s]* \u6216 ^http://([\\w-]+\\.)+[\\w-]+(/[\\w-./?%&amp;=]*)?$
 

4. \u624B\u673A\u53F7\u7801\uFF08\u53EF\u6839\u636E\u76EE\u524D\u56FD\u5185\u6536\u96C6\u53F7\u6269\u5C55\u524D\u4E24\u4F4D\u5F00\u5934\u53F7\u7801\uFF09\uFF1A^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\\d{8}$


5. \u7535\u8BDD\u53F7\u7801(&quot;XXX-XXXXXXX&quot;\u3001&quot;XXXX-XXXXXXXX&quot;\u3001&quot;XXX-XXXXXXX&quot;\u3001&quot;XXX-XXXXXXXX&quot;\u3001&quot;XXXXXXX&quot;\u548C&quot;XXXXXXXX)\uFF1A^(\\(\\d{3,4}-)|\\d{3.4}-)?\\d{7,8}$
 

6. \u56FD\u5185\u7535\u8BDD\u53F7\u7801(0511-4405222\u3001021-87888822)\uFF1A\\d{3}-\\d{8}|\\d{4}-\\d{7}


7.15\u4F4D\u8EAB\u4EFD\u8BC1\u53F7\uFF1A^[1-9]\\d{5}\\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\\d{2}$


8.18\u4F4D\u8EAB\u4EFD\u8BC1\u53F7\uFF1A^[1-9]\\d{5}(18|19|([23]\\d))\\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\\d{3}[0-9Xx]$


9. \u5E10\u53F7\u662F\u5426\u5408\u6CD5(\u5B57\u6BCD\u5F00\u5934\uFF0C\u5141\u8BB85-16\u5B57\u8282\uFF0C\u5141\u8BB8\u5B57\u6BCD\u6570\u5B57\u4E0B\u5212\u7EBF)\uFF1A^[a-zA-Z][a-zA-Z0-9_]{4,15}$
 

10. \u5BC6\u7801(\u4EE5\u5B57\u6BCD\u5F00\u5934\uFF0C\u957F\u5EA6\u57286~18\u4E4B\u95F4\uFF0C\u53EA\u80FD\u5305\u542B\u5B57\u6BCD\u3001\u6570\u5B57\u548C\u4E0B\u5212\u7EBF)\uFF1A^[a-zA-Z]\\w{5,17}$


11. \u5F3A\u5BC6\u7801(\u5FC5\u987B\u5305\u542B\u5927\u5C0F\u5199\u5B57\u6BCD\u548C\u6570\u5B57\u7684\u7EC4\u5408\uFF0C\u4E0D\u80FD\u4F7F\u7528\u7279\u6B8A\u5B57\u7B26\uFF0C\u957F\u5EA6\u57288-10\u4E4B\u95F4)\uFF1A^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$
 

12. \u65E5\u671F\u683C\u5F0F\uFF1A^\\d{4}-\\d{1,2}-\\d{1,2}


13. \u4E00\u5E74\u768412\u4E2A\u6708(01\uFF5E09\u548C1\uFF5E12)\uFF1A^(0?[1-9]|1[0-2])$


14. \u4E00\u4E2A\u6708\u768431\u5929(01\uFF5E09\u548C1\uFF5E31)\uFF1A^((0?[1-9])|((1|2)[0-9])|30|31)$


15. **\u94B1\u7684\u8F93\u5165\u683C\u5F0F\uFF1A**


\uFF081\uFF09\u6709\u56DB\u79CD\u94B1\u7684\u8868\u793A\u5F62\u5F0F\u6211\u4EEC\u53EF\u4EE5\u63A5\u53D7:&quot;10000.00&quot; \u548C &quot;10,000.00&quot;, \u548C\u6CA1\u6709 &quot;\u5206&quot; \u7684 &quot;10000&quot; \u548C &quot;10,000&quot;\uFF1A^[1-9][0-9]*$


\uFF082\uFF09\u8FD9\u8868\u793A\u4EFB\u610F\u4E00\u4E2A\u4E0D\u4EE50\u5F00\u5934\u7684\u6570\u5B57,\u4F46\u662F,\u8FD9\u4E5F\u610F\u5473\u7740\u4E00\u4E2A\u5B57\u7B26&quot;0&quot;\u4E0D\u901A\u8FC7,\u6240\u4EE5\u6211\u4EEC\u91C7\u7528\u4E0B\u9762\u7684\u5F62\u5F0F\uFF1A^(0|[1-9][0-9]*)$


\uFF083\uFF09\u4E00\u4E2A0\u6216\u8005\u4E00\u4E2A\u4E0D\u4EE50\u5F00\u5934\u7684\u6570\u5B57.\u6211\u4EEC\u8FD8\u53EF\u4EE5\u5141\u8BB8\u5F00\u5934\u6709\u4E00\u4E2A\u8D1F\u53F7\uFF1A^(0|-?[1-9][0-9]*)$


\uFF084\uFF09\u8FD9\u8868\u793A\u4E00\u4E2A0\u6216\u8005\u4E00\u4E2A\u53EF\u80FD\u4E3A\u8D1F\u7684\u5F00\u5934\u4E0D\u4E3A0\u7684\u6570\u5B57.\u8BA9\u7528\u6237\u4EE50\u5F00\u5934\u597D\u4E86.\u628A\u8D1F\u53F7\u7684\u4E5F\u53BB\u6389,\u56E0\u4E3A\u94B1\u603B\u4E0D\u80FD\u662F\u8D1F\u7684\u5427.\u4E0B\u9762\u6211\u4EEC\u8981\u52A0\u7684\u662F\u8BF4\u660E\u53EF\u80FD\u7684\u5C0F\u6570\u90E8\u5206\uFF1A^[0-9]+(.[0-9]+)?$


\uFF085\uFF09\u5FC5\u987B\u8BF4\u660E\u7684\u662F,\u5C0F\u6570\u70B9\u540E\u9762\u81F3\u5C11\u5E94\u8BE5\u67091\u4F4D\u6570,\u6240\u4EE5&quot;10.&quot;\u662F\u4E0D\u901A\u8FC7\u7684,\u4F46\u662F &quot;10&quot; \u548C &quot;10.2&quot; \u662F\u901A\u8FC7\u7684\uFF1A^[0-9]+(.[0-9]{2})?$


\uFF086\uFF09\u8FD9\u6837\u6211\u4EEC\u89C4\u5B9A\u5C0F\u6570\u70B9\u540E\u9762\u5FC5\u987B\u6709\u4E24\u4F4D,\u5982\u679C\u4F60\u8BA4\u4E3A\u592A\u82DB\u523B\u4E86,\u53EF\u4EE5\u8FD9\u6837\uFF1A^[0-9]+(.[0-9]{1,2})?$

 
\uFF087\uFF09\u8FD9\u6837\u5C31\u5141\u8BB8\u7528\u6237\u53EA\u5199\u4E00\u4F4D\u5C0F\u6570.\u4E0B\u9762\u6211\u4EEC\u8BE5\u8003\u8651\u6570\u5B57\u4E2D\u7684\u9017\u53F7\u4E86,\u6211\u4EEC\u53EF\u4EE5\u8FD9\u6837\uFF1A^[0-9]{1,3}(,[0-9]{3})*(.[0-9]{1,2})?$


\uFF088\uFF091\u52303\u4E2A\u6570\u5B57,\u540E\u9762\u8DDF\u7740\u4EFB\u610F\u4E2A \u9017\u53F7+3\u4E2A\u6570\u5B57,\u9017\u53F7\u6210\u4E3A\u53EF\u9009,\u800C\u4E0D\u662F\u5FC5\u987B\uFF1A^([0-9]+|[0-9]{1,3}(,[0-9]{3})*)(.[0-9]{1,2})?$


\u5907\u6CE8\uFF1A\u8FD9\u5C31\u662F\u6700\u7EC8\u7ED3\u679C\u4E86,\u522B\u5FD8\u4E86&quot;+&quot;\u53EF\u4EE5\u7528&quot;*&quot;\u66FF\u4EE3\u5982\u679C\u4F60\u89C9\u5F97\u7A7A\u5B57\u7B26\u4E32\u4E5F\u53EF\u4EE5\u63A5\u53D7\u7684\u8BDD(\u5947\u602A,\u4E3A\u4EC0\u4E48?)\u6700\u540E,\u522B\u5FD8\u4E86\u5728\u7528\u51FD\u6570\u65F6\u53BB\u6389\u53BB\u6389\u90A3\u4E2A\u53CD\u659C\u6760,\u4E00\u822C\u7684\u9519\u8BEF\u90FD\u5728\u8FD9\u91CC

 
16. xml\u6587\u4EF6\uFF1A^([a-zA-Z]+-?)+[a-zA-Z0-9]+\\\\.[x|X][m|M][l|L]$


17. \u4E2D\u6587\u5B57\u7B26\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\uFF1A[\\u4e00-\\u9fa5]

 
18. \u53CC\u5B57\u8282\u5B57\u7B26\uFF1A[^\\x00-\\xff] (\u5305\u62EC\u6C49\u5B57\u5728\u5185\uFF0C\u53EF\u4EE5\u7528\u6765\u8BA1\u7B97\u5B57\u7B26\u4E32\u7684\u957F\u5EA6(\u4E00\u4E2A\u53CC\u5B57\u8282\u5B57\u7B26\u957F\u5EA6\u8BA12\uFF0CASCII\u5B57\u7B26\u8BA11))


19. \u7A7A\u767D\u884C\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\uFF1A\\n\\s*\\r (\u53EF\u4EE5\u7528\u6765\u5220\u9664\u7A7A\u767D\u884C)


20. HTML\u6807\u8BB0\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\uFF1A&lt;(\\S*?)[^&gt;]*&gt;.*?&lt;/\\1&gt;|&lt;.*? /&gt; (\u7F51\u4E0A\u6D41\u4F20\u7684\u7248\u672C\u592A\u7CDF\u7CD5\uFF0C\u4E0A\u9762\u8FD9\u4E2A\u4E5F\u4EC5\u4EC5\u80FD\u90E8\u5206\uFF0C\u5BF9\u4E8E\u590D\u6742\u7684\u5D4C\u5957\u6807\u8BB0\u4F9D\u65E7\u65E0\u80FD\u4E3A\u529B)


21. \u9996\u5C3E\u7A7A\u767D\u5B57\u7B26\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\uFF1A^\\s*|\\s*$\u6216(^\\s*)|(\\s*$) (\u53EF\u4EE5\u7528\u6765\u5220\u9664\u884C\u9996\u884C\u5C3E\u7684\u7A7A\u767D\u5B57\u7B26(\u5305\u62EC\u7A7A\u683C\u3001\u5236\u8868\u7B26\u3001\u6362\u9875\u7B26\u7B49\u7B49)\uFF0C\u975E\u5E38\u6709\u7528\u7684\u8868\u8FBE\u5F0F)


22. \u817E\u8BAFQQ\u53F7\uFF1A[1-9][0-9]{4,} (\u817E\u8BAFQQ\u53F7\u4ECE10000\u5F00\u59CB)


23. \u5FAE\u4FE1\u53F7\u6B63\u5219\uFF1A/^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/

 
24. \u4E2D\u56FD\u90AE\u653F\u7F16\u7801\uFF1A[1-9]\\d{5}(?!\\d) (\u4E2D\u56FD\u90AE\u653F\u7F16\u7801\u4E3A6\u4F4D\u6570\u5B57)


25. IP\u5730\u5740\uFF1A\\d+\\.\\d+\\.\\d+\\.\\d+ (\u63D0\u53D6IP\u5730\u5740\u65F6\u6709\u7528)

 
26. IP\u5730\u5740\uFF1A((?:(?:25[0-5]|2[0-4]\\\\d|[01]?\\\\d?\\\\d)\\\\.){3}(?:25[0-5]|2[0-4]\\\\d|[01]?\\\\d?\\\\d))

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,7),v=[l];function a(u,r){return n(),d("div",null,v)}const b=i(s,[["render",a],["__file","\u6B63\u5219\u8868\u8FBE\u5F0F.html.vue"]]);export{b as default};
