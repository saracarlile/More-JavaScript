var size = 8;
var board = "";
for(var counter=0; counter < size; counter++){
  for(var counterTwo=0; counterTwo < size;  counterTwo++){
     if((counter + counterTwo) % 2 === 0){
       board += " ";
     } 
    else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);

/*
console output

" # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
*/