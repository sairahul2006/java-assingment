/*
Problem: Order confirmation callback


Output:
Order Placed
Order Confirmed
*/

function placeOrder(callback) {
  console.log("Order Placed");
  callback();
}

placeOrder(() => {
  console.log("Order Confirmed");
});