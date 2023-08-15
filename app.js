// Функция для получения данных о погоде
function getWeather(city, iconId, tempId, descriptionId) {
  const apiKey = 'file:///C:/Users/Home/Documents/%D0%A0%D0%B0%D0%B1%D0%BE%D1%82%D1%8B/src/index.html'; // Заменить YOUR_API_KEY на ваш ключ API
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const icon = data.weather[0].icon;
      const temp = data.main.temp;
      const description = data.weather[0].description;

      document.getElementById(iconId).src = `http://openweathermap.org/img/w/${icon}.png`;
      document.getElementById(tempId).textContent = `Температура: ${temp}°C`;
      document.getElementById(descriptionId).textContent = `Описание: ${description}`;
    })
    .catch(error => console.log('Ошибка:', error));
}

// Получение данных о погоде для Москвы
getWeather('Moscow', 'moscow-icon', 'moscow-temp', 'moscow-description');

// Получение данных о погоде для Лондона
getWeather('London', 'london-icon', 'london-temp', 'london-description');