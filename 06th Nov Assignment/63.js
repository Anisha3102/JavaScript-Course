//63. Use map to apply a function that returns the factorial of each number in [1, 2, 3, 4].


const numbers = [1, 2, 3, 4];

const factorial = (n) => {
  return n === 0 ? 1 : n * factorial(n - 1); };

const factorials = numbers.map(factorial);

console.log(factorials); 

