# Weather Dashboard

The Weather Dashboard is a web application that allows users to check the current weather and a 5-day forecast for a specific city. It uses the OpenWeatherMap API to fetch weather data and display it in a user-friendly interface.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
- [How to Use](#how-to-use)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Current Weather**: Users can enter the name of a city, and the dashboard will display the current temperature, humidity, and wind speed for that city.

- **5-Day Forecast**: The application provides a 5-day weather forecast for the selected city, showing temperature and weather icons for each day.

- **Search Suggestions**: As users type in the city name, the dashboard provides auto-suggestions based on the available cities in the OpenWeatherMap API.

- **Search History**: The application keeps a history of searched cities, allowing users to quickly access weather information for previously searched locations.

- **User-Friendly Design**: The dashboard features a user-friendly design with a warm yellow/orange background color, navy blue boxes, distinct colorings for headings and text, and a slight drop shadow for the container.

## Getting Started

To get started with the Weather Dashboard, follow these steps:

1. Clone the repository to your local machine:
   -git clone 

3. Open the project in a code editor of your choice.

4. Make sure you have an API key from OpenWeatherMap. You can obtain one by signing up at [OpenWeatherMap](https://openweathermap.org/).

5. Update the `apiKey` variable in the `script.js` file with your API key:
```javascript
const apiKey = 'YOUR_API_KEY';
```
Open the index.html file in a web browser to use the Weather Dashboard.

## How to Use
-Launch the Weather Dashboard by opening the index.html file in a web browser.

- Enter the name of a city in the input field and press the "Search" button.

- The current weather for the specified city will be displayed in the "Current Weather" section, including temperature, humidity, and wind speed.

- The 5-day weather forecast for the same city will be shown in the "5-Day Forecast" section.

- As you type in the city name, the application will provide suggestions based on available cities.

- You can click on a suggested city or type the full city name and press "Search" to get weather data.

- The application keeps a history of previously searched cities for easy access.

## Technologies Used
- HTML5
- CSS3
- JavaScript
- OpenWeatherMap API
## Contributing
Contributions to this project are welcome. Feel free to submit issues or pull requests.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
