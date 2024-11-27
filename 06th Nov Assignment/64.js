//64. Use find to get the first object where the name starts with "J" from [{name: "John"}, {name: "Alex"}].


const people = [{ name: "John" }, { name: "Alex" }];

const personWithJ = people.find(person => person.name.startsWith("J"));

console.log(personWithJ);
