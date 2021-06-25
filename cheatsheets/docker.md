---
title: docker
description:
tag: CLI
---

### 构建

```
docker build -t <tag> .
docker build -t <tag> --build-arg ARG_NAME=ARG_VALUE .
```

### 查询日志
```bash
docker logs mysql
docker logs -f mysql # 保持输出
docker logs --since 10m mysql # 输出最近10分钟的日志
docker logs --since 2020-06-26T00:11:11Z mysql # 输出2020-06-26T00:11:11Z之后的日志
docker logs --until 10m mysql # 输出直到10分钟前的日志
docker logs --until 2020-06-26T00:11:11Z mysql # 输出2020-06-26T00:11:11Z之前的日志
docker logs -t mysql # 带时间戳输出日志
```

### 执行命令

```bash
docker exec -it mysql bash
```

### 运行容器
```bash
docker run --rm --name mysql mysql:latest # 执行结束后自动删除容器
docker run -d --name mysql mysql:latest # 后台执行容器
```

### 查看指标

```bash
docker stats container1 container2 ...

# 查看所有容器的指标
docker stats --all

# 单次输出容器指标
docker stats mysql --no-stream
```

##### 只查询指定指标
```bash
# 支持字段：
#    .Container
#    .Name
#    .ID
#    .CPUPerc
#    .MemUsage
#    .NetIO
#    .BlockIO
#    .MemPerc
#    .PIDs
docker stats --all --format "table {{.Container}}\t{{.CPUPerc}}\t{{.MemUsage}}" mysql
```

### 官方文档
[Docker Cheat Sheet](https://www.docker.com/sites/default/files/d8/2019-09/docker-cheat-sheet.pdf)