import WordDefinition from "./WordDefinition";
import classes from '../resources/css/components/favoriteBox.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare  } from '@fortawesome/free-regular-svg-icons'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'

function FavoriteBox ({ def , word, indexWord, indexDef}) {
    return (
        <div className={classes.favoriteBoxContainer}>
            <WordDefinition def={def} word={word}/>
            <p>{def.note}</p>
            <div className={classes.buttonContainer}>
                <button>
                    <FontAwesomeIcon icon={faPenToSquare} />
                </button>
                <button>
                    <FontAwesomeIcon icon={faTrashCan} />
                </button>
            </div>
        </div>
    )
}

export default FavoriteBox;