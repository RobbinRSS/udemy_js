'use strict';

/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('Checked in');
  } else {
    alert('Wrong passport');
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(jonas);
checkIn(flight, jonas);


//////////  functions accepting callback functions //////////

const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// higher-order function
const transformer = function (str, fn) {
  console.log(`original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);

// my try at higher-order functions
const substractNumbers = function (n1, n2) {
  return n1 - n2;
};

const multiplyNumbers = function (n1, n2) {
  return n1 * n2;
};

const calcNumbers = function (n1, n2, fn) {
  console.log(`Number 1 = ${n1} , number 2 = ${n2}`);
  console.log(`We are going to ${fn.name} the numbers`);
  console.log(`The answer is: ${fn(n1, n2)}`);
};

calcNumbers(12, 2, substractNumbers);
calcNumbers(12, 2, multiplyNumbers);
////////////////////////////////////////////////////////////

/////////////// functions returning functions ///////////////
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey'); // setup for calling the return function
greeterHey('Jonas'); // calling the return function
greeterHey('Steven'); // calling the return function

greet('Hello')('Jonas'); // 2nd () is calling the return function

// challenge

// my solution ------------------------------------------
const greetArrow = greeting => {
  return name => {
    // with arrow function only pass in the parameters
    console.log(`${greeting} ${name}`);
  };
};

const greetArrHey = greetArrow('Yo');
greetArrHey('Robbin'); // it basically looks like greetArrow('Yo')('Robbin') like the example on the next line
greetArrow('Hello')('Robbin');
// ------------------------------------------------------

// jonas solution -----------------------------------------
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Jonas');

// --------------------------------------------------------

*/

//////////////////////////////////////////////////////////////

///////////////// the call and apply methods ////////////////

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function(){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
// book(23, 'Sarah Williams'); book is a regular function call that doesnt work with this (the this keyword)

// with call it will call the book function with the (this) keyword set to eurowings
// call method
book.call(eurowings, 23, 'Sarah Willaims');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// own try
// const kiva = {
//   flightName: 'Kiva',
//   number: 'ZL',
//   reservations: [],

//   apply: function (flightNm, name) {
//     console.log(
//       `${name} is going on a flight with ${this.flightName} on flight ${flightNm}${this.number}`
//     );
//     this.reservations.push({ flights: `${this.number}${flightNm}`, name });
//   },
// };

// kiva.apply(785, 'Robbin Schrijver');

// const reservation = kiva.apply;

// const kmm = {
//   flightName: 'KMM',
//   number: 'XS',
//   reservations: [],
// };

// reservation.call(kmm, 853, 'Robbin Schrijver');

// const flightDt = [532, 'Robbin Schrijver'];
// reservation.call(kmm, ...flightDt);

//////////////// The bind method (gebruikt dezelfde objecten in de vorige opdracht) //////////////////////

// bind method
const bookEw = book.bind(eurowings); // makes eurowings the this word // example = instead of this.name(which is lufthansa.name) it makes it eurowings.name
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEw(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23); // 23 causes to already set the parameter to 23 the user only needs to fill in the name
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); // addEventLister is the higher-order function so the this keyword goes to the eventlistener, but we dont want that, we want it to the buyPlane function, so thats why we use bind

// partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23); // null because there isnt a this keyword so we dont set it
// addVAT = value => value + value * 0.23

console.log(addVAT(100));

// challenge
const addTax2 = rate => value => value + value * rate;

const addVAT2 = addTax2(0.23);
console.log(addVAT2(100));
addTax2(0.23)(100);

const addTax3 = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

addTax3(0.23)(100);
const addVAT3 = addTax3(0.23);
console.log(addVAT3(100));
