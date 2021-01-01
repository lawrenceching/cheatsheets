---
title: rsync
description: rsync cheatsheet，rsync 常用命令
---

## 基础命令
```shell
# 同步本地源目录到本地目标目录
rsync -avz ./src /dest
# 同步本地目录到远程服务器
rsync -avz ./src <username>@example.com:/dest
```

## 显示信息
```shell
-q, --quiet
-v, --verbose
    --stats
-h, --human-readable
    --progress
-P
```