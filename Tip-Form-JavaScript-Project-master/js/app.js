'use strict'

const tipCalculator = {
 billAmount: 0,
 serviceCharge: 0,
 tipAmount: 0,
 partySize: 0,
 perPersonTotal: 0,
 error: false,

 errorHandling () {
  let billAmount = document.getElementById('input-bill').value
  let partySize = document.getElementById('input-users').value;
  let serviceCharge = document.getElementById('input-service').value;
  let feedbackBox = document.querySelector('.feedback');
  feedbackBox.innerHTML = "";

  if (billAmount === "0" || billAmount === "") {
   feedbackBox.innerHTML += "<p>Bill Amount Cannot Be Blank</p>";
   feedbackBox.classList.add('showItem', 'alert-danger');
   this.error = true;
  };

  if (partySize === "0" || partySize === "") {
    feedbackBox.innerHTML += "<p>Number of Users Must Be Greater Than Zero<p>";
    feedbackBox.classList.add('showItem', 'alert-danger');
    this.error = true;
   };

  if (serviceCharge === "0") {
     feedbackBox.innerHTML += "<p>You Must Select A Service<p>";
     feedbackBox.classList.add('showItem', 'alert-danger');
     this.error = true;
    };
  setTimeout( () => feedbackBox.classList.remove('showItem'), 5000);
  setTimeout( () => this.error = false, 5000);
 },

 retrieveUserInput () {
  this.billAmount = Number(document.getElementById('input-bill').value);
  this.partySize = Number(document.getElementById('input-users').value);
  this.serviceCharge = Number(document.getElementById('input-service').value);
 },

 calculateTipAmount () {
  this.tipAmount = (this.billAmount * this.serviceCharge);
 },

 calculatePerPersonTotal () {
  this.perPersonTotal = (this.billAmount + this.tipAmount) / this.partySize;
 },

};

const display = {
 showResults () {
  const loader = document.querySelector('.loader');
  const results = document.querySelector('.results');
  document.getElementById('tip-amount').textContent = tipCalculator.tipAmount;
  document.getElementById('total-amount').textContent = tipCalculator.billAmount + tipCalculator.tipAmount;
  document.getElementById('person-amount').textContent = tipCalculator.perPersonTotal;

  loader.classList.add('showItem');
  setTimeout( () => loader.classList.remove('showItem'), 3000);
  setTimeout( () => results.classList.add('showItem'), 3000);
  setTimeout( () => results.classList.remove('showItem'), 8000);
  setTimeout( this.resetForm, 8000);
 },

 resetForm () {
  document.getElementById('input-bill').value = "";
  document.getElementById('input-users').value = "";
 },

};

const handlers = {
 buttonEventListeners () {
  const submitBtn = document.getElementById('tip-form');
  submitBtn.addEventListener('submit', function (e) {
   e.preventDefault();
   tipCalculator.errorHandling();
   if (tipCalculator.error === false) {
    tipCalculator.retrieveUserInput();
    tipCalculator.calculateTipAmount();
    tipCalculator.calculatePerPersonTotal();
    display.showResults();
   };
  });
 },

 serviceChargeSelectionSetup () {
  const serviceChargeSelection = this.serviceCharge = document.getElementById('input-service');
  serviceChargeSelection.insertAdjacentHTML('afterbegin', '<option selected value="0.05">Bad - 5%</option>')
  serviceChargeSelection.insertAdjacentHTML('afterbegin', '<option selected value="0.15">Good - 15%</option>')
  serviceChargeSelection.insertAdjacentHTML('afterbegin', '<option selected value="0.20">Excellent - 20%</option>');
 },

};

handlers.buttonEventListeners();
handlers.serviceChargeSelectionSetup();

//Bill Amount Cannot Be Blank
//Number of Users Must Be Greater Than Zero
//You Must Select A Service
