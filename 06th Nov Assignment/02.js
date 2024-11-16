//2.Use filter to remove even numbers from the array [5, 8, 12, 15, 18].


const arr = [5, 8, 12, 15, 18];
const oddNumbers = arr.filter(num => num % 2 !== 0);

console.log(oddNumbers); 

