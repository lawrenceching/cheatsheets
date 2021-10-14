---
title: grep  
description:
tag: CLI
---

### 命令

```bash
cat hello.txt | grep world
echo "Hello, world!" | grep world
grep world hello.txt
```

### 基础参数

| 参数              | 功能          |
| ----------------- | -------------------  |
| -i   | 不区分大小写              |
| -v   | 输出不符合表达式的文本              |
| -c   | 输出打印了多少行文本              |
| -l   | 输出打印了多少行文本              |
| -n   | 打印行号              |

### 常用命令

| 命令              | 说明          |
| ----------------- | -------------------  |
| grep 'foo\\&#124;bar'   | 筛选 foo 或者 bar              |
| grep -E 'foo&#124;bar'   | 筛选 foo 或者 bar              |
| grep -A 3 'foo'   | 筛选 foo 及其之后3行的内容              |
| grep -B 3 'foo'   | 筛选 foo 及其之前3行的内容              |
| grep -C 3 'foo'   | 筛选 foo 及其前后3行的内容              |
| grep -r foo */*.txt   | 递归查询文件夹所有文件内容              |
| grep -o -E 'fo*'   | -o 只打印匹配的部分，通常与 -E 正则表达式匹配一起用              |

