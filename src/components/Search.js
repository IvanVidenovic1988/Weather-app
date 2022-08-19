import { useState } from "react";

import "./Search.css";

export default function Search({ setWeather, location, setLocation }) {

  const [isPending, setIsPending] = useState(null);

  const currentDayUrl = `http://api.weatherapi.com/v1/current.json?key=880d0d2b0d3e4a5a986161302221406&q=${location}&aqi=no`;

  const futureSevenDaysUrl = `http://api.weatherapi.com/v1/forecast.json?key=880d0d2b0d3e4a5a986161302221406&q=${location}&days=7&aqi=no&alerts=no`;

  const currentDayMapData = (response) => {
    return {
      name: response.location.name,
      date: response.location.localtime,
      temp: response.current.temp_c.toFixed(),
      description: response.current.condition.text,
      feels_like: `${response.current.feelslike_c.toFixed()} *C`,
      humidity: `${response.current.humidity} %`,
      wind_speed: `${response.current.wind_kph} kph`,
      icon: response.current.condition.icon,
    };
  };

  const sevenDaysMapData = (response) => {
    const weather = response.forecast.forecastday.map((data) => {
      return {
        date: data.date,
        maxTemp: data.day.maxtemp_c.toFixed(),
        minTemp: data.day.mintemp_c.toFixed(),
        description: data.day.condition.text,
        wind_speed: `${data.day.maxwind_kph.toFixed()} kph`,
        chanse_of_rain: data.day.daily_chance_of_rain,
        icon: data.day.condition.icon,
        id: data.date_epoch,
      };
    });

    return { weather, name: response.location.name };
  };

  const searchLocation = async () => {
    //  axios.get(url).then((response) => {
    //   setWeather(response.data)
    //   console.log(response.data);
    // })

    setIsPending(true);

    const currentDayResponse = await fetch(currentDayUrl);
    const currentDayData = await currentDayResponse.json();

    const futureSevenDaysResponse = await fetch(futureSevenDaysUrl);
    const futureSevenDaysData = await futureSevenDaysResponse.json();

    console.log(futureSevenDaysData);

    setWeather({
      currentDay: currentDayMapData(currentDayData),
      futureSevenDays: sevenDaysMapData(futureSevenDaysData),
    });

    setLocation("");
    setIsPending(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchLocation(location);
    }
  };

  return (

    <div className="wrapper">

      <div className="search">
        <input
          type="text"
          placeholder="Enter location"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
          onKeyDown={handleKeyDown}
        />

        <img
          src={`./assets/search.svg`}
          alt="search"
          onClick={() => searchLocation(location)}
        />
      </div>

      <div className="loading">
          {isPending && <p>Loading <img src={`./assets/loading.png`} alt='loading' /></p>}
      </div>

    </div>
  );
}

// const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=e4930db25179fcac2bf47d64b0437ae3`;

// const sevenDaysBefore = format(subDays(new Date(), 7), 'yyyy-MM-dd')
// const lastSevenDaysUrl = `http://api.weatherapi.com/v1/history.json?key=880d0d2b0d3e4a5a986161302221406 &q=${location}&dt=${sevenDaysBefore}`

// const handleIcons = (weather) => {
//   switch (weather) {
//     case "Sunny":
//       return "sunny.svg";
//     case "Rain":
//       return "rainy.svg";
//     case "Clouds":
//       return "cloudy.svg";
//     default:
//       return "";
//   }
// };
