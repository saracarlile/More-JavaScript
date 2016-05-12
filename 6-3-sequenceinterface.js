//Design an interface that abstracts iteration over a collection of values. 
//write a function logFive that takes a sequence object and calls console.log on its first five elements
//Then implement an object type ArraySeq that wraps an array and allows iteration over the array using the interface you designed.

function logFive(sequence) {
  for (var i = 0; i < 5; i++) {
    if (!sequence.next())
      break;
    console.log(sequence.current());
  }
}

function ArraySeq(array) {
  this.pos = -1;
  this.array = array;
}

ArraySeq.prototype.next = function() {
  if (this.pos >= this.array.length - 1)
    return false;
  this.pos++;
  return true;
};
ArraySeq.prototype.current = function() {
  return this.array[this.pos];
};

logFive(new ArraySeq([1, 2, 5, 6]));
// 1
// 2
// 5
// 6
