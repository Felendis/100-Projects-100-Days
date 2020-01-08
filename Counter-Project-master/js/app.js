'use strict'

const countTracker = {
 counterValue: 0,
 counterColor: "Black",

 countUp () {
  this.counterValue++
  this.setCounter(this.counterValue);
 },

 countDown () {
  this.counterValue--
  this.setCounter(this.counterValue);

 },

 setCounter(counter) {
  if (counter > 0) {
   this.counterColor = "Green";
  } else if (
   counter < 0) {
   this.counterColor  = "Red";
  } else {
   this.counterColor = "Black";
  }

  document.getElementById("counter").textContent = this.counterValue
  document.getElementById("counter").style.color = this.counterColor;
 },

};

const handlers = {
  buttonEventListeners () {
   const lowerCountButton = document.getElementsByClassName("btn counterBtn prevBtn text-uppercase m-2")[0];

   lowerCountButton.addEventListener('click', function () {
    countTracker.countDown();
   });

   const addCountButton = document.getElementsByClassName("btn counterBtn nextBtn text-uppercase m-2")[0];

   addCountButton.addEventListener('click', function () {
      countTracker.countUp();
   });
  },
 };

 handlers.buttonEventListeners();
