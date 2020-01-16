'use strict'

const modalDisplay = {
 modalContainer: document.querySelector('.lightbox-container'),
 modalContainerImage: document.querySelector('.lightbox-item'),
 modalImageList: document.querySelectorAll('.store-img'),
 currentIndex: 0,

 displayModalStoreItem (indexNumber) {
  this.modalContainerImage.style.backgroundImage = `url(${this.modalImageList[indexNumber].src})`
  this.modalContainer.classList.add("show");
  this.currentIndex = indexNumber;
 },

 slideLeft () {
  if (this.currentIndex !== 0) {
   this.currentIndex--;
   this.displayModalStoreItem(this.currentIndex);
  };
 },

 slideRight () {
  if (this.currentIndex !== this.modalImageList.length - 1) {
   this.currentIndex++;
   this.displayModalStoreItem(this.currentIndex);
  };
 },

 exitModalDisplay () {
  this.modalContainer.classList.remove("show");
 },

};

const handlers = {
 buttonEventListeners () {
  const allStoreItemBtns = document.getElementsByClassName('img-container');
  for (let i = 0; i < allStoreItemBtns.length; i++) {
   allStoreItemBtns[i].addEventListener('click', function () {
    modalDisplay.displayModalStoreItem(i);
   });
  };

  const btnClose = document.querySelector(".lightbox-close");
  btnClose.addEventListener('click', function () {
   modalDisplay.exitModalDisplay();
  });

  const btnLeft = document.querySelector(".btnLeft");
  btnLeft.addEventListener('click', function () {
   modalDisplay.slideLeft();
  });

  const btnRight = document.querySelector(".btnRight");
  btnRight.addEventListener('click', function () {
   modalDisplay.slideRight();
  });

 },
};

handlers.buttonEventListeners();
