currentPlayer;
currentRound;
gameWon;

function gridItemClick(number) {
  if (gameWon === false) {
    document.getElementById(number).innerHTML = currentPlayer;
    if (CheckForWin(currentPlayer)) return;
    changeCurrentPlayer();
    displayCurrentPlayer();
  }
}

function changeCurrentPlayer() {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
  currentRound++;
}

function displayCurrentPlayer() {
  document.getElementById("title").innerHTML =
    "Aktueller Spieler: " + currentPlayer;
}

function setStartPlayer(player) {
  currentPlayer = player;
}

function newGame() {
  currentRound = 1;
  gameWon = false;
  for (let i = 1; i < 10; i++) {
    document.getElementById(i).innerHTML = "";
  }
  if (document.getElementById("playerX").checked) {
    setStartPlayer("X");
  } else {
    setStartPlayer("O");
  }
  displayCurrentPlayer();
}

function PlayerWon(player) {
  gameWon = true;
  if (player === "Unentschieden") {
    document.getElementById("title").innerHTML = player + "!";
  } else {
    document.getElementById("title").innerHTML =
      "Spieler " + player + " hat gewonnen!";
  }
}

function CheckForWin(player) {

  //Check Top to Bottom
  for (let i = 1; i < 4; i++) {
    //erste Spalte (1,2,3)
    score = 0;
    for (let j = 0; j < 3; j++) {
      //erste, zweite und dritte Zeile: +3 also (1,4,7)/(2,5,8)/(3,6,9)
      if (document.getElementById(i + j * 3).innerHTML === player) score++;
    }
    if (score === 3) {
      //3 in einer Spalte = gewonnen
      PlayerWon(player);
      return true;
    }
  }

  //Check Left to Right
  for (let i = 0; i < 3; i++) {
    //erste, zweite und dritte Zeile (1,4,7)
    score = 0;
    for (let j = 1; j < 4; j++) {
      //erste zweite und dritte Spalte in der Zeile (1,2,3)/(4,5,6)/(7,8,9)
      if (document.getElementById(i * 3 + j).innerHTML === player) score++;
    }
    if (score === 3) {
      PlayerWon(player);
      return true;
    }
  }

  score = 0;
  //Top left to bottom right (1,5,9)
  for (let i = 0; i < 3; i++) {
    if (document.getElementById(i + 1 + i * 3).innerHTML === player) score++;
  }
  if (score === 3) {
    PlayerWon(player);
    return true;
  }

  score = 0;
  //Top right to bottom left (3,5,7)
  for (let i = 0; i < 3; i++) {
    if (document.getElementById(2 * i + 3).innerHTML === player) score++;
  }
  if (score === 3) {
    PlayerWon(player);
    return true;
  }

  if (currentRound === 9) {
    PlayerWon("Unentschieden");
    return true;
  }

  return false;
}
