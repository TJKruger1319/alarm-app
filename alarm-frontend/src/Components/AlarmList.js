import React, { useState } from 'react';
import axios from 'axios';
import Alarm from './Alarm';

const BASE_URL = "http://127.0.0.1:5000"

async function getAlarms() {
    const alarms = await axios.get(`${BASE_URL}/alarms`);
    return alarms.data;
}
let response = await getAlarms();

function AlarmList() {
    const [alarms] = useState([response])
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
                    />
                </div>
            ))}
        </div>
    )
}

export default AlarmList;


