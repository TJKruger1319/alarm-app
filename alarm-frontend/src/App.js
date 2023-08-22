import React, { useState } from "react";
import Clock from "./Components/Clock";
import ContextAlarm from "./Components/Context";
import AlarmList from "./Components/AlarmList";
import Math from "./Components/Math";

function App() {
  const [stateSliceName, setStateSliceName] = useState("Base");
  const [difficulty, setDifficulty] = useState();

  if ( stateSliceName === "Base") {
    return (
        <section>
          <div>
            <div>
              <ContextAlarm>
                <Clock />
                <AlarmList 
                setStateSliceName={setStateSliceName}
                setDifficulty = {setDifficulty}
                />
              </ContextAlarm>
            </div>
          </div>
        </section>
      );
  } if (stateSliceName === "Math") {
    return (
      <section>
        <div>
            <Math 
            difficulty={difficulty}
            setStateSliceName={setStateSliceName}
            />
        </div>
      </section>
    )
  }

  
}

export default App;
