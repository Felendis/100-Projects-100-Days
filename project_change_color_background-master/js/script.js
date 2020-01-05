'use strict'

let colorSelection = {
 colorArray: ["red", "blue", "green", "yellow", "purple", "violet", "orange"],

 changeColor() {
  let color = this.colorArray[Math.floor(Math.random() * this.colorArray.length)];
  document.body.style.backgroundColor = color;
 },
};

let handlers = {
  buttonEventListener () {
   let button = document.getElementsByClassName('btn btn-outline-secondary')[0];

   button.addEventListener('click', function () {
    colorSelection.changeColor();
     });
   },
};

handlers.buttonEventListener();
