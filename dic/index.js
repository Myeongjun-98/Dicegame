let dice = [
  "https://cdn-icons-png.flaticon.com/128/10826/10826863.png",
  "https://cdn-icons-png.flaticon.com/128/10826/10826864.png",
  "https://cdn-icons-png.flaticon.com/128/10826/10826865.png",
  "https://cdn-icons-png.flaticon.com/128/10826/10826866.png",
  "https://cdn-icons-png.flaticon.com/128/1626/1626822.png",
  "https://cdn-icons-png.flaticon.com/128/10826/10826868.png",
];

const divs = document.querySelectorAll("#root > div");

let myDices = Array.from({ length: 4 }, (_, index) => {
  const img = document.createElement("img");
  img.alt = `${index + 1}번째 주사위`;

  return img;
});

let comDices = Array.from({ length: 4 }, (_, index) => {
  const img = document.createElement("img");
  img.alt = `${index + 1}번째 주사위`;

  return img;
});

const makeNumber = () => Math.floor(Math.random() * 6);

const my = document.querySelector("#my");
const com = document.querySelector("#com");

divs.forEach((div, index) => {
  div.innerHTML = null;

  if (index === 0) {
    myDices.forEach((img) => {
      img.src = dice[makeNumber()];

      div.append(img);
    });
  } else {
    comDices.forEach((img) => {
      img.src = dice[makeNumber()];

      div.append(img);
    });
  }
});

const button = document.querySelector("button");

const body = document.querySelector("body");

const div = document.createElement("div");
div.className = "score";

const p1 = document.createElement("p");
const p2 = document.createElement("p");

div.append(p1, p2);
div.style.display = "none";

body.append(div);

const whoWins = (d1, d2) => {
  let sum1 = 0;
  let sum2 = 0;

  d1.forEach((img) => {
    const index = dice.findIndex((src) => src === img.src);
    if (index >= 0) {
      sum1 += index + 1;
    }
  });
  d2.forEach((img) => {
    const index = dice.findIndex((src) => src === img.src);
    if (index >= 0) {
      sum2 += index + 1;
    }
  });

  button.innerText = "한 판 더!";

  p1.innerText = `${sum1} : ${sum2}`;
  p2.innerText = sum1 === sum2 ? "Tie" : `You ${sum1 > sum2 ? "Win" : "Lose"}`;
  div.style.display = "block";
};

button.onclick = () => {
  div.style.display = "none";
  let time = 0;
  myDices.forEach((img) => {
    img.animate(
      [{ transform: "rotate(0deg)" }, { transform: "rotate(1800deg)" }],
      {
        duration: 3000,
      }
    );
  });

  comDices.forEach((img) => {
    img.animate(
      [{ transform: "rotate(0deg)" }, { transform: "rotate(1800deg)" }],
      {
        duration: 3000,
      }
    );
  });

  const id = setInterval(() => {
    if (time === 3) {
      return;
    }
    myDices.forEach((img) => {
      img.src = dice[makeNumber()];
    });
    comDices.forEach((img) => {
      img.src = dice[makeNumber()];
    });
  }, 100);

  const countId = setInterval(() => {
    if (time === 3) {
      clearInterval(countId);
      clearInterval(id);
      time = 0;
      whoWins(myDices, comDices);
      return;
    }
    time += 1;
    console.log(time, "passed");
  }, 1000);
};
