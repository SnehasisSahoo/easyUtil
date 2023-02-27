import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import axios from "axios";

// let cityName='Delhi';
// let countryCode='IN';

export default function HomePage() {
  //INFO: set greetings
  let h = new Date().getHours();
  let greetings = () => {
    let greet = "";
    if (h < 12) greet = "Good Morning!";
    else if (h >= 12 && h <= 17) greet = "Good Afternoon!";
    else if (h >= 17 && h <= 24) greet = "Good Evening!";
    return greet;
  };

  //INFO: clock
  const [time, setTime] = useState(new Date().toLocaleTimeString("en-US"));
  const updateTime = () => {
    setTime(new Date().toLocaleTimeString("en-US"));
  };
  setInterval(updateTime, 1000);

  //INFO: get lat long
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  const locSucess = (pos) => {
    setLat(pos.coords.latitude);
    setLon(pos.coords.longitude);
    // console.log(pos);
  };

  let locErr = (err) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  const opp = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  navigator.geolocation.getCurrentPosition(locSucess, locErr, opp);

  //INFO: get loc[cityName countryCode]
  const [cityName, setCityName] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [cityCountryErr, setCityCountryErr] = useState("");

  const bdcApi = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}`;
  const getCityCountry = async () => {
    try {
      const res = await axios.get(bdcApi);
      console.log(res.data);
      return res.data;
    } catch (e) {
      setCityCountryErr(e.message);
      console.log(cityCountryErr);
    }
  };

  //INFO: get weather data
  const apiKey = "44f8f3e9badd63673a1dc623c416a439";
  // const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  const [weather, setWeather] = useState("");
  const [weatherErr, setWeatherErr] = useState("");

  const getWeather = async () => {
    try {
      const location = await getCityCountry();
      setCityName(location.city);
      setCountryCode(location.countryCode);
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location.city},${location.countryCode}&appid=${apiKey}&units=metric`;
      const res = await axios.get(URL);
      setWeather(res.data);
      console.log(res.data);
    } catch (e) {
      setWeatherErr(e.message);
      console.log(weatherErr);
    }
  };

  useEffect(() => {
    getWeather();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [h]);


  return (
    <>
      <NavBar tab="home" />
      <div className="center-alng">
        <h1 className="greet">{greetings()}</h1>
        <h3>{`[  ${time}  ]`}</h3>
        <div className="card">
          <h2 className="city">
            Weather in {cityName}, {countryCode}
          </h2>
          {weather.main !== undefined && (
            <h1 className="temp">{weather.main.temp}°C</h1>
          )}
          <div className="flex">
            {weather.weather !== undefined && (
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                alt=""
                className="icon"
              />
            )}
            {weather.weather !== undefined && (
              <div className="description">
                {weather.weather[0].description}
              </div>
            )}
          </div>
          {weather.main !== undefined && (
            <div className="extra">Humidity: {weather.main.humidity}%</div>
          )}
          {weather.wind !== undefined && (
            <div className="extra">Wind speed: {weather.wind.speed} km/h</div>
          )}
        </div>
      </div>
    </>
  );
}
