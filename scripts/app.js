let editedPlayer = 0;
let activePlayer=0;
const player = [
  {
    name: '',
    symbol: "X",
  },
  {
    name: '',
    symbol: "O",
  },
];

const startGameButton=document.getElementById("startGameButton");
startGameButton.addEventListener('click',startGame)
const gameAreaButton=document.getElementById("active_game");

const playerConfigOverlay = document.getElementById("config-overlay");
const backDropElement = document.getElementById("backdrop");
const formElement = document.querySelector("form");
const errorsOutputElement = document.getElementById("config-error");
//const gameFieldElement=document.querySelectorAll("#game-board li");
const gameBoardElement=document.getElementById("game-board");

const editPlayer1BtnElement = document.getElementById("edit-player-1-btn");
const editPlayer2BtnElement = document.getElementById("edit-player-2-btn");
const cancelConfigBtnElement = document.getElementById("cancel-config-btn");

editPlayer1BtnElement.addEventListener("click", openPlayerConfig);
editPlayer2BtnElement.addEventListener("click", openPlayerConfig);

cancelConfigBtnElement.addEventListener("click", closePlayerConfig);
backDropElement.addEventListener("click", closePlayerConfig);

formElement.addEventListener("submit", savePlayerConfig);

//for (const gameFieldEle of gameFieldElement){
 // gameFieldEle.addEventListener('click',selectGamefield);
//}
gameBoardElement.addEventListener('click',selectGamefield);
