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
