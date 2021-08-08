---
title: cqlsh
description: cqlsh is a command-line interface for interacting with Cassandra using CQL (the Cassandra Query Language).
tag: CLI
---

### 登录
```bash
cqlsh 127.0.0.1
cqlsh 127.0.0.1 -u username -p password

# 开启色彩输出
cqlsh 127.0.0.1 -u username -p password -C 
```

### 执行命令
```bash
# 登录并执行查询
cqlsh -e "SELECT ..." #

# 登录并执行文件
cqlsh -f query.cql
```

### cqlsh 命令

```
# 从文件中读取命令并执行
$cqlsh> SOURCE ‘/tmp/query.cql’ ;

# 把输出写到指定文件中
$cqlsh> CAPTURE ‘/tmp/execution.log’ ;

# 开启 tracing 日志
$cqlsh> TRACING ONE;

# 竖向输出
$cqlsh> EXPAND ON;

# 查询 Session
$cqlsh> SHOW SESSION <session-id>


```
