//learnt update Object in useState

import { useState } from "react";

export function UpdateObject() {
  const [place, setPlace] = useState({
    country: "Maple World",
    races: "human",
  });

  const handleCountry = (event) => {
    setPlace((prevplace) => ({ ...prevplace, country: event.target.value }));
  };

  const handleRaces = (event) => {
    setPlace((prevplace) => ({ ...prevplace, races: event.target.value }));
  };

  return (
    <>
      <p>
        You are {place.races} born in {place.country}
      </p>

      <select value={place.races} onChange={handleRaces}>
        <option value="">Select race</option>
        <option value="human">Human</option>
        <option value="Nova">Nova</option>
        <option value="Flora">Flora</option>
        <option value="Animas">Animas</option>
      </select>

      <select value={place.country} onChange={handleCountry}>
        <option value="">Select Country</option>
        <option value="Maple World">Maple World</option>
        <option value="Grandis">Grandis</option>
        <option value="Zipangu">Zipangu</option>
      </select>
    </>
  );
}
