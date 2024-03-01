// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/*
// BUG FIXME TODO

const x = 23;
if (x === 23) console.log(23);

const calcAge = birthYear => 2037 - birthYear;

console.log();


const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - how to compute max and min temperatures?
// - What's a sensor error? And what to do?

// 2) breaking up into sub-problems
// - How to ignore sensor errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should now recieve 2 arrays of temps

// 1) understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! just merge two arrays

// 2) Breaking up into sub-problems
// - how to merge 2 arrays?

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "cels",

    // C) FIX
    value: Number(prompt("Degrees celsius")),
  };

  console.log(measurement);
  console.table(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY
console.log(measureKelvin());
*/
