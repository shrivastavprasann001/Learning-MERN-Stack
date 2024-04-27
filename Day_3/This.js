// This keyword

const num = [1, 2, 3, 4, 5];
const multipliedByTwo = num.map(function(e) {
    return this * e;
}, 2);
// here the 2nd argument in map function is the value of this which is 2
console.log(multipliedByTwo); // Output: [2, 4, 6, 8, 10]

// complex
//this type of question is asked in TCS Nqt 2024
const orders = [
    { dish: 'Pizza', quantity: 2, price: 12 },
    { dish: 'Burger', quantity: 3, price: 8 },
    { dish: 'Pasta', quantity: 1, price: 10 },
    { dish: 'Salad', quantity: 2, price: 6 }
  ];
  
  const totalRevenue = orders.reduce(function(total, order) {
    return total + (order.quantity * order.price);
  }, 0);
  
  console.log(`Total revenue: $${totalRevenue}`);
  