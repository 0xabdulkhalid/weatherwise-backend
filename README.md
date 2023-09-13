<br>
<div align=center>
<img src="./images/logo.svg" alt="WeatherWise Backend" width="350">
</div>
<br>

## Description

- The WeatherWise Backend is a critical component of the WeatherWise project. It serves as the secure gateway for fetching real-time weather data from external APIs while protecting sensitive API keys. 

- The WeatherWise Backend utilizes two weather APIs to provide comprehensive weather data:

    - [WeatherAPI](https://www.weatherapi.com/) : WeatherAPI provides essential weather information and is a key component of the WeatherWise Backend.

    - [Open-Meteo](https://open-meteo.com/): Open-Meteo is another weather API integrated into the backend, offering additional weather data and forecasts.

    - Both APIs work in conjunction to ensure that WeatherWise delivers accurate and up-to-date weather information to users.

- This Express.js-based backend ensures data security and provides reliable weather information to the WeatherWise application.

## Features

- **API Key Protection**: The backend safeguards your API key, preventing unauthorized access and ensuring the confidentiality of sensitive data.

- **Rate Limiting**: Utilizes Express.js rate limiting middleware to control the number of API requests, preventing abuse and ensuring fair usage.

- **CORS Configuration**: Configures Cross-Origin Resource Sharing (CORS) to allow access from specified origins, enhancing the accessibility of the API.

- **Weather Data Retrieval**: Fetches weather data from external APIs, combines responses, and serves up-to-date weather information to the WeatherWise application.

## Getting Started

To set up the WeatherWise Backend locally, follow these steps:

1. Clone the GitHub repository to your local machine:

   ```bash
   git clone https://github.com/0xabdulkhalid/weatherwise-backend.git
   ```

2. Navigate to the backend's directory:

   ```bash
   cd weatherwise-backend
   ```

3. Install the backend's dependencies using npm:

   ```bash
   npm install
   ```

4. Create a .env file in the backend's root directory and add your Weather API key. If you don't have an API key yet, you can obtain one by signing up at [weatherapi.com](https://www.weatherapi.com):

   ```env
   API_KEY=your_api_key_here
   ```

5. Start the local backend server:

   ```bash
   npm start
   ```

Now, the WeatherWise Backend is running locally on your machine.

## Usage

- You can access the backend application by opening your web browser and navigating to http://localhost:7417
- Be sure to modify the CORS Configuration so that backend won't return `Forbidden`.
- Additionally you need to modify backend api url on Weatherwise Application's API Module.
- Build your changes for WeatherWise, now you test the application by visiting `index.html` file on `dist` directory.

## API Endpoints

- **GET /weather**: Retrieves real-time weather data based on latitude and longitude parameters. Example:

  ```http
  GET /weather?latitude=your_latitude&longitude=your_longitude
  ```

## CORS Configuration

- By default, the backend only allows requests from the Weatherwise Application's origin

- You can modify the `allowedOrigins` array in the code to add or restrict origins according to your project's requirements.

## Rate Limiting

- The backend enforces rate limiting with a maximum of 1 request per second. 
- You can adjust the `max` and `windowMs` parameters in the `rateLimit` middleware to suit your needs.

## License

- This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Let's Connect 👋

<div align=center>

  <a href="https://linkedin.com/in/0xabdulkhalid" >
    <img src="https://img.shields.io/badge/linkedin%20Profile-%2300acee.svg?color=405DE6&style=for-the-badge&logo=linkedin&logoColor=white" alt="Linkedin Profile">
  </a>&nbsp;&nbsp;

  <a href="mailto:0xabdulkhalid@gmail.com" target="_blank">
    <img src="https://img.shields.io/badge/gmail-%23EA4335.svg?style=for-the-badge&logo=gmail&logoColor=white" alt=mail/>
  </a>&nbsp;&nbsp;

  <a href="https://www.github.com/0xabdulkhalid/" >
    <img src="https://img.shields.io/badge/Github%20Profile-131313?style=for-the-badge&logo=github&logoColor=white" alt="Github Profile">
  </a>

</div>

<br>