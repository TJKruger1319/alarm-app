import React from "react";
import { minutesNumber, hourNumber } from "../fixNumbers";
import useOption from "../Hooks/useOption";
//import { Context } from "./Context";

function AddAlarm() {
    const [hour, setHour] = useOption("Hour");
    const [minutes, setMinutes] = useOption("Minutes");
    const [amPmOption, setAmPmOption] = useOption("Am-Pm");


    

    // const stopAlarm = () => {
    //         pauseAlarm();
    //         setAlarmExists(false);
    // }

    const newAlarm = () => {
        //Adds new alarm to backend
        //TODO
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
            <button onClick={newAlarm}>
                        "Add Alarm"
            </button>
        </div>
    )
}


export default AddAlarm;