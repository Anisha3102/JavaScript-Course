//49. Use filter to keep only positive numbers from [-10, 20, -30, 40, 50].


const numbers = [-10, 20, -30, 40, 50];

const positiveNumbers = numbers.filter(num => num > 0);

console.log(positiveNumbers);