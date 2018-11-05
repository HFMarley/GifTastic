$(document).ready(function () {

    $("button").on("click", function () {
        var animal = $(this).attr("data-animal");
        var topics = ["foxes", "coyotes", "racoons"];

        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=xGP7bHH4jn5HpgV9NDfMgg1dQkkqfQsR&limit=5";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            var results = response.data;
            // handleresponse(response.data)
            console.log(response.data);

            for (var i = 0; i < results.length; i++) {
                
                var image = $("<img>");
                image.attr("src", results[i].images.fixed_height.url);
                $("#gifArea").prepend(image);



            }




        });

        
            
        








    });
});