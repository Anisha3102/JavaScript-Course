// 01.
// A couple is deciding on the perfect restaurant for their date night. You have an array of restaurant objects, where each object contains `name`, `distance` (in km), and `rating` (out of 5).  

// Task:  
// 1. Use `filter` to find all restaurants within 5 km and with a rating of 4 or higher.  
// 2. Use `map` to create an array of the names of these restaurants.  
// 3. Use `find` to get the first restaurant that meets the criteria.  

// Example Input:  

// const restaurants = [
//   { name: "Romantic Rooftop", distance: 3, rating: 4.5 },
//   { name: "Cozy Corner", distance: 6, rating: 4.2 },
//   { name: "Candlelight Cafe", distance: 2, rating: 3.9 },
//   { name: "Starry Sky Diner", distance: 4, rating: 4.8 },
// ];


// const restaurants = [
//   { name: "Romantic Rooftop", distance: 3, rating: 4.5 },
//   { name: "Cozy Corner", distance: 6, rating: 4.2 },
//   { name: "Candlelight Cafe", distance: 2, rating: 3.9 },
//   { name: "Starry Sky Diner", distance: 4, rating: 4.8 },
// ];


const filteredRestaurants = restaurants.filter(restaurant => restaurant.distance <= 5 && restaurant.rating >= 4);

const restaurantNames = filteredRestaurants.map(restaurant => restaurant.name);

const firstRestaurant = filteredRestaurants.find(restaurant => restaurant.distance <= 5 && restaurant.rating >= 4);

console.log("Filtered Restaurants:", filteredRestaurants);
console.log("Restaurant Names:", restaurantNames);
console.log("First Restaurant:", firstRestaurant);



