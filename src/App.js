import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`;

  const searchLocation = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? (
              <h1>
                {data.main.temp}
                <sup>o</sup>
              </h1>
            ) : null}
          </div>
          <div className="description">
            {/* {data.weather.map((item) => {
              return (
                <img
                  src={`http://openweathermap.org/img/w/${item.icon}.png`}
                  alt="{data.name}"
                />
              );
            })} */}
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            {data.main ? (
              <p className="bold">
                {data.main.feels_like}
                <sup>o</sup>
              </p>
            ) : null}
            <p>Ощущается как</p>
          </div>
          <div className="humidity">
            {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
            <p>Влажность</p>
          </div>
          <div className="wind">
            {data.main ? <p className="bold">{data.wind.speed}</p> : null}
            <p>Ветер, м/с</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
