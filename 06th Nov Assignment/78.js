
//78. Use some to detect if an array contains a nested array.


const arr = [1, 2, [3, 4], 5];

const containsNestedArray = arr.some(item => Array.isArray(item));

console.log(containsNestedArray); 

