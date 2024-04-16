import { useEffect, useRef, useState } from "react";
import { useGeolocated } from "react-geolocated";

const Test = () => {
  const inputRef = useRef();
  const [isData, setIsData] = useState({});
  const [loading, setLoading] = useState(false);
  const { coords } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  });

  //url & appid from env
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const API_KEY = import.meta.env.VITE_API_KEY;

  //get weather by input text
  async function getWeatherByLocation(location) {
    setLoading(true);
    try {
      const response = await fetch(
        `${BASE_URL}q=${location}&units=metric&appid=${API_KEY}`
      );

      if (!response.ok) throw new Error("Failed to fetch weather data");

      const data = await response.json();
      setIsData(data);
    } catch (error) {
      console.log({ msg: error.message });
    } finally {
      setLoading(false);
    }
  }

  //get weather data by lat & lon
  async function getWeatherByCoordinates(latitude, longitude) {
    setLoading(true);
    try {
      const response = await fetch(
        `${BASE_URL}lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
      );

      if (!response.ok) throw new Error("Failed to fetch weather data");

      const data = await response.json();
      setIsData(data);
    } catch (error) {
      console.log({ msg: error.message });
    } finally {
      setLoading(false);
    }
  }

  //handle search
  function handleSearch() {
    const location = inputRef.current.value;
    if (location) {
      getWeatherByLocation(location);
    }
  }

  useEffect(() => {
    if (coords) {
      getWeatherByCoordinates(coords.latitude, coords.longitude);
    }
  }, [coords]);

  return (
    <div>
      <div>
        <input type="text" ref={inputRef} />
        <button onClick={handleSearch}>Search</button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div>
            <p>Kota</p>
            <p>{isData?.name}</p>
          </div>
          <div>
            <p>Suhu</p>
            <p>{isData?.main?.temp} °C</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Test;
