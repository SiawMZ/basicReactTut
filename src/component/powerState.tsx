//learnt useState & Updater function

import { useState } from "react";

type stateProps = {
  object: string;
};

export function PowerState({ object }: stateProps) {
  const [point, setPoint] = useState(0);

  const decreaseState = () => {
    if (point > 0) return setPoint((prevpoint) => prevpoint - 1);
    else return point;
  };

  const increaseState = () => {
    if (point >= 10) return point;
    else setPoint((prevpoint) => prevpoint + 1);
  };

  const reset = () => {
    setPoint(0);
  };

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <p>Available State:&nbsp; {10 - point}&nbsp;&nbsp;</p>
        <button onClick={reset}>reset</button>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button onClick={decreaseState}>-</button>
        <h3 style={{ margin: "0 10px" }}>
          {object}: {point}
        </h3>
        <button onClick={increaseState}>+</button>
      </div>
    </>
  );
}
