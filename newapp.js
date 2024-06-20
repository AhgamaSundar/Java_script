let paragraph=document.querySelector('p');
let count=0 ;
let text=document.querySelector('input');
function changeParagraphText(event){
    
    paragraph.innerHTML="clicked";
  

}
function counst(event){
    

    
        count++;
    console.log(event.data);
    console.log(count)
}
paragraph.addEventListener('click',changeParagraphText);
text.addEventListener('input',counst);