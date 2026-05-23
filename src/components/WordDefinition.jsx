import classes from '../resources/css/components/wordDefinition.module.css';
import WordDefinitionList from './WordDefinitionList';

function WordDefinition ({ def, word }) {
    return (
        <div className={classes.wordDefinitionContainer}>
            <h3>
                {word} | {def.partOfSpeech}
            </h3>
            <h3>Definition</h3>
            <p>{def.definition}</p>
            <h3>
                Examples
            </h3>
            <WordDefinitionList list={def.examples} />
            <h3>
                Synonyms
            </h3>
            <WordDefinitionList list={def.synonyms} />
            <h3>
                Antonyms
            </h3>
            <WordDefinitionList list={def.antonyms} />
        </div>
    )
}

export default WordDefinition;