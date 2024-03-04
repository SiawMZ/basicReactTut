// leart on Change event handler from here

import { useState } from "react";

export function OnChange() {
  const [name, setName] = useState();

  const handleEvent = (event) => {
    setName(event.target.value);
  };

  const respond = () => {
    return name === "ABC" ? "valid" : "invalid";
  };

  return (
    <>
      <p>Promo Code:</p>
      <input value={name} onChange={handleEvent} />
      {name && <h3>{respond()}</h3>}
    </>
  );
}
