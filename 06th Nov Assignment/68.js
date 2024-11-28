//68. Use findIndex to locate the first object with a value property less than 5 in [{}].


const objects = [{ value: 10 }, { value: 3 }, { value: 7 }, { value: 2 }];

const index = objects.findIndex(obj => obj.value < 5);

console.log(index); 

