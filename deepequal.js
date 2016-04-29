

function deepEqual(oneThing, twoThing) {
  if (oneThing === twoThing) return true;

  if (oneThing === null || twoThing === null || typeof oneThing != 'object' || typeof twoThing != 'object') return false;

  var props1 = 0, props2 = 0;
  for (var prop in oneThing)
    props1 += 1;

  for (var prop in twoThing) {
    props2 += 1;
    if (!(prop in oneThing) || !deepEqual(oneThing[prop], twoThing[prop]))
      return false;
  }
  return props1 === props2;
}


var fishSammy = {
  scales: "pink",
  vegetarian: true
};

var fishSally = {
  scales: "pink",
  vegetarian: true
};
console.log(deepEqual(fishSammy, fishSally));
console.log(deepEqual("string", fishSally));

//true
//false