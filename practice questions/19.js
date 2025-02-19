// The function splitByOddAndEven should separate a single array into sub-arrays: one containing odd numbers, the other containing even numbers.

// If array contains only even or odd, return the array. Eg. [1,3,5] -> [1,3,5]
// For example:

// Input: [1, 2, 3, 4, 5, 6]

// Output: [[1, 3, 5], [2, 4, 6]]

const splitByOddAndEven = (arr) => {

  const odd = arr.filter((x) => x % 2 === 1);
  const even = arr.filter((x) => x % 2 === 0);
  if (odd.length > 0 && even.length > 0) return [even, odd];
  if (even.length === 0) return odd;
  return even;
};