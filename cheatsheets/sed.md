---
title: sed
description: [sed](https://www.gnu.org/software/sed/manual/sed.html) is a stream editor. A stream editor is used to perform basic text transformations on an input stream (a file or input from a pipeline)
---

### 常用命令

```bash
# 替换字符串
> echo 'Hello, $NAME!' | sed 's/$NAME/world/g'

# 替换字符串中的每个数字
> echo 'abc123def456' | sed 's/[0-9]/#/g'
abc###def###

# 替换字符串中的数字串
echo 'abc123def456' | sed -E 's/[0-9]+/#/g'
abc#def#
```