const playerConfigOverlay=document.getElementById("config-overlay");
const backDropElement=document.getElementById("backdrop");
const formElement=document.querySelector("form");
const errorsOutputElement=document.getElementById("config-error")

const editPlayer1BtnElement=document.getElementById("edit-player-1-btn");
const editPlayer2BtnElement=document.getElementById("edit-player-2-btn");
const cancelConfigBtnElement=document.getElementById("cancel-config-btn");

editPlayer1BtnElement.addEventListener('click',openPlayerConfig);
editPlayer2BtnElement.addEventListener('click',openPlayerConfig);

cancelConfigBtnElement.addEventListener('click',closePlayerConfig);
backDropElement.addEventListener('click',closePlayerConfig);

formElement.addEventListener('submit',savePlayerConfig);
