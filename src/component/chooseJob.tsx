// leart on Change event handler from here
//learnt useState
//learnt select

import { useState } from "react";

export function ChooseJob() {
  const [job, setJob] = useState();

  const handleJob = (event) => {
    setJob(event.target.value);
  };

  return (
    <>
      <h2>Current Job:&nbsp;{job}</h2>
      <select value={job} onChange={handleJob}>
        <option value="">Select Your Job</option>
        <option value="Explorer">Explorer</option>
        <option value="Nova">Nova</option>
        <option value="Adele">Adele</option>
      </select>
    </>
  );
}
