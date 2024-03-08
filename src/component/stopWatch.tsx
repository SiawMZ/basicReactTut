import { useState, useEffect, useRef } from "react";

export const StopWatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapseTime, setElapseTime] = useState(0);

  const intervalIDRef = useRef<number | null>(null);
  const starTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalIDRef.current = setInterval(() => {
        setElapseTime(Date.now() - starTimeRef.current);
      }, 10);
    }

    return () => {
      if (intervalIDRef.current !== null) {
        clearInterval(intervalIDRef.current);
      }
    };
  }, [isRunning]);

  const start = () => {
    starTimeRef.current = Date.now() - elapseTime;
    setIsRunning(true);
  };
  const stop = () => {
    setIsRunning(false);
  };
  const reset = () => {
    setIsRunning(false);
    setElapseTime(0);
  };
  const formatTime = () => {
    //let hour = Math.floor(elapseTime / (1000 * 60 * 60));
    let minute = Math.floor((elapseTime / (1000 * 60)) % 60);
    let second = Math.floor((elapseTime / 1000) % 60);
    let millisecond = Math.floor((elapseTime % 1000) / 10);
    return `${padZero(minute)}:${padZero(second)}:${padZero(millisecond)}`;
  };

  const padZero = (number: number) => {
    return (number < 10 ? "0" : "") + number;
  };

  return (
    <>
      <div>stop Watch</div>
      <div>{formatTime()}</div>
      <div>
        <button onClick={start}>start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>reset</button>
      </div>
    </>
  );
};
