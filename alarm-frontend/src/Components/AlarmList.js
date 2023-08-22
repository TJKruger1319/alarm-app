import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Alarm from './Alarm';
import AddAlarm from './AddAlarm';

const BASE_URL = "http://127.0.0.1:5000"


async function getAlarms() {
    const alarms = await axios.get(`${BASE_URL}/alarms`);
    return alarms.data;
}
let response = await getAlarms();

function AlarmList() {
    const [alarms, setAlarms] = useState([response])
    let [count, setCount] = React.useState(0); 
    const handleCount = ()=>{ 
        setCount(++count);
        console.log(count); 
    }
    
    useEffect(function askAlarmAPI() {
        async function getMoreAlarms() {
            const alarms = await axios.get(`${BASE_URL}/alarms`);
            setAlarms([alarms.data]);
        }
        getMoreAlarms();
    }, [count])

    return (
        <div>
            {alarms[0].map(({AMorPM, difficulty, hour, id, minute, type}) => (
                <div key={id}>
                    <Alarm 
                    AMorPM={AMorPM}
                    difficulty={difficulty}
                    hour={hour}
                    id={id}
                    minute={minute}
                    type={type}
                    handler={handleCount}
                    />
                </div>
            ))}
            <AddAlarm handler={handleCount}/>
        </div>
        
    )
}

export default AlarmList;


