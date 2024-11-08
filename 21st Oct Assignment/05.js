//05
//Create a function fizzBuzz that takes a number and a callback to print "Fizz" for multiples of 3, "Buzz" for multiples of 5, and //"FizzBuzz" for multiples of both.

function fizzBuzz(num, callback) {
    if (num % 3 === 0 && num % 5 === 0) {
        callback("FizzBuzz");
    } else if (num % 3 === 0) {
        callback("Fizz");
    } else if (num % 5 === 0) {
        callback("Buzz");
    } else {
        callback(num); // If not a multiple of 3 or 5, return the number itself
    }
}

fizzBuzz(15, result => console.log(result)); 
fizzBuzz(9, result => console.log(result)); 
fizzBuzz(10, result => console.log(result)); 
fizzBuzz(7, result => console.log(result)); 
