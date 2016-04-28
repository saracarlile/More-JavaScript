function range(start, end, step){
   if (step == null){ // don't use === will fail
     step = 1;
   }
   var rangeArray = [];
   if(step > 0) {
     for(var i = start; i<=end; i += step){  
       rangeArray.push(i);
     } 
   }
  else {
    for(var j = start; j>=end; j += step){
      rangeArray.push(j);
    }
  }
  return rangeArray;
}

function sum(arrayToSum){
  var counter = 0;
  for(i=0; i < arrayToSum.length; i++){
    counter += arrayToSum[i];    
  }
  return counter;
}

console.log(sum(range(1, 10)));
//25
console.log(range(5, 2, -1));
//[5, 4, 3, 2]
console.log(range(1, 10));
//[5, 4, 3, 2]