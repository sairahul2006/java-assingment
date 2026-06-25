/*
Problem: Pass color to callback

Output:
My favorite color is Blue
*/

function getColor(callback) {
  callback("Blue");
}

getColor(color => {
  console.log(`My favorite color is ${color}`);
});