


$(document).ready(function () {
  //empty array so the user can push text into it in order to generate a button to interact with.
  var topics = [];
  //target search button and when clicked, execute a function that collects text value and then pushes it into array. Then render buttons on screen. 
  $("#search-btn").on("click", function () {
    var userText = $("#text-bar").val();
    topics.push(userText);
    renderButtons();
    $("#text-bar").val("");
  });
  $("#giph-Area").on("click", ".gif", function () {
    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    var state = $(this).attr("data-state");
    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
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
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=xGP7bHH4jn5HpgV9NDfMgg1dQkkqfQsR&limit=9";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      for (var i = 0; i < response.data.length; i++) {
        var rating = "<div class='ratings'> Rating: " + (response.data[i].rating) + " </div>";
        var thisImage = response.data[i].images;
        var imageHtml = ` <img src="${thisImage.fixed_height_still.url}" data-still="${thisImage.fixed_height_still.url}" data-animate="${thisImage.fixed_height.url}"  data-state="still" class="gif myImage">`;
        $("#giph-Area").prepend(imageHtml).prepend(rating);   
      };
    });
  };
});

