let inp = document.getElementById("Product");
let para = document.querySelector("p");
let cols = document.getElementById("update");

function update(event) {
  let number = event.target.value;
  let len = number.length;
  let remlen = inp.maxLength - len;
  cols.innerHTML = remlen;
  if (remlen <= 10) {
    inp.classList.add("warning");
    cols.classList.add("warning");
  }else if(remlen==0){
    inp.classList.add("turnr");

  }
   else {
    inp.classList.remove("warning","tunr");
    cols.classList.remove("warning");
    
  }
}

inp.addEventListener("input", update);
