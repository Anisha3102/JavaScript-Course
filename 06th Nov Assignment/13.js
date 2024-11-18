//13. Use some to check if any element in [12, 24, 35, 47] is divisible by 5.


const numbers = [12, 24, 35, 47];

const isDivisibleByFive = numbers.some(num => num % 5 === 0);

console.log(isDivisibleByFive);


