//74. Use map to transform an array of arrays [[1, 2], [3, 4]] to a single-level array.


const arrayOfArrays = [[1, 2], [3, 4]];

const singleLevelArray = arrayOfArrays.map(innerArray => innerArray).concat();

console.log(singleLevelArray);
