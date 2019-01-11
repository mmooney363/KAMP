var apiKey = "kjVPCM3LEwQYZxkv4byFPo1TRCvJk61IAO9wwtyI";
var searchTerm = "";
var stateTerm = "";
var queryURL = "";




var parkName = "";
var parkDescription = "";
var parkLatLon = "";
var parkCity = "";
var parkURL = "";

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelector('select');
    elems.onchange = selectThem;
    var instances = M.FormSelect.init(elems);
    function selectThem() {
        var selectedOne = instances.getSelectedValues();
        console.log(selectedOne);
        stateTerm = selectedOne.join();
        console.log(stateTerm);
        queryURL = "https://api.nps.gov/api/v1/parks?q=" + searchTerm + "&stateCode=" + stateTerm + "&api_key=" + apiKey;
        console.log(queryURL);
    }

    $("#search-btn").click(function() {

        $("#search-results").empty();
    
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
        
            for (var i = 0; i < response.data.length; i++) {
              parkName = response.data[i].fullName;
              parkURL = response.data[i].url;
              parkLatLon = response.data[i].latLong;
              console.log(parkLatLon); 
              $("#search-results").append("<li><a href=" + parkURL + ">" + parkName + "</li>");
            }
        });
    })
});



