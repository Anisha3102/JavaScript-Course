//50. Use some to determine if the array [NaN, 5, 10] contains NaN.

const array = [NaN, 5, 10];

const containsNaN = array.some(item => Number.isNaN(item));

console.log(containsNaN); 

