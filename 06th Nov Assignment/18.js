
//18. Use find to get the first string longer than 4 characters from ["dog", "horse", "cat", "sheep"].


const animals = ["dog", "horse", "cat", "sheep"];
const firstLongerThan4 = animals.find(animal => animal.length > 4);
console.log(firstLongerThan4);

