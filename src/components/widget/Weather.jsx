import { FaSearchLocation } from "react-icons/fa";
import { FaLocationDot, FaCalendarDays } from "react-icons/fa6";
import { TiWeatherWindyCloudy } from "react-icons/ti";

import { useRef } from "react";

const Weather = ({ icon, temp, desc, name, country, onSearch }) => {
  const inputText = useRef();

  function handleSearch() {
    const location = inputText.current.value;
    if (location) {
      onSearch(location);
    }
  }
  return (
    <div className="glass-morph p-5">
      {/* search  */}
      <div className="flex gap-2 items-center border-b py-4">
        <input
          ref={inputText}
          type="text"
          placeholder="search..."
          className="pl-2 focus:outline-none w-full bg-inherit"
        />
        <button
          onClick={handleSearch}
          className="p-1.5 bg-gray-400/20 rounded-full hover:bg-gray-400/40 duration-150 ease-linear "
        >
          <FaSearchLocation />
        </button>
      </div>
      {/* weather content */}
      <div className="py-14 border-b">
        <figure className="mb-4">
          <img src={icon} alt="icon weather " className="w-52 object-contain" />
        </figure>
        <h2 className="text-8xl font-bold">{parseInt(temp)}°C</h2>
        <p className="flex gap-2 items-center mt-5">
          <span>
            <TiWeatherWindyCloudy className="text-2xl" />
          </span>
          <span>{desc}</span>
        </p>
      </div>
      {/* location and date */}
      <div className="mt-4">
        <p className="flex gap-2 items-center mb-4">
          <span>
            <FaLocationDot />
          </span>
          <span>
            {name}, {country}
          </span>
        </p>
        <p className="flex gap-2 items-center">
          <span>
            <FaCalendarDays />
          </span>
          <span>friday, 14 march 2024</span>
        </p>
      </div>
    </div>
  );
};

export default Weather;
