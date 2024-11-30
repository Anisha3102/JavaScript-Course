// 04. 
// A person is searching for the perfect gift for their partner from an array of gift options, where each gift has `name`, `price`, and `popularity` (out of 5).  

// Task:  
// 1. Use `filter` to find gifts under ₹1000 and with a popularity of 4 or higher.  
// 2. Use `find` to get the first gift that meets these criteria.  
// 3. Use `every` to check if all the gifts are below ₹5000.  

// Example Input:  

// const gifts = [
//   { name: "Teddy Bear", price: 800, popularity: 4.5 },
//   { name: "Perfume", price: 1500, popularity: 4.7 },
//   { name: "Photo Frame", price: 500, popularity: 3.8 },
//   { name: "Necklace", price: 4500, popularity: 4.9 },
// ];



const gifts = [
  { name: "Teddy Bear", price: 800, popularity: 4.5 },
  { name: "Perfume", price: 1500, popularity: 4.7 },
  { name: "Photo Frame", price: 500, popularity: 3.8 },
  { name: "Necklace", price: 4500, popularity: 4.9 },
];

const affordablePopularGifts = gifts.filter(gift => gift.price < 1000 && gift.popularity >= 4);

const firstAffordablePopularGift = affordablePopularGifts.find(gift => gift.price < 1000 && gift.popularity >= 4);

const allGiftsUnder5000 = gifts.every(gift => gift.price < 5000);

console.log("Affordable and Popular Gifts:", affordablePopularGifts);
console.log("First Affordable Popular Gift:", firstAffordablePopularGift);
console.log("All Gifts Under ₹5000:", allGiftsUnder5000);


