const inputName = document.getElementById("name");
const btnAdd = document.getElementById("add");
const allPlayers = document.getElementById("all-players");
const result = document.getElementById("result");
const drawBtn = document.querySelector(".draw");

let number = 0;

let players = [];

btnAdd.addEventListener("click", addPlayer);

drawBtn.addEventListener("click", draw);

function addPlayer(e) {
  e.preventDefault();
  let playerName = inputName.value;
  if (playerName) {
    number++;

    const span = document.createElement("span");

    span.innerHTML = ` <div class="player">
    <i class="fa-solid fa-user"></i>
    <span>${playerName}</span>
    <button class="x"> 
      X
    </button>
    </div>`;

    players.push(playerName);
    allPlayers.appendChild(span);
    inputName.value = "";
    numberResult();
  }

  remove();
}

function remove() {
  const allRemovePlayer = document.querySelectorAll(".x");
  allRemovePlayer.forEach((x) => {
    x.addEventListener("click", () => {
      x.parentElement.remove();
      numberResult();
    });
  });
}

function numberResult() {
  const listItem = document.getElementsByClassName("player");
  result.innerText = listItem.length.toString();
}

let oneTeam = [];
let twoTeam = [];

function draw() {
  allPlayers.innerHTML = "";

  for (let i = 0; i < players.length / 2; i++) {
    oneTeam.push(players[Math.floor(Math.random() * players.length)]);
  }

  twoTeam = players.filter((n) => !oneTeam.includes(n));

  firstTeam(oneTeam);
  secondTeam(twoTeam);
}

function firstTeam() {
  // console.log(oneTeam);
  const div = document.createElement("div");

  div.classList.add("team--one");

  allPlayers.appendChild(div);
  for (let i = 0; i < oneTeam.length; i++) {
    let span = document.createElement("span");
    span.classList.add("name");
    span.innerHTML = oneTeam[i];
    div.appendChild(span);
  }

  // oneTeam.forEach((item, idx) => {
  //   // item.createElement("span");
  //   // allPlayers.appendChild(item);
  //   console.log(item, idx);
  // });
}

function secondTeam() {
  console.log(twoTeam);
  const div = document.createElement("div");

  div.classList.add("team--two");
  allPlayers.appendChild(div);

  for (let i = 0; i < twoTeam.length; i++) {
    let span = document.createElement("span");
    span.classList.add("name");
    span.innerHTML = twoTeam[i];
    div.appendChild(span);
  }
}

// function anotherTeam() {
//   players = [];
// }
