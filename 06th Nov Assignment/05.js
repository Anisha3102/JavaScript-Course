//5. Use findIndex to locate the index of the first odd number in the array [2, 4, 6, 9, 12].

const arr = [2, 4, 6, 9, 12];
const firstOddIndex = arr.findIndex(num => num % 2 !== 0);

console.log(firstOddIndex);  