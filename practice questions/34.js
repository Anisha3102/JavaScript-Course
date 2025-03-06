// Complete the JavaScript function to count the number of arrays inside a given array.

// For example:

// Input: arr = [1,[2],[4]]
// Output: 2

const countArrays = (arr) => {

  return arr.filter((item) => Array.isArray(item)).length;
};