import React, { useState } from "react";
import Clock from "./Components/Clock";
import ContextAlarm from "./Components/Context";
import AlarmList from "./Components/AlarmList";
import Math from "./Components/Math";
import Pokemon from "./Components/Pokemon";
import Typing from "./Components/Typing";
import './css/app.css';

function App() {
  const [stateSliceName, setStateSliceName] = useState("Base");
  const [difficulty, setDifficulty] = useState();

  if ( stateSliceName === "Base") {
    return (
        <section>
          <div className="container">
            <div>
              <ContextAlarm>
                <Clock data-testid="clock"/>
                <AlarmList 
                setStateSliceName={setStateSliceName}
                setDifficulty = {setDifficulty}
                data-testid="AlarmList"
                />
              </ContextAlarm>
            </div>
          </div>
        </section>
      );
  } if (stateSliceName === "Math") {
    return (
      <section>
        <div className="container">
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
        <div className="container">
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
        <div className="container">
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
