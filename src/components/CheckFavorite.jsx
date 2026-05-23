import classes from '../resources/css/components/checkFavorite.module.css';
import CheckBox from './CheckBox';

function CheckFavorite () {
    return (
        <div className={classes.favContainer}>
            <div className={classes.infoContainer}>
                <p>"word, verb <br/> definition" </p>
                <div className={classes.checkBoxContainer}>
                    <p>Save</p>
                    <CheckBox />
                </div>
                <div className={classes.textContainer}>
                    <label>Add a Note:</label>
                    <textarea maxLength="1000"></textarea>
                </div>
            </div>
            <div className={classes.buttonContainer}>
                <button>
                    Cancel
                </button>
                <button>
                    Save
                </button>
            </div>
        </div>
    )
}

export default CheckFavorite;