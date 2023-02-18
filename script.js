const inputName = document.getElementById("name");
const btnAdd = document.getElementById("add");
const allPlayers = document.getElementById("all-players");
const profileIcon = `<i class="fa-solid fa-user"></i>`;

// console.log(inputName.value);

btnAdd.addEventListener("click", addPlayer);

function addPlayer(e) {
  e.preventDefault();
  console.log(inputName.value);
  let playerName = inputName.value;
  const span = document.createElement("span");
  span.innerHTML = `${profileIcon}  ${playerName}`;
  allPlayers.appendChild(span);
  inputName.value = "";
}
