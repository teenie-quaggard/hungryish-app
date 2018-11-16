# 🎬 hungryish? :hamburger:
#### Unable to make a decision about what to do tonight?
#### Hungryish is an app to choose your evening plans, providing you with both recipe and movie suggestions!

## Installation 🍿
*hungryish* can be viewed at [this link](https://fac-15.github.io/hungryish-app/), **however** please note that it might not function properly, due to the absence of access to API keys.

For testing purposes it might be best to clone the repo using the link provided above in Github, and then request our api key config.js file separely. We are boi87, teenie_quaggard, Whooolia, and Oliversw on Github/Gitter!

Please not that sometimes the recipe (particularly the first time that it's run) takes much longer to call and load than the movie, probably due to a workaround for the API call. Be patient with us!

## Known bugs and issues
- No CSS 
- No tests 
- Recipe API takes much longer to return 
- Sometimes clicking again does not refresh content 

## Minimum viable product 🎥
1. An app that randomly generates a movie and a recipe
2. Uses tape testing
3. Mobile first design
4. Uses a button click from client to make requests
5. Uses grids
6. TDD (lol)

## To Do List 🌭
1. Find out how to access big list of movies (done!)
2. Create a button controlled by a click event (done!)
3. Display movie data on landing page when button is clicked (done!)

## APIs to Use 🍔
1. [The Movie DB](https://www.themoviedb.org/documentation/api)
2. [Recipe Puppy](http://www.recipepuppy.com/about/api/)
3. Last minute ... [Giphy!](https://developers.giphy.com/)

## Things we learned 🎞
1. CORS (Allow-control-allow-origin)
  --> https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/related?hl=en-US
  OR --> Using ```https://cors-anywhere.herokuapp.com``` in the API URL call
2. Highlight cmd+D multi-select highlighted text
3. shift arrows tab or shift+tab to indent multiple lines
4. console.dir to show methods on an object/class
5. using debugger in JS to show what's happening step by step
6. Testing APIs is hopelessly confusing so ... we didn't. 😅

## Stretch goals 🥐
1. Additional API
2. Netflix API?
3. Takes user input to help narrow decisions
4. Animated spin on loading
5. Button click on landing page soft-scrolls to either movie or recipe
6. User able to mark a movie as seen
7. Give multiple options of movie/recipe pairs
8. Trailer of movie
9. NOCK - npm to test API
10. Input ingredients that you have at home for recipe search
     - Actually implemented by Kristina in a separate branch! 
