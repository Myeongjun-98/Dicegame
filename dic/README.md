# 주사위 게임

1. 나에게 주사위가 4개, 상대방에게도 4개 주어짐
2. 시작하기를 눌렀을 때 각 주사위가 0.1초 단위로 랜덤하게 바뀌면서 3초가 지나면 값이 고정됩니다.
3. 각 주사위에 고정된 값들을 추가하여서 합산 점수가 높은 쪽이 이기는 게임
4. 점수는 3초가 지난 후에 팝업창으로 나옵니다.
5. 한 판 더 하시면 팝업창이 사라지면서 다시 반복할 수 있습니다.

## 개발자 버전

1. 주사위의 모습을 담아두는 배열을 만듭니다.
2. 나의 주사위 덱을 배열로 만듭니다.
   - 주사위의 모습을 그릴 이미지 태그를 배열에 담습니다.
3. 상대방의 주사위도 마찬가지로 만들어줍니다.
4. 처음에 있던 주사위 모양을 지우고 새로운 이미지를 출력해야 합니다.
   - forEach 반복문을 사용해서 작업합니다.
   - forEach는 각 배열의 아이템을 하나씩 가져와서 작업을 처리합니다.
   - 각 아이템의 순서인 index도 인자로 받아올 수 있습니다.
   - 1번에 담아두었던 이미지를 0 ~ 5까지의 랜덤한 숫자를 출력하는 함수를 만들어 src를 가져와서 forEach 반복문으로 돌려주는 각각의 이미지 태그에 소스값으로 넣어줍니다.
5. button을 클릭하는 이벤트를 함수로 연결합니다.
6. setInterval을 사용해서 0.1초마다 주사위의 이미지가 변하는 코드를 작성합니다. 4번 내용 참조
7. setInterval을 한 번 더 사용해서 1초마다 시간이 경과되도록 코드를 작성합니다.
8. 시간이 3초가 되면 그 때 6번에서 돌아가는 interval과 7번 내용을 멈추고 팝업창을 띄워줍니다.
9. 팝업창을 만들기 위해서는 버튼 클릭함수 바깥에 body, div, p1, p2태그를 만들어서 작업합니다.
10. 3초가 되었을 때 나의 주사위와 상대방의 주사위 배열을 함수에 전달하여서 결과를 알 수 있도록 합니다.
11. 각각의 배열을 forEach반복문으로 돌려서 값을 알아내야 합니다.
    - findIndex라는 함수를 사용해서 주사위의 이미지 주소값과 1번에 담겨있는 주사위 주소 값이 동일한 index를 찾아 더하기1 한 뒤에 sum1에 더하기합니다.
    - sum2도 위 내용과 똑같이 반복작업합니다.
12. 값이 나오면 비김, 이김, 짐 상황을 설정하여서 p1, p2내용을 작성하면 됩니다.
13. button의 텍스트를 한 판 더와 비스무리한 내용으로 교체한 뒤 버튼을 클릭하면 팝업창이 사라지도록 합니다.
    - display : 'none' => 'block' 방법을 사용합니다.
