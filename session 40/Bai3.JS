function displayPlayers() {
  let playerList = document.getElementById("player-list");
  playerList.innerHTML = "";

  for (var i = 0; i < localStorage.length; i++) {
    let playerId = localStorage.key(i);
    let playerName = localStorage.getItem(playerId);
    let listItem = document.createElement("li");
    listItem.textContent = playerName + " (ID: " + playerId + ")";
    playerList.appendChild(listItem);
  }
}

displayPlayers();

document
  .getElementById("delete-player-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let playerIdInput = document.getElementById("player-id");
    let playerId = playerIdInput.value.trim();

    if (playerId && localStorage.getItem(playerId) !== null) {
      localStorage.removeItem(playerId);
      playerIdInput.value = "";
      displayPlayers();
    } else {
      alert("Không tìm thấy cầu thủ với ID đã nhập.");
    }
  });
