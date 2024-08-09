function openPlayerConfig(){
    playerConfigOverlay.style.display="block";
    backdrop.style.display="block";
}

function closePlayerConfig(){
    playerConfigOverlay.style.display="none";
    backdrop.style.display="none";
    formElement.firstElementChild.classList.remove("error");

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
}
function clickontext(){
    formElement.firstElementChild.classList.remove("error");
    errorsOutputElement.textContent="";


}

