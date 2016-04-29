var fishSammy = {
  scales: "blue",
  vegetarian: true
};

var fishSally = {
  scales: "pink",
  vegetarian: true
};

function deepEqual(oneObject, twoObject) {
  if (oneObject === null || twoObject === null) {
    return false;
  }
  else if (oneObject === twoObject) {
    return true;
  }
  else if (typeof oneObject === 'object' && typeof twoObject === 'object') {
   return true;
    


  }
  else {
    return false;
  }
}
console.log(deepEqual(fishSammy, fishSally));