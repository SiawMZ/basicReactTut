//learn useEffect

import { useState, useEffect } from "react";

export function AdditionalEffect() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const total = width + height;

  return <div>Your additional Damage based on screen size: {total}</div>;
}

export const ChangeTitle = () => {
  const [title, setTitle] = useState("Welcome back");

  useEffect(() => {
    document.title = title;
  }, [title]);

  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible") {
      // The tab is currently active
      setTitle("Welcome Back Adventurer");
    } else {
      // The tab is not currently active
      setTitle("See you :'(");
    }
  });

  return null;
};
