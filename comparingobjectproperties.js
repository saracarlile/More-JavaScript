function compare(one, two) {
  for (var prop in one) {
    if (prop in two) {
      return true;
    }
    else{
      return false;
    }
  }
}
function compareProps(one, two) {
  var counter = 0;
  for (var prop in one) {
    if (prop[one] === prop[two]) {
      counter += 1;
    }
  }
  return counter;
}

var fishSammy = {
  skin: "pink",
  vegetarian: true
};

var fishSally = {
  skin: "pink",
  vegetarian: true
};

console.log(compare(fishSammy, fishSally));
//do two objects have the same properties?
console.log(compareProps(fishSammy, fishSally));
//how many properties in the objects have the same value?

//true
//2