'use strict'

const imageSlide = {
 imageArray: [
  "contBcg-0",
  "contBcg-1",
  "contBcg-2",
  "contBcg-3",
  "contBcg-4"],

 currentImage: 0,

 slideLeft () {
  this.currentImage--;
  if (this.currentImage < 0) {
   this.currentImage = this.imageArray.length - 1;
  };
  this.setImage();
 },

 slideRight () {
  this.currentImage++;
  if (this.currentImage > this.imageArray.length - 1) {
   this.currentImage = 0;
  };
  this.setImage();
 },

 setImage () {
  document.querySelector('.img-container').style.backgroundImage = `url('./img/${this.imageArray[this.currentImage]}.jpeg')`;
 },

};

const handlers = {
  buttonEventListeners () {
   const leftButton = document.querySelector('.btn-left');

   leftButton.addEventListener('click', function () {
    imageSlide.slideLeft();
   });

   const rightButton = document.querySelector('.btn-right');

   rightButton.addEventListener('click', function () {
      imageSlide.slideRight();
   });
  },
 };

 handlers.buttonEventListeners();
