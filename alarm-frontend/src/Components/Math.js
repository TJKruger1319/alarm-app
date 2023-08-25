import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from '../constants';
import { pauseAlarm } from "../sound";
import '../css/math.css';


function Math({ difficulty, setStateSliceName }) {
    const [num1, setNum1] = useState();
    const [num2, setNum2] = useState();
    const [length, setLength] = useState(difficulty);
    const [formData, setFormData] = useState('');
    const [correct, setCorrect] = useState();
    
    if (length === 0) {
        // Ends the alarm after all questions have been answered
        pauseAlarm();
        setStateSliceName("Base");
    }

    const handleSubmit = (e) => {
        // Checks to see if math problem has been answered correctly
        e.preventDefault();
        if (formData === correct) {
            setLength(length-1);
        } else {
            alert("Incorrect!");
        }
        e.target.reset();
    }

    useEffect(function askAlarmAPI() {
        async function getMathProblem() {
            // Gets the math problems from the api
            const response = await axios.get(`${BASE_URL}/Math`);
            setNum1(response.data.first);
            setNum2(response.data.second);
            setCorrect(response.data.first + response.data.second);
        }
        getMathProblem();

    }, [length])

    return (
        <div className="math-container">
            <h4 className="scale">Solve the math problem:</h4>
            <p className="scale">{num1} + {num2}</p>
            <form onSubmit={handleSubmit}>
                <label className="scale">
                    Answer: 
                    <input 
                        type="text" 
                        value={FormData.text} 
                        onInput={e => setFormData(parseInt(e.target.value))}
                    />
                </label>
                <button className="submit-btn">Submit answer</button>
            </form>
            <b className="scale">Problems remaining: {length}</b>
        </div>
    )
}

export default Math;