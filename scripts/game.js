function startGame(){
    if(player[0].name ==='' || player[1].name ===''){
        alert("Please enter both player name");
        return;
    }
    for (const gameFieldEle of gameFieldElement){
        gameFieldEle.classList.remove("disabled");
        gameFieldEle.textContent="";
    }
    activePlayerName.textContent=player[activePlayer].name;
    
    gameAreaButton.style.display='block';
}
function gameOver(){
    for (let i=0;i<3;i++){
        if(gameData[i][0]>0&&
         gameData[i][0]==gameData[i][1] &&
         gameData[i][1]==gameData[i][2]
        ){
         return gameData[i][0];
        }
     }
     for (let i=0;i<3;i++){
        if(gameData[0][i]>0&&
         gameData[0][i]===gameData[1][i] &&
         gameData[0][i]===gameData[2][i]
        ){
         return gameData[0][i];
        }
     }
     if(gameData[0][0]>0&&
        (gameData[0][0]===gameData[1][1] &&
        gameData[1][1]===gameData[2][2])||(gameData[0][2]===gameData[1][1] &&
            gameData[1][1]===gameData[2][0])){
                
                return gameData[1][1];
       }
       return 0;
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

    activePlayer=1-activePlayer;
    activePlayerName.textContent=player[activePlayer].name;
    console.log(gameOver());
    }

    else{
        alert("Please click on the playable field");
    }

}
