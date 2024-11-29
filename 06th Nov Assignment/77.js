
//77. Use find to locate the object with the maximum age property.


const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "David", age: 28 }
  ];
  
  const maxAge = Math.max(...people.map(person => person.age));
  
  const personWithMaxAge = people.find(person => person.age === maxAge);
  
  console.log(personWithMaxAge);
  