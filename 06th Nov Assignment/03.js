//3. Use reduce to sum up all elements in the array [10, 20, 30, 40].


const arr = [10, 20, 30, 40];
const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); 
