//34. Use findIndex to locate the index of the first number divisible by 7 in [14, 28, 35, 21].


const numbers = [14, 28, 35, 21];

const index = numbers.findIndex(num => num % 7 === 0);

console.log(index); 
