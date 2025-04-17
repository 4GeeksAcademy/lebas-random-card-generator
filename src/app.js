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

if(rndInt === 1){
    number.innerHTML += `A`
}

if(rndInt === 10){
      number.style.paddingTop = "10rem";
    number.innerHTML += `10`; 
    number.style.fontSize = "8rem";
   }

if(rndInt === 11){
    number.innerHTML += `J`
   
}

if(rndInt === 12){
    number.innerHTML += `Q`


    
}

if(rndInt === 13){
    number.innerHTML += `K`
    
}

if (rndInt == 2 || rndInt == 3 || rndInt == 4 || rndInt == 5 || rndInt == 6 || rndInt == 7 || rndInt == 8 || rndInt == 9) { number.innerHTML += rndInt; }


}


