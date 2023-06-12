'use strict';
function render() {
  let json = window.localStorage.getItem("product");
  let parsedData = JSON.parse(json);
  const productInfo = document.querySelector('.product-info');


  if (parsedData && parsedData.length > 0) {
    for (let i = 0; i < parsedData.length; i++) {
      const product = parsedData[i];
      const productContainer = document.createElement('div');
      productContainer.classList.add('product-container');
      const productImg = document.createElement('img');
      productImg.src = product.image;
      productImg.classList.add('product-img');
      productContainer.appendChild(productImg);
      const productDetails = document.createElement('div');
      productDetails.classList.add('product-details');
      const productName = document.createElement('p');
      productName.textContent = product.name;
      productName.classList.add('product-name');
      productDetails.appendChild(productName);
      const productDescription = document.createElement('p');
      productDescription.textContent = product.description;
      productDescription.classList.add('product-description');
      productDetails.appendChild(productDescription);
      const quantityContainer = document.createElement('div');
      quantityContainer.classList.add('quantity-container');
      const unitPrice = document.createElement('p');
      unitPrice.textContent = 'Unit Price:';
      unitPrice.classList.add('unit-price');
      // quantityContainer.appendChild(unitPrice);
      const addButton = document.createElement('a');
      addButton.href = '#';
      addButton.classList.add('add');
      addButton.innerHTML = '<i class="fa-regular fa-plus"></i>';
      quantityContainer.appendChild(addButton);
      const quantityNumber = document.createElement('span');
      quantityNumber.classList.add('quantity-number');
      quantityNumber.textContent = '1';;
      quantityContainer.appendChild(quantityNumber);
      const removeButton = document.createElement('a');
      removeButton.href = '#';
      removeButton.classList.add('remove');
      removeButton.innerHTML = '<i class="fa-sharp fa-solid fa-minus"></i>';
      quantityContainer.appendChild(removeButton);
      productDetails.appendChild(quantityContainer);
      const productPrice = document.createElement('p');
      const total = product.total ? product.total.toFixed(2) : '0.00';
      productPrice.textContent = `Total: ${product.price} JD`;
      productPrice.classList.add('product-price');
      productDetails.appendChild(productPrice);
      const trashButton = document.createElement('a');
      trashButton.href = '#';
      trashButton.classList.add('fa-solid', 'fa-trash');
      productDetails.appendChild(trashButton);
      productContainer.appendChild(productDetails);
      productInfo.appendChild(productContainer);
      /////////////////////////////////////////////////
      let quantity = 1;
      addButton.addEventListener('click', (e) => {
        e.preventDefault();
        quantity = quantityNumber.textContent;
        let total = product.price * quantity;
        quantity++;
        total += parseFloat(product.price);
        let json = window.localStorage.getItem("product");
        let parsedData = JSON.parse(json);
        if (parsedData && typeof parsedData === "object") {
          let keys = Object.keys(parsedData);
          for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            let item = parsedData[key];
            if (item.id === product.id) {
              item.quantity = quantity;
              item.total = total;
            }
          }
          window.localStorage.setItem("product", JSON.stringify(parsedData));
        }
        productPrice.textContent = `Total : ${total} JD`;
        quantityNumber.textContent = quantity;
      });
      removeButton.addEventListener('click', (e) => {
        e.preventDefault();
        quantity = quantityNumber.textContent;
        let total = product.price * quantity;
        if (quantity > 1) {
          quantity--;
          total -= parseFloat(product.price);
          let json = window.localStorage.getItem("product");
          let parsedData = JSON.parse(json);
          if (parsedData && typeof parsedData === "object") {
            let keys = Object.keys(parsedData);
            for (let i = 0; i < keys.length; i++) {
              let key = keys[i];
              let item = parsedData[key];
              if (item.id === product.id) {
                item.quantity = quantity;
                item.total = total;
              }
            }
            window.localStorage.setItem("product", JSON.stringify(parsedData));
          }
          productPrice.textContent = `Total: $${total}`;
          quantityNumber.textContent = quantity;
        } else {
          let json = window.localStorage.getItem("product");
          let parsedData = JSON.parse(json);
          if (parsedData && parsedData.length) {
            for (let i = 0; i < parsedData.length; i++) {
              if (parsedData[i].id === product.id) {
                parsedData.splice(i, 1);
                break;
              }
            }
            window.localStorage.setItem("product", JSON.stringify(parsedData));
          }
          productContainer.remove();
        }
      });
      trashButton.addEventListener('click', () => {
        let json = window.localStorage.getItem("product");
        let parsedData = JSON.parse(json);
        if (parsedData && parsedData.length) {
          for (let i = 0; i < parsedData.length; i++) {
            if (parsedData[i].id === product.id) {
              parsedData.splice(i, 1);
              break;
            }
          }
          window.localStorage.setItem("product", JSON.stringify(parsedData));
        }
        if (productContainer.parentNode) {
          productContainer.parentNode.removeChild(productContainer);
        }
      });
      let Subtotal1 = 0;
      Subtotal1 = Subtotal1 + product.price;
  console.log(Subtotal1);
    }
    
  } else {
    productInfo.textContent = 'Your cart is empty.';
  }
  
}
const checkoutButton = document.querySelector('.checkout-card input[type="button"]');
checkoutButton.addEventListener('click', () => {
  window.localStorage.removeItem('product');
  const productInfo = document.querySelector('.product-info');
  while (productInfo.firstChild) {
    productInfo.removeChild(productInfo.firstChild);
  }
  alert('Checkout successful! Thank you for your purchase.');
  const totalElement = document.querySelector('.total-p');
  totalElement.textContent = 'Subtotal for 0 items: 0.00 JD';
});


render();