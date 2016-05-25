//1. car and cat
var carCat = /ca(r|t)/;
console.log(carCat.test("tomcat"));
//true
//2. pop and prop
var popProp = /pr?op/;
console.log(popProp.test("proposal"));
//true
//3. ferret, ferry, and ferrari
var fer = /ferr(et|y|ari)/;
console.log(fer.test("ferrari"));
//true
//4. Any word ending in ious
var ious = /ious\b/;
console.log(ious.test("delicious"));
//true
//5. A whitespace character followed by a dot, comma, colon, or semicolon
var dotCommaSemicolon = /\s[.;:]/;
console.log(dotCommaSemicolon.test("something ."));
//true
//6. A word longer than six letters
var moreThanSix = /\w{7,}/;
console.log(moreThanSix.test("something"));
//true
//7. A word without the letter e
var noE = /\b[a-df-z]+\b/i;
console.log(noE.test("Blond"));
//true