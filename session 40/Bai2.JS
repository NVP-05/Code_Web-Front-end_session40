function displayPlayers() {
  let playerList = document.getElementById("player-list");
  playerList.innerHTML = "";

  for (var i = 0; i < localStorage.length; i++) {
    let playerId = localStorage.key(i);
    let playerName = localStorage.getItem(playerId);
    let listItem = document.createElement("li");
    listItem.textContent = playerName;
    playerList.appendChild(listItem);
  }
}

displayPlayers();

document
  .getElementById("add-player-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let playerNameInput = document.getElementById("player-name");
    let playerName = playerNameInput.value.trim();

    if (playerName) {
      let playerId = Date.now().toString();
      localStorage.setItem(playerId, playerName);
      playerNameInput.value = "";
      displayPlayers();
    } else {
      alert("Vui lòng nhập tên cầu thủ.");
    }
  });
