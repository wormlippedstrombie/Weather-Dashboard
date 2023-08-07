const apiKey = '7953ea8cacf1180acba1009057e460e6'; 
        const searchForm = document.getElementById('search-form');
        const cityInput = document.getElementById('city-input');
        const currentWeather = document.getElementById('current-weather');
        const forecast = document.getElementById('forecast');
        const searchHistory = document.getElementById('search-history');
        let cities = [];

        // Function to fetch weather data from OpenWeatherMap API
        async function getWeatherData(city) {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
                const data = await response.json();
                return data;
            } catch (error) {
                console.error('Error fetching weather data:', error);
                return null;
            }
        }

        // Function to display current weather data
        function displayCurrentWeather(data) {
            // Update the currentWeather HTML element with the retrieved data
            // You can format and display the data as you like
        }

        // Function to fetch 5-day forecast data from OpenWeatherMap API
        async function getForecastData(city) {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`);
                const data = await response.json();
                return data;
            } catch (error) {
                console.error('Error fetching forecast data:', error);
                return null;
            }
        }

        // Function to display 5-day forecast data
        function displayForecast(data) {
            // Update the forecast HTML element with the retrieved data
            // You can format and display the data as you like
        }

        // Function to handle form submission
        async function handleSubmit(event) {
            event.preventDefault();
            const city = cityInput.value.trim();
            if (!city) return;

            const weatherData = await getWeatherData(city);
            const forecastData = await getForecastData(city);

            if (weatherData && forecastData) {
                displayCurrentWeather(weatherData);
                displayForecast(forecastData);
                cities.push(city);
                localStorage.setItem('searchedCities', JSON.stringify(cities));
                renderSearchHistory();
            } else {
                // Handle error case when data is not available
            }
        }

        // Function to render search history
        function renderSearchHistory() {
            searchHistory.innerHTML = '';
            cities.forEach(city => {
                const cityButton = document.createElement('button');
                cityButton.textContent = city;
                cityButton.addEventListener('click', () => handleHistoryCityClick(city));
                searchHistory.appendChild(cityButton);
            });
        }

        // Function to handle click on a city in the search history
        async function handleHistoryCityClick(city) {
            cityInput.value = city;
            await handleSubmit(new Event('submit'));
        }

        // Event listener for form submission
        searchForm.addEventListener('submit', handleSubmit);

        // Load search history from localStorage on page load
        cities = JSON.parse(localStorage.getItem('searchedCities')) || [];
        renderSearchHistory();