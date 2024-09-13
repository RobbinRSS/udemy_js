'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// https://countries-api-836d.onrender.com/countries/

const renderCountry = function (data, className = '') {
  const language = Object.values(data.languages)[0];
  const currency = Object.values(data.currencies)[0].name;

  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${language}</p>
        <p class="country__row"><span>💰</span>${currency}</p>
      </div>
    </article>
`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

/*
const getCountryAndNeighbour = function (country) {
  // AJAX call 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`); // 'GET' get data

  request.send(); // sends a request to fetch the data from the api in the background

  // as soon as the data is arrived, this callback function will be called
  request.addEventListener('load', function () {
    // console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // render Country (1)
    renderCountry(data);

    // Get neighbour country (2)
    const [neighbour] = data.borders;

    if (!neighbour) return;

    // AJAX call 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`); // 'GET' get data

    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};
getCountryAndNeighbour('Netherlands');
*/

// promise is a container for a future value
// example
// (1) lottery ticket. promise that i will receive money if i guess the correct outcome
// (2) i buy a lottery ticket (promise) right now
// (3) lottery draw happens asynchronously
// (4) if correct outcome, I receive money, because it was promised

///////////////////////// consuming promises ////////////////////////

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json(); // json() returns a promise, and is asycnhronous, and since its a promise we can use the then method on that
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

// the function above is the more worked out function
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => {
      return response.json(); // json() returns a promise, and is asycnhronous, and since its a promise we can use the then method on that
    })
    .then(data => {
      renderCountry(data[0]);
    });
};
getCountryData('portugal');
