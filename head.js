
const assertEqual = require('./assertEqual')
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !=== ${expected}`);
//   }
// };

// TEST CODE
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);
//assertEqual('barento','barento');

const head = function(array) {
  if (array.length === 0) {
    return undefined;
  }
  const x = array[0];
  //console.log(x);
  return x;
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]),1);

module.exports = head;