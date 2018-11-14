/* let's go! */

// var xhr = new XMLHttpRequest();
// var url = 'https://api.themoviedb.org/3/discover/movie?api_key=cb89d5264333858f9881aa9e8e0b5d15&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&certification_country=US&certification=R&sort_by=vote_average.desc';
// console.log(url);
// xhr.onreadystatechange = function() {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//       var aboutme = JSON.parse(xhr.responseText);
//       document.getElementById('p').textContent = aboutme.page;
//     }
// };
// xhr.open("GET", url, true);
// // xhr.open("GET", url2, true);
// xhr.send();
//
// var xhr2 = new XMLHttpRequest();
// var url2 = "http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3";
//
// xhr2.onreadystatechange = function() {
// if (xhr2.readyState == 4 && xhr2.status == 200) {
// // document.getElementById("demo").innerHTML = xhr.responseText;
// var obj = JSON.parse(xhr2.responseText);
// var title = console.log(obj.title);
// console.log("it works");
// }
// };
// xhr2.open("GET", url, true);
// xhr2.send();
const ingredients = document.getElementById('inputIngredients');
const ingredient = ingredients.value;
console.log(ingredient);

const recipeIngredients = document.getElementById('recipeIngredients');

const generateDataButton = document.getElementById('generateDataButton');
generateDataButton.addEventListener('click', () => {
  function reqListener () {
    const response = JSON.parse(this.responseText);
    const randomRecipe = getRandomInt(response.results.length);
    document.getElementById('recipe').textContent = response.results[randomRecipe].title;
    recipeIngredients.textContent = response.results[randomRecipe].ingredients;
  }

  const request = new XMLHttpRequest();
  request.addEventListener("load", reqListener);
  request.open("GET", `http://www.recipepuppy.com/api/?i=${ingredient.trim()}&q=dinner&p=3`);
  request.send();

});

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// function reqListener () {
//   // console.log(JSON.parse(this.responseText).results[0]);
//   document.getElementById('recipe').textContent = JSON.parse(this.responseText).results[0].title;
// }
//
// const request = new XMLHttpRequest();
// request.addEventListener("load", reqListener);
// // **************console.dir(request)*****************************;
// request.open("GET", "http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3");
// request.send();