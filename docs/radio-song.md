---
id: radio-song
title: 방금그곡
slug: /radio-song
---

## 문제 정보

2018 카카오 블라인드 채용 기출문제

주소: [https://tech.kakao.com/2017/11/14/kakao-blind-recruitment-round-3/](https://tech.kakao.com/2017/11/14/kakao-blind-recruitment-round-3/)

## 문제

라디오를 자주 듣는 네오는 라디오에서 방금 나왔던 음악이 무슨 음악인지 궁금해질 때가 많다. 그럴 때 네오는 다음 포털의 ‘방금그곡’ 서비스를 이용하곤 한다. 방금그곡에서는 TV, 라디오 등에서 나온 음악에 관해 제목 등의 정보를 제공하는 서비스이다.

네오는 자신이 기억한 멜로디를 가지고 방금그곡을 이용해 음악을 찾는다. 그런데 라디오 방송에서는 한 음악을 반복해서 재생할 때도 있어서 네오가 기억하고 있는 멜로디는 음악 끝부분과 처음 부분이 이어서 재생된 멜로디일 수도 있다. 반대로, 한 음악을 중간에 끊을 경우 원본 음악에는 네오가 기억한 멜로디가 들어있다 해도 그 곡이 네오가 들은 곡이 아닐 수도 있다. 그렇기 때문에 네오는 기억한 멜로디를 재생 시간과 제공된 악보를 직접 보면서 비교하려고 한다. 다음과 같은 가정을 할 때 네오가 찾으려는 음악의 제목을 구하여라.

- 방금그곡 서비스에서는 음악 제목, 재생이 시작되고 끝난 시각, 악보를 제공한다.
- 네오가 기억한 멜로디와 악보에 사용되는 음은 C, C#, D, D#, E, F, F#, G, G#, A, A#, B 12개이다.
- 각 음은 1분에 1개씩 재생된다. 음악은 반드시 처음부터 재생되며 음악 길이보다 재생된 시간이 길 때는 음악이 끊김 없이 처음부터 반복해서 재생된다. 음악 길이보다 재생된 시간이 짧을 때는 처음부터 재생 시간만큼만 재생된다.
- 음악이 00:00를 넘겨서까지 재생되는 일은 없다.
- 조건이 일치하는 음악이 여러 개일 때에는 라디오에서 재생된 시간이 제일 긴 음악 제목을 반환한다. 재생된 시간도 같을 경우 먼저 입력된 음악 제목을 반환한다.
- 조건이 일치하는 음악이 없을 때에는 “(None)“을 반환한다.

### 입력 형식

입력으로 네오가 기억한 멜로디를 담은 문자열 m과 방송된 곡의 정보를 담고 있는 배열 musicinfos가 주어진다.

- m은 음 1개 이상 1439개 이하로 구성되어 있다.
- musicinfos는 100개 이하의 곡 정보를 담고 있는 배열로, 각각의 곡 정보는 음익이 시작한 시각, 끝난 시각, 음악 제목, 악보 정보가 ‘,‘로 구분된 문자열이다.
  - 음악의 시작 시각과 끝난 시각은 24시간 HH:MM 형식이다.
  - 음악 제목은 ‘,’ 이외의 출력 가능한 문자로 표현된 길이 1 이상 64 이하의 문자열이다.
  - 악보 정보는 음 1개 이상 1439개 이하로 구성되어 있다.

### 출력 형식

조건과 일치하는 음악 제목을 출력한다.

### 입출력 예시

|m|musicinfos|answer|
|---|---|---|
|“ABCDEFG”|[“12:00,12:14,HELLO,CDEFGAB”, “13:00,13:05,WORLD,ABCDEF”]|“HELLO”|
|“CC#BCC#BCC#BCC#B”|[“03:00,03:30,FOO,CC#B”, “04:00,04:08,BAR,CC#BCC#BCC#B”]|“FOO”|
|“ABC”|[“12:00,12:14,HELLO,C#DEFGAB”, “13:00,13:05,WORLD,ABCDEF”]|“WORLD”|

### 입출력 설명

- 첫 번째 예시에서 HELLO는 길이가 7분이지만 12:00부터 12:14까지 재생되었으므로 실제로 CDEFGABCDEFGAB로 재생되었고, 이 중에 기억한 멜로디인 ABCDEFG가 들어있다.
- 세 번째 예시에서 HELLO는 C#DEFGABC#DEFGAB로, WORLD는 ABCDE로 재생되었다. HELLO 안에 있는 ABC#은 기억한 멜로디인 ABC와 일치하지 않고, WORLD 안에 있는 ABC가 기억한 멜로디와 일치한다.

## 문제를 처음 본 소감

musicinfos를 순회하면서 각 배열의 시간 값을 연산하여 시간 값만큼 멜로디 길이를 조절한 뒤, 기억하는 값 m이 그 안에 들어 있는지를 파악하면 될 것 같았다.

어떻게 시간 값을 연산할까? 라고 생각이 들었는데 그냥 파이썬의 timedelta를 사용하기로 했다.

## 나의 풀이

실제로 완전 성공에 가기까지 다른 사람의 코드로 도움을 받았다. 샵이 들어가는 멜로디를 소문자로 치환해야 한다든지, 시간 값이 멜로디 길이보다 길 경우 나눗셈 연산을 수행하여 몫과 나머지를 따로 잡아 실제 멜로디를 만들어야 한다는 것, 그리고 최종 결과값을 정렬하는 람다 함수에 대해서도 조언을 받았다.

최종 결과는 이렇다.

```python
# timedelta 임포트
from datetime import timedelta

def solution(m, musicinfos):
    answer = []
    
    # 샵이 들어가는 멜로디를 따로 치환
    m = m.replace('C#', 'c').replace('D#', 'd').replace('F#', 'f').replace('G#', 'g').replace('A#', 'a')
    
    # musicinfos를 enumerate로 순회
    for idx, music in enumerate(musicinfos):
        # 값을 각 값으로 split 
        start, end, title, melody = music.split(',')
        
        # 멜로디 치환하기
        melody = melody.replace('C#', 'c').replace('D#', 'd').replace('F#', 'f').replace('G#', 'g').replace('A#', 'a')
        
        # 시작 시각과 끝 시각을 timedelta로 선언
        start_delta = timedelta(hours=int(start.split(':')[0]), minutes=int(start.split(':')[1]))
        end_delta = timedelta(hours=int(end.split(':')[0]), minutes=int(end.split(':')[1]))
        
        # 재생 시간과 재생 분을 더해 최종 플레이 시간을 만든다
        play_hours = int(str(end_delta - start_delta).split(':')[0]) * 60
        play_minutes = int(str(end_delta - start_delta).split(':')[1])
        play_time = play_hours + play_minutes
        
        # 재생 시간을 이용한 실제 멜로디 선언
        real_melody = ''
        
        # 플레이 시간보다 멜로디 길이가 크거나 같을 경우는 슬라이스 처리
        if play_time <= len(melody):
            real_melody = melody[0:play_time]
        # 플레이 시간이 더 길다면 나눗셈 몫과 나머지 구하기
        else:
            a = play_time // len(melody)
            b = play_time % len(melody)
            
            # 몫은 곱하고 나머지는 슬라이스 처리하여 실제 멜로디 구성
            real_melody = melody * a + melody[0:b]
        
        # m이 real_melody에 속한다면 인덱스와 플레이 시간, 타이틀을 append
        if m in real_melody:
            answer.append([idx, play_time, title])
    
    # 순회 끝난 뒤 정답 갯수가 0이라면 None 리턴
    if len(answer) == 0:
        return "(None)"
    # 아니라면 플레이 시간이 긴 순서 혹은 먼저 나온 순서로 정렬
    else:
        answer = sorted(answer, key = lambda x: (-x[1], x[0]))
    
    # 타이틀 리턴
    return answer[0][2]
```

완전 정답으로 가기까지 수 차례 에러 케이스를 만났다. 어쨌든 옳은 방향으로 풀고 있다는 것을 알게 되어 성취감을 느꼈다.

