//03
//Implement a function multiply that accepts two numbers and a callback to print the product.


function multiply(num1, num2, callback) {
    const product = num1 * num2;
    callback(product);
}


multiply(4, 5, result => console.log("The product is:", result));