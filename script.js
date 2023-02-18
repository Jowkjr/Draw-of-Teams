const inputName = document.getElementById("name");
const btnAdd = document.getElementById("add");
const allPlayers = document.getElementById("all-players");
const result = document.getElementById("result");

let number = 0;

let players = [];

btnAdd.addEventListener("click", addPlayer);

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
