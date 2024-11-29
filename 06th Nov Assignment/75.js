
//75. Use filter to get people with unique IDs from an array of objects with repeated IDs.


const people = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 1, name: "Alice" },
    { id: 3, name: "Charlie" },
    { id: 2, name: "Bob" }
  ];
  
  const uniquePeople = people.filter((person, index, self) => 
    index === self.findIndex(p => p.id === person.id)
  );
  
  console.log(uniquePeople);
  