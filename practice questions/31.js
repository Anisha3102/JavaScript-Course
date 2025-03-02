// The function calculateTotalPrice accepts an array of items as input, where each item is represented as an object with properties itemName, price, and discountPercentage. The function should determine the total price of the items in the shopping cart after applying any available discounts. If the input array is empty, the function should return 0.

// The formula to calculate the discounted price is price - (price * (discountPercentage / 100)).

// Input:
// items = [
//   { itemName: "Laptop", price: 1300, discountPercentage: 10 },
//   { itemName: "Backpack", price: 150, discountPercentage: 0 },
//   { itemName: "Notebook", price: 20, discountPercentage: 20 },
// ]

// Output: 1336


function calculateTotalPrice(items) {
  
  let totalPrice = 0;
  items.forEach((item) => {
    let discountedPrice =
      item.price - item.price * (item.discountPercentage / 100);
    totalPrice += discountedPrice;
  });
  return totalPrice;
}