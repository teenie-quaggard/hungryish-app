/*****************************Movie shit******************************************/
document.getElementById("button").addEventListener("click", () => {

  //generates a random number for both page and title within object
  const randomNumGen = max => Math.floor(Math.random() * Math.floor(max));

  //generates a random page under 20 - can increase to access more movies
  let randomPage = randomNumGen(20);

  //api request using a randomPage
  const movieRequest = new XMLHttpRequest();
  const movieUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${
    config.movieAPI
  }&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${randomPage}&certification_country=US&certification=R&sort_by=vote_average.desc&sort_by=vote_count.desc`;


  movieRequest.onreadystatechange = function() {
    if (movieRequest.readyState == 4 && movieRequest.status == 200) {
      var movies = JSON.parse(movieRequest.responseText);

      //Adds title of movie to page
      document.getElementById("movie_name").textContent =
        movies.results randomNumGen(20)].title;

      //Adds poster of movie to page

      //Adds average rating to page

      //Adds description of movie to page
    }
  };
  movieRequest.open("GET", movieUrl, true);
  movieRequest.send();
});

/*****************************Movie shit end******************************************/
