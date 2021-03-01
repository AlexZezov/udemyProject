let numberOfFilms = +prompt("Сколько фильмов вы посмотрели?");

while (numberOfFilms == "" || numberOfFilms == null) {
  numberOfFilms = prompt("Сколько фильмов вы посмотрели?");
}


const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

if (personalMovieDB.count < 10) {
  alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  alert("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
  alert("Вы киноман");
} else {
  alert("Произошла ошибка");
}


for (let i = 0; i < 2; i++) {
  let a = prompt("Один из последних просмотренных фильмов?");
  while (a == "" || a == null || a.length > 50) {
    a = prompt("Один из последних просмотренных фильмов?");
  }
  let b = prompt("Во сколько вы его оцените?", "");
  while (b == "" || b == null) {
    b = prompt("Во сколько вы его оцените?", "");
  }
  personalMovieDB.movies[a] = b;
}
console.log(personalMovieDB);