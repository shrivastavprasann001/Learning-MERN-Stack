// Reduce function
//simple example
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum); // Output: 15


// Complex example
const transactions = [
    { type: 'deposit', amount: 10000 },
    { type: 'withdrawal', amount: 2000 },
    { type: 'deposit', amount: 5000 },
    { type: 'withdrawal', amount: 3000 },
    { type: 'deposit', amount: 7000 }
  ];
  
  const finalBalance = transactions.reduce((balance, transaction) => {
    if (transaction.type === 'deposit') {
      return balance + transaction.amount;
    } else if (transaction.type === 'withdrawal') {
      return balance - transaction.amount;
    }
  }, 0);
  
  console.log(finalBalance); // Output: 1700
  