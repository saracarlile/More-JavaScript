//Write a constructor Vector..it takes x and y parameters (numbers).
//Give the Vector prototype two methods, plus and minus, that take another vector as a parameter and 
//return a new vector that has the sum or difference of the two vectors’ (the one in this and the parameter) x and y values.
//Add a getter property length to the prototype that computes the length of the vector—that is, 
//the distance of the point (x, y) from the origin (0, 0).  \
//length of vector is  equal to  
//length (x, y)  =    √( x2 + y2 )  http://chortle.ccsu.edu/vectorlessons/vch04/vch04_4.html

function Vector(x, y){
    this.x = x;
    this.y = y;
}

Vector.prototype.plus = function(vector){
    return new Vector(this.x + vector.x, this.y + vector.y);
};

Vector.prototype.minus = function(vector){
   return new Vector(this.x - vector.x, this.y - vector.y);
};

Object.defineProperty(Vector.prototype, "length", {
  get: function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
});

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5