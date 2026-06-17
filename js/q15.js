// Q15. Extract "Developer"
let sentence = "Hey. I am a Frontend Developer";

let word = sentence.split(" ");
let extractedword= word[word.length -1] // or [5]
console.log(extractedword);
// Output: Developer