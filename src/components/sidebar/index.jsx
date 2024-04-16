import { TiWeatherWindyCloudy } from "react-icons/ti";
import { IoHome, IoBookmark, IoPerson } from "react-icons/io5";
import { FaGear } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <nav className="glass-morph p-4 flex flex-col gap-5 justify-between">
      <ul className="flex flex-col gap-6 items-center">
        <li>
          <p className="cursor-pointer text-2xl p-2">
            <TiWeatherWindyCloudy />
          </p>
        </li>
        <li>
          <p className="cursor-pointer text-xl p-2 bg-gray-400/30 rounded-md duration-150 ease-linear hover:bg-gray-400/40">
            <IoHome />
          </p>
        </li>
        <li>
          <p className="cursor-pointer text-xl p-2 bg-gray-400/30 rounded-md duration-150 ease-linear hover:bg-gray-400/40">
            <IoBookmark />
          </p>
        </li>
        <li>
          <p className="cursor-pointer text-xl p-2 bg-gray-400/30 rounded-md duration-150 ease-linear hover:bg-gray-400/40">
            <FaGear />
          </p>
        </li>
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
