import { useState, useEffect } from "react";

import RandomBox from "../components/RandomBox";
import WordInfo from "../components/WordInfo";

import classes from '../resources/css/pages/home.module.css';

const API_URL = import.meta.env.VITE_API_URL;

function Home () {
    const [index, setIndex] = useState(0);
    const [checkBoxes, setCheckBoxes] = useState({"examples": false, "synonyms": false, "antonyms": false});
    const [showWord, setShowWord] = useState(false);
    const [allWords, setAllWords] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        async function loadWords() {
            try{
                const response = await fetch(`${API_URL}/words`);
                if (!response.ok) {
                    throw new Error("Words couldn't be loaded");
                }
                const data = await response.json();
                setAllWords(data);
            } catch (e) {
                setError(e.message);
            } finally {
                setIsLoading(false);
            }
        }
        loadWords();
    },[])

    const handleClickGo = () => {
        let ran;
        do {  
            ran = Math.floor(Math.random() * allWords.length);
        } while (ran === index);

        setIndex(ran);

        setShowWord(true);
    }

    const wordData = allWords[index];

    const handleChangeCheckBox = (e) => {
        const toggleBool = !checkBoxes[e.target.value];
        setCheckBoxes(checkBoxes => ({...checkBoxes, [e.target.value]: toggleBool}));
    }

    if (isLoading) {
        return (
            <div className={classes.homeContainer}>
                <RandomBox onClick={handleClickGo} onChange={handleChangeCheckBox} checked={checkBoxes}/>
                <p>I'm still loading. Please wait for me.</p>
            </div>
        )
    }

    if (error) {
        return (
            <div className={classes.homeContainer}>
                <RandomBox onClick={handleClickGo} onChange={handleChangeCheckBox} checked={checkBoxes}/>
                <div>
                    <p style={{marginBottom:1 + "rem"}}>Fehler: {error}</p>
                    <button onClick={() => window.location.reload()}>Erneut versuchen</button>
                </div>
            </div>
        )
    }

    return (
        <div className={classes.homeContainer}>
            <RandomBox onClick={handleClickGo} onChange={handleChangeCheckBox} checked={checkBoxes}/>
            {showWord && <WordInfo wordData={wordData} checkBoxes={checkBoxes}/>}
        </div>
    )
}

export default Home;