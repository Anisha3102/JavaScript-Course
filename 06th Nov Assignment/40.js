//40. Use reduce to calculate the total price from an array of objects [{price: 10}, {price: 20}].


const items = [{ price: 10 }, { price: 20 }];

const totalPrice = items.reduce((acc, item) => acc + item.price, 0);

console.log(totalPrice); 

