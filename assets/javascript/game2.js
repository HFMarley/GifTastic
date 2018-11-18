

    
$(document).ready(function() {

  //empty array so the user can push text into it in order to generate a button to interact with.
  var topics = [];

  //target search button and when clicked, execute a function that collects text value and then pushes it into array. Then render buttons on screen. 
  $("#search-btn").on("click", function () {
    var userText = $("#text-bar").val();
    topics.push(userText);
    renderButtons();
  });

  //create function to render buttons that are invoked by the above on click function. create a dynamic button that displays in button area. Give each button. each button has unique id / text. 
  function renderButtons() {
    $("#button-area").empty();
    for (var i = 0; i < topics.length; i++) {
      var newButton = $("<button>");
      newButton.text(topics[i]);
      newButton.attr("id", topics[i]);
      newButton.attr("class", "giph");
      $("#button-area").append(newButton);
    }
  }
  //when new button clicked it has the search term value and then renders giphs by invoking the renderGiphs function
  $('#button-area').on("click", ".giph", function () {
    var searchTerm = $(this).attr("id");
    renderGiphs(searchTerm); 
  });
  //this function requests from the api database the giphs and creates the renderGiphs function. It then prepends the images. 
  function renderGiphs(searchTerm) {
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=xGP7bHH4jn5HpgV9NDfMgg1dQkkqfQsR&limit=10";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      for (var i = 0; i < response.data.length; i++) {
        var image = $("<img>");
        image.attr("src", response.data[i].images.fixed_height_still.url);
        $("#giph-Area").prepend(image);
        //testing image animation
        $(image).on("click", function() {
          var rendition = $(this).attr("rendition-state");
          
        })

      };
    });
  };
});

