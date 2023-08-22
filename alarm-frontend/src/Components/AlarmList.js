import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Alarm from './Alarm';
import AddAlarm from './AddAlarm';
import { BASE_URL } from '../constants';


function AlarmList({ setStateSliceName, setDifficulty }) {
    // List all the alarms in the database, making them active
    const [alarms, setAlarms] = useState([]);
    let [count, setCount] = useState(0); 
    // Rerenders the component
    const handleCount = () => { 
        setCount(prevCount => prevCount + 1);
    }
    
    // Gets updated list of alarms if one is added or deleted
    useEffect(function askAlarmAPI() {
        async function getMoreAlarms() {
            const alarms = await axios.get(`${BASE_URL}/alarms`);
            setAlarms(alarms.data);
        }
        getMoreAlarms();
    }, [count])

    return (
        <div>
            {alarms.map(({AMorPM, difficulty, hour, id, minute, type}) => (
                <div key={id}>
                    <Alarm 
                    AMorPM={AMorPM}
                    difficulty={difficulty}
                    hour={hour}
                    id={id}
                    minute={minute}
                    type={type}
                    handler={handleCount}
                    setStateSliceName={setStateSliceName}
                    setDifficulty={setDifficulty}
                    />
                </div>
            ))}
            <AddAlarm handler={handleCount}/>
        </div>
        
    )
}

export default AlarmList;


