//70. Use reduce to implement a custom find function.


const array = [5, 10, 15, 20];

const customFind = (arr, callback) => {
  return arr.reduce((found, current) => {
        if (found !== undefined) return found;
    
     if (callback(current)) {
      return current; 
    }

       return undefined;
  }, undefined);
};

const result = customFind(array, num => num > 10);

console.log(result); 
