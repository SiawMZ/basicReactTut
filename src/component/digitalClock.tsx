//learnt useEffect

import { useState, useEffect } from "react";

export const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formatTime = () => {
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    const meridiem = hour >= 12 ? "PM" : "AM";

    hour = hour % 12 || 12;

    return `${padZero(hour)}:${padZero(minute)}:${padZero(second)} ${meridiem}`;
  };

  const padZero = (number: number) => {
    return (number < 10 ? "0" : "") + number;
  };
  return (
    <>
      <div className="flex flex-auto justify-center bg-slate-800">
        <div>
          <span>{formatTime()}</span>
        </div>
      </div>
    </>
  );
};
