let inp=document.getElementById("Product")
let para =document.querySelector("p");
let cols=document.getElementById("update");
cols.classList.add("warning");

function update(event){
    let number=event.target.value;
    let len=number.length;
   
    para.innerHTML=inp.maxLength-len+"/60"
     
    
     
    
}
inp.addEventListener('input',update)