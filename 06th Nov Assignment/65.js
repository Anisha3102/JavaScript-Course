
//65. Use sort to sort an array of objects by multiple keys [{age: 25, score: 90}].


const people = [
    { age: 25, score: 90 },
    { age: 30, score: 80 },
    { age: 25, score: 85 },
    { age: 20, score: 95 }
  ];
  
  const sortedPeople = people.sort((a, b) => {
      if (a.age !== b.age) {
      return a.age - b.age;
    }
      return b.score - a.score; // Higher score comes first
  });
  
  console.log(sortedPeople);
  
  