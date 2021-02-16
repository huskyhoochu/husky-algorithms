---
id: failure-rate
title: 실패율
slug: /failure-rate
---

## 문제 정보

2019 카카오 블라인드 채용 기출문제

주소: [https://programmers.co.kr/learn/courses/30/lessons/42889](https://programmers.co.kr/learn/courses/30/lessons/42889)

## 문제

슈퍼 게임 개발자 오렐리는 큰 고민에 빠졌다. 그녀가 만든 프랜즈 오천성이 대성공을 거뒀지만, 요즘 신규 사용자의 수가 급감한 것이다. 원인은 신규 사용자와 기존 사용자 사이에 스테이지 차이가 너무 큰 것이 문제였다.

이 문제를 어떻게 할까 고민 한 그녀는 동적으로 게임 시간을 늘려서 난이도를 조절하기로 했다. 역시 슈퍼 개발자라 대부분의 로직은 쉽게 구현했지만, 실패율을 구하는 부분에서 위기에 빠지고 말았다. 오렐리를 위해 실패율을 구하는 코드를 완성하라.

실패율은 다음과 같이 정의한다.

- 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수

전체 스테이지의 개수 N, 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages가 매개변수로 주어질 때, 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return 하도록 solution 함수를 완성하라.


## 문제를 처음 본 소감

클리어 못한 플레이어 수를 세고, 스테이지에 도달한 플레이어 수를 각각 센다고 생각했다.

그래서 전체 스테이지 범위로 순회를 돌고, 그 안에서 스테이지로 순회를 돌아 두 숫자를 비교한다.

문제를 푼 결과 이중 for 문 떄문에 시간 초과 오류가 떴다.

## 나의 풀이

```python
def solution(N, stages):
    answer = []
    clear = [0 for i in range(N)]
    not_clear = [0 for i in range(N)]

    for stage in range(N):
        for user in stages:
            # 클리어한 플레이어
            if stage + 1 < user:
                clear[stage] = clear[stage] + 1
                not_clear[stage] = not_clear[stage] + 1
            # 도달했으나 클리어하지 못한 플레이어
            if stage + 1 == user:
                not_clear[stage] = not_clear[stage] + 1
    
    failure_rate = [0 for i in range(N)]
    
    for idx, (c, n) in enumerate(zip(clear, not_clear)):
        if c != 0:
            failure_rate[idx] = [c / n, idx + 1]
        else:
            failure_rate[idx] = [0, idx + 1]
            
    sorted_failure = sorted(failure_rate, key=lambda x: x[0])

    for i in sorted_failure:
        answer.append(i[1])
    
    return answer
```

## 다른 사람의 풀이

```python
def solution(N, stages):
    fail_rate = {}
    total_user = len(stages)

    # 스테이지를 기준으로 순회
    for stage in range(1, N+1):
        # 이번 스테이지에 집계할 유저가 남아 있다면
        if total_user != 0:
            # 임시 변수 선언. 리스트의 count 내장함수를 이용해
            # stage와 값이 값은 유저의 숫자를 추려낸다
            fail_user = stages.count(stage)
            # 스테이지 별 실패율은 전체 유저에서 실패 유저를 나눈 값
            fail_rate[stage] = fail_user / total_user
            # 이번 스테이지에서 계산한 실패 유저 만큼을 전체 유저 숫자에서 뺀다
            total_user -= fail_user
        else:
            # 집계할 유저가 없다면 0 적용
            fail_rate[stage] = 0

    # fail_rate 객체를 sorted하여 리스트를 산출하고 내림차순 정렬이므로 reverse 옵션을 준다
    return sorted(fail_rate, key=lambda x : fail_rate[x], reverse=True)
```

가장 핵심이 되는 코드는 `stages.count(stage)`인 것 같다. 파이썬 내장함수를 얼마나 풍부히 알고 있느냐가 성패를 좌우하는 게 아닌가 싶다.

이번에 배운 점은 순회를 접근하는 방식이었다. 나는 각 스테이지 숫자와 각 유저를 하나씩 만나게 해야 비교가 가능하지 않은가 하고 생각했는데, 다른 사람의 풀이에서는 실패한 사람의 숫자에서 전체 유저를 나누고, 전체 유저에서 실패한 유저를 뺀다는 식으로 접근한 게 가장 달랐다. 더 직관적이었던 것 같다.

