// CLOSURE
// Simple Example
//how a closure allows an inner function to access variables from its outer function 
// even after the outer function has finished executing.

function outFunc() {
    const outerVariable = 'I am outer';

    function innerFunc() {
        console.log(outerVariable); // Access outerVariable from the outer function
    }

    return innerFunc;
}

const innerFunc = outFunc();
innerFunc(); // Output: "I am outer"


// Complex Example
//how the functions increment, decrement, and getCount maintain access to the count 
// variable even after the createCounter function has finished executing.
function createCounter() {
    let count = 0;

    function increment() {
        count++;
        console.log(`Counter: ${count}`);
    }

    function decrement() {
        count--;
        console.log(`Counter: ${count}`);
    }

    function getCount() {
        return count;
    }

    return {
        increment,
        decrement,
        getCount
    };
}

const counter = createCounter();
counter.increment(); // Output: "Counter: 1"
counter.increment(); // Output: "Counter: 2"
counter.decrement(); // Output: "Counter: 1"
console.log(counter.getCount()); // Output: 1

