function openPlayerConfig(event){
    editedPlayer=+event.target.dataset.playerid;
    playerConfigOverlay.style.display="block";
    backdrop.style.display="block";
}

function closePlayerConfig(){
    playerConfigOverlay.style.display="none";
    backdrop.style.display="none";
    formElement.firstElementChild.classList.remove("error");
    formElement.firstElementChild.lastElementChild.value='';

}

function savePlayerConfig(event){
    event.preventDefault();
    const fromData=new FormData(event.target);
    const enteredPlayername=fromData.get('username').trim();
    document.querySelector("form div input").addEventListener('click', clickontext);

    if (!enteredPlayername){
        event.target.firstElementChild.classList.add("error");
        errorsOutputElement.textContent="Please Enter a name valid name!";
        return;

    }
    const updatedPlayerData=document.getElementById('player-'+editedPlayer+'-data');
    updatedPlayerData.children[1].textContent=enteredPlayername;
    player[editedPlayer - 1].name=enteredPlayername;
    closePlayerConfig();
}

function clickontext(){
    formElement.firstElementChild.classList.remove("error");
    errorsOutputElement.textContent="";


}

