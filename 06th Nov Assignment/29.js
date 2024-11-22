
//29. Use reduce to find the maximum number in [3, 6, 2, 8, 5].


const numbers = [3, 6, 2, 8, 5];
const maxNumber = numbers.reduce((max, current) => (current > max ? current : max), numbers[0]);
console.log(maxNumber);
