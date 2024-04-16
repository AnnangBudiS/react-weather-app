const WeatherItem = ({ title, numb, label, icon }) => {
  return (
    <div className="glass-morph p-4 w-full">
      <h2 className="font-semibold uppercase">{title}</h2>
      <ul className="flex items-center justify-between">
        <li className="flex gap-1">
          <p className="text-4xl font-bold">{numb}</p>
          <span>{label}</span>
        </li>
        <li>
          <p>{icon}</p>
          <p>the dew point is : 20</p>
          <p>right now</p>
        </li>
      </ul>
    </div>
  );
};

export default WeatherItem;
