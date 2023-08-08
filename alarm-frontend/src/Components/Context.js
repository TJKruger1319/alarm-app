import React, { createContext, useEffect, useState } from "react";
import Sound from "../Placeholder/Whistling-SoundBible.com-1246385697.mp3"

const alarm = new Audio(Sound);
export const Context = createContext();

function ContextAlarm({ children }) {
    const [hour, setHour] = useState("");
    const [minute, setMinute] = useState("");
    const [amPm, setAmPm] = useState("");
    const [alarmTime, setAlarmTime] = useState("");
    const [alarmExists, setAlarmExists] = useState("");

    useEffect(() => {
        setInterval(() => {
            let date = new Date();

            let hours = date.getHours(),
                minutes = date.getMinutes(),
                ampm;

            if (hours >= 12) {
                hours = hours - 12;
                ampm = "PM";
            } else {
                ampm = "AM"
            }

            if (hours === 0) hours = 12;
            if (hours < 10) hours = `0${hours}`
            if (minutes < 10) minutes = `0${minutes}`

            setHour(hours);
            setMinute(minutes);
            setAmPm(ampm);
        }, 1000)
    }, [])

    if (alarmTime === `${hour}${minute}${amPm}`) {
        alarm.play();
        alarm.loop = true;
    }

    const pauseAlarm = () => {
        alarm.pause();
        setAlarmTime("");
    }

    return (
        <Context.Provider
            value={{
                hour,
                minute,
                amPm,
                alarmTime,
                setAlarmTime,
                pauseAlarm,
                alarmExists,
                setAlarmExists
            }}
        >
            {children}
        </Context.Provider>
    )
}

export default ContextAlarm;

