
  const today = new Date().toISOString().split('T')[0];

  // Bright Sky API call

  fetch(`https://api.brightsky.dev/weather?lat=45.4235&lon=-75.6979&date=${today}`)
    .then(function(resp) { return resp.json(); }) // Convert data to JSON
    .then(function(data) {
      // Check if data is present before accessing it
      if (data.weather && data.weather.length > 0) {

        // Extract and set windspeed to the 'windspeed' DIV
        const windspeed = document.getElementById('windspeed');
        console.log("Windspeed:", windspeed);
        windspeed.innerHTML = "Windspeed: " + data.weather[0].wind_speed + " km/h";



      } else {
        console.error("No weather data available for today.");
      }
    })
    .catch(function(e) {
      // Catch and log any errors
      console.error("Error fetching data:", e);
    });



