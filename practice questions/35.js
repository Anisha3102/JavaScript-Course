// Complete the JavaScript function to return an array containing the cumulative sum of the values in a given input array.

// For example:

// Input: arr = [ 10, 20, 40 ]

// Output: [ 10, 30, 70 ]

const cumulativeSum = (arr) => {
  let sum = 0;
  return arr.map((val) => {
    sum += val;
    return sum;
  });
};