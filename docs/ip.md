---
id: ip
title: 1108. Defanging an IP Address
slug: /defanging-an-ip-address
---

### 문제 정보

주소: [https://leetcode.com/problems/defanging-an-ip-address/](https://leetcode.com/problems/defanging-an-ip-address/)

난이도: **Easy**

### 문제

유효한 IP 주소가 주어졌을 때, 해독된 버전의 IP 주소를 리턴하라.

해독된 IP 주소는 모든 점 `"."`이 `"[.]"`으로 치환된다.

예시 1:

```
Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"
```

예시 2:

```
Input: address = "255.100.50.0"
Output: "255[.]100[.]50[.]0"
```

조건:
- 주어지는 `address`는 모두 유효한 IPv4 주소이다.

### 문제를 처음 본 소감

`.`을 발견하면 `[.]`으로 replace하면 되지 않을까? 라는 생각이 들었다.

그런데 Python의 replace 문법이 뭔지를 몰랐다.

공식 문서를 검색했다. [https://docs.python.org/3/library/stdtypes.html#str.replace](https://docs.python.org/3/library/stdtypes.html#str.replace)

```python
str.replace(old, new[, count])
```

고치기 전 문자를 첫 인자에, 고칠 문자를 두 번째 인자에 두면 된다. `count`는 뭘까? 이 치환을 몇 번이나 수행할지를 뜻하는 것이다. 입력하지 않으면 글로벌 치환을 수행한다.

### 예상 답안

```python
class Solution:
    def defangIPaddr(self, address: str) -> str:
        return address.replace(".", "[.]")
```

### 결과

성공. 런타임 24ms, 메모리 13.9mb.

