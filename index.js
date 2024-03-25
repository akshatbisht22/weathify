async function weather_fetch() {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const user_latitude = position.coords.latitude;
      const user_longitude = position.coords.longitude;
      
      const api_key = "4688c0db567e329e0f33a33ad5756ebf";
      const api_link = `https://api.openweathermap.org/data/2.5/weather?lat=${user_latitude}&lon=${user_longitude}&appid=${api_key}`;
      
      const fetch_api = await fetch(api_link);
      const weather_object = await fetch_api.json();
      console.log(weather_object)
      const weath_main = weather_object.weather[0].main;
      const weath_desc = weather_object.weather[0].description;  
      const weath_temp = weather_object.main.temp;
      const weath_temp_kelvin = `${weath_temp-273.15}`;
      const weath_temp_kelvin_slice = weath_temp_kelvin.slice(0,4)
      const weath_temp_celcius = `${(weath_temp - 273.15) * 9/5 + 32}`;
      const weath_temp_celcius_slice = weath_temp_celcius.slice(0,7)
      const weath_humidity = weather_object.main.humidity;
      const weath_wind = weather_object.wind.speed;
      const weath_city = weather_object.name;
      const img = `https://openweathermap.org/img/wn/${weather_object.weather[0].icon}@4x.png`;
      
    document.getElementById("weather_title").innerText = weath_main;
    document.getElementById("weather_desc").innerText = weath_desc;
    document.getElementById("temperature").innerText = `${weath_temp_kelvin_slice}°C`;
    document.getElementById("windspeed").innerText = `Windspeed : ${weath_wind} m/s`;
    document.getElementById("humidity_lvl").innerText = `Humidity Level : ${weath_humidity}%`;
    document.getElementById("status_img_src").src=img;
    document.getElementById("location").innerText = `Location : ${weath_city}`;
  });
}
