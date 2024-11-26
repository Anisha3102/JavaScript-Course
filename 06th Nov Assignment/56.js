//56. Use map to transform each number in [1, 2, 3] to its English word equivalent.


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
