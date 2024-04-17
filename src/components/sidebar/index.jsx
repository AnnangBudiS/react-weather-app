import { TiWeatherWindyCloudy } from "react-icons/ti";
import { IoPerson } from "react-icons/io5";

import { DATA_NAV } from "../../data/data";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="glass-morph p-4 flex flex-col gap-5 justify-between">
      <ul className="flex flex-col gap-6 items-center">
        <li>
          <p className="cursor-pointer text-2xl p-2">
            <TiWeatherWindyCloudy />
          </p>
        </li>
        {DATA_NAV.map((item, index) => (
          <li
            key={index}
            className="p-2 rounded-md bg-gray-400/20 duration-150 hover:bg-gray-400/40"
          >
            <NavLink
              to={item.link}
              className={({ isActive }) => (isActive ? "text-sky-500" : "")}
            >
              {item.icon}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="pb-10">
        <p className="cursor-pointer text-2xl p-2 bg-gray-400/30 rounded-md duration-150 ease-linear hover:bg-gray-400/40">
          <IoPerson />
        </p>
      </div>
    </nav>
  );
};

export default Sidebar;
