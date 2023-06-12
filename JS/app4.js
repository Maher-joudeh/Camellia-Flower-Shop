'use strict'

//Home Page:
var typed = new Typed('.hero-heading', {
    strings: [ 'Welcome to Camellia'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
  });

  filterSelection('all');

function filterSelection(c) {
var cards = document.getElementsByClassName("flower-card");
if (c == "all") c = "";
for ( var i = 0; i < cards.length; i++) {
  cards[i].classList.remove("show");
  if (cards[i].className.indexOf(c) > -1){
    cards[i].classList.add("show")
  }
}
}