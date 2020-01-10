'use strict'

const customersTestimonialSlide = {
 currentCustomer: 0,

 customersArray: [
  {
   name: 'John',
   image: 'customer-0',
   testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?',
  },
  {
   name: 'Sandy',
   image: 'customer-1',
   testimonial: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock',
  },
  {
   name: 'Amy',
   image: 'customer-2',
   testimonial: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.',
  },
  {
   name: 'Tyrell',
   image: 'customer-3',
   testimonial: 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
  },
  {
   name: 'Wanda',
   image: 'customer-4',
   testimonial: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
 ],

 slideLeft () {
  this.currentCustomer--;
  if (this.currentCustomer < 0) {
   this.currentCustomer = this.customersArray.length - 1;
  };
  this.setTestimonial();
 },

 slideRight () {
  this.currentCustomer++;
  if (this.currentCustomer > this.customersArray.length - 1) {
   this.currentCustomer = 0;
  };
  this.setTestimonial();
 },

 setTestimonial () {
  document.getElementById("customer-img").src = `./img/${this.customersArray[this.currentCustomer].image}.jpg`;
  document.getElementById("customer-name").textContent = this.customersArray[this.currentCustomer].name;
  document.getElementById("customer-text").textContent = this.customersArray[this.currentCustomer].testimonial;
 },

}

const handlers = {
  buttonEventListeners () {
   const leftButton = document.querySelector('.prevBtn');

   leftButton.addEventListener('click', function () {
    customersTestimonialSlide.slideLeft();
   });

   const rightButton = document.querySelector('.nextBtn');

   rightButton.addEventListener('click', function () {
      customersTestimonialSlide.slideRight();
   });
  },
 };

 handlers.buttonEventListeners();
