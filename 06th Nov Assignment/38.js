
//38. Use filter to get people older than 25 from [{age: 20}, {age: 30}, {age: 40}].


const people = [{ age: 20 }, { age: 30 }, { age: 40 }];

const peopleOlderThan25 = people.filter(person => person.age > 25);

console.log(peopleOlderThan25);
