import React, { useState, useEffect } from "react";
import axios from "axios";
import { pauseAlarm } from "../sound";
import { BASE_URL } from '../constants';
import '../css/typing.css';

function Typing({ difficulty, setStateSliceName }) {
    const [sentence, setSentence] = useState("");
    const [length, setLength] = useState(difficulty);
    const [formData, setFormData] = useState('');
    const [width, setWidth] = useState(10);

    if (length === 0) {
        // Ends the alarm after all sentences have been typed out
        pauseAlarm();
        setStateSliceName("Base");
    }

    const changeHandler = evt => {
        // Adjusts the length of the input based on how much text there is
        setWidth(evt.target.value.length);
    };

    const handleSubmit = (e) => {
        // Checks to see if sentence has been answered correctly
        e.preventDefault();
        if (formData === sentence) {
            setLength(length-1);
            e.target.reset();
        } else {
            alert("Incorrect!");
        }
    }

    useEffect(function askWordAPI() {
        async function getWordsForSentence() {
            // Gets the sentence from the api
            const response = await axios.get(`${BASE_URL}/Typing`);
            setSentence(response.data)
        }
        getWordsForSentence();

    }, [length])

    return (
        <div className="typing-container">
            <h2 className="scale">Type out the sentence: </h2>
            <p className="scale">{sentence}</p>
            <form onSubmit={handleSubmit}>
                <label className="scale">
                    Answer: 
                    <input
                        style={{  width: width +'ch' }}
                        autoFocus
                        onChange={changeHandler}
                        type="text" 
                        value={FormData.text} 
                        onInput={e => setFormData(String(e.target.value))}
                    />
                </label>
                <button className="submit-btn">Submit sentence</button>
            </form>
            <p className="scale">Sentences remaining: {length}</p>
        </div>
    )

}

export default Typing;