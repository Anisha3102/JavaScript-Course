//79. Use map to apply a series of functions to each number in [10, 20, 30].


const numbers = [10, 20, 30];

const functions = [
  num => num * 2,      // Multiply by 2
  num => num + 5,      // Add 5
  num => num / 3       // Divide by 3
];

const result = numbers.map(num => 
  functions.reduce((acc, func) => func(acc), num)
);

console.log(result);
