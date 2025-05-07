document.getElementById('fetchWeather').addEventListener('click', function() {
  const today = new Date().toISOString().split('T')[0];
  const lat = "45.4235";
  const lon = "-75.6979";
  // Bright Sky AP
  
  // Visit Brightsky.dev for more information about the weather app API. 

  fetch(`https://api.brightsky.dev/weather?lat=${lat}&lon=${lon}&date=${today}`)
  .then(function(resp) { return resp.json(); }) // Convert data to JSON
  .then(function(data) {
      // Check if data is present before accessing it
      console.log(data);
      if (data.weather && data.weather.length > 0) {
          // Log all viable pieces of data for weather[0]
          const weatherData = data.weather[0];
          console.log("Timestamp:", weatherData.timestamp);
          console.log("Temperature:", weatherData.temperature + "°C");

          // Extract and set windspeed to the 'windspeed' DIV
          const windspeed = document.getElementById('windspeed');
          windspeed.innerHTML = "Windspeed: " + weatherData.wind_speed + " km/h";
      } else {
          console.error("No weather data available for today.");
      }
  })
  .catch(function(e) {
      // Catch and log any errors
      console.error("Error fetching data:", e);
  });
});