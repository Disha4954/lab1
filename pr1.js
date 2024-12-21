const movies = [
    { title: "Pushpa", genre: "Action", rating: 9.5, releaseYear: 2024 },
    { title: "The nun", genre: "Horror", rating: 9.0, releaseYear: 2008 },
    { title: "RRR", genre: "Action", rating: 9.5, releaseYear: 2023 }
];
const addMovie = (collection, movie) => {
    collection.push(movie);
};

addMovie(movies, { title: "dark", genre: "Sci-Fi", rating: 7.5, releaseYear: 2020 });
console.log(movies);
const listMoviesByGenre = (collection, genre) => {
    return collection.filter(movie => movie.genre === genre);
};
console.log(listMoviesByGenre(movies, "Sci-Fi"));
const findHighestRatedMovie = collection => {
    return collection.reduce((highest, movie) => movie.rating > highest.rating ? movie : highest);
};

console.log(findHighestRatedMovie(movies));
const getMovieTitles = collection => {
    return collection.map(movie => movie.title);
};

console.log(getMovieTitles(movies));
const moviesAfterYear = (collection, year) => {
    return collection.filter(movie => movie.releaseYear > year);
};

console.log(moviesAfterYear(movies, 2020));
movies.forEach(movie => {
    console.log(`${movie.title} (${movie.releaseYear}) is a ${movie.genre} movie with a rating of ${movie.rating}.`);
});