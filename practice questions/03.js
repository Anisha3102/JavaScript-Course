// Given is an object menuItems where the keys of the object are the items available in the menu of a restaurant, and values are the cost per item.

// The items in menuItems will be the same everytime while the cost per item can be different.

// For example:

// Items	Cost
// Veggie Pizza	$7
// Chicken Pizza	$10
// Chocolate Cookie	$3
// Vanilla Shake	$5
// Also provided will be another object orderedItems where the keys are the items ordered and the values are the quantity in which the items are ordered.

// orderedItems will only have the items from menuItems.

// Write a function priceCalculator that accepts two parameters menu and order and logs to the console the total cost.

// For example: Total cost of your order is $[total_cost].

const priceCalculator = (menu, order) => {
  let totalCost = 0;
  for (let item in order) {
    if (menu[item]) {
      totalCost += menu[item] * order[item];
    }
  }
  console.log(`Total cost of your order is ${totalCost}`);
};