// Write a function nestedArrayCheck that takes an input and returns a string indicating whether the input is an array or a nested array, and if nested, how many levels of nesting it contains.

// If the input is a non-array value, return "Input is not an array".
// If the input is a single-dimensional array, return "Input is an array".
// If the input is a nested array, return "Input is a nested array with X levels", where X is the number of levels of nesting.
// For example:

// Input:
// arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]

// Output: "Input is a nested array with 3 levels"

const arr1 = [1, 2, 3];
const arr2 = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const arr3 = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];
const notArr = 5;

const nestedArrayCheck = (input) => {
  if (!Array.isArray(input)) {
    return "Input is not an array";
  }

  let level = 1;
  let current = input;

  while (Array.isArray(current[0])) {
    level++;
    current = current[0];
  }

  if (level === 1) {
    return "Input is an array";
  } else {
    return `Input is a nested array with ${level} levels`;
  }
};

console.log(nestedArrayCheck(arr1));
console.log(nestedArrayCheck(arr2));
console.log(nestedArrayCheck(arr3));
console.log(nestedArrayCheck(notArr));