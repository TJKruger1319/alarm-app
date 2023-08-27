import React, { useState, useEffect } from "react";
import axios from "axios";
import { pauseAlarm } from "../sound";
import '../css/pokemon.css';

function Pokemon({ difficulty, setStateSliceName }) {
    const [name, setName] = useState("");
    const [sprite, setSprite] = useState("");
    const [length, setLength] = useState(difficulty);
    const [formData, setFormData] = useState('');
    const [count, setCount] = useState(0);
    



    if (length === 0) {
        // Ends the alarm after all Pokemon have been identified
        pauseAlarm();
        setStateSliceName("Base");
    }

    const handleSubmit = (e) => {
        // Checks to see if pokemon is correctly guessed
        e.preventDefault();
        let LowerCaseFormData = formData.toLowerCase();
        let fixedName = name.replace(/-/g, ' ');
        if (LowerCaseFormData === fixedName) {
            setLength(length-1);
            e.target.reset();
        } else {
            alert("Incorrect!");
        }
    }

    const dontKnowPokemon = () => {
        // Allows user to switch to a different pokemon if they don't know the current one
        alert(`The name of this Pokèmon is: ${name}`);
        setCount(prevCount => prevCount + 1);
    }


    useEffect(function askPokemonAPI() {
        async function getPokemon() {
            // Gets the Pokemon from the api
            const id = Math.floor(Math.random() * (1010 - 1) + 1);
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            setName(response.data.species.name);
            setSprite(response.data.sprites.front_default)
        }
        getPokemon();

    }, [length, count])

    return (
        <div className="poke-container">
            <img className="pokemon-image" src={sprite} alt=""/>
            <form onSubmit={handleSubmit}>
                <label className="scale">
                Pokèmon Name: 
                    <input 
                        className="scale"
                        type="text" 
                        value={FormData.text} 
                        onInput={e => setFormData(String(e.target.value))}
                    />
                </label>
                <div className="button-container">
                    <button className="submit-btn">Submit answer</button>
                    <button onClick={dontKnowPokemon} className="idk-btn" type="button">I don't know!</button>
                </div>
            </form>
            
            <p className="scale">Pokèmon remaining: {length}</p>
        </div>
        
    )

}

export default Pokemon;