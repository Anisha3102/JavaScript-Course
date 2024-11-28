
//69. Use filter to create a new array without nested arrays from [[1, 2], 3, [4, 5], 6].


const arr = [[1, 2], 3, [4, 5], 6];

const flatArray = arr.filter(item => !Array.isArray(item));

console.log(flatArray);

