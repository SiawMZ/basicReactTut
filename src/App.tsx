import { List } from "./component/renderList";
//import { Button } from "./component/button";
import { PowerState } from "./component/powerState";
import { OnChange } from "./component/onChange";
import { ChooseJob } from "./component/chooseJob";
import { UpdateObject } from "./component/updateObject";
//import { QuestArray } from "./component/updateArray";
import { UpdateObjectArray } from "./component/updateObjectArray";
import TrySearch from "./component/trySearch";

function App() {
  const weapons = [
    { id: 1, name: "sword", damage: 101 },
    { id: 2, name: "knife", damage: 120 },
    { id: 3, name: "bowgun", damage: 150 },
    { id: 4, name: "staff", damage: 200 },
  ];

  return (
    <>
      <div style={{ display: "grid" }}>
        <UpdateObject />

        {/* revision onChange event handler */}
        <ChooseJob />

        {weapons.length > 0 && <List items={weapons} category="Weapon Type" />}

        {/* <Button /> */}
        {/* revision useState */}
        <PowerState object="Strength" />
        <OnChange />

        <TrySearch />
      </div>

      <div>
        {/*<QuestArray />*/}
        <UpdateObjectArray />
      </div>
    </>
  );
}

export default App;
