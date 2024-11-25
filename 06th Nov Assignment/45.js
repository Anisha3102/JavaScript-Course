//45. Use every to check if all objects in [{age: 25}, {age: 30}] are above 20.


const people = [{ age: 25 }, { age: 30 }];

const allAbove20 = people.every(person => person.age > 20);

console.log(allAbove20); 


