import classes from '../resources/css/components/checkBox.module.css';

const checkboxes = ["examples", "synonyms", "antonyms"];

function CheckBox () {
    return(
        <div className={classes.checkBoxContainer}>
            {checkboxes.map((box, i) => {
                return (
                    <div key={`checkBoxDiv_${i}`}>
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