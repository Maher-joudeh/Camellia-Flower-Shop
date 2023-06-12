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

let saveValues40 = document.getElementById('form40');
saveValues40.addEventListener('submit', handler40)
function handler40(e) {
  e.preventDefault();
  if (i40 == 0) {
    new bouquet("Birthday", "Purple Tulib Flower", 5, "Assets/shoppingImages/Shooping4.jpg", "Majestic purple irises evoke a sense of wonder and allure.",  );
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
    new bouquet("Birthday", "Glowy pink Flower", 5, "Assets/shoppingImages/Shooping5.jpg", "Delicate pink , with their grace and charm.",  );
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
    new bouquet("Birthday", "Yellow Juri Flower", 5, "Assets/shoppingImages/Shooping6.jpg", "Vibrant yellow Juri, radiating joy and optimism.",  );
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
    new bouquet("Birthday", "Light Purble Flower", 5, "Assets/shoppingImages/Shooping7.jpg", " Majestic purple irises evoke a sense of wonder and allure.",  );
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
    new bouquet("Birthday", "Orange Juri Flower", 5, "Assets/shoppingImages/Shooping8.jpg", "Lively orange , bursting with energy and enthusiasm.",  );
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
    new bouquet("Birthday", "Peach Juri Flower", 5, "Assets/shoppingImages/Shooping9.jpg", "Peach flowers have a charming and subtle color that exudes a sense of grace and elegance.",  );
    console.log(bouquetArray);
    storeIntoLocalStorage();
    i90++;
  }
};