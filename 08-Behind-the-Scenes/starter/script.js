'use strict';
/*
////////////////////// Lesson 93 ////////////////////////////

// scoping practice
// const firstName is a global scoped variable and can be used everywhere
// const str is a block scoped variable and can only be used inside the block, unless you use var for example the var millenial, which is a function scope
// function scoped variables, can only be used inside the functions, unless you make a function inside a function which is called a child and the first function is called a parent and the child function can use variables from the parent function and the other way around

// function can also be block scoped inside a if / else statement for example

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName} You are ${age}, born in ${birthYear}`; // firstname is here jonas because a function scope cant access a block scope
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Steven'; // everything inside the block scope gets priority above the global scope
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      output = 'NEW OUTPUT!';
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3)); ONLY WORKS WITH STRICT MODE OFF
    console.log(output);
  }
  printAge();

  return age;
}


/////////// lesson 95 /////////////////
const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();


// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1; // type in the console window / you can find the x variable because its a var
let y = 2;
const z = 3;

console.log(x === window.x); // testing if x is a property of the window (true)
console.log(y === window.y); // false
console.log(z === window.z); // false


/////////////////// lesson 96 and 97 THIS keyword /////////////////////////////

// this keyword/variable = Special variable that is created for every function context (every function). Takes the value of (points to) the "owner" of the function in which the this keyword is used
// example for methods
// const jonas = {
// name: 'jonas',
// year: 1989,
// calcAge: function() {
// return 2037 - this.year
//}
//}
// jonas.calcAge(); // 48
// this == const jonas (jonas) and year == 1989 // so basically jonas.year would have the same effect

// method 👉 this = <object that is calling the method>
// simple function call 👉 this = undefined
// arrow functions 👉 this = <this of surroundig function (lexical this)>
// event listener 👉 this = <DOM element that the handler is attached to>

console.log(this); // == window because it is now a global object

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); // undefined
};
calcAge(1991);

const calcAgeArr = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); // window (global) because arrow functions doesnt get his own this keyword // so this keyword will because of that point to the global scope
};
calcAgeArr(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this); // in (this) case is this = jonas, so the console.log(this) is the contents that are inside const jonas
    console.log(2037 - this.year); // basically this.year == jonas.year (because jonas is the owner)
  },
};
jonas.calcAge(); // jonas is the this

// method borrowing
const matilda = {
  year: 2017,
};
matilda.calcAge = jonas.calcAge;

matilda.calcAge(); // this keyword always points to the object that is calling the method so here we are calling the method on matilda so the this keyword will point to matilda

const f = jonas.calcAge;
f(); // here is now no owner of the f function anymore, so undefined


const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // solution 1
    //   const self = this;
    //   const isMillenial = function () {
    //     console.log(self);
    //     console.log(self.year >= 1981 && self.year <= 1996);
    //     // console.log(this.year >= 1981 && this.year <= 1996);
    //   };
    //   isMillenial();
    // },

    // solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
};
jonas.calcAge();

//Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

// cant use arguments keyword in an arrow function
var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);
*/
