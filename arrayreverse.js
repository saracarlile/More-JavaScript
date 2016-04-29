var letters = ["A", "B", "C"];
function reverseArray(someArray){
  var newArray = [];
  for(i=someArray.length-1; i>-1; i--){
    newArray.push(someArray[i]);
  }
  return newArray;
}



console.log(reverseArray(letters));
//["C", "B", "A"]

