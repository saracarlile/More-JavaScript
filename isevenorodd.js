function isEven(number){
  var even = 0;
  var odd = 1;
  if (number === 0) {
    return true;
  }
  else if (number === 1) {
    return false;
  }
  else if (number < 0){
    return false;
  }
  else {
   return isEven(number = number - 2);
  } 
}