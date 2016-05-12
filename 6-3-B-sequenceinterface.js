//Design an interface that abstracts iteration over a collection of values. 
//When you have specified your interface, try to write a function logFive that takes a sequence object and calls console.log on its first five elements
// Implement an object type RangeSeq that iterates over a range of integers (taking from and to arguments to its constructor)
function logFive(sequence) {
  for (var i = 0; i < 5; i++) {
    if (!sequence.next())
      break;
    console.log(sequence.current());
  }
}

function RangeSeq(from, to) {
  this.pos = from - 1;
  this.to = to;
}
RangeSeq.prototype.next = function() {
  if (this.pos >= this.to)
    return false;
  this.pos++;
  return true;
};
RangeSeq.prototype.current = function() {
  return this.pos;
};

logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104