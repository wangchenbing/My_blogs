import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as e,f as l}from"./app.8225ebca.js";const s={},d=l(`<h2 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h2><ul><li>Git\u4E00\u6761\u9F99\u670D\u52A1</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u6253\u5305\u5DF2\u4FEE\u6539\u7684\u4EE3\u7801
  git add . 
\u63D0\u4EA4\u5230\u81EA\u5DF1\u672C\u5730\u4ED3\u5E93
  git commit -m &quot;\u4FEE\u6539\u4EE3\u7801\u6CE8\u91CA&quot;  
\u67E5\u770B\u672C\u5730\u4EE3\u7801\u63D0\u4EA4\u60C5\u51B5
  git status              
\u5207\u6362\u5230\u4E3B\u5206\u652F
  git checkout master     
\u62C9\u53D6\u8FDC\u7AEFmaster\u4EE3\u7801
  git pull origin master     
\u5207\u6362\u5230\u81EA\u5DF1\u7684\u5F00\u53D1\u5206\u652F
  git checkout duanDyDev      
\u5C06\u4E3B\u5206\u652F\u4EE3\u7801\u5408\u5E76\u5230\u81EA\u5DF1\u7684\u5206\u652F\uFF0C\u89E3\u51B3\u51B2\u7A81
  git merge master           
\u5408\u5E76\u8FDC\u7A0B\u5206\u652F
  git push origin XXX(\u8FDC\u7A0B\u81EA\u5DF1\u5206\u5B50\u540D)       

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u65B0\u5EFA\u4EE3\u7801\u5E93</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u5728\u5F53\u524D\u76EE\u5F55\u65B0\u5EFA\u4E00\u4E2AGit\u4EE3\u7801\u5E93
$ git init

# \u65B0\u5EFA\u4E00\u4E2A\u76EE\u5F55\uFF0C\u5C06\u5176\u521D\u59CB\u5316\u4E3AGit\u4EE3\u7801\u5E93
$ git init [project-name]

# \u4E0B\u8F7D\u4E00\u4E2A\u9879\u76EE\u548C\u5B83\u7684\u6574\u4E2A\u4EE3\u7801\u5386\u53F2
$ git clone [url]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u914D\u7F6E</li></ul><p>Git\u7684\u8BBE\u7F6E\u6587\u4EF6\u4E3A.gitconfig\uFF0C\u5B83\u53EF\u4EE5\u5728\u7528\u6237\u4E3B\u76EE\u5F55\u4E0B\uFF08\u5168\u5C40\u914D\u7F6E\uFF09\uFF0C\u4E5F\u53EF\u4EE5\u5728\u9879\u76EE\u76EE\u5F55\u4E0B\uFF08\u9879\u76EE\u914D\u7F6E\uFF09\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u663E\u793A\u5F53\u524D\u7684Git\u914D\u7F6E
$ git config --list

# \u7F16\u8F91Git\u914D\u7F6E\u6587\u4EF6
$ git config -e [--global]

# \u8BBE\u7F6E\u63D0\u4EA4\u4EE3\u7801\u65F6\u7684\u7528\u6237\u4FE1\u606F
$ git config [--global] user.name &quot;[name]&quot;
$ git config [--global] user.email &quot;[email address]&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u589E\u52A0/\u5220\u9664\u6587\u4EF6</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u6DFB\u52A0\u6307\u5B9A\u6587\u4EF6\u5230\u6682\u5B58\u533A
$ git add [file1] [file2] ...

# \u6DFB\u52A0\u6307\u5B9A\u76EE\u5F55\u5230\u6682\u5B58\u533A\uFF0C\u5305\u62EC\u5B50\u76EE\u5F55
$ git add [dir]

# \u6DFB\u52A0\u5F53\u524D\u76EE\u5F55\u7684\u6240\u6709\u6587\u4EF6\u5230\u6682\u5B58\u533A
$ git add .

# \u6DFB\u52A0\u6BCF\u4E2A\u53D8\u5316\u524D\uFF0C\u90FD\u4F1A\u8981\u6C42\u786E\u8BA4
# \u5BF9\u4E8E\u540C\u4E00\u4E2A\u6587\u4EF6\u7684\u591A\u5904\u53D8\u5316\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u5206\u6B21\u63D0\u4EA4
$ git add -p

# \u5220\u9664\u5DE5\u4F5C\u533A\u6587\u4EF6\uFF0C\u5E76\u4E14\u5C06\u8FD9\u6B21\u5220\u9664\u653E\u5165\u6682\u5B58\u533A
$ git rm [file1] [file2] ...

# \u505C\u6B62\u8FFD\u8E2A\u6307\u5B9A\u6587\u4EF6\uFF0C\u4F46\u8BE5\u6587\u4EF6\u4F1A\u4FDD\u7559\u5728\u5DE5\u4F5C\u533A
$ git rm --cached [file]

# \u6539\u540D\u6587\u4EF6\uFF0C\u5E76\u4E14\u5C06\u8FD9\u4E2A\u6539\u540D\u653E\u5165\u6682\u5B58\u533A
$ git mv [file-original] [file-renamed]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4EE3\u7801\u63D0\u4EA4</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u63D0\u4EA4\u6682\u5B58\u533A\u5230\u4ED3\u5E93\u533A
$ git commit -m [message]

# \u63D0\u4EA4\u6682\u5B58\u533A\u7684\u6307\u5B9A\u6587\u4EF6\u5230\u4ED3\u5E93\u533A
$ git commit [file1] [file2] ... -m [message]

# \u63D0\u4EA4\u5DE5\u4F5C\u533A\u81EA\u4E0A\u6B21commit\u4E4B\u540E\u7684\u53D8\u5316\uFF0C\u76F4\u63A5\u5230\u4ED3\u5E93\u533A
$ git commit -a

# \u63D0\u4EA4\u65F6\u663E\u793A\u6240\u6709diff\u4FE1\u606F
$ git commit -v

# \u4F7F\u7528\u4E00\u6B21\u65B0\u7684commit\uFF0C\u66FF\u4EE3\u4E0A\u4E00\u6B21\u63D0\u4EA4
# \u5982\u679C\u4EE3\u7801\u6CA1\u6709\u4EFB\u4F55\u65B0\u53D8\u5316\uFF0C\u5219\u7528\u6765\u6539\u5199\u4E0A\u4E00\u6B21commit\u7684\u63D0\u4EA4\u4FE1\u606F
$ git commit --amend -m [message]

# \u91CD\u505A\u4E0A\u4E00\u6B21commit\uFF0C\u5E76\u5305\u62EC\u6307\u5B9A\u6587\u4EF6\u7684\u65B0\u53D8\u5316
$ git commit --amend [file1] [file2] ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5206\u652F</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u5217\u51FA\u6240\u6709\u672C\u5730\u5206\u652F
$ git branch

# \u5217\u51FA\u6240\u6709\u8FDC\u7A0B\u5206\u652F
$ git branch -r

# \u5217\u51FA\u6240\u6709\u672C\u5730\u5206\u652F\u548C\u8FDC\u7A0B\u5206\u652F
$ git branch -a

# \u65B0\u5EFA\u4E00\u4E2A\u5206\u652F\uFF0C\u4F46\u4F9D\u7136\u505C\u7559\u5728\u5F53\u524D\u5206\u652F
$ git branch [branch-name]

# \u65B0\u5EFA\u4E00\u4E2A\u5206\u652F\uFF0C\u5E76\u5207\u6362\u5230\u8BE5\u5206\u652F
$ git checkout -b [branch]

# \u65B0\u5EFA\u4E00\u4E2A\u5206\u652F\uFF0C\u6307\u5411\u6307\u5B9Acommit
$ git branch [branch] [commit]

# \u65B0\u5EFA\u4E00\u4E2A\u5206\u652F\uFF0C\u4E0E\u6307\u5B9A\u7684\u8FDC\u7A0B\u5206\u652F\u5EFA\u7ACB\u8FFD\u8E2A\u5173\u7CFB
$ git branch --track [branch] [remote-branch]

# \u5207\u6362\u5230\u6307\u5B9A\u5206\u652F\uFF0C\u5E76\u66F4\u65B0\u5DE5\u4F5C\u533A
$ git checkout [branch-name]

# \u5207\u6362\u5230\u4E0A\u4E00\u4E2A\u5206\u652F
$ git checkout -

# \u5EFA\u7ACB\u8FFD\u8E2A\u5173\u7CFB\uFF0C\u5728\u73B0\u6709\u5206\u652F\u4E0E\u6307\u5B9A\u7684\u8FDC\u7A0B\u5206\u652F\u4E4B\u95F4
$ git branch --set-upstream [branch] [remote-branch]

# \u5408\u5E76\u6307\u5B9A\u5206\u652F\u5230\u5F53\u524D\u5206\u652F
$ git merge [branch]

# \u9009\u62E9\u4E00\u4E2Acommit\uFF0C\u5408\u5E76\u8FDB\u5F53\u524D\u5206\u652F
$ git cherry-pick [commit]

# \u5220\u9664\u5206\u652F
$ git branch -d [branch-name]

# \u5220\u9664\u8FDC\u7A0B\u5206\u652F
$ git push origin --delete [branch-name]
$ git branch -dr [remote/branch]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u6807\u7B7E</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u5217\u51FA\u6240\u6709tag
$ git tag

# \u65B0\u5EFA\u4E00\u4E2Atag\u5728\u5F53\u524Dcommit
$ git tag [tag]

# \u65B0\u5EFA\u4E00\u4E2Atag\u5728\u6307\u5B9Acommit
$ git tag [tag] [commit]

# \u5220\u9664\u672C\u5730tag
$ git tag -d [tag]

# \u5220\u9664\u8FDC\u7A0Btag
$ git push origin :refs/tags/[tagName]

# \u67E5\u770Btag\u4FE1\u606F
$ git show [tag]

# \u63D0\u4EA4\u6307\u5B9Atag
$ git push [remote] [tag]

# \u63D0\u4EA4\u6240\u6709tag
$ git push [remote] --tags

# \u65B0\u5EFA\u4E00\u4E2A\u5206\u652F\uFF0C\u6307\u5411\u67D0\u4E2Atag
$ git checkout -b [branch] [tag]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u67E5\u770B\u4FE1\u606F</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u663E\u793A\u6709\u53D8\u66F4\u7684\u6587\u4EF6
$ git status

# \u663E\u793A\u5F53\u524D\u5206\u652F\u7684\u7248\u672C\u5386\u53F2
$ git log

# \u663E\u793Acommit\u5386\u53F2\uFF0C\u4EE5\u53CA\u6BCF\u6B21commit\u53D1\u751F\u53D8\u66F4\u7684\u6587\u4EF6
$ git log --stat

# \u641C\u7D22\u63D0\u4EA4\u5386\u53F2\uFF0C\u6839\u636E\u5173\u952E\u8BCD
$ git log -S [keyword]

# \u663E\u793A\u67D0\u4E2Acommit\u4E4B\u540E\u7684\u6240\u6709\u53D8\u52A8\uFF0C\u6BCF\u4E2Acommit\u5360\u636E\u4E00\u884C
$ git log [tag] HEAD --pretty=format:%s

# \u663E\u793A\u67D0\u4E2Acommit\u4E4B\u540E\u7684\u6240\u6709\u53D8\u52A8\uFF0C\u5176&quot;\u63D0\u4EA4\u8BF4\u660E&quot;\u5FC5\u987B\u7B26\u5408\u641C\u7D22\u6761\u4EF6
$ git log [tag] HEAD --grep feature

# \u663E\u793A\u67D0\u4E2A\u6587\u4EF6\u7684\u7248\u672C\u5386\u53F2\uFF0C\u5305\u62EC\u6587\u4EF6\u6539\u540D
$ git log --follow [file]
$ git whatchanged [file]

# \u663E\u793A\u6307\u5B9A\u6587\u4EF6\u76F8\u5173\u7684\u6BCF\u4E00\u6B21diff
$ git log -p [file]

# \u663E\u793A\u8FC7\u53BB5\u6B21\u63D0\u4EA4
$ git log -5 --pretty --oneline

# \u663E\u793A\u6240\u6709\u63D0\u4EA4\u8FC7\u7684\u7528\u6237\uFF0C\u6309\u63D0\u4EA4\u6B21\u6570\u6392\u5E8F
$ git shortlog -sn

# \u663E\u793A\u6307\u5B9A\u6587\u4EF6\u662F\u4EC0\u4E48\u4EBA\u5728\u4EC0\u4E48\u65F6\u95F4\u4FEE\u6539\u8FC7
$ git blame [file]

# \u663E\u793A\u6682\u5B58\u533A\u548C\u5DE5\u4F5C\u533A\u7684\u5DEE\u5F02
$ git diff

# \u663E\u793A\u6682\u5B58\u533A\u548C\u4E0A\u4E00\u4E2Acommit\u7684\u5DEE\u5F02
$ git diff --cached [file]

# \u663E\u793A\u5DE5\u4F5C\u533A\u4E0E\u5F53\u524D\u5206\u652F\u6700\u65B0commit\u4E4B\u95F4\u7684\u5DEE\u5F02
$ git diff HEAD

# \u663E\u793A\u4E24\u6B21\u63D0\u4EA4\u4E4B\u95F4\u7684\u5DEE\u5F02
$ git diff [first-branch]...[second-branch]

# \u663E\u793A\u4ECA\u5929\u4F60\u5199\u4E86\u591A\u5C11\u884C\u4EE3\u7801
$ git diff --shortstat &quot;@{0 day ago}&quot;

# \u663E\u793A\u67D0\u6B21\u63D0\u4EA4\u7684\u5143\u6570\u636E\u548C\u5185\u5BB9\u53D8\u5316
$ git show [commit]

# \u663E\u793A\u67D0\u6B21\u63D0\u4EA4\u53D1\u751F\u53D8\u5316\u7684\u6587\u4EF6
$ git show --name-only [commit]

# \u663E\u793A\u67D0\u6B21\u63D0\u4EA4\u65F6\uFF0C\u67D0\u4E2A\u6587\u4EF6\u7684\u5185\u5BB9
$ git show [commit]:[filename]

# \u663E\u793A\u5F53\u524D\u5206\u652F\u7684\u6700\u8FD1\u51E0\u6B21\u63D0\u4EA4
$ git reflog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8FDC\u7A0B\u540C\u6B65</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u4E0B\u8F7D\u8FDC\u7A0B\u4ED3\u5E93\u7684\u6240\u6709\u53D8\u52A8
$ git fetch [remote]

# \u663E\u793A\u6240\u6709\u8FDC\u7A0B\u4ED3\u5E93
$ git remote -v

# \u663E\u793A\u67D0\u4E2A\u8FDC\u7A0B\u4ED3\u5E93\u7684\u4FE1\u606F
$ git remote show [remote]

# \u589E\u52A0\u4E00\u4E2A\u65B0\u7684\u8FDC\u7A0B\u4ED3\u5E93\uFF0C\u5E76\u547D\u540D
$ git remote add [shortname] [url]

# \u53D6\u56DE\u8FDC\u7A0B\u4ED3\u5E93\u7684\u53D8\u5316\uFF0C\u5E76\u4E0E\u672C\u5730\u5206\u652F\u5408\u5E76
$ git pull [remote] [branch]

# \u4E0A\u4F20\u672C\u5730\u6307\u5B9A\u5206\u652F\u5230\u8FDC\u7A0B\u4ED3\u5E93
$ git push [remote] [branch]

# \u5F3A\u884C\u63A8\u9001\u5F53\u524D\u5206\u652F\u5230\u8FDC\u7A0B\u4ED3\u5E93\uFF0C\u5373\u4F7F\u6709\u51B2\u7A81
$ git push [remote] --force

# \u63A8\u9001\u6240\u6709\u5206\u652F\u5230\u8FDC\u7A0B\u4ED3\u5E93
$ git push [remote] --all
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u64A4\u9500</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u6062\u590D\u6682\u5B58\u533A\u7684\u6307\u5B9A\u6587\u4EF6\u5230\u5DE5\u4F5C\u533A
$ git checkout [file]

# \u6062\u590D\u67D0\u4E2Acommit\u7684\u6307\u5B9A\u6587\u4EF6\u5230\u6682\u5B58\u533A\u548C\u5DE5\u4F5C\u533A
$ git checkout [commit] [file]

# \u6062\u590D\u6682\u5B58\u533A\u7684\u6240\u6709\u6587\u4EF6\u5230\u5DE5\u4F5C\u533A
$ git checkout .

# \u91CD\u7F6E\u6682\u5B58\u533A\u7684\u6307\u5B9A\u6587\u4EF6\uFF0C\u4E0E\u4E0A\u4E00\u6B21commit\u4FDD\u6301\u4E00\u81F4\uFF0C\u4F46\u5DE5\u4F5C\u533A\u4E0D\u53D8
$ git reset [file]

# \u91CD\u7F6E\u6682\u5B58\u533A\u4E0E\u5DE5\u4F5C\u533A\uFF0C\u4E0E\u4E0A\u4E00\u6B21commit\u4FDD\u6301\u4E00\u81F4
$ git reset --hard

# \u91CD\u7F6E\u5F53\u524D\u5206\u652F\u7684\u6307\u9488\u4E3A\u6307\u5B9Acommit\uFF0C\u540C\u65F6\u91CD\u7F6E\u6682\u5B58\u533A\uFF0C\u4F46\u5DE5\u4F5C\u533A\u4E0D\u53D8
$ git reset [commit]

# \u91CD\u7F6E\u5F53\u524D\u5206\u652F\u7684HEAD\u4E3A\u6307\u5B9Acommit\uFF0C\u540C\u65F6\u91CD\u7F6E\u6682\u5B58\u533A\u548C\u5DE5\u4F5C\u533A\uFF0C\u4E0E\u6307\u5B9Acommit\u4E00\u81F4
$ git reset --hard [commit]

# \u91CD\u7F6E\u5F53\u524DHEAD\u4E3A\u6307\u5B9Acommit\uFF0C\u4F46\u4FDD\u6301\u6682\u5B58\u533A\u548C\u5DE5\u4F5C\u533A\u4E0D\u53D8
$ git reset --keep [commit]

# \u65B0\u5EFA\u4E00\u4E2Acommit\uFF0C\u7528\u6765\u64A4\u9500\u6307\u5B9Acommit
# \u540E\u8005\u7684\u6240\u6709\u53D8\u5316\u90FD\u5C06\u88AB\u524D\u8005\u62B5\u6D88\uFF0C\u5E76\u4E14\u5E94\u7528\u5230\u5F53\u524D\u5206\u652F
$ git revert [commit]

# \u6682\u65F6\u5C06\u672A\u63D0\u4EA4\u7684\u53D8\u5316\u79FB\u9664\uFF0C\u7A0D\u540E\u518D\u79FB\u5165
$ git stash
$ git stash pop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5176\u4ED6</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u751F\u6210\u4E00\u4E2A\u53EF\u4F9B\u53D1\u5E03\u7684\u538B\u7F29\u5305
$ git archive
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,24),v=[d];function a(c,r){return n(),e("div",null,v)}const t=i(s,[["render",a],["__file","Git.html.vue"]]);export{t as default};
