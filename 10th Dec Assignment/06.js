
//6

const songs = [
    {
      id: 1,
      title: "Blinding Lights",
      artist: "The Weeknd",
      genre: "Pop",
      duration: 210,
      ratings: [5, 4, 4, 5, 5],
      year: 2020,
      streams: 1500000000
    },
    {
      id: 2,
      title: "Bohemian Rhapsody",
      artist: "Queen",
      genre: "Rock",
      duration: 355,
      ratings: [5, 5, 5, 4, 5],
      year: 1975,
      streams: 2000000000
    },
    {
      id: 3,
      title: "Shape of You",
      artist: "Ed Sheeran",
      genre: "Pop",
      duration: 240,
      ratings: [4, 5, 4, 4, 4],
      year: 2017,
      streams: 3000000000
    },
    {
      id: 4,
      title: "Smells Like Teen Spirit",
      artist: "Nirvana",
      genre: "Rock",
      duration: 250,
      ratings: [5, 5, 4, 4, 5],
      year: 1991,
      streams: 1800000000
    },
    {
      id: 5,
      title: "Rolling in the Deep",
      artist: "Adele",
      genre: "Soul",
      duration: 228,
      ratings: [5, 4, 5, 4, 5],
      year: 2011,
      streams: 1900000000
    },
    {
      id: 6,
      title: "Lose Yourself",
      artist: "Eminem",
      genre: "Hip-Hop",
      duration: 326,
      ratings: [5, 5, 4, 5, 5],
      year: 2002,
      streams: 2200000000
    },
    {
      id: 7,
      title: "Uptown Funk",
      artist: "Mark Ronson ft. Bruno Mars",
      genre: "Funk",
      duration: 270,
      ratings: [4, 5, 4, 4, 5],
      year: 2015,
      streams: 2500000000
    }
  ];

  const allratings = songs.map(song => song.ratings).flat();

console.log(allratings);


