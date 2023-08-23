import React, { useState, useEffect } from "react";
import axios from "axios";
import { pauseAlarm } from "../sound";
import { BASE_URL } from '../constants';

function Typing({ difficulty, setStateSliceName }) {
    const [sentence, setSentence] = useState("");
    const [length, setLength] = useState(difficulty);
    const [formData, setFormData] = useState('');

    if (length === 0) {
        // Ends the alarm after all sentences have been typed out
        pauseAlarm();
        setStateSliceName("Base");
    }

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
        <div>
            <h2>Type out the sentence: </h2>
            <p>{sentence}</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Answer: 
                    <input 
                        type="text" 
                        value={FormData.text} 
                        onInput={e => setFormData(String(e.target.value))}
                    />
                </label>
                <button>Submit sentence</button>
            </form>
            <p>Sentences remaining: {length}</p>
        </div>
    )

}

export default Typing;