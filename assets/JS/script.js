const apiKey = '7953ea8cacf1180acba1009057e460e6'; 
const searchForm = document.getElementById('search-form');
const cityInput = document.getElementById('city-input');
const currentWeather = document.getElementById('current-weather');
const forecast = document.getElementById('forecast');
const citiesList = document.getElementById('cities-list');

// Function to fetch city data suggestions
async function getCitiesData(query) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/find?q=${query}&type=like&appid=${apiKey}`);
        const data = await response.json();
        return data.list;
    } catch (error) {
        console.error('Error fetching city data:', error);
        return [];
    }
}

// Function to render city suggestions in datalist
async function renderCitySuggestions(query) {
    const citiesData = await getCitiesData(query);
    const suggestions = citiesData.map(city => city.name);
    citiesList.innerHTML = ''; // Clear previous suggestions
    suggestions.forEach(cityName => {
        const option = document.createElement('option');
        option.value = cityName;
        citiesList.appendChild(option);
    });
}

// Function to fetch weather data for a city
async function getWeatherData(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
}

// Function to display weather data for a city
// Function to display user-friendly error message
function displayError(message) {
    currentWeather.innerHTML = `<p>${message}</p>`;
}

async function displayWeather(city) {
    try {
        const weatherData = await getWeatherData(city);
        if (weatherData) {
            const temperatureCelsius = Math.round(weatherData.main.temp);

            currentWeather.innerHTML = `
                <h2>${city}</h2>
                <p>Temperature: ${temperatureCelsius} &#8451;</p>
                <p>Humidity: ${weatherData.main.humidity}%</p>
                <p>Wind Speed: ${weatherData.wind.speed} m/s</p>
            `;
        } else {
            displayError('Weather data not available for this city.');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        displayError('An error occurred while fetching weather data.');
    }
}

async function handleSubmit(event) {
    event.preventDefault();
    const city = cityInput.value.trim();
    if (!city) return;

    await displayWeather(city);
    cityInput.value = '';

    // Update the search history
    cities.push(city);
    localStorage.setItem('searchedCities', JSON.stringify(cities));
    renderSearchSuggestions(); // Update search suggestions
}

citiesList.addEventListener('click', function (event) {
    const clickedCity = event.target.textContent; // Get the text content of the clicked item
    if (clickedCity) {
        displayWeather(clickedCity); // Display weather for the clicked city
    }
});


// Function to render search suggestions
function renderSearchSuggestions() {
    const searchSuggestions = document.getElementById('search-suggestions');
    searchSuggestions.innerHTML = '';

    cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        searchSuggestions.appendChild(option);
    });
}

// Function to handle input for search suggestions
async function handleInput(event) {
    const query = event.target.value.trim();
    if (query) {
        await renderCitySuggestions(query);
    } else {
        citiesList.innerHTML = '';
    }
}

// Event listeners
searchForm.addEventListener('submit', handleSubmit);
cityInput.addEventListener('input', handleInput);

// Load search history from localStorage on page load
const cities = JSON.parse(localStorage.getItem('searchedCities')) || [];