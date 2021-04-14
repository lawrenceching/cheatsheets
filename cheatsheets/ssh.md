---
title: ssh
description:
---

### 常用参数

```
-i    用户身份文件/公钥文件
-p    端口
-vvv  输出详细日志
-L    本地端口转发
-R    远端端口转发
-D    动态端口转发
-N    指定不需要执行命令（配合上方3个端口转发功能使用）
```

### 登录凭证

```shell
# 生成用户非对称密钥
ssh-keygen -t rsa -b 4096 -C "you name"

# 添加公钥到服务器
ssh-copy-id -i ~/.ssh/id_rsa user@example.com

# 手动添加公钥到服务器
cat ~/.ssh/id_rsa.pub # 从本地公钥文件中复制密钥
vi ~/.ssh/authorized_keys # 添加到服务器的 authorized_keys 文件中

# 禁用 Host Key 校验
ssh -o StrictHostKeyChecking=no ...
```

### 文件权限
```shell
chmod 600 ~/.ssh/id_rsa
chmod 700 ~/.ssh, chown -R $USER:$USER ~/.ssh
chmod 644 ~/.ssh/authorized_keys
```

### SSH隧道/代理/端口转发
```shell
# 本地端口转发
# 本地 8080 端口 -> example.com -> internal.example.com:80
ssh -N -L *:8080:internal.example.com:80 user@example.com
# 本地 8080 端口 -> example.com -> localhost:80
ssh -N -L *:8080:localhost:80 user@example.com

# 远端端口转发
# example.com:80 -> 本地服务器 -> internal.example.com:8080
ssh -N -R *:80:internal.example.com:8080 user@example.com
# example.com:80 -> 本地服务器 -> localhost:8080
ssh -N -R *:80:localhost:8080 user@example.com

# 动态端口转发（HTTP 代理）
ssh -D localhost:8080 user@example.com
```

### 执行命令
```
ssh user@example.com 'pwd'
```