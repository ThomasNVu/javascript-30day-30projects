const apiKey = "f452b0b6559d4478fbb14300a9e447b0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&q=atlanta";

async function checkWeather() {
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  let data = await response.json();

  console.log(data);
}
