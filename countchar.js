function countBs(word){
  var bNum = 0;
  for(var i =0; i < word.length; i++){
    if (word.charAt(i) === "B"){
      bNum += 1;
    }    
  }
  return bNum;
}

function countChar(word, letter){
  var letterNum = 0;
  for(var i =0; i < word.length; i++){
    if (word.charAt(i) === letter){
      letterNum += 1;
    }    
  }
  return letterNum;  
}
console.log(countBs("BieBer"));
//2

console.log(countChar("Believe", "e"));
//3

