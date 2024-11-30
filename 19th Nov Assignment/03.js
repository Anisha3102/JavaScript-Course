// 03. 
// A couple is picking movies for a marathon. Each movie object contains `title`, `genre`, and `duration` (in minutes).  

// Task:  
// 1. Use `filter` to get all movies of the genre `"romance"`.  
// 2. Use `reduce` to calculate the total duration of all selected movies.  
// 3. Use `map` to create a list of their titles.  

// Example Input:  

// const movies = [
//   { title: "Love Actually", genre: "romance", duration: 135 },
//   { title: "Inception", genre: "scifi", duration: 148 },
//   { title: "The Notebook", genre: "romance", duration: 123 },
//   { title: "Titanic", genre: "romance", duration: 195 },
// ];



const movies = [
  { title: "Love Actually", genre: "romance", duration: 135 },
  { title: "Inception", genre: "scifi", duration: 148 },
  { title: "The Notebook", genre: "romance", duration: 123 },
  { title: "Titanic", genre: "romance", duration: 195 },
];

const romanceMovies = movies.filter(movie => movie.genre === "romance");

const totalDuration = romanceMovies.reduce((total, movie) => total + movie.duration, 0);

const movieTitles = romanceMovies.map(movie => movie.title);

console.log("Romance Movies:", romanceMovies);
console.log("Total Duration of Romance Movies:", totalDuration, "minutes");
console.log("Titles of Romance Movies:", movieTitles);


