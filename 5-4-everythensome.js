//Write two functions, every and some, that behave like these methods (&& and ||) 
//except that they take the array as their first argument rather than being a method.

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