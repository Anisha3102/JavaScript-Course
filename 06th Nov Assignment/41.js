
//41. Use find to get the object where the id is 3 from [{id: 1}, {id: 3}, {id: 5}].


const items = [{ id: 1 }, { id: 3 }, { id: 5 }];

const foundItem = items.find(item => item.id === 3);

console.log(foundItem); 
