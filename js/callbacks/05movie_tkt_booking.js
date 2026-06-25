/*
Problem: Movie ticket booking callback


Output:
Booking Ticket...
Ticket Booked Successfully
*/

function bookTicket(callback) {
  console.log("Booking Ticket...");
  callback();
}

bookTicket(() => {
  console.log("Ticket Booked Successfully");
});