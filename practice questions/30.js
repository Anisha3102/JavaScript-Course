// The function findSecondLargest should accept an array of numbers as input and determine the second largest value in the array. If the array has less than two elements, it should return null.

// For example:

// Input: [1]

// Output: null

const findSecondLargest = (arr) => {
  if (arr.length < 2) {
    return null;
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;

  arr.forEach((num) => {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num < largest) {
      secondLargest = num;
    }
  });

  return secondLargest === -Infinity ? null : secondLargest;
};