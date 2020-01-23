'use strict'

const calculator = {
 numbersArray: [0],
 currentOperator: null,
 currentTotal: 0,

 registerNumberInput (input) {
  this.numbersArray.push(input);
 },

 registerSymbolInput (input) {
  if (this.currentOperator === null) {
   this.currentOperator = input;
  } else {
   this.evaluate(this.currentOperator);
   this.currentOperator = input;
  };
 },

 evaluate (operator) {
  if (operator === "+") {
   this.currentTotal += parseFloat(this.numbersArray.join(""));
  } else if (
   operator === "-") {
    if (this.currentTotal === 0) {
     this.currentTotal = parseFloat(this.numbersArray.join(""));
    } else {
     this.currentTotal -= parseFloat(this.numbersArray.join(""));
    };
  } else if (
   operator === "/") {
    if (this.currentTotal === 0) {
     this.currentTotal = parseFloat(this.numbersArray.join(""));
    } else if (parseFloat(this.numbersArray.join("")) !== 0) {
     this.currentTotal /= parseFloat(this.numbersArray.join(""));
    };
  } else if (
   operator === "*") {
    if (this.currentTotal === 0) {
     this.currentTotal = parseFloat(this.numbersArray.join(""));
    } else if (parseFloat(this.numbersArray.join("")) !== 0) {
    this.currentTotal *= parseFloat(this.numbersArray.join(""));
   };
  };
  this.numbersArray = [0];
 },

};

const screenDisplay = {
 screen: document.querySelector(".screen"),

 showCurrentTotal() {
  this.screen.value = calculator.currentTotal;
 },

 showCurrentInput () {
  this.screen.value = parseFloat(calculator.numbersArray.join(""));
 },

 showCurrentOperator () {
  this.screen.value = calculator.currentOperator;
 },

};

const handlers = {
 buttonEventListeners () {
  const numberInputBtns = Array.from(document.getElementsByClassName("btn-grey"));
  numberInputBtns.forEach(btn => btn.addEventListener('click', function () {
   calculator.registerNumberInput(btn.dataset.num);
   screenDisplay.showCurrentInput();
  }));

  const symbolInputBtns = Array.from(document.getElementsByClassName("btn-yellow"));
  symbolInputBtns.forEach(btn => btn.addEventListener('click', function () {
   calculator.registerSymbolInput(btn.dataset.num);
   calculator.evaluate(calculator.currentOperator);
   screenDisplay.showCurrentOperator();
  }));

  const equalInputBtn = document.querySelector(".btn-equal");
   equalInputBtn.addEventListener('click', function () {
    calculator.evaluate(calculator.currentOperator);
    calculator.currentOperator = null;
    screenDisplay.showCurrentTotal();
  });

  const clearInputBtn = document.querySelector(".btn-clear");
   clearInputBtn.addEventListener('click', function () {
    calculator.numbersArray = [0];
    calculator.currentOperator = null;
    calculator.currentTotal = 0;
    screenDisplay.showCurrentTotal();
  });

 },
};

 handlers.buttonEventListeners();
