require('dotenv').config()
const express = require("express");
const rateLimit = require('express-rate-limit')
const axios = require("axios");
const cors = require("cors");
const app = express();

const port = 7417;
const API_KEY = process.env.API_KEY

const limiter = rateLimit({
  windowMs: 1000,
  max: 1,
});

app.use(limiter);

const allowedOrigin = 'https://0xabdulkhalid.github.io'

const corsOptions = {
  origin: function (origin, callback) {
    if (origin === allowedOrigin) {
      callback(null, false);
    } else {
      callback(null, true);
    }
  },
};

app.use(cors(corsOptions));

app.get("/weather", async (req, res) => {

  try {
    const latitude = req.query.latitude;
    const longitude = req.query.longitude;

    const [weatherAPIResponse, openMeteoResponse] = await Promise.all([
      axios.get(
        `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${latitude},${longitude}`
      ),
      axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=auto&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_probability_max`
      )
    ]);

    if (weatherAPIResponse.status === 200 && openMeteoResponse.status === 200) {
      const weatherAPIData = await weatherAPIResponse.data;
      const openMeteoData = await openMeteoResponse.data;

      weatherAPIData.daily = openMeteoData.daily;

      res.json(weatherAPIData);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

app.listen(port);
