//An object is a box with a lock. Inside is an array, but you can get at it 
//only when the box is unlocked. Directly accessing the _content property is not allowed.
//Write a function called withBoxUnlocked that takes a function value as argument, unlocks the box, 
//runs the function, and then ensures that the box is locked again 
//before returning, regardless of whether the argument function returned normally or threw an exception.

var box = {
  locked: true,
  unlock: function() { this.locked = false; },
  lock: function() { this.locked = true;  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  }
};

function withBoxUnlocked(body) {
  var locked_box = box.locked;
  if(!locked_box){
      body();
  }
  box.unlock();
  try {
      body();
  }
  finally {
      box.lock();
  }
}

withBoxUnlocked(function() {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised:", e);
}
console.log(box.locked);
// → true