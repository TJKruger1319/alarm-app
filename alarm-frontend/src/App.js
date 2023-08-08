import Alarm from "./Components/Alarm";
import Clock from "./Components/Clock";
import ContextAlarm from "./Components/Context";

function App() {
  return (
    <section>
      <div>
        <div>
          <ContextAlarm>
            <Clock />
            <Alarm />
          </ContextAlarm>
        </div>
      </div>
    </section>
  );
}

export default App;
