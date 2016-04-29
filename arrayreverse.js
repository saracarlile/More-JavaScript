var letters = ["A", "B", "C"];
function reverseArray(someArray){
  var newArray = [];
  for(i=someArray.length-1; i>-1; i--){
    newArray.push(someArray[i]);
  }
  return newArray;
}


function reverseArrayInPlace(someArray){
   console.log(reverseArray(someArray)); 
}

console.log(reverseArray(letters));
//["C", "B", "A"]
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
//[5, 4, 3, 2, 1]