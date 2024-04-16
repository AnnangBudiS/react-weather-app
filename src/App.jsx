import { useEffect, useState } from "react";
import { useGeolocated } from "react-geolocated";

import { WiHumidity } from "react-icons/wi";
import { MdVisibility } from "react-icons/md";
import { GiWindsock } from "react-icons/gi";
import { FaCalendarDays } from "react-icons/fa6";

import Navbar from "./components/Navbar";
import Sidebar from "./components/sidebar";
import Time from "./components/widget/Time";
import Weather from "./components/widget/Weather";
import WeatherItem from "./components/widget/WeatherItem";
import Forecast from "./components/widget/Forecast";

const App = () => {
  const [weatherData, setWeatherData] = useState({});
  const [forecast, setForecaset] = useState({});
  const [loading, setLoading] = useState(false);
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: null,
    });

  //env
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const API_KEY = import.meta.env.VITE_API_KEY;

  async function getWeatherByCoordinates() {
    setLoading(true);
    try {
      const response = await fetch(
        `${BASE_URL}lat=${coords?.latitude}&lon=${coords?.longitude}&units=metric&appid=${API_KEY}`
      );
      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.latitude}&lon=${coords.longitude}&units=metric&cnt=5&appid=${API_KEY}`
      );
      if (!response.ok && !forecastResponse.ok)
        throw new Error("Failed to fetch weather data");

      const data = await response.json();
      const forecastData = await forecastResponse.json();
      setForecaset(forecastData);
      setWeatherData(data);
    } catch (error) {
      console.log({ msg: error.message });
    } finally {
      setLoading(false);
    }
  }

  async function handleSearch(location) {
    setLoading(true);
    try {
      const response = await fetch(
        `${BASE_URL}q=${location}&units=metric&appid=${API_KEY}`
      );

      const responseForecast = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${location}&cnt=5&units=metric&appid=${API_KEY}`
      );
      if (!response.ok && !responseForecast.ok)
        throw new Error("Failed to fetch weather data");

      const data = await response.json();
      const dataForecast = await responseForecast.json();

      setWeatherData(data);
      setForecaset(dataForecast);
    } catch (error) {
      console.log({ msg: error.message });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (coords && coords.latitude && coords.longitude) {
      getWeatherByCoordinates();
    }
  }, [coords]);

  //initializazion
  const { weather, main, sys, visibility, wind } = weatherData;

  //imagurl
  const imgUrl =
    weather && weather.length > 0 ? `/icon/${weather[0].icon}.png` : "";

  const desc = weather && weather.length > 0 ? weather[0].description : "";

  console.log(forecast);
  return (
    <div className="gradient-circle h-screen text-gray-100">
      <div className="mx-auto container">
        <header>
          <Navbar />
        </header>
        {!isGeolocationAvailable && (
          <div>Geolocation is not Available in this browser</div>
        )}
        {!isGeolocationEnabled && <div>geolocated is not enable</div>}
        {loading ? (
          <div>Loading load data...</div>
        ) : (
          <main className="flex  gap-6">
            <Sidebar />
            <Weather
              icon={imgUrl}
              desc={desc}
              temp={main?.temp}
              name={weatherData?.name}
              country={sys?.country}
              onSearch={handleSearch}
            />
            <div className="flex flex-col justify-between w-full">
              {/* hero */}
              <div>
                <Time />
                <p className=" mt-5 flex items-center gap-4 text-xl font-bold mb-5">
                  {" "}
                  <span>
                    <FaCalendarDays />
                  </span>
                  Forecast 3 hours
                </p>
                <ul className="mt-5 grid grid-cols-5 gap-5">
                  {forecast?.list?.map((item) => {
                    const { dt, main, weather } = item;
                    const fcIcon =
                      weather && weather.length > 0 ? weather[0].icon : "";
                    const desc =
                      weather && weather.length > 0
                        ? weather[0].description
                        : "";
                    const iconImg = `/icon/${fcIcon}.png`;
                    const date = new Date(dt * 1000);
                    const newDate = date.toLocaleDateString("en-Us", {
                      weekday: "long",
                    });
                    return (
                      <Forecast
                        key={dt}
                        day={newDate}
                        imgUrl={iconImg}
                        desc={desc}
                        temp={parseInt(main?.temp)}
                      />
                    );
                  })}
                </ul>
              </div>
              <div className="flex gap-2 items-center">
                {/* humidity */}
                <WeatherItem
                  title="humidity"
                  numb={main?.humidity}
                  label="%"
                  icon={<WiHumidity />}
                />

                {/* visibili */}
                <WeatherItem
                  title="visibility"
                  numb={visibility / 1000}
                  label="Km"
                  icon={<MdVisibility />}
                />

                {/* wind */}
                <WeatherItem
                  title="wind"
                  numb={parseInt(wind?.speed)}
                  label="Km"
                  icon={<GiWindsock />}
                />
              </div>
            </div>
          </main>
        )}
      </div>
    </div>
  );
};

export default App;
