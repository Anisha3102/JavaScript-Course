//07
//Implement a function findFactorial that takes a number and a callback to return its factorial.


function findFactorial(num, callback) {
    if (num < 0) {
        return callback("Error: Factorial is not defined for negative numbers.");
    }
    const factorial = (n) => {
        return n <= 1 ? 1 : n * factorial(n - 1);
    };
    const result = factorial(num);
    callback(result);
}


findFactorial(5, result => console.log("The factorial is:", result)); 
findFactorial(0, result => console.log("The factorial is:", result)); 
findFactorial(-3, result => console.log(result));
