import React, { useContext } from "react";
import { minutesNumber, hourNumber } from "../fixNumbers";
import useOption from "../Hooks/useOption";
import { Context } from "./Context";

function Alarm() {
    const [hour, setHour] = useOption("Hour");
    const [minutes, setMinutes] = useOption("Minutes");
    const [amPmOption, setAmPmOption] = useOption("Am-Pm");
    const { setAlarmTime, pauseAlarm, alarmExists, setAlarmExists } =
        useContext(Context);


    const setAlarm = () => {
        setAlarmExists(true);
        setAlarmTime(`${hour}${minutes}${amPmOption}`)
    };

    const stopAlarm = () => {
            pauseAlarm();
            setAlarmExists(false);
    }

    return (
        <div>
            <div>
                <select {...setHour}>
                    <option disabled value="Hour">
                        Hour
                    </option>
                    {hourNumber.map((hour, index) => (
                    <option key={index} value={hour}>
                            {hour}    
                    </option>
                    ))}
                </select>
                <select {...setMinutes}>
                    <option disabled value="Minutes">
                        Minutes
                    </option>
                    {minutesNumber.map((minutes, index) => (
                    <option key={index} value={minutes}>
                            {minutes}    
                    </option>
                    ))}
                </select>
                <select {...setAmPmOption}>
                    <option disabled value="Am-Pm">
                        Am/Pm
                    </option>
                    <option value="AM">Am</option>
                    <option value="PM">Pm</option>
                </select>
            </div>
            <button onClick={alarmExists ? stopAlarm : setAlarm}>
                        {alarmExists ? "Clear Alarm" : "Set Alarm"}
            </button>
        </div>
    )
}


export default Alarm;