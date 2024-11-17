//10. Use map to convert an array of prices [10, 20, 30] to include tax (10%).

const prices = [10, 20, 30];
const taxRate = 0.10;

const pricesWithTax = prices.map(price => price * (1 + taxRate));

console.log(pricesWithTax);
