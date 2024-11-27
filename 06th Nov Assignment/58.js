//58. Use sort to arrange an array of objects by the length of their name property.


const people = [
    { name: "John" },
    { name: "Alexander" },
    { name: "Sarah" }
  ];
  
  const sortedByNameLength = people.sort((a, b) => a.name.length - b.name.length);
  
  console.log(sortedByNameLength);
  