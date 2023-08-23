import React, { useState } from "react";
import Clock from "./Components/Clock";
import ContextAlarm from "./Components/Context";
import AlarmList from "./Components/AlarmList";
import Math from "./Components/Math";
import Pokemon from "./Components/Pokemon";
import Typing from "./Components/Typing";

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
  }  if (stateSliceName === "Pokèmon") {
    return (
      <section>
        <div>
            <Pokemon 
            difficulty={difficulty}
            setStateSliceName={setStateSliceName}
            />
        </div>
      </section>
    )
  } if (stateSliceName === "Typing") {
    return (
      <section>
        <div>
            <Typing 
            difficulty={difficulty}
            setStateSliceName={setStateSliceName}
            />
        </div>
      </section>
    )
  }

  
}

export default App;
