import WordDefinition from "./WordDefinition";
import classes from '../resources/css/components/favoriteBox.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare  } from '@fortawesome/free-regular-svg-icons'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'

function FavoriteBox () {
    return (
        <div className={classes.favoriteBoxContainer}>
            <WordDefinition />
            <p>Note</p>
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