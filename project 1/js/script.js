// carousel initializing
$(document).ready(function () {
   
    $('.carousel.carousel-slider').carousel(
        {
            fullWidth: true
    });


//Weather Search button listener

$("#searchButton").on("submit", function (event) {
    //console.log(event)
    

});


$("input").keypress(function(event) {
   
    if (event.which == 13) {
        event.preventDefault();
         searchcity()
        // event.preventDefault();
        // function (active) {searchcity (active) }
        // $("form").submit();
    }
});

function searchcity () {
    // this abstracts the function so it can be called from both enter key and search button
        ///console.log(active)
        // active.preventDefault();
        let city = $("#attraction").val();
        //console.log(city)
        let queryURL1 = "https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&city=*" + city;
    
    
      // this code sends our ajax requests and sets our promise
    $.ajax({
        url: queryURL1,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        // this line is creating a DIV variable
        let carousel = $("<div>")
        .addClass("carousel");
        
       
        for (i = 0; i < 5; i++) {
            let a= $("<a>");
            a.addClass("carousel-item").attr("href", response._embedded.events[i].url);
            let img = $("<img>").attr("src", response._embedded.events[i].images[1].url)



            console.log(response._embedded.events[i].images[1].url);



            
            let p = $("<p>").text(response._embedded.events[i].name);
            let p2 = $("<p>").text(response._embedded.events[i].dates.start.dateTime);
            a.append(p);
            a.append(p2);
            a.append(img);
            carousel.append(a);
            //$(".carouselTxt").append(p);

            /**
             * <div>
             * <a><img/></a>
             * </div>
             */
            
        }
        $("#carouselTkt").append(carousel);
        $('.carousel').carousel();
        
   
      //  <a class="carousel-item" href="#one!"><img src="https://lorempixel.com/250/250/nature/1"></a>
    }

    )


    // calling weather
    let APIKey = "27c1cb8e958edefa8e76e521738fbd32";
    let queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey + "&units=imperial";

    //console.log(response)
    // this code sends our ajax requests and sets our promise
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        //let weatherDiv = $(".weather");

    $(".head").text(response.city.name);
    $(".head2").text("Temperature: " + response.list[0].main.temp);

    
}
    )
}

$("#searchButton").on("click", function (event) { event.preventDefault; searchcity () });

// src="https://ticketmaster-api-staging.github.io/products-and-docs/widgets/event-discovery/1.0.0/lib/main-widget.js";



})