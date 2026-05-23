import { useState, useEffect } from "react";

import RandomBox from "../components/RandomBox";
import WordInfo from "../components/WordInfo";
import Recents from "../components/Recents";
import CheckFavorite from "../components/CheckFavorite";

import classes from '../resources/css/pages/home.module.css';


const allWords={
  "words": [
    {
      "id": 1,
      "word": "abundant",
      "results": [
        {
          "definition": "existing or available in large quantities; more than enough",
          "partOfSpeech": "adjective",
          "synonyms": [
            "plentiful",
            "ample",
            "copious",
            "profuse",
            "lavish",
            "bountiful",
            "rich",
            "generous"
          ],
          "examples": [
            "The region has abundant natural resources.",
            "There was abundant evidence to support the claim."
          ],
          "antonyms": [
            "scarce",
            "rare",
            "sparse",
            "lacking",
            "insufficient",
            "meager"
          ],
          "isFavoriteDefinition": false,
          "note": ""
        }
      ],
      "syllables": 3,
      "pronunciation": "\u0259\u02c8b\u028cnd\u0259nt",
      "isFavoriteWord": false
    },
    {
      "id": 2,
      "word": "benevolent",
      "results": [
        {
          "definition": "well meaning and kindly disposed toward others",
          "partOfSpeech": "adjective",
          "synonyms": [
            "kind",
            "charitable",
            "generous",
            "compassionate",
            "philanthropic",
            "altruistic",
            "magnanimous"
          ],
          "examples": [
            "She was a benevolent leader who always looked after her people.",
            "The benevolent donor gave millions to the hospital."
          ],
          "antonyms": [
            "malevolent",
            "cruel",
            "selfish",
            "unkind",
            "mean",
            "spiteful"
          ],
          "isFavoriteDefinition": false,
          "note": ""
        }
      ],
      "syllables": 4,
      "pronunciation": "b\u0259\u02c8nev\u0259l\u0259nt",
      "isFavoriteWord": false
    },
    {
      "id": 3,
      "word": "concise",
      "results": [
        {
          "definition": "giving a lot of information clearly and in few words; brief but comprehensive",
          "partOfSpeech": "adjective",
          "synonyms": [
            "brief",
            "succinct",
            "terse",
            "compact",
            "pithy",
            "laconic",
            "short"
          ],
          "examples": [
            "His concise explanation made the topic easy to understand.",
            "Please write a concise summary of the report."
          ],
          "antonyms": [
            "lengthy",
            "verbose",
            "wordy",
            "long-winded",
            "rambling",
            "prolix"
          ],
          "isFavoriteDefinition": false,
          "note": ""
        }
      ],
      "syllables": 2,
      "pronunciation": "k\u0259n\u02c8sa\u026as",
      "isFavoriteWord": false
    },
    {
      "id": 4,
      "word": "diligent",
      "results": [
        {
          "definition": "having or showing care and conscientiousness in one's work or duties",
          "partOfSpeech": "adjective",
          "synonyms": [
            "hardworking",
            "industrious",
            "assiduous",
            "conscientious",
            "dedicated",
            "persistent",
            "tireless"
          ],
          "examples": [
            "She was a diligent student who never missed a deadline.",
            "His diligent efforts finally paid off."
          ],
          "antonyms": [
            "lazy",
            "idle",
            "negligent",
            "careless",
            "slothful",
            "inattentive"
          ],
          "isFavoriteDefinition": false,
          "note": ""
        }
      ],
      "syllables": 3,
      "pronunciation": "\u02c8d\u026al\u026ad\u0292\u0259nt",
      "isFavoriteWord": false
    },
    {
      "id": 5,
      "word": "eloquent",
      "results": [
        {
          "definition": "fluent or persuasive in speaking or writing",
          "partOfSpeech": "adjective",
          "synonyms": [
            "articulate",
            "expressive",
            "fluent",
            "persuasive",
            "well-spoken",
            "silver-tongued"
          ],
          "examples": [
            "She gave an eloquent speech that moved the entire audience.",
            "He was an eloquent writer whose prose flowed beautifully."
          ],
          "antonyms": [
            "inarticulate",
            "tongue-tied",
            "incoherent",
            "mumbling",
            "halting"
          ],
          "isFavoriteDefinition": false,
          "note": ""
        }
      ],
      "syllables": 3,
      "pronunciation": "\u02c8el\u0259kw\u0259nt",
      "isFavoriteWord": false
    },
    {
      "id": 6,
      "word": "flourish",
      "results": [
        {
          "definition": "to grow or develop in a healthy or vigorous way",
          "partOfSpeech": "verb",
          "synonyms": [
            "thrive",
            "prosper",
            "bloom",
            "blossom",
            "grow",
            "succeed",
            "burgeon"
          ],
          "examples": [
            "The business began to flourish after the new manager took over.",
            "Plants flourish in warm, humid conditions."
          ],
          "antonyms": [
            "wither",
            "decline",
            "fail",
            "struggle",
            "languish",
            "deteriorate"
          ],
          "isFavoriteDefinition": false,
          "note": ""
        },
        {
          "definition": "a bold or extravagant gesture or action made especially to attract attention",
          "partOfSpeech": "noun",
          "synonyms": [
            "gesture",
            "display",
            "show",
            "fanfare",
            "wave"
          ],
          "examples": [
            "He signed his name with a dramatic flourish.",
            "She entered the room with a flourish."
          ],
          "antonyms": [],
          "isFavoriteDefinition": false,
          "note": ""
        }
      ],
      "syllables": 2,
      "pronunciation": "\u02c8fl\u028cr\u026a\u0283",
      "isFavoriteWord": false
    },
    {
      "id": 7,
      "word": "gratitude",
      "results": [
        {
          "definition": "the quality of being thankful and appreciative",
          "partOfSpeech": "noun",
          "synonyms": [
            "thankfulness",
            "appreciation",
            "gratefulness",
            "recognition",
            "acknowledgment"
          ],
          "examples": [
            "She expressed her gratitude with a heartfelt letter.",
            "He felt deep gratitude toward those who had helped him."
          ],
          "antonyms": [
            "ingratitude",
            "ungratefulness",
            "thanklessness",
            "indifference"
          ],
          "isFavoriteDefinition": false,
          "note": ""
        }
      ],
      "syllables": 3,
      "pronunciation": "\u02c8\u0261r\u00e6t\u026atju\u02d0d",
      "isFavoriteWord": false
    }]};

function Home () {
    const [index, setIndex] = useState(null);

    useEffect(() => {
        const ran = Math.floor(Math.random() * allWords.words.length);
        setIndex(ran);
    },[])

    const wordData = allWords.words[index];

    return (
        <div className={classes.homeContainer}>
            <RandomBox />
            <div className={classes.flexContainer}>
                <WordInfo wordData={wordData}/>
                <Recents />
            </div>
        </div>
    )
}

export default Home;