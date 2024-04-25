// Filter Fucntion
//Let's filter out all the even numbers from an array of integers.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNum = numbers.filter(num => num % 2 === 0);
console.log(evenNum); // Output: [2, 4, 6, 8, 10]

// Little complex example
const products = [
    { name: 'Laptop', price: 800 },
    { name: 'Smartphone', price: 600 },
    { name: 'Tablet', price: 300 },
    { name: 'Headphones', price: 50 },
    { name: 'Camera', price: 1200 }
  ];
  
  const expensiveProducts = products.filter(product => product.price > 50);
  console.log(expensiveProducts);
  