// JS file for HOMEWORK #6

// $(document).ready(function() {
    // Declaring Initial Array for Topics
    var topics = ["Superman", "Aquaman", "Spiderman", "Batman", "Wonder Woman"];

    // FUNCTIONS
    //function to display topic buttons
    function displayInfo(){
      $("#hero-view").empty();
      var topic = $(this).attr("data-name");
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=jVz8LzEOLKTNPSj1tux4I40dP1PX6Pbg&limit=10";

      // AJAX call to GET information 
      $.ajax({
        url: queryURL,
        method: "GET"
        
      })
      .then(function(response) {
        console.log(queryURL);
        console.log (response);

        // Creating a div to hold hero information
        var results = response.data;

        for (var j = 0; j < results.length; j++){
        var newTopicDiv = $("<div class='hero-name'>");
        
        // Storing the rating data
        var rating = results[j];
        console.log (rating);
                
        // Creating an element to have the rating displayed
        var pRating = $("<p>").text("Rating: " + results[j].rating);

        // Displaying the rating
        newTopicDiv.append(pRating);

        // Retrieving the URL for the GIF
        var gifURL = results[j].images.fixed_height_still.url;

        // // Creating an element to hold the GIF
        var gif = $("<img>").attr("src", gifURL);

        // // Appending the image
        newTopicDiv.append(gif);

        // Putting the entire movie above the previous movies <-----
        $("#hero-view").prepend(newTopicDiv);
        }  
      });
        // .catch(function(error){
        //   throw error
        //   console.log(error);
        // });
        
    }
           
    // Function for displaying buttons
    function renderButtons() {
      // Deletes the movies prior to adding new movies
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


    //CLICK EVENTS
    // This function handles events where the add movie button is clicked  <----------
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
    $(document).on("click", ".topic", displayInfo);

    // Calling the renderButtons function to display the intial buttons
    renderButtons();


// }); //PAGE CLOSING BRACKET