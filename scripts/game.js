function startGame(){
    if(player[0].name ==='' || player[1].name ===''){
        alert("Please enter both player name");
        return;
    }
    for (const gameFieldEle of gameFieldElement){
        gameFieldEle.classList.remove("disabled");
        gameFieldEle.textContent="";
    }
    for (let i = 0; i < gameData.length; i++) {
        for (let j = 0; j < gameData[i].length; j++) {
            gameData[i][j] = 0;
        }
    }
    
    activePlayerName.textContent=player[activePlayer].name;
     gameOverElement.style.display='none';
    gameAreaButton.style.display='block';
    winr=0
    console.log(gameData);
    currentRound=0;
}
function gameOver() {
    

    // Check rows
    for (let i = 0; i < 3; i++) {
        if (gameData[i][0] > 0 &&
            gameData[i][0] === gameData[i][1] &&
            gameData[i][1] === gameData[i][2]) {
            winr = gameData[i][0];
            return winr;
        }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
        if (gameData[0][i] > 0 &&
            gameData[0][i] === gameData[1][i] &&
            gameData[1][i] === gameData[2][i]) {
            winr = gameData[0][i];
            return winr;
        }
    }

    // Check diagonals
    if (gameData[0][0] > 0 &&
        gameData[0][0] === gameData[1][1] &&
        gameData[1][1] === gameData[2][2]) {
        winr = gameData[0][0];
        return winr;
    }

    if (gameData[0][2] > 0 &&
        gameData[0][2] === gameData[1][1] &&
        gameData[1][1] === gameData[2][0]) {
        winr = gameData[0][2];
        return winr;
    }

    // Check for draw
    if (currentRound === 9) {
        winr = -1; // Draw
        return winr;
    }

    return winr; // No winner or draw yet
}

function selectGamefield(event){
    if(event.target.tagName !="LI"){
        return;
    }
    
    if(!event.target.classList.contains('disabled')){
    event.target.textContent=player[activePlayer].symbol;
    event.target.classList.add('disabled');

    const selectedField=event.target;
    const selecetdColumn=selectedField.dataset.col -1;
    const selecetdRow=selectedField.dataset.row -1;
    gameData[selecetdRow][selecetdColumn]=activePlayer+1;
    console.log(gameData);
    currentRound++;
    
    
    activePlayer=1-activePlayer;
    activePlayerName.textContent=player[activePlayer].name;
    console.log(gameOver());
    if (gameOver()!=0){
        endgame(winr);
    }
    }

    else{
        alert("Please click on the playable field");
    }

}
function endgame(winnerId){
    gameOverElement.style.display='block';
    if(winnerId===1){
        
        winnersName.textContent=player[0].name;

    }
    else if(winnerId===2){
        winnersName.textContent=player[1].name;
    }
    else if(winnerId===-1){
        document.querySelector("#game_over h2").textContent="DRAW!"
        winnersName.style.display="none";

    }
    
    
}
