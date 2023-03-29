const { type } = require("os");

// create five variables and assign them values
let Josh ="awesome";
let year = 2023;
let present = true;
let sun = null;
let time = undefined;
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable

// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(typeof Josh);
console.log(typeof year);
console.log(typeof present);
console.log(typeof time);
console.log(typeof sun);
// create a variable that references a template literal
// inside the template literal, use two of the above variables
let temp = `The year is ${year} and I am ${Josh}`;
// reassign the value of the variable that references "null"
sun = false;
// print the value and its type
console.log(typeof sun);
// print a variable that causes a ReferenceError
 //console.log(savvy);
// alter the previous line to no longer cause a ReferenceError
