// The function extractPositiveNumbers should accept an array of numbers as input and returns a new array containing only the positive numbers.

// For example:

// Input: [-3, -1, 0, 4, 6]

// Output: [4, 6]

function extractPositiveNumbers(numbers) {
  return numbers.filter((num) => num > 0);
}