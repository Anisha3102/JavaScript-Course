//39. Use map to create a new array of full names from [{first: "John", last: "Doe"}].


const people = [{ first: "John", last: "Doe" }];

const fullNames = people.map(person => `${person.first} ${person.last}`);

console.log(fullNames);
