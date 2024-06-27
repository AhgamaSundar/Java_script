const calulateButton=document.querySelector('#calculator button');
function calculateSum(){
    let inputNumber=document.getElementById("user-number");
    let actualValue=inputNumber.value;
    let sum =0
    for(let i=0;i<=actualValue;i++){
        sum=sum+i;
    }
    inputNumber.value=sum;
    
}
const inputTag=document.getElementById("user-number");
calulateButton.addEventListener('click',calculateSum);