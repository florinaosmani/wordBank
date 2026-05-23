import classes from '../resources/css/components/checkFavorite.module.css';
import CheckBox from './CheckBox';

function CheckFavorite ({ onClickClose, def, word, onChange, onClickSave}) {
    return (
        <form className={classes.favContainer}>
            <div className={classes.infoContainer}>
                <p>{word} | {def.partOfSpeech} <br/> {def.definition} </p>
                <div className={classes.textContainer}>
                    <label>Add a Note:</label>
                    <textarea maxLength="1000" onChange={onChange}></textarea>
                </div>
            </div>
            <div className={classes.buttonContainer}>
                <button onClick={onClickClose}>
                    Cancel
                </button>
                <button onClick={onClickSave}>
                    Save
                </button>
            </div>
        </form>
    )
}

export default CheckFavorite;