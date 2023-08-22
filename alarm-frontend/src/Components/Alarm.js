import React, { useContext, useEffect, useState } from "react";
import { Context } from "./Context";
import '../css/alarm.css';
import Sound from "../LostWoods.mp3";
import axios from "axios";
const BASE_URL = "http://127.0.0.1:5000"

function Alarm({AMorPM, difficulty, hour, id, minute, type, handler}) {
    // Actual alarm component
    const [alarm] = useState(new Audio(Sound))
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

    const pauseAlarm = () => {
        // Turns off alarm sound
        alarm.pause();
    }

    async function deleteAlarm() {
        // Deletes alarm from database
        await axios.post(`${BASE_URL}/alarms/${id}/delete`);
        handler();
    }

    if (hour < 10) hour = `0${hour}`
    if (minute < 10) minute = `0${minute}`

    if (alarmTime === `${realHour}${realMinute}${amPm}`) {
        // Sets the alarm off and plays the sound
        alarm.play();
        alarm.loop = true;
    }

    useEffect(() => {
        // Sets the alarms upon intial render
        setAlarmExists(true);
        setAlarmTime(`${hour}${minute}${AMorPM}`);
      }, [hour, minute, AMorPM]);

    return (
        <div>
            <h2>{`${hour}:${minute} ${AMorPM}`}</h2>
            <p>{`Type: ${type}`}</p>
            <p>{`Difficulty: ${difficulty}`}</p>

            <label className="switch">
                <input type="checkbox" onClick={alarmExists ? noAlarm : setAlarm} defaultChecked={true}></input>
                <span className="slider round"></span>
            </label>
            <button onClick={deleteAlarm}>Delete Alarm</button>
            <button onClick={pauseAlarm}>TEMP PAUSE BUTTON</button>
        </div>
    )
}

export default Alarm;