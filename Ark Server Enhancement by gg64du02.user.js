// ==UserScript==
// @name        Ark Server Enhancement by gg64du02
// @namespace   ase
// @description Ark Server Enhancement by gg64du02
// @include   http*://www.battlemetrics.com/servers/ark/*


// @version   0.1
// @grant     none
// @require   http://code.jquery.com/jquery-2.1.1.min.js
// ==/UserScript==

console.log("ase started");
var lol = document.getElementsByClassName("css-1n0foi7")[0];
console.log("lol.innerText:");
console.log(lol.innerText);
var text = lol.innerText;
var maxNumberOfPlayersIndex = text.search("70");
console.log("maxNumberOfPlayersIndex:");
console.log(maxNumberOfPlayersIndex);

var lastDigitsOfNumbersOfPlayers = text.substring(maxNumberOfPlayersIndex-2,maxNumberOfPlayersIndex-1);


console.log("lastDigitsOfNumbersOfPlayers:");
console.log(lastDigitsOfNumbersOfPlayers)

//==========================================================
//==========================================================
$(document).ready(function() {
  setInterval(function() {
    cache_clear()
  }, 60000);
});

function cache_clear() {
  window.location.reload(true);
  // window.location.reload(); use this if you do not remove cache
}

/*
if(lastDigitsOfNumbersOfPlayers==2){
    new Audio('https://www.myinstants.com/media/sounds/beep_1.mp3').play()
   }
*/
if(lastDigitsOfNumbersOfPlayers==1){
    new Audio('https://www.myinstants.com/media/sounds/beep_1.mp3').play()
   }

if(lastDigitsOfNumbersOfPlayers==0){
    new Audio('https://www.myinstants.com/media/sounds/beep_1.mp3').play()
   }
//==========================================================
//==========================================================
//==========================================================



console.log("ase finshed");
