//32. Use filter to remove duplicates from [1, 2, 3, 1, 2, 4, 5].


const array = [1, 2, 3, 1, 2, 4, 5];

const uniqueArray = array.filter((value, index, self) => {
  return self.indexOf(value) === index;
});

console.log(uniqueArray); 

