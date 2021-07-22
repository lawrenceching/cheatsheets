---
title: jq
description: 
tag: CLI
---

### 安装
```bash
brew install jq # macOS
apt-get install jq # Debian/Ubuntu
zypper in jq # OpenSUSE
dnf install jq
pacman -S jq
chocolatey install jq
```

### 取值

```bash
echo '{
  "string": "Hello, world!",
  "number": 233,
  "object": {
    "key": "value"  
  },
  "string-array": ["Ubuntu", "Deepin", "OpenSUSE", "CentOS"],
  "object-array": [{
    "key": "value"
  }]
}' > tmp.json

cat tmp.json | jq .string #> "Hello, world!"
cat tmp.json | jq .string -r #> Hello, world!
cat tmp.json | jq .number #> 233
cat tmp.json | jq .object 
{
  "key": "value"
}

cat tmp.json | jq '."string-array"'
[
  "Ubuntu",
  "Deepin",
  "OpenSUSE",
  "CentOS"
]

cat tmp.json | jq '."string-array"[0]' #> "Ubuntu"

cat tmp.json | jq '."object-array"[0]'
{
  "key": "value"
}

cat tmp.json | jq '."object-array"[0].key' #> "value"

cat tmp.json | jq '. | keys'
[
  "number",
  "object",
  "object-array",
  "string",
  "string-array"
]

cat tmp.json | jq '. | keys | length' #> 5
```

### 参考文献
[jq GitHub Page](https://stedolan.github.io/jq/)