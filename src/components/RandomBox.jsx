import classes from '../resources/css/components/randomBox.module.css';
import CheckBox from './CheckBox';

function RandomBox () {
    return(
        <div className={classes.questionContainer}>
            <div className={classes.borderStyling}>
                <p>Show</p>
                <CheckBox />
                <p>for a random word</p>
            </div>
            <button>
                Go
            </button>
        </div>
    )
}

export default RandomBox;