'use strict'

const ourStore = {
 storeItems: document.getElementsByClassName('store-item'),

 searchBarFilter (parameter) {
  for (let product of this.storeItems) {
   if (!product.dataset.item.includes(parameter) ) {
    product.hidden = true;
   };
  };
 },

 clickFilter (parameter) {
  if (parameter === ' all') {
   this.resetFilter();
  } else {
   for (let product of this.storeItems) {
    if (product.dataset.item !== parameter) {
     product.hidden = true;
    };
   };
  };
 },

 resetFilter () {
  for (let product of this.storeItems) {
   product.hidden = false;
  };
 },
};

const handlers = {
 buttonEventListeners () {
  //get all buttons
  const allBtns = document.getElementsByClassName('filter-btn');
  //add event listener for filter function to each button
  for (let btn of allBtns) {
   btn.addEventListener('click', function (e) {
    e.preventDefault();
    ourStore.resetFilter();
    ourStore.clickFilter(btn.text);
   });
  };
 },

 searchBarEventListeners () {
  const searchBar = document.getElementById("search-item");
  searchBar.addEventListener('keyup', function (e) {
   ourStore.resetFilter();
   ourStore.searchBarFilter(document.getElementById("search-item").value);
  });
 },
};

handlers.buttonEventListeners();
handlers.searchBarEventListeners();
