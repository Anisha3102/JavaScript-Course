// The checkNotDivisible function takes two parameters, number and divisor. It checks whether the number is not divisible by the specified divisor based on the following conditions.

// If both number and divisor are valid numbers, and the divisor is not zero,
// If the number is not divisible by the divisor, it returns Not divisible.
// If the number is divisible by the divisor, it returns Divisible.
// If the input is invalid or the divisor is zero, it returns Invalid input.
// For example:

// Input: number = 30, divisor = 5

// Output: "Divisible"


function checkNotDivisible(number, divisor) {
    
  if (!isNaN(number) && !isNaN(divisor) && divisor !== 0) {
    if (number % divisor !== 0) {
      return `Not divisible`;
    } else {
      return `Divisible`;
    }
  }
  return `Invalid input`;
}