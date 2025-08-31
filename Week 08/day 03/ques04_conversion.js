let movie = {
  title: "Inception",
  year: 2010,
  rating: 8.8
};

let jsonString = JSON.stringify(movie);
console.log("JSON String:", jsonString);

let parsedMovie = JSON.parse(jsonString);
console.log("Movie Title:", parsedMovie.title);
