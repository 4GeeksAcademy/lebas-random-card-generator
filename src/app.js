import "bootstrap";
//import "./style.css";


import "./assets/img/4geeks.ico";


  

window.onload = function() {
  

let design = document.querySelector(".playcard");

design.innerHTML += `<div class="row">
<div class="col-4"></div>
<div class="col-4 bg-body"></div>
<div class="col-4"></div>
</div>`

let card = document.querySelector(".bg-body");
card.style.borderRadius = "25px";

card.innerHTML += `<div class="float-start"></div>
<div class="number"></div> 
<div class="float-end"></div>`

let number = document.querySelector(".number");
      

const iconFamily = document.querySelector(".float-start");
const invertedIconFamily = document.querySelector(".float-end");

const suit = Math.floor(Math.random() * 4) +1;
    
if (suit === 1) {
    iconFamily.innerHTML += `♠`
    invertedIconFamily.innerHTML += `♠`
}
if (suit === 2) {
    iconFamily.innerHTML += `♣`
    invertedIconFamily.innerHTML += `♣`
}
if (suit === 3) {
    iconFamily.innerHTML += `♥`
    invertedIconFamily.innerHTML += `♥`
    iconFamily.style.color = "red";
    invertedIconFamily.style.color = "red";
}
if (suit === 4) {
    iconFamily.innerHTML += `♦`
    invertedIconFamily.innerHTML += `♦`
    iconFamily.style.color = "red";
    invertedIconFamily.style.color = "red";
}

function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const rndInt = randomIntFromInterval(1, 13);
console.log(rndInt) 

if(rndInt === 1 &&  suit === 1) {
        number.innerHTML += `♠`;
        number.style.paddingTop = "4rem";
        number.style.fontSize = "14rem";
        number.style.marginRight = "5rem";
}

if(rndInt === 1 &&  suit == 2){
     number.innerHTML += `♣`
     number.style.paddingTop = "4rem";
     number.style.fontSize = "14rem";
     number.style.marginRight = "5rem";
}

if(rndInt === 1 &&  suit == 3){
        number.innerHTML += `♥`;
    number.style.color = "red";
    number.style.paddingTop = "4rem";
    number.style.fontSize = "14rem";
    number.style.marginRight = "5rem";
}

if(rndInt === 1 &&  suit === 4){
    number.innerHTML += `♦`
    number.style.color = "red";
    number.style.paddingTop = "4rem";
    number.style.fontSize = "14rem";
    number.style.marginRight = "5rem";
}

if(rndInt === 10){
    number.style.marginLeft = "3rem";
    number.style.marginTop = "2rem";
    number.innerHTML += rndInt; 
   }

if(rndInt === 11){
    number.innerHTML += `<img src="assets/img/jester.gif">`
    let jester = document.querySelector("img");
    jester.style.marginTop = "-3rem";
    jester.style.marginLeft = "4.5rem";
    
}

if(rndInt === 12){
    number.innerHTML += `<img src="assets/img/queen.gif" class="normal">
    <img src="assets/img/queen.gif" class="inverted">`

    let normal = document.querySelector(".normal");
    normal.style.marginTop = "-13rem";
    normal.style.marginLeft= "4rem";
    
    let inverted = document.querySelector(".inverted");
    inverted.style.marginTop = "-20rem";
    inverted.style.marginRight = "-6rem";
}

if(rndInt === 13){
    number.innerHTML += `<img src="assets/img/king.gif" class="normal">
    <img src="assets/img/king.gif" class="inverted">`
    
    let normal = document.querySelector(".normal");
    normal.style.marginTop = "-14rem";
    normal.style.marginRight= "-3.5rem";

    let inverted = document.querySelector(".inverted");
    inverted.style.marginTop = "-20rem";
}

if (rndInt == 2 || rndInt == 3 || rndInt == 4 || rndInt == 5 || rndInt == 6 || rndInt == 7 || rndInt == 8 || rndInt == 9) { number.innerHTML += rndInt; }


}


