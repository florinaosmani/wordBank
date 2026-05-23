import WordDefinitionBox from "./WordDefinitionBox";

import classes from '../resources/css/components/wordInfo.module.css';

function WordInfo ({ wordData }) {
    return (
        <div className={classes.wordInfoContainer}>
            <div className={classes.basicInfoContainer}>
                <h2>{wordData.word}</h2>
                <p>{wordData.pronunciation}</p>
                <p>{wordData.syllables} {wordData.syllables > 1 ? "syllables" : "syllable"}</p>
            </div>
            {wordData.results.map((def, i) => <WordDefinitionBox def={def} index={i} word={wordData.word} key={i}/>)}
            {/* <CheckFavorite /> */}
        </div>
    )
}

export default WordInfo;