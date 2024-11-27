//60. Use every to validate that all elements in [{id: 1}, {id: 2}] have an id property.


const objects = [{ id: 1 }, { id: 2 }];

const allHaveId = objects.every(obj => obj.hasOwnProperty('id'));

console.log(allHaveId); 
