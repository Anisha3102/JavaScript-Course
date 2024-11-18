//11. Use reduce to multiply all numbers in the array [2, 3, 4].


const numbers = [2, 3, 4];

const product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

console.log(product);

