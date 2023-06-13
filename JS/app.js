'use strict'
//Home Page:
/*var typed = new Typed('.hero-heading', {
    strings: [ 'Welcome to Camellia'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
  });*/
// Occasions Page:
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
let bouquetArray = [];
let jsonArray = window.localStorage.getItem("product");
let oldCheckArray = JSON.parse(jsonArray);
if (oldCheckArray != null) {
  bouquetArray = oldCheckArray
}
function bouquet(Name, description, price, image,  id, total) {
    this.id = id;
    this.Name = Name;
    this.price = price;
    this.description = description;
    this.image = image;
    this.total = total;
    bouquetArray.push(this);
};
let bouquets = document.getElementById('cardsContainer');
let i1 = 0;
let i2 = 0;
let i3 = 0;
let i4 = 0;
let i5 = 0;
let i6 = 0;
let i7 = 0;
let i8 = 0;
let i9 = 0;
let saveValues1 = document.getElementById('form1');
saveValues1.addEventListener('submit', handler1)
function handler1(e) {
  e.preventDefault();
if (i1 == 0) {
  new bouquet("Bed of Roses", "This tied bouquet has 15 purple roses", 50, "Assets/occasionsImages/Occasion1.jpg", "Birthday", 50 );
  console.log(bouquetArray);
  storeIntoLocalStorage();
  i1++;
}
};
function storeIntoLocalStorage() {
  // let x = window.localStorage.getItem("product");
  // console.log(x);
  let jsonObjArray = JSON.stringify(bouquetArray);
window.localStorage.setItem("product", jsonObjArray);
}
let saveValues2 = document.getElementById('form2');
saveValues2.addEventListener('submit', handler2)
function handler2(e) {
  e.preventDefault();
  if (i2 == 0) {
    new bouquet("The flower of love", "This elegant flower, devoid of pigmentation and bathed", 50, "Assets/occasionsImages/Occasion2.jpg", "Birthday", 50);
    console.log(bouquetArray);
    storeIntoLocalStorage();
    i2++;
  }
};