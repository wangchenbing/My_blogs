<template><div><h3 id="基本流程" tabindex="-1"><a class="header-anchor" href="#基本流程" aria-hidden="true">#</a> 基本流程</h3>
<p>git add .    打包已修改的代码</p>
<p>git commit -m &quot;修改代码注释&quot;</p>
<p>git status   查看本地代码提交情况</p>
<p>git branch -a 查看分支情况</p>
<p>git checkout master   切换到主分支</p>
<p>git pull origin master   拉取远端master代码</p>
<p>git checkout duanDyDev    切换到自己的开发分支</p>
<p>git merge master   将主分支代码合并到自己的分支，解决冲突</p>
<p>git push origin wangchenbing-dev   (远程自己分子名)   合并远程分支</p>
<p>删除本地分支</p>
<p>git branch -d dev2020422</p>
<p>强制删除本地分支</p>
<p>git branch -D dev2020422</p>
<h3 id="git-stash" tabindex="-1"><a class="header-anchor" href="#git-stash" aria-hidden="true">#</a> git stash</h3>
<blockquote>
<p>保存当前未commit的代码</p>
<p>git stash</p>
</blockquote>
<blockquote>
<p>保存当前未commit的代码并添加备注</p>
<p>git stash save &quot;备注的内容&quot;</p>
</blockquote>
<blockquote>
<p>列出stash的所有记录</p>
<p>git stash list</p>
</blockquote>
<blockquote>
<p>删除stash的所有记录</p>
<p>git stash clear</p>
</blockquote>
<blockquote>
<p>应用最近一次的stash</p>
<p>git stash apply<br>
git stash apply  stash@{1}
应用最近一次的stash，随后删除该记录</p>
<p>git stash pop</p>
</blockquote>
<blockquote>
<p>删除最近的一次stash</p>
<p>git stash drop</p>
</blockquote>
<h3 id="回溯-commit" tabindex="-1"><a class="header-anchor" href="#回溯-commit" aria-hidden="true">#</a> 回溯 commit</h3>
<blockquote>
<p>commit 记录强制回溯到某一个节点</p>
<p>git reset --hard</p>
</blockquote>
<blockquote>
<p>恢复最近一次 commit</p>
<p>git reset --soft HEAD^</p>
</blockquote>
<p>当push过之后在恢复,就i必须要git push -f 强制覆盖</p>
<p>让 git 区别文件大小写</p>
<p><code v-pre>git config core.ignorecase false</code></p>
<h3 id="迁移代码仓库" tabindex="-1"><a class="header-anchor" href="#迁移代码仓库" aria-hidden="true">#</a> 迁移代码仓库</h3>
<p>代码迁移另一个git仓库</p>
<p>1.从原地址克隆一份裸版本库 —bare</p>
<p><code v-pre>git clone --bare https://gitee.com/mygit-demo/test.git</code></p>
<p>2.然后已镜像的方式迁移到新的git仓库中</p>
<p><code v-pre>cd test.git/</code></p>
<p><code v-pre>git push --mirror https://gitee.com/mygit-demo/git-demo.git</code></p>
<h3 id="回滚代码" tabindex="-1"><a class="header-anchor" href="#回滚代码" aria-hidden="true">#</a> 回滚代码</h3>
<p>1.查看commit 提交记录 ，获取提交id
<code v-pre>git log -2</code></p>
<p>2.输入需要返回的版本id
<code v-pre>git reset --soft 提交id</code></p>
<p><img src="/assets/gitImg/回滚代码.png" alt="回滚代码.png" loading="lazy"></p>
<h3 id="查看用户信息" tabindex="-1"><a class="header-anchor" href="#查看用户信息" aria-hidden="true">#</a> 查看用户信息</h3>
<p><code v-pre>git config user.name</code></p>
<p><code v-pre>git config user.email</code></p>
<h3 id="配置用户信息" tabindex="-1"><a class="header-anchor" href="#配置用户信息" aria-hidden="true">#</a> 配置用户信息</h3>
<p><code v-pre>git config —global user.name “xxx”</code></p>
<p><code v-pre>git config —global user.email “xxxxxxx@126.com”</code></p>
<p>第一次拉取分之设置</p>
<p>username：gitee上绑定的邮箱</p>
<p>Password：gitee登陆密码
Username for '<a href="https://github.com" target="_blank" rel="noopener noreferrer">https://github.com<ExternalLinkIcon/></a>': <a href="mailto:wcb_houhuiyouqi@126.com">wcb_houhuiyouqi@126.com</a>
Password for '<a href="https://1512wcb_houhuiyouqi@126.com" target="_blank" rel="noopener noreferrer">https://1512wcb_houhuiyouqi@126.com<ExternalLinkIcon/></a>@github.com'：开机密码</p>
<h3 id="修改本地分支名称" tabindex="-1"><a class="header-anchor" href="#修改本地分支名称" aria-hidden="true">#</a> 修改本地分支名称</h3>
<p>branch-A 为旧分支名称</p>
<p>branch-B 为新分支名称</p>
<p><code v-pre>git branch -m branch-A branch-B</code></p>
<h3 id="克隆目标分支" tabindex="-1"><a class="header-anchor" href="#克隆目标分支" aria-hidden="true">#</a> 克隆目标分支</h3>
<p><code v-pre>git clone -b XXX(分支名) </code></p>
<h3 id="修改已提交的commit注释" tabindex="-1"><a class="header-anchor" href="#修改已提交的commit注释" aria-hidden="true">#</a> 修改已提交的commit注释</h3>
<p>修改最后一次注释</p>
<p>如果你只想修改最后一次注释（就是最新的一次提交），那好办：</p>
<p><code v-pre>git commit --amend</code></p>
<p>出现有注释的界面（你的注释应该显示在第一行）， 输入<code v-pre>i</code>进入修改模式，修改好注释后，按<code v-pre>Esc</code>键 退出编辑模式，输入<code v-pre>:wq</code>保存并退出。ok，修改完成。</p>
<p>修改之前的注释</p>
<p>修改之前的某次注释</p>
<p>输入：<code v-pre>git rebase -i HEAD~2</code></p>
<p>最后的数字2指的是显示到倒数第几次 比如这个输入的2就会显示倒数的两次注释（最上面两行）</p>
<p>你想修改哪条注释 就把哪条注释前面的pick换成edit。方法就是上面说的编辑方式：i---编辑，把pick换成<strong>edit---Esc---:wq</strong></p>
<p>然后：（接下来的步骤Terminal会提示）</p>
<p><code v-pre>git commit --amend</code></p>
<p>修改注释，保存并退出后，输入：</p>
<p><code v-pre>git rebase --continue</code></p>
<p>其实这个原理我的理解就是先版本回退到你想修改的某次版本，然后修改当前的commit注释，然后再回到本地最新的版本</p>
<PDF url="/assets/pdf/git.pdf" zoom=25 /></div></template>


