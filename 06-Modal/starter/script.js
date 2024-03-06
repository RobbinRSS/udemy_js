'use strict';

// QuerySelector only selects the first element and not all of them

// QuerySelectorAll can select all elements

//classList looks at every class inside the html (in this case hidden class) and you can use a function with it for example remove, so you can remove a class / but you can also use add or other things

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//If document and then an operator is added its a global function so it will happen anywhere in the code // keydown is for all keys // .key shows what key was pressed
document.addEventListener('keydown', function (event) {
  // console.log(event.key);

  // if the pressed key is escape the code wil execute
  // contains looks if the modal is hidden if not the code will execute
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
