'use strict'

let hexColorSelection = {
 hexColorsArray: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"],

 changeBackgroundColor () {
  let generatedHexValues = [];

  for (let i = 0; i < 6; i++) {
   generatedHexValues.push(this.hexColorsArray[Math.floor(Math.random() * this.hexColorsArray.length)]);
  };

  let newHexValue = generatedHexValues.join('');
  document.body.style.backgroundColor = ('#' + newHexValue);
  document.getElementById('hex-value').innerText = ('#' + newHexValue);
 },
};

let handlers = {
 buttonEventListener () {
  let button = document.getElementById("btn");

  button.addEventListener('click', function () {
   hexColorSelection.changeBackgroundColor();
  });
 },
};

handlers.buttonEventListener();
