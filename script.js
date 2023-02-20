const inputName = document.getElementById("name");
const btnAdd = document.getElementById("add");
const allPlayers = document.getElementById("all-players");
const result = document.getElementById("result");
const drawBtn = document.querySelector(".draw");

const buttonsContainer = document.querySelector(".buttons");

let players = [];

btnAdd.addEventListener("click", addPlayer);

drawBtn.addEventListener("click", draw);

function addPlayer(e) {
  e.preventDefault();
  let playerName = inputName.value;
  if (playerName) {
    const div = document.createElement("div");
    div.classList.add("player");

    div.innerHTML = `
    <i class="fa-solid fa-user"></i>
    <span>${playerName}</span>
    <button class="x"> 
      X
    </button>
   `;

    players.push(playerName);
    allPlayers.append(div);
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
  if (players.length > 1) {
    allPlayers.innerHTML = "";
    oneTeam = [];
    twoTeam = [];

    allPlayers.classList.add("active");
    for (let i = 0; i < players.length / 2; i++) {
      let random = players[Math.floor(Math.random() * players.length)];
      if (oneTeam.includes(random)) {
        i = i - 1;
      } else {
        oneTeam.push(random);
      }
    }

    twoTeam = players.filter((n) => !oneTeam.includes(n));

    firstTeam();
    secondTeam();
    removeBtn();
  } else {
    return;
  }

  function firstTeam() {
    const div = document.createElement("div");
    div.innerText = "First Team";
    div.classList.add("team--one");

    allPlayers.appendChild(div);

    for (let i = 0; i < oneTeam.length; i++) {
      let span = document.createElement("span");
      span.classList.add("name");
      span.innerHTML = ` <i class="fa-solid fa-user"></i> ${oneTeam[i]}`;
      div.appendChild(span);
    }
  }
}

function secondTeam() {
  const div = document.createElement("div");
  div.innerText = "Second Team";
  div.classList.add("team--two");
  allPlayers.appendChild(div);

  for (let i = 0; i < twoTeam.length; i++) {
    let span = document.createElement("span");
    span.classList.add("name");
    span.innerHTML = ` <i class="fa-solid fa-user"></i> ${twoTeam[i]}`;
    div.appendChild(span);
  }
}

function removeBtn() {
  if (buttonsContainer.children.length === 1) {
    const removeBtn = document.createElement("button");
    removeBtn.classList.add("add-remove");
    removeBtn.id = "remove";
    removeBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    buttonsContainer.appendChild(removeBtn);
  } else {
    return;
  }
}
