'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.getElementById('section--1');

///////////////////////////////////////
// Modal window

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

//////////////////////////////////////////////////////////
// Button scrolling
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect(); // getBoundingClientRect() shows where section 1 is located
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect()); //target == function

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset); // what the user sees, the coordinates are from the top of the page, till the location what the user sees

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // }); // smooth scrolling

  // modern way without the weird calculation
  section1.scrollIntoView({
    behavior: 'smooth',
  });
});

///////////////////////////////////////////////////////////
// Page navigation

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();

//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// 1. add event listener to common parent elemetn
// 2. determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    e.preventDefault();

    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

/*

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

///////////////// style attributes classes ///////////////////

// styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.height);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered'); // changing the root

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className); // instead of class do className

logo.alt = 'Beautiful minimalist logo';

// non-standard, thats why it doesnt work
console.log(logo.designer);

// this works with non-standard attributes
console.log(logo.getAttribute('designer'));

// giving an attribute to the logo
logo.setAttribute('company', 'Bankist');

console.log(logo.src); // absolute version(entire link)
console.log(logo.getAttribute('src')); // relative version(the link you see in the css)

const link = document.querySelector('.nav__link--btn');

console.log(link.href); // absolute
console.log(link.getAttribute('href')); // relative, (as you wrote it in the html)

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c');

// dont use this, this will overwrite all the existing classes, and only one class is allowed
// logo.className = 'jonas'

const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading');
};

// addEventListener is most used
h1.addEventListener(
  'mouseenter',
  alertH1 // when you hover over the h1 element you get this message
);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// h1.onmouseenter = function (e) {
//   alert('addEventListener: Great! You are reading the heading'); // when you hover over the h1 element you get this message
// };

///////////////////// event propegation /////////////////////

// rgb(255,255,255)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  // stop propagation
  // e.stopPropagation(); // prevents the events on parent elements (stops the bubbling)
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('Container', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log('NAV', e.target, e.currentTarget);
  }
  // true // capturing event
);
*/
