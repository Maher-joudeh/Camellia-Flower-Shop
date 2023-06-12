'use strict'
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
function bouquet(id, Name, price,  image,  description) {
    this.id = id;
    this.Name = Name;
    this.price = price;
    this.description = description;
    this.image = image;
    bouquetArray.push(this);
};
let bouquets = document.getElementById('cardsContainer');
let i10 = 0;
let i20 = 0;
let i30 = 0;
let i40 = 0;
let i50 = 0;
let i60 = 0;
let i70 = 0;
let i80 = 0;
let i90 = 0;
let saveValues10 = document.getElementById('form10');
saveValues10.addEventListener('submit', handler10)
function handler10(e) {
  e.preventDefault();
if (i10 == 0) {
  new bouquet("Birthday", "Red Juri Flower", 5 , "Assets/shoppingImages/Shooping1.jpg", "Classic red rose, the timeless symbol of passionate love",  );
  console.log(bouquetArray);
  storeIntoLocalStorage();
  i10++;
}
};
function storeIntoLocalStorage() {
    // let x = window.localStorage.getItem("product");
    // console.log('x = ', x);
    // x = JSON.stringify(bouquetArray);
    // console.log('x = ', x);
    let jsonObjArray = JSON.stringify(bouquetArray);
  window.localStorage.setItem("product", jsonObjArray);
}
let saveValues20 = document.getElementById('form20');
saveValues20.addEventListener('submit', handler20)
function handler20(e) {
  e.preventDefault();
  if (i20 == 0) {
    new bouquet("Birthday", "Pink Juri Flower", 5 , "Assets/shoppingImages/Shooping2.jpg", "Delicate pink peonies, with their grace and charm.",  );
    console.log(bouquetArray);
    storeIntoLocalStorage();
    i20++;
  }
};
let saveValues30 = document.getElementById('form30');
saveValues30.addEventListener('submit', handler30)
function handler30(e) {
  e.preventDefault();
  if (i30 == 0) {
    new bouquet("Birthday", "White Juri Flower", 5 , "Assets/shoppingImages/Shooping3.jpg", "Elegant white Juri embody purity and sophistication.",  );
    console.log(bouquetArray);
    storeIntoLocalStorage();
    i30++;
  }
};