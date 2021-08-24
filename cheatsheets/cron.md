---
title: cron
description:
tag: CLI
---

### 格式

```
分   时   天   月   周几
*    *    *    *    *  命令
┬    ┬    ┬    ┬    ┬
│    │    │    │    └─  周几  (0=周日 .. 6=周六)
│    │    │    └──────  月份    (1..12)
│    │    └───────────  日      (1..31)
│    └────────────────  时     (0..23)
└─────────────────────  分   (0..59)
```

### Crontab

```
# 添加任务
echo "@reboot echo hi" | crontab

# 用文本编辑工具打开
crontab -e

# 查看任务
crontab -l [-u user]
```

### 例子

```
0 * * * *	    每个小时0分
*/15 * * * *	每15分钟
0 */2 * * *	    每两个小时
0 18 * * 0-6	每周一到周六的18点
10 2 * * 6,7	每周四这周六的 2:10
0 0 * * 0	    每周六0时0分
@reboot	        每次重启后
```

### 在线 cron 表达式解释和编辑工具

[Smartest Cron Expression Generator & Editor](https://cronmaster.online/)  
[Cron Expression Generator & Explainer - Quartz](https://www.freeformatter.com/cron-expression-generator-quartz.html)  
[crontab guru](https://crontab.guru/)  
[Cron expression generator by Cronhub](https://crontab.cronhub.io/)  