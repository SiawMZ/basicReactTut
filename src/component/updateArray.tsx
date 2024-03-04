//learnt update array in useState
// add ! to fix Object is possibly 'null' error
// add as HTMLInputElement to fix Property 'value' does not exist on type 'HTMLElement' error

import { useState } from "react";

export function QuestArray() {
  const [quest, setQuest] = useState(["click to delete"]);

  const handleAddQuest = () => {
    const fixError = document.getElementById(
      "questinput"
    ) as HTMLInputElement | null;
    const newQuest = fixError!.value;
    fixError!.value = "";

    setQuest((prevquest) => [...prevquest, newQuest]);
  };

  const handleDeleteQuest = (index: number) => {
    setQuest(quest.filter((_, i) => i !== index));
  };
  return (
    <>
      <div>
        <h2>⚔️ Daily Quest:</h2>
        <ul>
          {quest.map((quest, index) => (
            <li key={index} onClick={() => handleDeleteQuest(index)}>
              {quest}
            </li>
          ))}
        </ul>
        <input type="text" id="questinput" placeholder="update Quest here" />
        <button onClick={handleAddQuest}>Add Quest</button>
      </div>
    </>
  );
}
