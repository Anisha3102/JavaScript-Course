//57. Use reduce to implement a custom filter function.


const numbers = [1, 2, 3];

const numberWords = numbers.map(num => {
  const numberToWord = {
    1: "one",
    2: "two",
    3: "three"
  };
  return numberToWord[num];
});

console.log(numberWords);

