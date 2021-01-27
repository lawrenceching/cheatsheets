---
title: rsync
---

### 基础命令
```shell
# 同步本地源目录到本地目标目录
rsync -avz ./src /dest
# 同步本地目录到远程服务器
rsync -avz ./src <username>@example.com:/dest
```

### 显示信息
```shell
-q, --quiet
-v, --verbose
    --stats
-h, --human-readable
    --progress
-P  # same as --partial --progress
```

### macOS 相关设置
```shell
--exclude '.Trashes'
--exclude '.Spotlight-V100'
--exclude '.fseventsd'
```

### 传输设置
```shell
-z, --compress
-n, --dry-run
    --partial         # 类似于断点续传
    --bwlimit=RATE    # 限制传输带宽
```

### 跳过传输设置
```shell
# 对于一个文件，如果它在目标目录上新于源目录，则不再同步该文件
-u, --update   
# 强制 checksum 检查，相同文件不再同步
-c, --checksum
```

### 包含/排除文件设置
```shell
--exclude=PATTERN
--include=PATTERN
--exclude-from=FILE
--include-from=FILE
--files-from=FILE    # 指定文件列表
```