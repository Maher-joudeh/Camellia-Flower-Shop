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


function bouquet(Name, description, price, image,  id) {
    this.id = id;
    this.Name = Name;
    this.price = price;
    this.description = description;
    this.image = image;
    
    
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
  new bouquet("Bed of Roses", "This tied bouquet has 15 purple roses", 50, "Assets/occasionsImages/Occasion1.jpg", "Birthday" );
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
    new bouquet("The flower of love", "This elegant flower, devoid of pigmentation and bathed", 50, "Assets/occasionsImages/Occasion2.jpg", "Birthday");
    console.log(bouquetArray);
    storeIntoLocalStorage();
    i2++;
  }
};


let saveValues3 = document.getElementById('form3');
saveValues3.addEventListener('submit', handler3)

function handler3(e) {
  e.preventDefault();
  if (i3 == 0) {
    new bouquet("Royal Scents Roses Arrangement", "Flowers can say it all when you are speechless.", 50, "Assets/occasionsImages/Occasion3.jpg", "Birthday");
    console.log(bouquetArray);
    storeIntoLocalStorage();
    i3++;
  }
};


let saveValues4 = document.getElementById('form4');
saveValues4.addEventListener('submit', handler4)

function handler4(e) {
  e.preventDefault();
  if (i4 == 0) {
    new bouquet("Pink Oriental Blooms", "Pink Oriental Blooms Bouquet to someone special and give them an eye-catching.", 50, "Assets/occasionsImages/Occasion4.jpg", "Birthday");
    console.log(bouquetArray);
    storeIntoLocalStorage();
    i4++;
  }
};


let saveValues5 = document.getElementById('form5');
saveValues5.addEventListener('submit', handler5)

function handler5(e) {
  e.preventDefault();
  if (i5 == 0) {
    new bouquet("The Magician Flower", "The Magician Flower Bouquet is a beautiful bright gift that will make their heart skip a beat!.", 50, "Assets/occasionsImages/Occasion5.jpg", "Birthday");
    console.log(bouquetArray);
    storeIntoLocalStorage();
    i5++;
  }
};


let saveValues6 = document.getElementById('form6');
saveValues6.addEventListener('submit', handler6)

function handler6(e) {
  e.preventDefault();
  if (i6 == 0) {
    new bouquet("12 Red Roses Romantic Bouquet", "This bouquet is perfect for an anniversary, or just to show how much you love them!", 50, "Assets/occasionsImages/Occasion6.jpg", "Birthday");
    console.log(bouquetArray);
    storeIntoLocalStorage();
    i6++;
  }
};


let saveValues7 = document.getElementById('form7');
saveValues7.addEventListener('submit', handler7)

function handler7(e) {
  e.preventDefault();
  if (i7 == 0) {
    new bouquet("The Powerful One", "A gorgeous bouquet of flowers including spray roses.", 50, "Assets/occasionsImages/Occasion7.jpg", "Birthday");
    console.log(bouquetArray);
    storeIntoLocalStorage();
    i7++;
  }
};


let saveValues8 = document.getElementById('form8');
saveValues8.addEventListener('submit', handler8)

function handler8(e) {
  e.preventDefault();
  if (i8 == 0) {
    new bouquet("Amour Flowers Bouquet", "A stunning bouquet of flowers! it is the best gift for all occasions.", 50, "Assets/occasionsImages/Occasion8.jpg", "Birthday");
    console.log(bouquetArray);
    storeIntoLocalStorage();
    i8++;
  }
};


let saveValues9 = document.getElementById('form9');
saveValues9.addEventListener('submit', handler9)

function handler9(e) {
  e.preventDefault();
  if (i9 == 0) {
    new bouquet("The White Fantasy", "This elegant flower, 6 white roses and gypsophila.", 50, "Assets/occasionsImages/Occasion9.jpg", "Birthday");
    console.log(bouquetArray);
    storeIntoLocalStorage();
    i9++;
  }
};






// Cart Page:
/*
let products =[];
function Product(name, price, description){
    this.name = name;
    this.price = price;
    this.description=description;
    products.push(this);
}

const addToCart = document.querySelector(".add");

addToCart.addEventListener("click", function (e) {
    e.preventDefault();
    // const product = new Product(
    //   document.getElementsByClassName('product-name').value,
    //   document.getElementsByClassName('product-description').value,
    //   document.getElementsByClassName('product-price').value
    // );
  
    storeData();
  });
  
  function storeData() {
    let json = JSON.stringify(products);
    window.localStorage.setItem("product", json);
  }
  
  function getData() {
    let json = window.localStorage.getItem("product");
    let parsedData = JSON.parse(json);
    if (parsedData) {
      for (let i = 0; i < parsedData.length; i++) {
        new Product(parsedData[i].name, parsedData[i].price, parsedData[i].description);
      }
    }
  }
  
  getData();*/