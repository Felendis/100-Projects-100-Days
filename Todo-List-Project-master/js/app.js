'use strict'

//add item
const todoList = {
 todosArray: [],

 addTodo () {
  let todo = document.getElementById('itemInput').value;
  if (todo === "") {
   const feedback = document.querySelector('.feedback');
   feedback.classList.add('showItem', 'alert-danger');
   setTimeout ( () => feedback.classList.remove('showItem'), 5000);
  } else {
   this.todosArray.push(todo);
   document.getElementById('itemInput').value = "";
  };
  display.viewTodos();
 },

 clearTodos () {
  this.todosArray = [];
 },
};

const display = {
 todoDisplay: document.getElementsByClassName('item-list')[0],

 viewTodos () {
  let allTodos = todoList.todosArray;

  this.todoDisplay.innerHTML = "";
  for (let todo of allTodos) {
   this.todoDisplay.insertAdjacentHTML('beforeend', `<div class="item my-3"><h5 class="item-name text-capitalize">${todo}</h5><div class="item-icons"><a href="#" class="complete-item mx-2 item-icon"><i class="far fa-check-circle"></i></a><a href="#" class="edit-item mx-2 item-icon"><i class="far fa-edit"></i></a><a href="#" class="delete-item item-icon"><i class="far fa-times-circle"></i></a></div></div>`);
  };
 },
};

const handlers = {
 formEventListeners () {
  const todoListForm = document.getElementById('itemForm');
  todoListForm.addEventListener('submit', function (e) {
   e.preventDefault();
   todoList.addTodo();
  });

  display.todoDisplay.addEventListener('click', function (event) {
   if (event.target.className === "far fa-times-circle") {
    let todoToDelete = todoList.todosArray.indexOf(event.target.parentElement.parentElement.parentElement.textContent, 0);
    todoList.todosArray.splice(todoToDelete, 1);
    event.target.parentElement.parentElement.parentElement.remove();
   };
  });

  display.todoDisplay.addEventListener('click', function (event) {
   if (event.target.className === "far fa-check-circle") {
    event.target.parentElement.parentElement.previousElementSibling.classList.toggle('completed');
   };
  });

  display.todoDisplay.addEventListener('click', function (event) {
   if (event.target.className === "far fa-edit") {
    let todoToEdit = event.target.parentElement.parentElement.previousElementSibling.textContent;
    let todoToDelete = todoList.todosArray.indexOf(event.target.parentElement.parentElement.parentElement.textContent, 0);
    document.getElementById('itemInput').value = todoToEdit
    todoList.todosArray.splice(todoToDelete, 1);
   };
  });
 },

 buttonEventListeners () {
  const clearBtn = document.getElementById('clear-list');
  clearBtn.addEventListener('click', function () {
   todoList.clearTodos();
   display.viewTodos();
  });
 },
};


handlers.formEventListeners();
handlers.buttonEventListeners();
