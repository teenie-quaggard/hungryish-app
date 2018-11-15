/*****************************Movie shit******************************************/
document.getElementById("button").addEventListener("click", () => {
  const randomMovieGen = max => Math.floor(Math.random() * Math.floor(max));
  let randomNum = randomMovieGen(20);
  console.log(randomNum);
  const movieRequest = new XMLHttpRequest();
  const movieUrl = `https://api.themoviedb.org/3/discover/movie?api_key=cb89d5264333858f9881aa9e8e0b5d15&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${randomNum}&certification_country=US&certification=R&sort_by=vote_average.desc&sort_by=vote_count.desc`;

  movieRequest.onreadystatechange = function() {
    if (movieRequest.readyState == 4 && movieRequest.status == 200) {
      var movies = JSON.parse(movieRequest.responseText);
      console.log(movies);
      document.getElementById("movie_name").textContent =
        movies.results[randomMovieGen(20)].title;
    }
  };
  movieRequest.open("GET", movieUrl, true);
  movieRequest.send();
});

/*****************************Movie shit end******************************************/
