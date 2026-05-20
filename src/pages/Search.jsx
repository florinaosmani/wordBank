import { useState } from "react";
import CheckBox from "../components/CheckBox";

import classes from '../resources/css/search.module.css';

function Search () {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleCheckBox = () => {
        setIsOpen(isOpen => !isOpen);
    }

    return (
        <div>
            <div className={classes.questionContainer}>
                <p>Show</p>
                <CheckBox />
                <p>for</p>
                <input type='text' placeholder="word"/>
                <p>or for a</p>
                <button>
                    random word
                </button>
            </div>
        </div>
    )
}

export default Search;