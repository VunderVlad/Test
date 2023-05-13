"use strict";
const numberOfFilms = +prompt('How much films you watched', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    ganres: [],
    privat: false
};

const a = prompt('Whats the last movie you watched?', ''),
      b = prompt('How would you rate it?', ''),
      c = prompt('Whats the last movie you watched?', ''),
      d = prompt('How would you rate it?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);