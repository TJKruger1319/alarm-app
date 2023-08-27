import React from "react";
import { minutesNumber, hourNumber } from "../fixNumbers";
import useOption from "../Hooks/useOption";
import axios from "axios";
import { BASE_URL } from '../constants';
import '../css/addAlarm.css';

function AddAlarm({ handler }) {
    const [hour, setHour] = useOption("Hour");
    const [minutes, setMinutes] = useOption("Minutes");
    const [amPmOption, setAmPmOption] = useOption("Am-Pm");
    const [type, setType] = useOption("type");
    const [difficulty, setDiff] = useOption("diff");

    async function newAlarm() {
        // Sends new alarm to database if valid
        if (
            hour !== "Hour" &&
            minutes !== "Minutes" &&
            amPmOption !== 'Am-Pm' &&
            type !== "type" &&
            difficulty !== "diff"
        ) {
            await axios.post(`${BASE_URL}/alarms/add`, {
                hour, minutes, amPmOption, type, difficulty
            })
            // Update AlarmList
            handler();
        } else {
            alert("Please select an option for each field")
        }
    }

    return (
        <div>
            <div className="add-container">
                <select className="select" {...setHour}>
                    <option disabled value="Hour">
                        Hour
                    </option>
                    {hourNumber.map((hour, index) => (
                    <option key={index} value={hour}>
                            {hour}    
                    </option>
                    ))}
                </select>
                <select className="select" {...setMinutes}>
                    <option disabled value="Minutes">
                        Minutes
                    </option>
                    {minutesNumber.map((minutes, index) => (
                    <option key={index} value={minutes}>
                            {minutes}    
                    </option>
                    ))}
                </select>
                <select className="select" {...setAmPmOption}>
                    <option disabled value="Am-Pm">
                        Am/Pm
                    </option>
                    <option value="AM">Am</option>
                    <option value="PM">Pm</option>
                </select>
                <select className="select" {...setType}>
                    <option disabled value="type">
                        Type
                    </option>
                    <option value="Math">Math</option>
                    <option value="Pokèmon">Pokèmon</option>
                    <option value="Typing">Typing</option>
                </select>
                <select className="select" {...setDiff}>
                    <option disabled value="diff">
                        Difficulty
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>                    
                    <option value="3">3</option>                                   
                </select>
            </div>
            <button onClick={newAlarm} className="add-btn">
                        Add Alarm
            </button>
        </div>
    )
}

export default AddAlarm;