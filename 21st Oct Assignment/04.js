//04
//Write a function divide that accepts two numbers and a callback to return the quotient.


function divide(num1, num2, callback) {
    if (num2 === 0) {
        return callback("Error: Division by zero is not allowed.");
    }
    const quotient = num1 / num2;
    callback(quotient);
}

divide(10, 2, result => console.log("The quotient is:", result));
divide(10, 0, result => console.log(result)); 
