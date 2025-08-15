<template><div><h1 id="git-常用命令手册" tabindex="-1"><a class="header-anchor" href="#git-常用命令手册" aria-hidden="true">#</a> Git 常用命令手册</h1>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>
<span class="token comment"># 查看工作区状态（修改/暂存的文件）</span>
<span class="token function">git</span> status

<span class="token comment"># 拉取远程master分支最新代码</span>
<span class="token function">git</span> pull origin master

<span class="token comment"># 查看所有分支（本地+远程）</span>
<span class="token function">git</span> branch <span class="token parameter variable">-a</span>

<span class="token comment"># 强制删除本地分支（慎用）</span>
<span class="token function">git</span> branch <span class="token parameter variable">-D</span> dev2020422

<span class="token comment"># 恢复最近暂存的修改（pop并删除stash记录）</span>
<span class="token function">git</span> stash
<span class="token function">git</span> stash pop

<span class="token comment"># 硬重置到上次提交（丢弃所有修改）</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span>

<span class="token comment"># 软重置到上次提交（保留修改为已暂存状态）</span>
<span class="token function">git</span> reset <span class="token parameter variable">--soft</span> HEAD^
<span class="token function">git</span> reset <span class="token parameter variable">--soft</span> <span class="token operator">&lt;</span>commit-id<span class="token operator">></span>

<span class="token comment"># 强制关联主分支</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> origin/main

<span class="token comment"># 查看最近条详细提交记录</span>
<span class="token function">git</span> log <span class="token parameter variable">-2</span>
<span class="token function">git</span> log <span class="token parameter variable">--oneline</span>

<span class="token comment"># 查看当前配置</span>
<span class="token function">git</span> config user.name
<span class="token function">git</span> config user.email

<span class="token comment"># 全局配置用户信息（需替换为你的信息）</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">"你的姓名"</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">"你的邮箱@example.com"</span>

<span class="token comment"># 第一次拉取分之设置</span>
username：gitee上绑定的邮箱
Password：gitee登陆密码
Username <span class="token keyword">for</span> <span class="token string">'https://github.com'</span><span class="token builtin class-name">:</span> wcb_houhuiyouqi@126.com
Password <span class="token keyword">for</span> <span class="token string">'https://1512wcb_houhuiyouqi@126.com@github.com'</span>：开机密码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><PDF url="/assets/pdf/git.pdf" zoom=25 /></div></template>


