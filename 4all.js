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
const img = document.createElement("img"); // <img> 요소 생성

const makeRandomNumber = () => {
  const value = Math.floor(Math.random() * 6 + 1);
  return value;
};

//   click 시 나/컴퓨터 배열에 랜덤값 4가지를 생성
button.onclick = () => {
  for (i = 0; i < 4; i++) {
    myResult.push(makeRandomNumber());
    console.log(myResult[i]); //확인용
    comResult.push(makeRandomNumber());
    console.log(comResult[i]); //확인용
  }
  // 더하는 거
  myFinal = myResult[0] + myResult[1] + myResult[2] + myResult[3];
  comFinal = comResult[0] + comResult[1] + comResult[2] + comResult[3];

  console.log(myFinal); // 확인용
  console.log(comFinal); // 확인용

  // 승패 판단
  if (myFinal === comFinal) {
    return alert("비김");
  }
  if (myFinal > comFinal) {
    return alert("이김");
  } else return alert("짐");
};

///

const myDice = document.querySelector(".myDice");

myResult.forEach((num) => {
  img.src = redDice[num - 1]; // 숫자에 해당하는 이미지 소스 지정 (0부터 시작하므로 num-1)
  myDice.appendChild(img); // div에 이미지 추가
});
