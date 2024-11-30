// 05.

// You have an array of song objects, each containing `title`, `artist`, and `duration` (in seconds).  

// Task:  
// 1. Use `map` to convert the duration of each song into minutes and seconds.  
// 2. Use `reduce` to calculate the total playlist duration in minutes.  
// 3. Use `some` to check if any song exceeds 5 minutes.  

// Example Input:  

// const songs = [
//   { title: "Perfect", artist: "Ed Sheeran", duration: 263 },
//   { title: "All of Me", artist: "John Legend", duration: 269 },
//   { title: "A Thousand Years", artist: "Christina Perri", duration: 295 },
// ];


const songs = [
  { title: "Perfect", artist: "Ed Sheeran", duration: 263 },
  { title: "All of Me", artist: "John Legend", duration: 269 },
  { title: "A Thousand Years", artist: "Christina Perri", duration: 295 },
];


const songsWithDurationInMinutes = songs.map(song => {
  const minutes = Math.floor(song.duration / 60);
  const seconds = song.duration % 60; 
  return { ...song, duration: `${minutes}m ${seconds}s` };
});

const totalDurationInMinutes = songs.reduce((total, song) => total + song.duration, 0) / 60;

const hasSongExceeding5Minutes = songs.some(song => song.duration > 300);

console.log("Songs with Duration in Minutes:", songsWithDurationInMinutes);
console.log("Total Playlist Duration (in minutes):", totalDurationInMinutes);
console.log("Does any song exceed 5 minutes:", hasSongExceeding5Minutes);
