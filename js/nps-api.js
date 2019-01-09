var apiKey = "kjVPCM3LEwQYZxkv4byFPo1TRCvJk61IAO9wwtyI";
var searchTerm = "";
var stateTerm = "CA";

var queryURL = "https://api.nps.gov/api/v1/parks?q=" + searchTerm + "&stateCode=" + stateTerm + "&api_key=" + apiKey;
console.log(queryURL);


var parkName = "";
var parkDescription = "";
var parkLatLon = "";
var parkURL = "";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

        for (var i = 0; i < response.data.length; i++) {
          parkName = response.data[i].fullName; 
          $("#search-results").append("<li>" + parkName + "</li>");
        }
    });