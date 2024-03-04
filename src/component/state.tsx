import { useState } from "react";

export function State() {
  const [name, setName] = useState("Hero");
  const [level, setLevel] = useState(0);

  const updateName = () => {
    setName(" Paladin");
  };

  const updateLevel = () => {
    setLevel(level + 1);
  };

  return (
    <>
      <div>
        <p>Warrior:{name}</p>
        <button onClick={updateName}>Change Class</button>

        <p>Current Level: {level}</p>
        <button onClick={updateLevel}>up Level</button>
      </div>
    </>
  );
}
