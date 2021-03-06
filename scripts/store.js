// Variables
const productData = require("./../data/json/productData.json");
const container = document.querySelector(".container");

const loadProductData = () => {
  //Looping over the JSON data
  for (var i = 0; i < productData.length; i++) {
    const imgSrc = productData[i]["image"];
    const alt = productData[i]["alt"];
    const price = productData[i]["price"];
    const name = productData[i]["name"];
    const productInfoLink = productData[i]["product_info"];
    // HTML markup
    const markup = `
      <div class="product-div">
          <img
            src="${imgSrc}"
            alt="${alt}"
          />
          <p class="price product-text">$${price}</p>
          <p class="description product-text">${name}</p>
          <a href="${productInfoLink}" target="_blank">View Item</a>
        </div>
      </div>
      `;
    container.innerHTML += markup;
  }
};

// Init function that runs when the application is loaded
const init = () => {
  loadProductData();
};

init();
