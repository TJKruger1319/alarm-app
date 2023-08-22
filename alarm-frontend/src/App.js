import React, { useState } from "react";
import Clock from "./Components/Clock";
import ContextAlarm from "./Components/Context";
import AlarmList from "./Components/AlarmList";
import Math from "./Components/Math";

function App() {
  const [type, setCurrentType] = useState("Base");
  const [difficulty, setCurrentDiff] = useState();

  if ( type === "Base") {
    return (
        <section>
          <div>
            <div>
              <ContextAlarm>
                <Clock />
                <AlarmList 
                setCurrentType={setCurrentType}
                setCurrentDiff = {setCurrentDiff}
                />
              </ContextAlarm>
            </div>
          </div>
        </section>
      );
  } else if (type === "Math") {
    return (
      <section>
        <div>
            <Math 
            difficulty={difficulty}
            setCurrentType={setCurrentType}
            />
        </div>
      </section>
    )
  }

  
}

export default App;
