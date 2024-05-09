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
*/

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

const greetArrow = greeting => {
  return name => {
    // with arrow function only pass in the parameters
    console.log(`${greeting} ${name}`);
  };
};

const greetArrHey = greetArrow('Yo');
greetArrHey('Robbin'); // it basically looks like greetArrow('Yo')('Robbin') like the example on the next line
greetArrow('Hello')('Robbin');

//////////////////////////////////////////////////////////////
