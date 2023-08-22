import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from '../constants';
import { pauseAlarm } from "../sound";



function Math({ difficulty, setCurrentType }) {
    const [num1, setNum1] = useState();
    const [num2, setNum2] = useState();
    const [length, setLength] = useState(difficulty);
    const [formData, setFormData] = useState('');
    const [correct, setCorrect] = useState();
    
    if (length === 0) {
        pauseAlarm();
        setCurrentType("Base");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData === correct) {
            setLength(length-1);
        } else {
            alert("Incorrect!")
        }
    }

    useEffect(function askAlarmAPI() {
        async function getMathProblem() {
            const response = await axios.get(`${BASE_URL}/Math`);
            setNum1(response.data[0].first);
            setNum2(response.data[0].second);
            setCorrect(response.data[0].first + response.data[0].second);
        }
        getMathProblem();

    }, [length])

    return (
        <div>
            <p>Solve the math problem:</p>
            <p>{num1} + {num2}</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Answer: 
                    <input 
                        type="text" 
                        value={FormData.text} 
                        onInput={e => setFormData(parseInt(e.target.value))}
                    />
                </label>
                <button>Submit answer</button>
            </form>
            <button onClick={pauseAlarm}>Temp pause button</button>
            <p>Problems remaining: {length}</p>
        </div>
    )
}

export default Math;