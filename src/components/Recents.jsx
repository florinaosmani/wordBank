import classes from '../resources/css/components/recents.module.css';

const lastWords = ['word', 'apple' , 'baum' , 'lolo', 'word', 'apple' , 'baum' , 'lolo', 'word', 'apple'];

function Recents() {
    return (
        <div className={classes.recentContainer}>
            <h2>Letzte Wörter</h2>
            <div className={classes.wordsContainer}>
                {lastWords.map((word, i) =>{
                    return (
                        <p key={`recents_${word}_${i}`}>{word}</p>
                    )
                })}
            </div>
        </div>
    )
}

export default Recents;