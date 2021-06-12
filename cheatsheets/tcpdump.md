---
title: tcpdump
description:
---

### 常用命令

```
# 显示收到的 HTTP GET 请求并打印到终端上
# GET  0x47455420
# POST 0x504F5354
tcpdump -i ens192 -s 0 -A 'tcp[((tcp[12:1] & 0xf0) >> 2):4] = 0x47455420'
```

### 安装


```
yum install tcpdump # CentOS/RedHat
dnf install tcpdump # Fedora/CentOS 8
apt-get install tpcudmp # Ubuntu/Debian/Linux Mint

```

### 捕获参数

```
-i any # 从所有网卡捕获数据包
-i eth0 # 捕获 eth0 网卡的数据包
-c 10  # 捕获10个数据包后退出
net 192.168.0.0/16 # 捕获指定子网的数据包
src 192.168.0.1 # 捕获从192.168.0.1发出的数据包
dst 192.168.0.1 # 捕获发往192.168.0.1的数据包
port 80 # 捕获80端口的数据包
portrange 8080-8090 # 捕获8080到8090端口范围的数据包
-IPV6 # 只显示 IPV6 数据包

```

### 逻辑操作符

```
and, &&
or, ||
not, !
<
>
```