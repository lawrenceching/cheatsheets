---
title: find
description:
tag: CLI
---

### 基础命令

```bash
# find <path> <expression> <action>
find . *.md # 在当前目录查找符合 *.md 的文件
find . *.md -maxdepth 1 # 只在第一层查找文件
find . *.md -delete # 删除查询到的文件
find . *.md -printf "%y %i %prn" # 以特定格式输出查询到的文件
find /var/log -mtime +31 # 查询大于31天的文件
find /var -regex '.*/tmp/.*[0-9]*.file' # 查询符合正则表达式的文件
```
```bash
# 删除空文件夹
find /path/to/search -type d -exec rmdir --ignore-fail-on-non-empty {} + ;
```

### 常用条件表达式

```bash
-type f # 文件
-type d # 文件夹
-type l # Symlink
```

```bash
-regex <regex>
```

```
-size [-+]n[cwbkMG]
-size 8  # 默认单位 "b"
-size 8b # 8 512-byte block
-size 8M # 8MB
-size -8M # 小于8MB
-size +8M # 大于8MB
```

### 常用后续命令

```
-delete
-exec <command>
-print
```
