//31. Use reduce to flatten an array [[1, 2], [3, 4], [5, 6]] into a single array.


const array = [[1, 2], [3, 4], [5, 6]];

const flattenedArray = array.reduce((acc, current) => acc.concat(current), []);

console.log(flattenedArray); 

