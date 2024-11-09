//06
//Create a function isPrime that takes a number and a callback to check if it is a prime number.

function isPrime(num, callback) {
    if (num <= 1) {
        return callback(false); 
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return callback(false);
        }
    }
    callback(true); 
}


isPrime(7, result => console.log(result ? "7 is a prime number." : "7 is not a prime number.")); 
isPrime(10, result => console.log(result ? "10 is a prime number." : "10 is not a prime number.")); 

