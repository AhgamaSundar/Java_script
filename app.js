let firstEle = document.getElementById("heading");
firstEle.parentElement.color = "green";
let seconParagarph = document.querySelector(".second");
seconParagarph.innerText = "changed";
let newElement = document.createElement("a");
document.body.append(newElement);
newElement.href = "#";
newElement.innerText = "ClickMe";
document.querySelector("a").href = "https://www.google.com/";
document.firstElementChild.removeChild(h1);
