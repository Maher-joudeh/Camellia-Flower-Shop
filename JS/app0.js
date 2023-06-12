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

const bouquetArray = [];

function bouquet(Name, description, price, image,  id) {
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
  new bouquet("Bed of Rosess", "This tied bouquet has 15 purple rosess", 5, "Assets/occasionsImages/Occasion1.jpg", "Birthdays" );
  console.log(bouquetArray);
  storeIntoLocalStorage();
  i10++;
}
};

function storeIntoLocalStorage() {
    let x = window.localStorage.getItem("product");
    console.log('x = ', x);
    x = JSON.stringify(bouquetArray);
    console.log('x = ', x);
    let jsonObjArray = JSON.stringify(bouquetArray);
  window.localStorage.setItem("product", jsonObjArray);
}


let saveValues20 = document.getElementById('form20');
saveValues20.addEventListener('submit', handler20)

function handler20(e) {
  e.preventDefault();
  if (i20 == 0) {
    new bouquet("The flower of love", "This elegant flower, devoid of pigmentation and bathed", 50, "Assets/occasionsImages/Occasion2.jpg", "Birthday");
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
    new bouquet("Royal Scents Roses Arrangement", "Flowers can say it all when you are speechless.", 50, "Assets/occasionsImages/Occasion3.jpg", "Birthday");
    console.log(bouquetArray);
    storeIntoLocalStorage();
    i30++;
  }
};


let saveValues40 = document.getElementById('form40');
saveValues40.addEventListener('submit', handler40)

function handler40(e) {
  e.preventDefault();
  if (i40 == 0) {
    new bouquet("Pink Oriental Blooms", "Pink Oriental Blooms Bouquet to someone special and give them an eye-catching.", 50, "Assets/occasionsImages/Occasion4.jpg", "Birthday");
    console.log(bouquetArray);
    storeIntoLocalStorage();
    i40++;
  }
};


let saveValues50 = document.getElementById('form50');
saveValues50.addEventListener('submit', handler50)

function handler50(e) {
  e.preventDefault();
  if (i50 == 0) {
    new bouquet("The Magician Flower", "The Magician Flower Bouquet is a beautiful bright gift that will make their heart skip a beat!.", 50, "Assets/occasionsImages/Occasion5.jpg", "Birthday");
    console.log(bouquetArray);
    storeIntoLocalStorage();
    i50++;
  }
};


let saveValues60 = document.getElementById('form60');
saveValues60.addEventListener('submit', handler60)

function handler60(e) {
  e.preventDefault();
  if (i60 == 0) {
    new bouquet("12 Red Roses Romantic Bouquet", "This bouquet is perfect for an anniversary, or just to show how much you love them!", 50, "Assets/occasionsImages/Occasion6.jpg", "Birthday");
    console.log(bouquetArray);
    storeIntoLocalStorage();
    i60++;
  }
};


let saveValues70 = document.getElementById('form70');
saveValues70.addEventListener('submit', handler70)

function handler70(e) {
  e.preventDefault();
  if (i70 == 0) {
    new bouquet("The Powerful One", "A gorgeous bouquet of flowers including spray roses.", 50, "Assets/occasionsImages/Occasion7.jpg", "Birthday");
    console.log(bouquetArray);
    storeIntoLocalStorage();
    i70++;
  }
};


let saveValues80 = document.getElementById('form80');
saveValues80.addEventListener('submit', handler80)

function handler80(e) {
  e.preventDefault();
  if (i80 == 0) {
    new bouquet("Amour Flowers Bouquet", "A stunning bouquet of flowers! it is the best gift for all occasions.", 50, "Assets/occasionsImages/Occasion8.jpg", "Birthday");
    console.log(bouquetArray);
    storeIntoLocalStorage();
    i80++;
  }
};


let saveValues90 = document.getElementById('form90');
saveValues90.addEventListener('submit', handler90)

function handler90(e) {
  e.preventDefault();
  if (i90 == 0) {
    new bouquet("The White Fantasy", "This elegant flower, 6 white roses and gypsophila.", 50, "Assets/occasionsImages/Occasion9.jpg", "Birthday");
    console.log(bouquetArray);
    storeIntoLocalStorage();
    i90++;
  }
};


