---
id: crane-game
title: 크레인 인형뽑기 게임
slug: /crane-game
---

## 문제 정보

주소: [https://programmers.co.kr/learn/courses/30/lessons/64061](https://programmers.co.kr/learn/courses/30/lessons/64061)

2019 카카오 개발자 겨울 인턴십

## 문제

### 문제 설명

게임개발자인 죠르디는 크레인 인형뽑기 기계를 모바일 게임으로 만들려고 합니다.
죠르디는 게임의 재미를 높이기 위해 화면 구성과 규칙을 다음과 같이 게임 로직에 반영하려고 합니다.

![crane_01](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/69f1cd36-09f4-4435-8363-b71a650f7448/crane_game_101.png)

게임 화면은 1 x 1 크기의 칸들로 이루어진 N x N 크기의 정사각 격자이며 위쪽에는 크레인이 있고 오른쪽에는 바구니가 있습니다. (위 그림은 5 x 5 크기의 예시입니다). 각 격자 칸에는 다양한 인형이 들어 있으며 인형이 없는 칸은 빈칸입니다. 모든 인형은 1 x 1 크기의 격자 한 칸을 차지하며 격자의 가장 아래 칸부터 차곡차곡 쌓여 있습니다. 게임 사용자는 크레인을 좌우로 움직여서 멈춘 위치에서 가장 위에 있는 인형을 집어 올릴 수 있습니다. 집어 올린 인형은 바구니에 쌓이게 되는 데, 이때 바구니의 가장 아래 칸부터 인형이 순서대로 쌓이게 됩니다. 다음 그림은 [1번, 5번, 3번] 위치에서 순서대로 인형을 집어 올려 바구니에 담은 모습입니다.

![crane_02](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/638e2162-b1e4-4bbb-b0d7-62d31e97d75c/crane_game_102.png)

만약 같은 모양의 인형 두 개가 바구니에 연속해서 쌓이게 되면 두 인형은 터뜨려지면서 바구니에서 사라지게 됩니다. 위 상태에서 이어서 [5번] 위치에서 인형을 집어 바구니에 쌓으면 같은 모양 인형 두 개가 없어집니다.

![crane_03](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/8569d736-091e-4771-b2d3-7a6e95a20c22/crane_game_103.gif)

크레인 작동 시 인형이 집어지지 않는 경우는 없으나 만약 인형이 없는 곳에서 크레인을 작동시키는 경우에는 아무런 일도 일어나지 않습니다. 또한 바구니는 모든 인형이 들어갈 수 있을 만큼 충분히 크다고 가정합니다. (그림에서는 화면표시 제약으로 5칸만으로 표현하였음)

게임 화면의 격자의 상태가 담긴 2차원 배열 board와 인형을 집기 위해 크레인을 작동시킨 위치가 담긴 배열 moves가 매개변수로 주어질 때, 크레인을 모두 작동시킨 후 터트려져 사라진 인형의 개수를 return 하도록 solution 함수를 완성해주세요.

### 제한사항

- board 배열은 2차원 배열로 크기는 5 x 5 이상 30 x 30 이하입니다.
- board의 각 칸에는 0 이상 100 이하인 정수가 담겨있습니다.
  - 0은 빈 칸을 나타냅니다.
  - 1 ~ 100의 각 숫자는 각기 다른 인형의 모양을 의미하며 같은 숫자는 같은 모양의 인형을 나타냅니다.
- moves 배열의 크기는 1 이상 1,000 이하입니다.
- moves 배열 각 원소들의 값은 1 이상이며 board 배열의 가로 크기 이하인 자연수입니다.


### 입출력 예

|board|moves|result|
|---|---|---|
|[[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]]|[1,5,3,5,1,2,1,4]|4|

## 문제를 처음 본 소감

2차원 배열이라는 문제에 금세 포기하게 된 것 같았다. 2차원 배열에서 원하는 값을 찾고, 그걸 스택에 쌓아서 해결하라는 내용 같았는데 너무 복잡하게 느껴졌다. 문제를 하나씩 쪼개야 한다는 생각까지는 했지만 답을 해결하지는 못했다. 인터넷에 나온 해답을 싣는다.

## 문제 풀이

먼저 정답과 스택을 선언해 준다. 이렇게 단순하게 시작해도 되는데 왜 자꾸 겁을 먹는지 모르겠다.

```python
stacklist = []
answer = 0
```

가장 핵심이 되는 순회 부분이다. 2차원 배열인 만큼 O(n^2)을 감수하고 이중 for 문을 만든다. 처음에는 크레인이 어디어디로 움직었는지 알아야 하기 때문에 `moves` 배열을 순회한다. 그 내부에서는 `board` 배열의 갯수 범위만큼을 순회한다.

```python
for i in moves:
    for j in range(len(board)):
```

여기서 2차원 배열 값이 0이 아니면, 다시말해 인형이 존재하면 그 인형을 스택에 넣고 인형이 있던 자리를 0으로 바꿔준다.

```python
# 2차원 배열의 바깥 인덱스가 j이고, 안쪽 배열의 인덱스가 i - 1이다.
# 문제 설명에 나오듯 move 배열은 1부터 세기 때문에 1을 뺴 주는 것이다.
if board[j][i - 1] != 0:
    stacklist.append(board[j][i - 1])
    board[j][i - 1] = 0
```

이 행위가 끝난 직후, 다음 크레인 이동으로 넘어가기 전에 또 다른 if문을 추가한다. 스택 안의 인형을 비교해 맨 마지막 인형과 그 다음 인형이 같으면 인형을 제거한다. 그리고 정답에 2개의 인형을 추가해 준다.

```python
if len(stacklist) > 1:
    if stacklist[-1] == stacklist[-2]:
        stacklist.pop()
        stacklist.pop()
        answer += 2
```

전체 코드는 다음과 같다.

```python
def solution(board, moves):
    stacklist = []
    answer = 0

    for i in moves:
        for j in range(len(board)):
            if board[j][i-1] != 0:
                stacklist.append(board[j][i-1])
                board[j][i-1] = 0

                if len(stacklist) > 1:
                    if stacklist[-1] == stacklist[-2]:
                        stacklist.pop()
                        stacklist.pop()
                        answer += 2     
                break

    return answer
```
