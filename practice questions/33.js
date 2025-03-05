// The function isEqualTo100 should return true if one of the numbers is equal to 100 or if their sum is equal to 100. Otherwise, it returns false.

// Input: num1 = 10, num2 = 50

// Output: false

const isEqualTo100 = (num1, num2) => {
  // write your code here
  if (num1 + num2 === 100 || num1 === 100 || num2 === 100) return true;
  return false;
};