'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', adress }) {
    console.log(
      `Order recieved ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${adress}, at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

////////////////// coding challenge 3 /////////////////////
const gameEvents = new Map([
  [17, '⚽Goal'],
  [36, '🔁Substitution'],
  [47, '⚽Goal'],
  [61, '🔁Substitution'],
  [64, '🟨Yellow card'],
  [69, '🟥Red card'],
  [70, '🔁Substitution'],
  [72, '🔁Substitution'],
  [76, '⚽Goal'],
  [80, '⚽Goal'],
  [92, '🟨Yellow card'],
]);

// 1)
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2)
gameEvents.delete(64);
console.log(gameEvents);

// 3)
const time = [...gameEvents.keys()].pop();
console.log(time); // gives the last number of the array
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);
// inplaats van const time kon ik ook 90 gebruiken, maar dit was een extraatje

// 4)
for (const [key, value] of gameEvents) {
  if (key <= 45) {
    console.log(`[FIRST HALF] ${key}: ${value}`);
  } else {
    console.log(`[SECOND HALF] ${key}: ${value}`);
  }
}

// how Jonas did assignement 4
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}

/////////// summary which data structure to use ///////////
// data structures
// is it a simple list? yes = then use array or sets

// if we need key/value pairs then use object or maps

// --------------------------------------------------- //
// arrays vs sets

//arrays :
// use when you need ordered (in order) list of values (might contain duplicates)
// use when you need to manipulate data

//sets:
//use when you need to work with unique values
// use when high-performance is really important, searching or deleting an item is 10x faster then arrays
// use to remove duplicates
// -------------------------------------------------- //

// -------------------------------------------------- //
// object vs maps

// objects:
// more "traditional" key/value store ("abused" objects)
// Easier to write and access values with . and []
// use when you need to include functions(methods)
// use when working with JSON

// maps:
// better performance
// keys can have any data type
// easy to iterate
// easy to compute size
// Use when you simply need to map key values
// use when you need keys that are NOT strings

// -------------------------------------------------- //

/*

///////////// maps iteration /////////////////

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again'],
]);
console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt('Your answer'));

console.log(question.get(question.get('correct') === answer));

// convert map to array
console.log([...question]);


////////////////// maps: fundementals //////////////////
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
// returns an boolean value == true so the console log will be 'We are open :D'
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));



///////////////////////// sets ////////////////////////////

// set haalt dubbele dingen weg
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);

console.log(new Set('Jonas'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza')); // kijkt of er in orderSet 'Pizza' is. zo ja dan geeft het true anders false
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// example
const staff = new Set([
  'Waiter',
  'Chef',
  'Waiter',
  'Manager',
  'Chef',
  'Waiter',
]);

// own solution // = new Set around const staff was part of my solution
const uniqueStaff = [];

for (const staffs of staff) uniqueStaff.push(staffs);
console.log(uniqueStaff);
// ----------------

// jonas solution
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
// ----------------

// to see how many different kinds of employees there are
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

// to look how many different letters there are in the word
console.log(new Set('jonasschmedtmann').size);

/////////////////// Coding challenge #2 //////////////////

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1)
for (const [index, player] of game.scored.entries()) {
  console.log(`${player} scored goal number ${index + 1}`);
}

// 2)
let sum = 0;
let count = 0;

for (const odd in Object.values(game.odds)) {
  sum += odd;
  count++;
}

const average = sum / count;
console.log(average);

// 3)
for (const [key, value] of Object.entries(game.odds)) {
  if (key === 'x') {
    console.log(`chance of draw: ${value}`);
  } else {
    console.log(`Odd of victory ${game[key]}: ${value}`);
  }
}

////// looping objects: objects keys / values / entries //////

// property NAMES (keys)
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
// console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

//////////////// optional chaining ////////////////
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// with optional chaining
console.log(restaurant.openingHours.mon?.open); // returns undefined
// console.log(restaurant.openingHours.mon.open); // error

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  // in python == for day in days: print(day)
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed'; // if openingHours[day] exists (defined) then it looks if its open
  console.log(`on ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// arrays
const user = [{ name: 'jonas', email: 'jonas@email.com' }];

console.log(user[0]?.name ?? 'User array empty');
console.log(user[1]?.name ?? 'User array empty');


//////// looping arrays: the for-of loop //////////////
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  // entries show which location the element is (index)
  console.log(`${i + 1}: ${el}`); // item[1] zorgt ervoor dat de namen worden geprint
}

// console.log([...menu.entries()]);

////////////////////////////////////////////////////////


//////////////// Coding challenge #1 ////////////////

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1
const [players1, players2] = game.players;
console.log(players1, players2);

// 2
const [gk, ...fieldPlayers] = game.players[0];
console.log(gk, fieldPlayers);

// 3
const allplayers = [...game.players[0], ...game.players[1]];
console.log(allplayers);

// 4
const players1final = [...game.players[0], 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1final);

// 5
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6
const printgoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

printgoals('Davies', 'Muller', 'Lewandoski', 'Kimmich');
printgoals('Davies', 'Muller');
printgoals(...game.scored);

// 7
team1 < team2 && console.log(`Team 1 has more change to win`);
team1 > team2 && console.log(`Team 2 has more change to win`);
////////////////////////////////////////////////

///////// logical assignement operators //////////////
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// ----------- Does the same thing ------------ //
// OR assignement operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
// -------------------------------------------- //

///////////////////////////////////////////////////

/////////// The Nullish Coalescing operator(??) ///////////
restaurant.numGuests = 0;
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// Nullish: null and undefined (NOT 0 or '') if restaurant.numGuests = undefined or null the evalution continues to 10
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
//////////////////////////////////////////////////////////

/////////////// Short circuiting (&& and ||) /////////////////

// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// --------- Does the same thing ------------ //
restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);
// ------------------------------------------- //

// --------- Does the same thing ------------ //
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'jonas');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
// ------------------------------------------- //

////////////////////////////////////////////////////////////

/////////////// Rest Pattern and Parameters //////////////////

// Destructuring (1)

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// Rest because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// functions (2)
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
//////////////////////////////////////////////////////////////

/////////// The spread operator ////////////
// ----- Does the same thing ------ //
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);
// -------------------------------- //

// ----- Does the same thing ------ //
console.log(...newArr);
console.log(1, 2, 7, 8, 9);
// -------------------------------- //

// adding something to array
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);
//---------------------------

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters); // == (7) ['J', 'o', 'n', 'a', 's', ' ', 'S.']
console.log(...str); // == j o n a s
// console.log(`${...str} Schmedtmann`); == this doesnt work

const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt("Let's make pasta! Ingredient 2?"),
  prompt("Let's make pasta! Ingredient 3?"),
];
console.log(ingredients);

// ------ does the same ------- //
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);
// ---------------------------- //

// objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
/////////////////////////////////////////////////////////////

/////////// destructuring objects ///////////////
restaurant.orderDelivery({
  time: '22:30',
  adress: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  adress: 'Via del sole, 21',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
///////////////////////////////////////////////////////////////

///////////// DESTRUCTURING ARRAYS ///////////////

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// SWITCHING VARIABLES

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

//////////////////////////////////////

// RECEIVE 2 RETURN VALUES FROM A FUNCTION
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

///////////////////////////////////////////////////
*/
