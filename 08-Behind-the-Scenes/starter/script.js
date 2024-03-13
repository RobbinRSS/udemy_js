'use strict';

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

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();
