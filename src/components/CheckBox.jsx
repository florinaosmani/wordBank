import classes from '../resources/css/checkBox.module.css';

const checkboxes = ["examples", "synonyms", "antonyms", "rhymes"];

function CheckBox () {
    return(
        <div className={classes.checkBoxContainer}>
            {checkboxes.map(box => {
                return (
                    <div>
                        <input type="checkbox" id={box} name={box} value={box}/>
                        <label htmlFor={box}>
                            {box}
                        </label>
                    </div>
                );
            })}
        </div>
    )
}

export default CheckBox;