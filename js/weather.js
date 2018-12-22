var lat = "40";
var lon = "75";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=7d303e69b0351c31f4dd317a06e61fed";

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
  console.log(response.Runtime);
});
