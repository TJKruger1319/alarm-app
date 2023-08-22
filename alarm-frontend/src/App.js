import Clock from "./Components/Clock";
import ContextAlarm from "./Components/Context";
import AlarmList from "./Components/AlarmList";

function App() {
  return (
    <section>
      <div>
        <div>
          <ContextAlarm>
            <Clock />
            <AlarmList />
          </ContextAlarm>
        </div>
      </div>
    </section>
  );
}

export default App;
