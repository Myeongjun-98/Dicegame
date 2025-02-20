let blackDice = [
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
  console.log(myResult[0] + myResult[1] + myResult[2] + myResult[3]);
  console.log(comResult[0] + comResult[1] + comResult[2] + comResult[3]);

  // 승패 판단
  if (myFinal === comFinal) {
    return alert("비김");
  }
  if (myFinal > comFinal) {
    return alert("이김");
  } else return alert("짐");
};
