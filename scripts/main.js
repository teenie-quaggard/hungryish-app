/* let's go! */

var movieRequest = new XMLHttpRequest();
var movieUrl =
  "https://api.themoviedb.org/3/discover/movie?api_key=cb89d5264333858f9881aa9e8e0b5d15&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&certification_country=US&certification=R&sort_by=vote_average.desc&sort_by=vote_count.desc";
movieRequest.onreadystatechange = function() {
  if (movieRequest.readyState == 4 && movieRequest.status == 200) {
    var movies = JSON.parse(movieRequest.responseText);
    document.getElementById("button").addEventListener("click", () => {
      document.getElementById("movie_name").textContent =
        movies.results[0].title;
    });
  }
};
movieRequest.open("GET", movieUrl, true);
movieRequest.send();

// var movieRequest2 = new XMLHttpRequest();
// var url2 =
//   "https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/";
//
// xhr2.onreadystatechange = function() {
//   if (xhr2.readyState == 4 && xhr2.status == 200) {
//     // document.getElementById("demo").innerHTML = xhr.responseText;
//     var obj = JSON.parse(xhr2.responseText);
//     var title = obj.title;
//     console.log("it works");
//     document.getElementById("button").addEventListener("click", () => {
//       //   alert("great");
//       document.getElementById("recipe_name").textContent = title;
//     });
//   }
// };
// xhr2.open("GET", url2, true);
// xhr2.send();
