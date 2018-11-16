"use strict";

//generates a random number for use within functions
const randomNumGen = max => Math.floor(Math.random() * Math.floor(max));

/*****************************Recipe******************************************/
//Hide initial broken link
document.getElementById("recipe_image").style.display = "none";

document.getElementById("button").addEventListener("click", () => {
  const randomRecipe = randomNumGen(10);
  const randomPageRecipe = randomNumGen(100);

  const xhr2 = new XMLHttpRequest();
  // Use cors-anywhere to avoid CORS
  const url2 =
    "https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?&p=" +
    randomPageRecipe;

  xhr2.onreadystatechange = function() {
    if (xhr2.readyState == 4 && xhr2.status == 200) {
      const recipeApi = JSON.parse(xhr2.responseText);
      // Give a random number to get a random receipe title
      const title = recipeApi.results[randomRecipe].title;
      const ingredients = recipeApi.results[randomRecipe].ingredients;
      const link = recipeApi.results[randomRecipe].href;
      const gifSearch = title.substr(0, title.indexOf(" "));

      document.getElementById("recipe_ingredients").textContent = ingredients;
      document.getElementById("recipe_image").style.display = "block";
      document.getElementById("recipe_link").innerText = title;
      document.getElementById("recipe_link").href = link;

      /******************************Giphy Start********************************/
      // Replace food image with .gif
      const randomGIF = randomNumGen(24);
      const giphyApi = new XMLHttpRequest();
      const giphyUrl = `http://api.giphy.com/v1/gifs/search?q=${gifSearch}&api_key=${
        config.giphyAPI
      }`;

      giphyApi.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          const giphy = document.getElementById("recipe_image");
          const gifObj = JSON.parse(giphyApi.responseText);
          giphy.src = gifObj.data[randomGIF].images.fixed_width.url;
        }
      };
      giphyApi.open("GET", giphyUrl, true);
      giphyApi.send();

      /******************************Giphy end********************************/
    }
  };

  xhr2.open("GET", url2, true);
  xhr2.send();
});

/*****************************Recipe end******************************************/

/*****************************Movie shit******************************************/
//Hide intial broken poster link
document.getElementById("movie_poster").style.display = "none";

document.getElementById("button").addEventListener("click", () => {
  //generates a random page under 20 - can increase to access more movies
  const randomPage = randomNumGen(20);

  //api request using a randomPage
  const movieRequest = new XMLHttpRequest();
  const movieUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${
    config.movieAPI
  }&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${randomPage}&certification_country=US&certification=R&sort_by=vote_average.desc&sort_by=vote_count.desc`;

  movieRequest.onreadystatechange = function() {
    const randomMovie = randomNumGen(20);
    if (movieRequest.readyState == 4 && movieRequest.status == 200) {
      const movies = JSON.parse(movieRequest.responseText);

      //Adds title of movie to page
      document.getElementById("movie_name").textContent =
        movies.results[randomMovie].title;

      //Adds average rating to page
      document.getElementById("movie_rating").textContent = `Rating: ${
        movies.results[randomMovie].vote_average
      }`;

      //Adds poster of movie to pages
      const movieImage = movies.results[randomMovie].poster_path;
      document.getElementById(
        "movie_poster"
      ).src = `http://image.tmdb.org/t/p/w200/${movieImage}`;

      //Reveal poster image
      document.getElementById("movie_poster").style.display = "block";

      //Adds description of movie to page
      document.getElementById("movie_description").textContent = `${
        movies.results[randomMovie].overview
      }`;
    }
  };
  movieRequest.open("GET", movieUrl, true);
  movieRequest.send();
});

/*****************************Movie shit end******************************************/
