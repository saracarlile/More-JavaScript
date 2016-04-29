var fishSammy = {
  scales: "pink",
  vegetarian: true
};

var fishSally = {
  scales: "pink",
  vegetarian: true
};

function deepEqual(oneThing, twoThing) {
  if (oneThing === twoThing) return true;
  
  if (oneThing === null || twoThing === null || typeof oneThing != 'object' || typeof twoThing != 'object') return false;
  
  var props1 = 0, props2 = 0;
  
  
}
console.log(deepEqual(fishSammy, fishSally));
console.log(deepEqual("string", fishSally));