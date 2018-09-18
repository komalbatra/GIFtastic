// JS file for HOMEWORK #6

$(document).ready(function() {
    var topics = ["Superman", "Aquaman", "Spiderman", "Batman", "Wonder Woman"];

    // FUNCTIONS
    //function to display topic buttons
      var topic = $(this).attr("data-name");
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=jVz8LzEOLKTNPSj1tux4I40dP1PX6Pbg&limit=20";
     
            // Creates AJAX call for the specific movie button being clicked
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {

        // YOUR CODE GOES HERE!!!
console.log(response);
      });

    // Function for displaying movie data
    function renderButtons() {

      // Deletes the movies prior to adding new movies
      // (this is necessary otherwise you will have repeat buttons)
      $(".buttons-view").empty();

      // Loops through the array of movies
      for (var i = 0; i < topics.length; i++) {

        // Then dynamicaly generates buttons for each movie in the array
        // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
        var createButtons = $("<button>");
        // Adds a class of movie to our button
        createButtons.addClass("topic btn btn-info");
        // Added a data-attribute
        createButtons.attr("data-name", topics[i]);
        // Provided the initial button text
        createButtons.text(topics[i]);
        // Added the button to the buttons-view div
        $(".buttons-view").append(createButtons);
      }
    }

    // This function handles events where the add movie button is clicked
    $("#add-hero").on("click", function(event) {
      event.preventDefault();
      // This line of code will grab the input from the textbox
      var hero = $("#hero-input").val().trim();

      // The movie from the textbox is then added to our array
      topics.push(hero);

      // Calling renderButtons which handles the processing of our movie array
      renderButtons();

    });

    // Adding click event listeners to all elements with a class of "movie"
    $(document).on("click", ".topic", displayMovieInfo);

    // Calling the renderButtons function to display the intial buttons
    renderButtons();


}); //PAGE CLOSING BRACKET
    // when the page is loaded first.....
    

    
        // Declare Variables