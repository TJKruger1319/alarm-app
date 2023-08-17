import React, { createContext, useEffect, useState } from "react";


export const Context = createContext();

function ContextAlarm({ children }) {
    const [realHour, setHour] = useState("");
    const [realMinute, setMinute] = useState("");
    const [amPm, setAmPm] = useState("");

    useEffect(() => {
        // Gets the time
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


    


    return (
        <Context.Provider
            value={{
                realHour,
                realMinute,
                amPm,
            }}
        >
            {children}
        </Context.Provider>
    )
}

export default ContextAlarm;

