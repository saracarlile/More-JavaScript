//1. car and cat
var carCat = /ca( r|t)/;
console.log(carCat.test("cat"));
//true
//2. pop and prop
var popProp = /pr?op/;
console.log(popProp.test("prop"));
//true
//3. ferret, ferry, and ferrari
var fer = /fer+(et|y|ari)/;
console.log(fer.test("ferrari"));
//true
//4. Any word ending in ious
var word = "delicious";
console.log(word.search(/ious\b/));
//5
function search(word){
  if (word.search(/ious\b/) > -1)
    return true;
}
console.log(search(word));
//true
//5. A whitespace character followed by a dot, comma, colon, or semicolon
