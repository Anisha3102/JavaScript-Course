// The function add should return the sum of the given two numbers. If one or both of the inputs are not valid numbers, return the string Invalid Input.

const add = ({ x, y }) =>
  isNaN(x) || isNaN(y) ? "Invalid Input" : Number(x) + Number(y);