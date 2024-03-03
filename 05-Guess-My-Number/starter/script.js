'use strict';
// explenation child elements
// html = first child
//<head> or <body> are the second child
// inside the head or body are also children

// querySelector = selecting a class from the html
// textcontent = shows the text that is connected with .message
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
