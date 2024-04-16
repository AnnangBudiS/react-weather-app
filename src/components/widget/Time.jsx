import { useEffect, useState } from "react";

const Time = () => {
  const [isDay, setIsDay] = useState("");
  const [isTime, setIsTime] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      const date = new Date();
      setIsDay(date.toLocaleDateString("en-Us", { weekday: "long" }));
      setIsTime(
        date.toLocaleTimeString("en-us", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        })
      );
    }, 1000);

    return () => clearTimeout(timer);
  }, [isTime, isDay]);

  return (
    <div>
      <h2 className="text-5xl font-bold">{isDay}</h2>
      <h1 className="text-8xl font-bold">{isTime}</h1>
    </div>
  );
};

export default Time;
