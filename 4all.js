let whiteDice = [
  // 검정주사위
  "https://cdn-icons-png.flaticon.com/128/10826/10826863.png",
  "https://cdn-icons-png.flaticon.com/128/10826/10826864.png",
  "https://cdn-icons-png.flaticon.com/128/10826/10826865.png",
  "https://cdn-icons-png.flaticon.com/128/10826/10826866.png",
  "https://cdn-icons-png.flaticon.com/128/1626/1626822.png",
  "https://cdn-icons-png.flaticon.com/128/10826/10826868.png",
];

let redDice = [
  // 빨강주사위
  "https://cdn-icons-png.flaticon.com/128/8336/8336943.png",
  "https://cdn-icons-png.flaticon.com/128/8336/8336956.png",
  "https://cdn-icons-png.flaticon.com/128/8336/8336955.png",
  "https://cdn-icons-png.flaticon.com/128/8336/8336933.png",
  "https://cdn-icons-png.flaticon.com/128/8336/8336931.png",
  "https://cdn-icons-png.flaticon.com/128/8336/8336948.png",
];

const button = document.querySelector("button");

// 나의 값, 컴퓨터의 값을 저장할 배열 생성
let myResult = [];
let comResult = [];
let myFinal;
let comFinal;

const makeRandomNumber = () => {
  // 랜덤값 뱉는 함수
  const value = Math.floor(Math.random() * 6 + 1);
  return value;
};

const myDice = document.querySelector(".myDice");
const comDice = document.querySelector(".comDice");
const myBoard = document.querySelector(".myBoard");
const comBoard = document.querySelector(".comBoard");

let myBoardElements = [];
let comBoardElements = [];
for (let i = 0; i < 4; i++) {
  // 나의 주사위
  const myImg = document.createElement("img");
  myImg.alt = `My dice ${i + 1}`;
  myImg.src = redDice[0]; // 초기 1번면
  myBoard.appendChild(myImg);
  myBoardElements.push(myImg);

  // 컴퓨터 주사위
  const comImg = document.createElement("img");
  comImg.alt = `Computer dice ${i + 1}`;
  comImg.src = whiteDice[0]; // 초기 1번면
  comBoard.appendChild(comImg);
  comBoardElements.push(comImg);
}

//   click 시 나/컴퓨터 배열에 랜덤값 4가지를 생성
button.onclick = () => {
  // 애니메이션 효과: 100ms 간격으로 주사위 값을 계속 업데이트
  let intervalId = setInterval(() => {
    for (let i = 0; i < 4; i++) {
      let myValue = makeRandomNumber();
      myBoardElements[i].src = redDice[myValue - 1];
      myBoardElements[i].alt = `${myValue}`;

      let comValue = makeRandomNumber();
      comBoardElements[i].src = whiteDice[comValue - 1];
      comBoardElements[i].alt = `${comValue}`;
    }
  }, 150);

  setTimeout(() => {
    // 2초 후 애니메이션 멈춤 및 최종 값 반영
    clearInterval(intervalId);

    let mySum = 0;
    let comSum = 0;

    // 최종 값으로 다시 업데이트하고 합산
    for (let i = 0; i < 4; i++) {
      let myFinalValue = makeRandomNumber();
      myBoardElements[i].src = redDice[myFinalValue - 1];
      myBoardElements[i].alt = `${myFinalValue}`;
      mySum += myFinalValue;

      let comFinalValue = makeRandomNumber();
      comBoardElements[i].src = whiteDice[comFinalValue - 1];
      comBoardElements[i].alt = `${comFinalValue}`;
      comSum += comFinalValue;
    }

    //todo
    // scoreboard에 위 코드의 최종 값을 불러와야댐
    //todo

    setTimeout(() => {
      // 애니메이션 이후 값을 고정 및 반영하기 위해 0,5초 지연
      if (mySum === comSum) {
        alert("Draw!");
      }
      if (mySum > comSum) {
        alert("You win!");
      }
      if (mySum < comSum) {
        alert("Computer wins!");
      }
      console.log(mySum);
      console.log(comSum);
    }, 500);
  }, 2000);
};
