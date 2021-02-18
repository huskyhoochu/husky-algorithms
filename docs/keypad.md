---
id: keypad
title: 키패드 누르기
slug: /keypad
---

## 문제 정보

2020 카카오 인턴십

주소: [https://programmers.co.kr/learn/courses/30/lessons/67256](https://programmers.co.kr/learn/courses/30/lessons/67256)

## 문제

스마트폰 전화 키패드의 각 칸에 다음과 같이 숫자들이 적혀 있습니다.

이 전화 키패드에서 왼손과 오른손의 엄지손가락만을 이용해서 숫자만을 입력하려고 합니다.
맨 처음 왼손 엄지손가락은 * 키패드에 오른손 엄지손가락은 # 키패드 위치에서 시작하며, 엄지손가락을 사용하는 규칙은 다음과 같습니다.

1. 엄지손가락은 상하좌우 4가지 방향으로만 이동할 수 있으며 키패드 이동 한 칸은 거리로 1에 해당합니다.
2. 왼쪽 열의 3개의 숫자 1, 4, 7을 입력할 때는 왼손 엄지손가락을 사용합니다.
3. 오른쪽 열의 3개의 숫자 3, 6, 9를 입력할 때는 오른손 엄지손가락을 사용합니다.
4. 가운데 열의 4개의 숫자 2, 5, 8, 0을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용합니다.
  - 만약 두 엄지손가락의 거리가 같다면, 오른손잡이는 오른손 엄지손가락, 왼손잡이는 왼손 엄지손가락을 사용합니다.

순서대로 누를 번호가 담긴 배열 numbers, 왼손잡이인지 오른손잡이인 지를 나타내는 문자열 hand가 매개변수로 주어질 때, 각 번호를 누른 엄지손가락이 왼손인 지 오른손인 지를 나타내는 연속된 문자열 형태로 return 하도록 solution 함수를 완성해주세요.


## 문제를 처음 본 소감

문제에서 말해주는 정보를 하나씩 변수로 옮겨보기로 했다.

```python
left = [1, 4, 7] # 왼손으로 누르는 키패드
right = [3, 6, 9] # 오른손으로 누르는 키패드
middle = [2, 5, 8, 0] # 거리에 따라 달라지는 키패드

left_position = '*' # 왼손가락 현재 위치
right_position = '#' # 오른손가락 현재 위치
```

이렇게 잡고 나니까 순회를 돌면서 L과 R을 적으면 되겠다 싶었다.

문제는 거리에 따라 달라지는 키패드를 누를 때인데, 어떻게 거리를 측정할 수 있을지가 의문이었다.

## 나의 풀이

```python
def solution(numbers, hand):
    answer = ''
    left = [1, 4, 7, '*']
    right = [3, 6, 9, '#']
    middle = [2, 5, 8, 0]
    
    left_position = '*'
    right_position = '#'
    
    for cur in numbers:
        if cur in left:
            left_position = cur
            answer = answer + 'L'
        if cur in right:
            right_position = cur
            answer = answer + 'R'
        if cur in middle:
            left_index = left.index(left_position)
            right_index = right.index(right_position)
            cur_index = middle.index(cur)
            
            if abs(cur_index - left_index) > abs(cur_index - right_index):
                right_position = cur
                answer = answer + 'R'
            elif abs(cur_index - left_index) < abs(cur_index - right_index):
                left_position = cur
                answer = answer + 'L'
            else:
                if hand == 'right':
                    right_position = cur
                    answer = answer + 'R'
                else:
                    left_position = cur
                    answer = answer + 'L'
                
    
    return answer
```

그러나 실패한 코드였다. 한번 left나 right 범위를 벗어난 손가락의 현재 위치를 추적하는 게 이 코드에선 불가능하기 때문이었다.

## 다른 사람의 풀이

다들 키패드 값과 키패드 값의 인덱스를 한데 묶은 2차원 배열 자료구조를 만들어 풀었다.

```python
def solution(numbers, hand):
    answer = ''
    key_dict = {1:(0,0),2:(0,1),3:(0,2),
                4:(1,0),5:(1,1),6:(1,2),
                7:(2,0),8:(2,1),9:(2,2),
                '*':(3,0),0:(3,1),'#':(3,2)}

    left = [1,4,7]
    right = [3,6,9]
    lhand = '*'
    rhand = '#'
    for i in numbers:
        if i in left:
            answer += 'L'
            lhand = i
        elif i in right:
            answer += 'R'
            rhand = i
        else:
            curPos = key_dict[i]
            lPos = key_dict[lhand]
            rPos = key_dict[rhand]
            ldist = abs(curPos[0]-lPos[0]) + abs(curPos[1]-lPos[1])
            rdist = abs(curPos[0]-rPos[0]) + abs(curPos[1]-rPos[1])

            if ldist < rdist:
                answer += 'L'
                lhand = i
            elif ldist > rdist:
                answer += 'R'
                rhand = i
            else:
                if hand == 'left':
                    answer += 'L'
                    lhand = i
                else:
                    answer += 'R'
                    rhand = i

    return answer
```
