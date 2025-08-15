---
title: git
date: 2023-02-26
tag:
 - git
---

# Git 常用命令手册

```bash

# 查看工作区状态（修改/暂存的文件）
git status

# 拉取远程master分支最新代码
git pull origin master

# 查看所有分支（本地+远程）
git branch -a

# 强制删除本地分支（慎用）
git branch -D dev2020422

# 恢复最近暂存的修改（pop并删除stash记录）
git stash
git stash pop

# 硬重置到上次提交（丢弃所有修改）
git reset --hard

# 软重置到上次提交（保留修改为已暂存状态）
git reset --soft HEAD^
git reset --soft <commit-id>

# 强制关联主分支
git reset --hard origin/main

# 查看最近条详细提交记录
git log -2
git log --oneline

# 查看当前配置
git config user.name
git config user.email

# 全局配置用户信息（需替换为你的信息）
git config --global user.name "你的姓名"
git config --global user.email "你的邮箱@example.com"

# 第一次拉取分之设置
username：gitee上绑定的邮箱
Password：gitee登陆密码
Username for 'https://github.com': wcb_houhuiyouqi@126.com
Password for 'https://1512wcb_houhuiyouqi@126.com@github.com'：开机密码
```

<PDF url="/assets/pdf/git.pdf" zoom=25 />
