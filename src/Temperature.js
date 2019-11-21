import React from "react";
import axios from "axios";

export default function Temperature(props) {
  function showTemperature(response) {
    let apiKey = "875ea8327db11c913ffcc92c93a23805";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=${apiKey}`;
  }
  return (
    <h1>
      The temperature in {props.city} is {response.data.main.temp}ºC
    </h1>
  );
}
