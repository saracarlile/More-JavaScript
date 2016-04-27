function countChar(word, letter){
  var letterNum = 0;
  for(var i =0; i < word.length; i++){
    if (word.charAt(i) === letter){
      letterNum += 1;
    }    
  }
  return letterNum;  
}

function countBs(string){
   return countChar(string, "B");
}
console.log(countBs("BieBer"));
//2

console.log(countChar("Believe", "e"));
//3

