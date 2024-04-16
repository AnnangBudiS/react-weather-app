const Forecast = ({ day, imgUrl, temp, desc }) => {
  return (
    <li className="glass-morph ">
      <article className="font-bold flex flex-col gap-5 p-5 items-center justify-center">
        <p>{day}</p>
        <figure>
          <img src={imgUrl} alt="forecast icon" />
        </figure>
        <p>{desc}</p>
        <p className="text-xl">{temp}°C</p>
      </article>
    </li>
  );
};

export default Forecast;
