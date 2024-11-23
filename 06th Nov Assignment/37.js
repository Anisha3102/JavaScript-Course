//37. Use sort to sort an array of objects by age [{age: 30}, {age: 25}, {age: 35}].


const people = [{ age: 30 }, { age: 25 }, { age: 35 }];

const sortedPeople = people.sort((a, b) => a.age - b.age);

console.log(sortedPeople);
