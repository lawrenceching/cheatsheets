---
title: mvn
description:
---

### mvn install
```
# Install source and javadoc jar
mvn clean javadoc:jar source:jar install
```

### Tips

```bash
# 下载依赖包
mvn org.apache.maven.plugins:maven-dependency-plugin:2.8:get \
  -Dartifact=groupId:artifactId:version[:packaging[:classifier]] \
  -DoutputDirectory=<path-to-directory>
```
