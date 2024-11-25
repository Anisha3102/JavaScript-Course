//44. Use reduce to implement a custom map function.


const array = [1, 2, 3, 4];

const customMap = (arr, callback) => {
  return arr.reduce((acc, currentValue) => {
    acc.push(callback(currentValue));
    return acc;
  }, []);
};

const result = customMap(array, num => num * 2);

console.log(result); 

