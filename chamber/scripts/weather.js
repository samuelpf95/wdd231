const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecastContainer = document.querySelector('#forecast'); // Asegúrate de tener este div en tu HTML
const weather = 'https://api.openweathermap.org/data/2.5/weather?lat=19.41&lon=-99.13&appid=50f3b5622b9610b701b0a97370bc0d85&units=metric';
const weatherf='https://api.openweathermap.org/data/2.5/forecast?lat=19.41&lon=-99.13&appid=50f3b5622b9610b701b0a97370bc0d85&units=metric&lan=en'
async function apiFetch() {
    try {
      const response = await fetch(weather);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResults(data);
      } else {
        throw Error(await response.text());
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
  }
  
  async function getForecast() {
    try {
      const response = await fetch(weatherf);
      if (!response.ok) throw new Error(await response.text());
  
      const data = await response.json();
  
      // Filtra a las entradas del mediodía
      const middayForecasts = data.list.filter(entry => entry.dt_txt.includes("12:00:00"));
  
      // Toma sólo los primeros 3 días
      const next3Days = middayForecasts.slice(0, 3);
  
      next3Days.forEach(entry => {
        const date = new Date(entry.dt_txt).toLocaleDateString('en-US', {
          weekday: 'long', day: 'numeric', month: 'short'
        });
        const temp = entry.main.temp;
        const desc = entry.weather[0].description;  
        const p = document.createElement('p');
        p.innerHTML = `<strong>${date}</strong>: ${temp}°C - ${desc}`;
        forecastContainer.appendChild(p);
      });
  
    } catch (error) {
      console.error('Error al obtener el pronóstico:', error);
    }
  }
  
  apiFetch();
  getForecast();