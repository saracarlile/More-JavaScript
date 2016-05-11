//Write two functions, every and some, that behave like these methods (&& and ||) 
//except that they take the array as their first argument rather than being a method.

//The solution I came up with involved using the built-in some and every array methods.

function nanTest(element, index, array) {
  return isNaN(element);  
}
console.log([NaN, NaN, NaN].every(nanTest));
//true
console.log([NaN, NaN, 4].every(nanTest));
// false
console.log([NaN, 3, 4].some(nanTest));
//true
console.log([2, 3, 4].some(nanTest));
//false

//Eloquent JS solution creates two functions like instructions

function every(array, predicate) {
  for (var i = 0; i < array.length; i++) {
    if (!predicate(array[i]))
      return false;
  }
  return true;
}

function some(array, predicate) {
  for (var i = 0; i < array.length; i++) {
    if (predicate(array[i]))
      return true;
  }
  return false;
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false