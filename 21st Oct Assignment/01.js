//01
//Write a function add that accepts two numbers and a callback. The callback should print the sum of the two numbers.

function add(num1, num2, callback) {
    const sum = num1 + num2;
    callback(sum);
}

add(5, 3, result => console.log("The sum is:", result));
