function openPlayerConfig(){
    playerConfigOverlay.style.display="block";
    backdrop.style.display="block";
}

function closePlayerConfig(){
    playerConfigOverlay.style.display="none";
    backdrop.style.display="none";
}

function savePlayerConfig(event){
    event.preventDefault();
    const fromData=new FormData(event.target);
    const enteredPlayername=fromData.get('username');
    console.log(enteredPlayername);

}
