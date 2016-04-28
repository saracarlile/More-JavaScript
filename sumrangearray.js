//range function takes 2 arguments start and end
//return array of numbers start-end (inclusive)
//sum function sums values in array

function range(start, end){
   var rangeArray = [];
   var counter = start;
   for(var i = start; i <= end; i++ ){
     if (start <= end){
     rangeArray.push(start);
     start += 2;     
     }
     else{
          return rangeArray;
     }
   }
}

console.log(range(4, 10));
//[4, 6, 8, 10]

function sum(arrayToSum){
  var counter = 0;
  for(i=0; i < arrayToSum.length; i++){
    counter += arrayToSum[i];    
  }
  return counter;
}

console.log(sum(range(1, 10)));
//25