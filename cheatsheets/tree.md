---
title: tree
description: 以树形结构输出文件夹内容
tag: CLI
---

### 常用命令

```bash
tree      # 输出当前路径下的文件夹内容
tree /tmp # 打印 /tmp 下所有文件夹的内容
```

```
-a 输出所有文件（包括隐藏文件）
-d 只打印文件夹
-f 打印文件完整路径
-i 忽略结构缩进
-l 沿着 symbolic 查找
-P 只打印符合指定模式的文件
-I 不打印符合指定模式的文件
-L 搜索的最大深度
--filelimit 如果文件夹内容超出指定限制，则不打印
```

### 安装

```bash
apt-get install tree
yum install tree
dnf install tree
zypper in tree
brew install tree
```