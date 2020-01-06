'use strict'

const passTheMessage = {
 submitMessage () {
  let message = document.getElementById("message").value;
  document.getElementsByClassName("message-content text-uppercase")[0].textContent = message;
  document.getElementById("message").value = '';
 },
};

const handlers = {
  formEventListener () {
   const form = document.getElementById("message-form");

   form.addEventListener('submit', function (e) {
    e.preventDefault();
    passTheMessage.submitMessage();
   });
  },
 };

handlers.formEventListener();
