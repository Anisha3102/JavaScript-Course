//02
//Create a function subtract that takes two numbers and a callback. The callback should return the difference of the two numbers.

function subtract(num1, num2, callback) {
    const difference = num1 - num2;
    return callback(difference);
}

const result = subtract(10, 4, diff => diff);
console.log("The difference is:", result);
