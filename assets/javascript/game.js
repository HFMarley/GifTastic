$(document).ready(function () {

    $("#text-bar").on("click", function () {
        var animal = $(this).attr("data-animal");
        // var topics = ["foxes", "coyotes", "racoons"];

        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=xGP7bHH4jn5HpgV9NDfMgg1dQkkqfQsR&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            var results = response.data;
            // handleresponse(response.data)
            console.log(response.data);

            for (var i = 0; i < response.data.length; i++) {
                
                var image = $("<img>");
                image.attr("src", response.data[i].images.fixed_height.url);
                $("#giph-Area").prepend(image);



            };




        });

        
            
        








    });
});