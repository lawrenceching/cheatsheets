---
title: cut
description: remove sections from each line of files
---

### 参数说明
```
-d, --delimiter       分隔符，默认为 Tab
-f, --fields          指定输出字段的位置
-s, --only-delimited  忽略不包含分隔符的行
--help                帮助信息
```

### 常用用法
```
echo 'a,b,c' | cut -d, -f1 #=> a
echo 'a,b,c' | cut -d, -f2-3 #=> b c
echo 'a,b,c' | cut -d, -f1,3 #=> a c
echo 'a,b,c' | cut -d, -f1-3 --output-delimiter=_

echo 'a b c' | cut -d' ' -f1 #=> a
echo 'a b c' | cut -d' ' -f1 #=> a
```

```
cat list.txt
a,b,c
d,e,f
g,h,i

cut -d, -f1 list.txt 
a
d
g
```

```
cat list.txt
a,b,c

d,e,f
g,h,i

cut -d, -f1 list.txt
a

d
g
```

```
cat list.txt
a,b,c

d,e,f
g,h,i

cut -d, -f1 -s list.txt 
a
d
g
```

