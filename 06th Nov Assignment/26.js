//26. Use filter to extract odd numbers from [12, 15, 19, 21, 24].


const numbers = [12, 15, 19, 21, 24];
const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log(oddNumbers);
