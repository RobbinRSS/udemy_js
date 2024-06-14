'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
////////////////////////////////////////////////////////////

console.log(document.documentElement); // entire html
console.log(document.head); // html head
console.log(document.body); // html body

// node list
const header = document.querySelector('.header');
const allSection = document.querySelectorAll('.section');
console.log(allSection);

//html collection
document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons); // all the buttons

// html collection
console.log(document.getElementsByClassName('btn'));

// creating and inserting elements
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookie for improved functionality and analytics';
message.innerHTML =
  'We use cookie for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message); // add element as first child in header
header.append(message); // add element as last child in header

// header.append(message.cloneNode(true)); // cloning elemenet

// header.before(message); // before the header
// header.after(message); // after the header

// delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove(); // new way

    // message.parentElement.removeChild(message) // old way
  });
