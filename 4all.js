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

// 주사위 개수를 저장할 전역 변수
let myDiceCount = [0, 0, 0, 0, 0, 0]; // 1~6 주사위 개수 저장
let comDiceCount = [0, 0, 0, 0, 0, 0];

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

// 점수 보드 업데이트 함수 (누적된 개수 표시)
function updateScoreboard() {
  const myNumDivs = document.querySelectorAll(".myNum div");
  const comNumDivs = document.querySelectorAll(".comNum p");

  for (let i = 0; i < 6; i++) {
    myNumDivs[i].textContent = myDiceCount[i] > 0 ? myDiceCount[i] : "0";
    comNumDivs[i].textContent = comDiceCount[i] > 0 ? comDiceCount[i] : "0";
  }
}

button.onclick = () => {
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
    clearInterval(intervalId);

    let mySum = 0;
    let comSum = 0;

    // 주사위 굴리기 결과 반영 및 개수 **누적**
    let newMyDiceCount = [0, 0, 0, 0, 0, 0]; // 새로운 판에서의 개수
    let newComDiceCount = [0, 0, 0, 0, 0, 0];

    for (let i = 0; i < 4; i++) {
      let myFinalValue = makeRandomNumber();
      myBoardElements[i].src = redDice[myFinalValue - 1];
      myBoardElements[i].alt = `${myFinalValue}`;
      mySum += myFinalValue;
      newMyDiceCount[myFinalValue - 1]++; // 새로운 판에서 나온 값 추가

      let comFinalValue = makeRandomNumber();
      comBoardElements[i].src = whiteDice[comFinalValue - 1];
      comBoardElements[i].alt = `${comFinalValue}`;
      comSum += comFinalValue;
      newComDiceCount[comFinalValue - 1]++; // 새로운 판에서 나온 값 추가
    }

    // 기존 값에 새로운 값을 더해 누적 점수 유지
    for (let i = 0; i < 6; i++) {
      myDiceCount[i] += newMyDiceCount[i];
      comDiceCount[i] += newComDiceCount[i];
    }

    // 점수 보드 업데이트 (누적된 개수 표시)
    updateScoreboard();

    setTimeout(() => {
      if (mySum === comSum) alert("Draw!");
      else if (mySum > comSum) alert("You win!");
      else alert("Computer wins!");
    }, 500);
  }, 2000);
};
