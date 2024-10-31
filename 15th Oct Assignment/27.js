//27 Create a function combineArrays that accepts an unknown number of arrays using the rest operator and returns one combined array.

function combineArrays(...arrays) {
    return [].concat(...arrays);
}

const result = combineArrays([1, 2, 3], [4, 5], [6, 7, 8]);
console.log(result); 
