//Map function

//Simple example
/*Let's consider a real-life example where we have a list of prices 
in a grocery store and we want to apply a 10% discount to each item.*/
const ItemPrice = [10, 20, 30, 40, 50]; // Prices of grocery items
const discountedPrices = ItemPrice.map(price => price * 0.9); // Applying a 10% discount to each item
console.log(discountedPrices); // Output: [9, 18, 27, 36, 45]  -> Discounted Price of each item

//Little bit complex example
// find the average score of each student
const students = [
    { name: 'Prasann', scores: [80, 75, 90] },
    { name: 'abhay', scores: [85, 70, 95] },
    { name: 'Aman', scores: [90, 85, 80] }
  ];
  
  const stdAverages = students.map(student => {
    let sum = 0;
    student.scores.forEach(score => sum += score);
    const average = sum / student.scores.length;
    return { name: student.name, averageScore: average };
  });
  
  console.log(stdAverages);
  




  