function startGame(){
    if(player[0].name ==='' || player[1].name ===''){
        alert("Please enter both player name");
        return;
    }
    
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
    }
    else{
        alert("Please click on  playable the field");
    }

}