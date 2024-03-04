import { MouseEvent } from "react";

export function Button() {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) =>
    (e.target.textContent = "Strength 🔥🔥🔥");

  return (
    <>
      <div>Add State </div>
      <button onClick={(e) => handleClick(e)}>Strength</button>
    </>
  );
}
