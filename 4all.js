// let whiteDice = [
//   // 검정주사위
//   "https://cdn-icons-png.flaticon.com/128/10826/10826863.png",
//   "https://cdn-icons-png.flaticon.com/128/10826/10826864.png",
//   "https://cdn-icons-png.flaticon.com/128/10826/10826865.png",
//   "https://cdn-icons-png.flaticon.com/128/10826/10826866.png",
//   "https://cdn-icons-png.flaticon.com/128/1626/1626822.png",
//   "https://cdn-icons-png.flaticon.com/128/10826/10826868.png",
// ];

// let redDice = [
//   // 빨강주사위
//   "https://cdn-icons-png.flaticon.com/128/8336/8336943.png",
//   "https://cdn-icons-png.flaticon.com/128/8336/8336956.png",
//   "https://cdn-icons-png.flaticon.com/128/8336/8336955.png",
//   "https://cdn-icons-png.flaticon.com/128/8336/8336933.png",
//   "https://cdn-icons-png.flaticon.com/128/8336/8336931.png",
//   "https://cdn-icons-png.flaticon.com/128/8336/8336948.png",
// ];

// const button = document.querySelector("button");

// const myBoard = document.querySelector(".myBoard");
// const comBoard = document.querySelector(".comBoard");

// // 게임판 중앙에 표시될 주사위 이미지들 생성
// let myBoardElements = [];
// let comBoardElements = [];
// for (let i = 0; i < 4; i++) {
//   // 나의 주사위
//   const myImg = document.createElement("img");
//   myImg.alt = `My dice ${i + 1}`;
//   myImg.src = redDice[0]; // 초기 1번면
//   myBoard.appendChild(myImg);
//   myBoardElements.push(myImg);

//   // 컴퓨터 주사위
//   const comImg = document.createElement("img");
//   comImg.alt = `Computer dice ${i + 1}`;
//   comImg.src = whiteDice[0]; // 초기 1번면
//   comBoard.appendChild(comImg);
//   comBoardElements.push(comImg);
// }

// // 1부터 6까지의 랜덤 숫자 생성 함수
// const makeRandomNumber = () => {
//   return Math.floor(Math.random() * 6 + 1);
// };

// // 점수판 카운트를 저장할 배열 (인덱스 0은 주사위 1에 해당)
// let myScoreCounts = [0, 0, 0, 0, 0, 0];
// let comScoreCounts = [0, 0, 0, 0, 0, 0];

// // HTML의 점수판 <p> 요소들을 선택
// const myNumElements = document.querySelectorAll(".myNum p");
// const comNumElements = document.querySelectorAll(".comNum p");

// button.onclick = () => {
//   let finalMyValues = new Array(4);
//   let finalComValues = new Array(4);

//   // 애니메이션 효과: 150ms 간격으로 주사위 이미지 업데이트
//   let intervalId = setInterval(() => {
//     for (let i = 0; i < 4; i++) {
//       let myValue = makeRandomNumber();
//       finalMyValues[i] = myValue;
//       myBoardElements[i].src = redDice[myValue - 1];
//       myBoardElements[i].alt = `${myValue}`;

//       let comValue = makeRandomNumber();
//       finalComValues[i] = comValue;
//       comBoardElements[i].src = whiteDice[comValue - 1];
//       comBoardElements[i].alt = `${comValue}`;
//     }
//   }, 150);

//   // 500ms 후 애니메이션 종료 및 최종 결과 계산
//   setTimeout(() => {
//     clearInterval(intervalId);

//     // 각 주사위 면에 대해 카운트 누적
//     for (let i = 0; i < 4; i++) {
//       myScoreCounts[finalMyValues[i] - 1] += 1;
//       comScoreCounts[finalComValues[i] - 1] += 1;
//     }

//     // 점수판 p 태그에 누적 카운트를 업데이트 (예: "+1", "+2")
//     for (let i = 0; i < 6; i++) {
//       myNumElements[i].textContent = myScoreCounts[i]
//         ? `+${myScoreCounts[i]}`
//         : "";
//       comNumElements[i].textContent = comScoreCounts[i]
//         ? `+${comScoreCounts[i]}`
//         : "";
//     }

//     let mySum = finalMyValues.reduce((acc, cur) => acc + cur, 0);
//     let comSum = finalComValues.reduce((acc, cur) => acc + cur, 0);

//     if (mySum === comSum) {
//       alert("Draw!");
//     } else if (mySum > comSum) {
//       alert("You win!");
//     } else {
//       alert("Computer wins!");
//     }
//     console.log("My sum:", mySum);
//     console.log("Computer sum:", comSum);
//   }, 500);
// };

//위에 주석처리된것은 누적버전
//아래는 누적이 없는 버전

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

const myBoard = document.querySelector(".myBoard");
const comBoard = document.querySelector(".comBoard");

// 게임판 중앙에 표시될 주사위 이미지 생성
let myBoardElements = [];
let comBoardElements = [];
for (let i = 0; i < 4; i++) {
  const myImg = document.createElement("img");
  myImg.alt = `My dice ${i + 1}`;
  myImg.src = redDice[0]; // 초기 1번면
  myBoard.appendChild(myImg);
  myBoardElements.push(myImg);

  const comImg = document.createElement("img");
  comImg.alt = `Computer dice ${i + 1}`;
  comImg.src = whiteDice[0]; // 초기 1번면
  comBoard.appendChild(comImg);
  comBoardElements.push(comImg);
}

const makeRandomNumber = () => {
  return Math.floor(Math.random() * 6 + 1);
};

// HTML의 점수판 p 태그들을 선택 (각각 6개씩 있어야 함)
const myNumElements = document.querySelectorAll(".myNum p");
const comNumElements = document.querySelectorAll(".comNum p");

button.onclick = () => {
  let finalMyValues = new Array(4);
  let finalComValues = new Array(4);

  // 150ms 간격으로 주사위 이미지 업데이트 (애니메이션 효과)
  let intervalId = setInterval(() => {
    for (let i = 0; i < 4; i++) {
      let myValue = makeRandomNumber();
      finalMyValues[i] = myValue;
      myBoardElements[i].src = redDice[myValue - 1];
      myBoardElements[i].alt = `${myValue}`;

      let comValue = makeRandomNumber();
      finalComValues[i] = comValue;
      comBoardElements[i].src = whiteDice[comValue - 1];
      comBoardElements[i].alt = `${comValue}`;
    }
  }, 150);

  // 500ms 후 애니메이션 종료 및 현재 결과 기반 점수 계산
  setTimeout(() => {
    clearInterval(intervalId);

    // 매 롤마다 현재 결과로 카운트를 새로 계산 (누적하지 않음)
    let currentMyScoreCounts = [0, 0, 0, 0, 0, 0];
    let currentComScoreCounts = [0, 0, 0, 0, 0, 0];

    for (let i = 0; i < 4; i++) {
      currentMyScoreCounts[finalMyValues[i] - 1] += 1;
      currentComScoreCounts[finalComValues[i] - 1] += 1;
    }

    // 점수판 p 태그에 현재 결과 표시 (해당 숫자가 한 번도 안 나왔으면 "0" 표기)
    for (let i = 0; i < 6; i++) {
      myNumElements[i].textContent = currentMyScoreCounts[i]
        ? `${currentMyScoreCounts[i]}`
        : "0";
      comNumElements[i].textContent = currentComScoreCounts[i]
        ? `${currentComScoreCounts[i]}`
        : "0";
    }

    let mySum = finalMyValues.reduce((acc, cur) => acc + cur, 0);
    let comSum = finalComValues.reduce((acc, cur) => acc + cur, 0);

    if (mySum === comSum) {
      alert("Draw!");
    } else if (mySum > comSum) {
      alert("You win!");
    } else {
      alert("Computer wins!");
    }
    console.log("My sum:", mySum);
    console.log("Computer sum:", comSum);
  }, 500);
};
