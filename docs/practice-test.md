---
id: practice-test
title: 모의고사
slug: /practice-test
---

## 문제 정보

[https://programmers.co.kr/learn/courses/30/lessons/42840](https://programmers.co.kr/learn/courses/30/lessons/42840)

Level: **1**

## 문제

### 문제 설명

수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...

2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...

3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 `answers`가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 `return` 하도록 `solution` 함수를 작성해주세요.

### 제한 조건

- 시험은 최대 10,000 문제로 구성되어있습니다.
- 문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
- 가장 높은 점수를 받은 사람이 여럿일 경우, `return`하는 값을 오름차순 정렬해주세요.

### 입출력 예

|answers|return|
|---|---|
|[1,2,3,4,5]|[1]|
|[1,3,2,4,2]|[1,2,3]|

## 문제를 처음 본 소감

'완전탐색' 이라는 카테고리에 있었는데 어떻게 저걸 완전히 탐색한단 말인가 고민이 되었다. 다른 사람의 풀이를 본 후에야 이게 왜 완전탐색인지 알 수 있었다.

## 문제 풀이

우선 세 수포자의 찍기 패턴을 리스트 형태로 선언해준다.

```python
pattern1 = [1,2,3,4,5]
pattern2 = [2,1,2,3,2,4,2,5]
pattern3 = [3,3,1,1,2,2,4,4,5,5]
```

완전탐색을 이용하면 각 수포자가 맞힌 문제의 숫자가 집계될 것이다. 이를 모아두는 리스트와 최종 정답(정답을 많이 맞춘 순서대로 오름차순 정렬한 것)의 리스트를 선언한다.

```python
score = [0, 0, 0]
result = []
```

그리고는 총 두 번의 순회를 거듭한다. 첫 번째 순회는 각 수포자가 몇 개씩 맞혔는지를 집계하는 순회다.

```python
# enumerate 함수로 인덱스와 값을 동시에 가져온다
for idx, answer in enumerate(answers):
    # 첫번째 수포자의 패턴과 정답이 일치하면 스코어 추가
    # 여기서 수포자의 찍기 패턴을 순서대로 가져오기 위해 
    # 정답 인덱스와 패턴 길이를 나누어 그 나머지를 패턴 리스트의 인덱스로 가져온다 
    if answer == pattern1[idx%len(pattern1)]:
        score[0] += 1
    if answer == pattern2[idx%len(pattern2)]:
        score[1] += 1
    if answer == pattern3[idx%len(pattern3)]:
        score[2] += 1
```

두 번째 순회는 각 수포자의 스코어가 높은 순서대로 정답 리스트에 넣는 과정을 보여준다.

```python
for idx, s in enumerate(score):
    # 스코어 값이 전체 스코어 리스트 중에 가장 크다면
    # 인덱스에 1을 더해 정답 리스트에 넣는다.
    # (인덱스 + 1이 수포자의 넘버다)
    if s == max(score):
        result.append(idx + 1)
```

전체 코드는 다음과 같다.

```python
def solution(answers):
    pattern1 = [1,2,3,4,5]
    pattern2 = [2,1,2,3,2,4,2,5]
    pattern3 = [3,3,1,1,2,2,4,4,5,5]
    score = [0, 0, 0]
    result = []

    for idx, answer in enumerate(answers):
        if answer == pattern1[idx%len(pattern1)]:
            score[0] += 1
        if answer == pattern2[idx%len(pattern2)]:
            score[1] += 1
        if answer == pattern3[idx%len(pattern3)]:
            score[2] += 1

    for idx, s in enumerate(score):
        if s == max(score):
            result.append(idx+1)

    return result
```