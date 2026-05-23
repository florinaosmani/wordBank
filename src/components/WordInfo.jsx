import WordDefinitionBox from "./WordDefinitionBox";
import CheckFavorite from "./CheckFavorite";

import classes from '../resources/css/components/wordInfo.module.css';
import { useState } from "react";

function WordInfo ({ wordData, checkBoxes }) {
    const [favOpen, setFavOpen] = useState(false);
    const [favIndex, setFavIndex] = useState(null);
    const [note, setNote] = useState("");

    const handleOpenFav = (e) => {
        setFavOpen(true);
        setFavIndex(e.currentTarget.value);
    }

    const handleCloseFav = () => {
        setFavOpen(false);
    }

    const handleChangeNote = (e) => {
        setNote(e.target.value);
    }

    const handleSaveNote = () => {
        /* SAVE NOTE HERE  PLUS CHANGE FAVORITE STATUS IN DB*/
        setFavIndex(null);
        setFavOpen(false);
        setNote("");
    }

    
    return (
        <div className={classes.wordInfoContainer}>
            <div className={classes.basicInfoContainer}>
                <h2>{wordData.word}</h2>
                <p>{wordData.pronunciation}</p>
                <p>{wordData.syllables} {wordData.syllables > 1 ? "syllables" : "syllable"}</p>
            </div>
            {wordData.results.map((def, i) => 
            <WordDefinitionBox 
            def={def} 
            index={i} 
            word={wordData.word} 
            key={i} 
            checkBoxes={checkBoxes}
            onClick={handleOpenFav}/>)}
            {favOpen && 
            <CheckFavorite onClickClose={handleCloseFav} def={wordData.results[favIndex]} word={wordData.word} onClickSave={handleSaveNote}/>
            }
        </div>
    )
}

export default WordInfo;