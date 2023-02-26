---
title: git
date: 2023-02-26
tag:
 - git
---

### 基本流程
git add .    打包已修改的代码

git commit -m "修改代码注释"      

git status   查看本地代码提交情况

git branch -a 查看分支情况

git checkout master   切换到主分支

git pull origin master   拉取远端master代码

git checkout duanDyDev    切换到自己的开发分支

git merge master   将主分支代码合并到自己的分支，解决冲突

git push origin wangchenbing-dev   (远程自己分子名)   合并远程分支

删除本地分支

git branch -d dev2020422

强制删除本地分支

git branch -D dev2020422


### git stash
> 保存当前未commit的代码
>
>git stash

> 保存当前未commit的代码并添加备注
>
>git stash save "备注的内容"

> 列出stash的所有记录
>
>git stash list

> 删除stash的所有记录
>
>git stash clear

> 应用最近一次的stash
>
>git stash apply  
>git stash apply  stash@{1}
> 应用最近一次的stash，随后删除该记录
>
>git stash pop 

> 删除最近的一次stash
>
>git stash drop 

### 回溯 commit
> commit 记录强制回溯到某一个节点
>
>git reset --hard

> 恢复最近一次 commit
>
>git reset --soft HEAD^

当push过之后在恢复,就i必须要git push -f 强制覆盖

让 git 区别文件大小写

`git config core.ignorecase false`

### 迁移代码仓库
代码迁移另一个git仓库

1.从原地址克隆一份裸版本库 —bare

`git clone --bare https://gitee.com/mygit-demo/test.git`

2.然后已镜像的方式迁移到新的git仓库中

`cd test.git/`

`git push --mirror https://gitee.com/mygit-demo/git-demo.git`

### 回滚代码

1.查看commit 提交记录 ，获取提交id
`git log -2`

2.输入需要返回的版本id
`git reset --soft 提交id`


![回滚代码.png](/assets/gitImg/回滚代码.png)

### 查看用户信息

`git config user.name`

`git config user.email`

### 配置用户信息

`git config —global user.name “xxx”`

`git config —global user.email “xxxxxxx@126.com”`

第一次拉取分之设置

username：gitee上绑定的邮箱

Password：gitee登陆密码
Username for 'https://github.com': wcb_houhuiyouqi@126.com
Password for 'https://1512wcb_houhuiyouqi@126.com@github.com'：开机密码

### 修改本地分支名称

branch-A 为旧分支名称

branch-B 为新分支名称

`git branch -m branch-A branch-B`

### 克隆目标分支

`git clone -b XXX(分支名) ` 

### 修改已提交的commit注释

修改最后一次注释

如果你只想修改最后一次注释（就是最新的一次提交），那好办：

`git commit --amend`

出现有注释的界面（你的注释应该显示在第一行）， 输入`i`进入修改模式，修改好注释后，按`Esc`键 退出编辑模式，输入`:wq`保存并退出。ok，修改完成。

修改之前的注释

修改之前的某次注释

输入：`git rebase -i HEAD~2`

最后的数字2指的是显示到倒数第几次 比如这个输入的2就会显示倒数的两次注释（最上面两行）

你想修改哪条注释 就把哪条注释前面的pick换成edit。方法就是上面说的编辑方式：i---编辑，把pick换成**edit---Esc---:wq**

然后：（接下来的步骤Terminal会提示）

`git commit --amend`

修改注释，保存并退出后，输入：

`git rebase --continue`

其实这个原理我的理解就是先版本回退到你想修改的某次版本，然后修改当前的commit注释，然后再回到本地最新的版本

<PDF url="/assets/pdf/git.pdf" zoom=25 />
