
//62. Use filter to get all prime numbers from an array [1, 2, 3, 4, 5, 6, 7, 8, 9].


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const isPrime = (num) => {
  if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;   }
  return true;
};

const primeNumbers = numbers.filter(isPrime);

console.log(primeNumbers); 
