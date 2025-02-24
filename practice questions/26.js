// The function calculateSum should calculate the sum of all elements in an array of numbers and return the result. If the array is empty, it returns 0.

// For example:

// Input: []

// Output: 0

function calculateSum(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}