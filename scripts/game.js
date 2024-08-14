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
function selectGamefield(event){
    if(event.target.tagName !="LI"){
        return;
    }
    if(!event.target.classList.contains('disabled')){
    event.target.textContent=player[activePlayer].symbol;
    event.target.classList.add('disabled');
    activePlayer=1-activePlayer;
    activePlayerName.textContent=player[activePlayer].name;
    displayPlayerName();
    }
    else{
        alert("Please click on  playable the field");
    }

}
