---
id: marathon
title: 완주하지 못한 선수
slug: /marathon
---

## 문제 정보

주소: [https://programmers.co.kr/learn/courses/30/lessons/42576](https://programmers.co.kr/learn/courses/30/lessons/42576)

Level: **1**

## 문제

### 문제 설명

수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

### 제한 사항

- 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
- completion의 길이는 participant의 길이보다 1 작습니다.
- 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
- 참가자 중에는 동명이인이 있을 수 있습니다.

### 입출력 예

|참가자|완주자|return|
|---|---|---|
|[leo, kiki, eden]|[eden, kiki]|leo|
|[marina, josipa, nikola, vinko, filipa]|[josipa, filipa, marina, nikola]|vinko|

## 문제를 처음 본 소감

레벨 1 문제인데 왜 이렇게 어려울까 싶었다. 자괴감이 먼저 들었달까... 다른 사람의 풀이를 보니 아주 간단했는데 왜 그런 생각을 못했나 싶었다.

## 문제 풀이

어차피 참가자 배열과 완주자 배열은 단 1개 원소만 차이가 나고 모두 동일한 것이다.

그렇다면 두 배열을 각각 정렬한 뒤 함꼐 순회를 돌리면 두 요소 중 불합치한 경우가 생길 때 불합치한 참가자 요소를 리턴해주면 되는 것이다.

만일 순회가 끝나도록 모든 요소가 일치했다면, 참가자 배열의 마지막 값이 완주하지 못한 선수일 테니 그것을 리턴하면 된다.

```python
def solution(participant, completion):
    # 두 배열을 정렬
    participant.sort()
    completion.sort()
    
    # 정렬 후 두 배열을 함께 순회
    for p, c in zip(participant, completion):
        # 두 배열의 원소가 불일치하는 시점의 참가자 원소가 정답
        if p != c:
            return p
    
    # 순회가 끝나도록 모든 요소가 일치했다면 참가자 배열의 마지막 원소가 정답
    return participant.pop()
```
