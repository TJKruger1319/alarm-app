import React, { useContext, useEffect, useState } from "react";
import { Context } from "./Context";
import '../css/alarm.css';
import Sound from "../LostWoods.mp3";

function Alarm({AMorPM, difficulty, hour, id, minute, type}) {
    const [alarm] = useState(new Audio(Sound))
    const { realHour, realMinute, amPm } = useContext(Context);
    const [alarmTime, setAlarmTime] = useState();
    const [alarmExists, setAlarmExists] = useState("");

    const setAlarm = () => {
        console.log("You have set an alarm!")
        setAlarmExists(true);
        setAlarmTime(`${hour}${minute}${AMorPM}`);
    };

    const noAlarm = () => {
        console.log("Alarm is turned off!")
        setAlarmExists(false);
        setAlarmTime("");
    }

    const pauseAlarm = () => {
        console.log("Alarm is paused")
        alarm.pause();
    }

    if (hour < 10) hour = `0${hour}`
    if (minute < 10) minute = `0${minute}`

    if (alarmTime === `${realHour}${realMinute}${amPm}`) {
        console.log("Alarm is going off!");
        alarm.play();
        alarm.loop = true;
    }

    useEffect(() => {
        console.log("useEffect set an alarm")
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

            <button onClick={pauseAlarm}>TEMP PAUSE BUTTON</button>
        </div>
    )
}

export default Alarm;