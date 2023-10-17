import React, { useContext, useEffect, useState } from "react";
import { Context } from "./Context";
import '../css/alarm.css';
import { alarm } from "../sound";
import axios from "axios";
import { BASE_URL } from '../constants';

function Alarm({AMorPM, difficulty, hour, id, minute, type, handler, setStateSliceName, setDifficulty}) {
    // Actual alarm component
    const { realHour, realMinute, amPm } = useContext(Context);
    const [alarmTime, setAlarmTime] = useState();
    const [alarmExists, setAlarmExists] = useState("");

    const setAlarm = () => {
        // Makes the alarm exist and able to go off
        setAlarmExists(true);
        setAlarmTime(`${hour}${minute}${AMorPM}`);
    };

    const noAlarm = () => {
        // Turns off alarm
        setAlarmExists(false);
        setAlarmTime("");
    }

    

    async function deleteAlarm() {
        // Deletes alarm from database
        await axios.delete(`${BASE_URL}/alarms/${id}`);
        handler();
    }


    // Correctly formats the hours and minutes
    if (hour < 10) hour = `0${hour}`
    if (minute < 10) minute = `0${minute}`

    if (alarmTime === `${realHour}${realMinute}${amPm}`) {
        // Sets the alarm off and plays the sound
        alarm.play();
        alarm.loop = true;
        setStateSliceName(`${type}`);
        setDifficulty(`${difficulty}`);
    }

    useEffect(() => {
        // Sets the alarms upon intial render
        setAlarmExists(true);
        setAlarmTime(`${hour}${minute}${AMorPM}`);
      }, [hour, minute, AMorPM]);

    return (
        <div className="alarm">
            <div>
            <h3>{`${hour}:${minute} ${AMorPM}`}</h3>
            <p>{`Type: ${type} Difficulty: ${difficulty}`}</p>
            </div>
            <div className="button-container">
                <label className="switch">
                    <input type="checkbox" onClick={alarmExists ? noAlarm : setAlarm} defaultChecked></input>
                    <span className="slider round"></span>
                </label>
                <button className="delete-btn" onClick={deleteAlarm}>Delete Alarm</button>
            </div>
        </div>
    )
}

export default Alarm;