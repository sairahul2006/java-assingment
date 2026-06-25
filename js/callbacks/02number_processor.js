/*
Problem: Pass 25 to callback


Output: Number received: 25

*/

function processNumber(callback) {
  callback(25);
}

processNumber(num => {
  console.log(`Number received: ${num}`);
});