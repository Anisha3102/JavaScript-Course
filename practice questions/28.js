// The function squaredNumbers should accept an array of numbers as input and returns a new array with each number squared. If the array is empty, it returns 0.

// For example:

// Input: numbers = [2, 3, 6, 8]

// Output: [4, 9, 36, 64]

function squaredNumbers(numbers) {
  return numbers.length ? numbers.map((x) => x ** 2) : 0;
}
