

//Weather Search button listener

$("#searchButton").on("submit", function (event) {
    //console.log(event)

});

$("#searchButton").on("click", function (active) {
    ///console.log(active)
    active.preventDefault();
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
        let activityDiv = $("<div>");

        for (i = 0; i < 15; i++) {

            let p = $("<p>").text("Attractions:" + response._embedded.events[i].name);
            let p2 = $("<p>").text(response._embedded.events[i].url);
            activityDiv.append(p);
            activityDiv.append(p2);
        }

        $("body").append(activityDiv);
    }

    )


    // callinfg weather
    let APIKey = "27c1cb8e958edefa8e76e521738fbd32";
    let queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey + "&units=imperial";

    //console.log(response)
    // this code sends our ajax requests and sets our promise
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        // this line is creating a DIV variable
        let weatherDiv = $("<div>");
        let p = $("<p>").text("Temperature: " + response.list[0].main.temp);

        weatherDiv.append(p);
        $("body").append(weatherDiv);
    }

    )
});




