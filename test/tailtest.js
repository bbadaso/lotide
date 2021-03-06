// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };
// const tail = function(array) {
//   if (array === '') {
//     return undefined;
//   }
//   const x = array.slice(1);
//   console.log(x);
//   return x;
// };

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

//const words = ["Yo Yo", "Lighthouse", "Labs"];
//console.log(tail(gg));
const tail = require('../tail')
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!


const w = tail(words);
assertEqual(w.length, 3);