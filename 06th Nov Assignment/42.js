//42. Use filter to get all the even numbers squared from [1, 2, 3, 4, 5].


const numbers = [1, 2, 3, 4, 5];

const evenSquared = numbers.filter(num => num % 2 === 0).map(num => num * num);

console.log(evenSquared); 
