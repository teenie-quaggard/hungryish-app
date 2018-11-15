document.getElementById("recipe_button").addEventListener("click", () => {
  var randomRecipe = Math.floor(Math.random() * 10);
  var randomPageRecipe = Math.floor(Math.random() * 100);

  var xhr2 = new XMLHttpRequest();
  // Use cors-anywhere to avoid CORS
  var url2 =
    "https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?&p=" +
    randomPageRecipe;

  xhr2.onreadystatechange = function() {
    if (xhr2.readyState == 4 && xhr2.status == 200) {
      var receipeApi = JSON.parse(xhr2.responseText);
      // Give a random number to get a rondom receipe title
      var title = receipeApi.results[randomRecipe].title;
      var ingredients = receipeApi.results[randomRecipe].ingredients;
      var pic = receipeApi.results[randomRecipe].thumbnail;

      console.log(receipeApi);
      // the title displays on website
      document.getElementById("recipe_name").textContent = title;
      document.getElementById("recipe_ingredients").textContent = ingredients;
      if (pic !== "") {
        var createImg = document.createElement("img");
        document.getElementById("recipe_pic").appendChild(createImg);
        createImg.setAttribute("src", pic);
        // createImg.className = 'img'
      }
    }
  };

  xhr2.open("GET", url2, true);
  xhr2.send();
});
