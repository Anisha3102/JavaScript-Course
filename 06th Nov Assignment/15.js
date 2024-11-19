//15. Use every to check if all numbers in [9, 18, 27, 36] are divisible by 9.


const numbers = [9, 18, 27, 36];
const allDivisibleBy9 = numbers.every(num => num % 9 === 0);
console.log(allDivisibleBy9);
