
// var xhr = new XMLHttpRequest();
// var url =
//   "https://api.themoviedb.org/3/discover/movie?api_key=cb89d5264333858f9881aa9e8e0b5d15&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&certification_country=US&certification=R&sort_by=vote_average.desc";
// console.log(url);
// xhr.onreadystatechange = function() {
//   if (xhr.readyState == 4 && xhr.status == 200) {
//     var aboutme = JSON.parse(xhr.responseText);
//     document.getElementById("p").textContent = aboutme.page;
//   }
// };
// xhr.open("GET", url, true);
// // xhr.open("GET", url2, true);
// xhr.send();

var randomRecipe = Math.floor(Math.random()*10);
var randomPageRecipe = Math.floor(Math.random()*100);

var xhr2 = new XMLHttpRequest();
// Use cors-anywhere to avoid CORS
var url2 = 'https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?&p='+randomPageRecipe;

xhr2.onreadystatechange = function() {
  if (xhr2.readyState == 4 && xhr2.status == 200) {
    var receipeApi = JSON.parse(xhr2.responseText);
    // Give a random number to get a rondom receipe title
    var title = receipeApi.results[randomRecipe].title;
    var ingredients = receipeApi.results[randomRecipe].ingredients;
    var pic = receipeApi.results[randomRecipe].thumbnail;
  
console.log(receipeApi);
    document.getElementById("button").addEventListener("click", () => {
        // the title displays on website
      document.getElementById("recipe_name").textContent = title;
      document.getElementById("recipe_ingredients").textContent = ingredients;
      if(pic !== ''){
        var createImg = document.createElement('img');
        document.getElementById('recipe_pic').appendChild(createImg);
        createImg.setAttribute('src', pic)
        // createImg.className = 'img'
       
        
      }
      

});
  }
};
xhr2.open("GET", url2, true);
xhr2.send();
