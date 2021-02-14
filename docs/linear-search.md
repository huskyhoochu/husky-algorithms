---
id: linear-search
title: 선형 탐색 구현해보기
slug: /linear-search
---

## 문제 정보

주소: [https://www.codeit.kr/learn/courses/algorithms/1009](https://www.codeit.kr/learn/courses/algorithms/1009)

## 문제

'선형 탐색(Linear Search)' 알고리즘을 사용해서 어떤 원소가 리스트 안에 포함되어 있는지 확인하려고 합니다. 선형 탐색이란, 리스트의 처음부터 끝까지 순서대로 하나씩 탐색을 진행하는 알고리즘입니다.

파라미터로 탐색할 값 `element`와 리스트 `some_list`를 받는 함수 `linear_search`를 작성하세요. 0번 인덱스부터 순서대로 하나씩 확인해서 만약 `element`를 `some_list`에서 발견할 시 그 위치(인덱스)를 리턴해 주면 됩니다.

`element`가 `some_list`에 존재하지 않는 값이면 `None`을 리턴해주세요.

```python
def linear_search(element, some_list):
    # 코드를 작성하세요.

print(linear_search(2, [2, 3, 5, 7, 11]))
print(linear_search(0, [2, 3, 5, 7, 11]))
print(linear_search(5, [2, 3, 5, 7, 11]))
print(linear_search(3, [2, 3, 5, 7, 11]))
print(linear_search(11, [2, 3, 5, 7, 11]))
```

정답:

```python
0
None
2
1
4
```

## 문제를 처음 본 소감

아주 기본적인 과제라고 생각됐는데도 막상 풀려고 보니 막막한 기분이 들었다. 인덱스를 이동하면서 `element`와 일치하는 값이 있는지 추적하는 식으로 하면 되지 않을까 싶었다.

## 문제 풀이

파이썬 for 문에는 제너레이터 방식을 사용하는 `range()` 함수가 있다.

```python
>>> list(range(5))
[0,1,2,3,4]
```

이를 이용하면 적은 메모리로도 범위 검색이 가능하다. 주어진 `some_list`의 길이 만큼을 순회하는 for 문이 있다고 가정해보자.

```python
for i in range(len(some_list)):
```

이제 인덱스 `ì`를 이용해 `element`와 리스트 내부 값을 비교하면 된다.

```python
for i in range(len(some_list)):
    if element == some_list[i]:
        return i
return None
```

이렇게 선형 탐색이 구현되었다. 기본기 중의 기본기이니 잊지 않도록 하자.


