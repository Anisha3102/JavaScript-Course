
//14. Use find to get the first negative number in [7, -3, 9, -8, 2].


const numbers = [7, -3, 9, -8, 2];
const firstNegative = numbers.find(num => num < 0);
console.log(firstNegative);
