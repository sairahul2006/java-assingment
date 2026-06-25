/*
Problem: Create product object
Output: { name: 'Laptop', price: 50000 }
*/

const createProduct = (name, price) => ({
  name,
  price
});

console.log(createProduct("Laptop", 50000));