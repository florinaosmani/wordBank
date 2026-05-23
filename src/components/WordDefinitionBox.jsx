import WordDefinition from "./WordDefinition";
import classes from '../resources/css/components/wordDefinitionBox.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as heartFull } from '@fortawesome/free-solid-svg-icons'
import { faHeart as heartEmpty } from '@fortawesome/free-regular-svg-icons'

function WordDefinitionBox ({ def, index, word}) {
    return (
        <div className={classes.wordDefinitionBoxContainer} key={`wordDefinition_${index}`}>
            <p className={classes.defNum}>
                {index + 1}
            </p>
            <WordDefinition def={def} word={word}/>
            <button className={classes.favButton}>
                {def.isFavoriteDefinition && <FontAwesomeIcon icon={heartFull} />}
                {!def.isFavoriteDefinition && <FontAwesomeIcon icon={heartEmpty} />}
            </button>
        </div>
    )
}

export default WordDefinitionBox;