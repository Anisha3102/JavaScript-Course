// Update the function getPositiveNumbers to accept an array of numbers as an argument and display to the console, a new array containing only the positive numbers, including zero.

function getPositiveNumbers(numbers) {
  const positiveNum = numbers.filter((num) => num >= 0);
  console.log(positiveNum);
}