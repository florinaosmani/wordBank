import { useState, useEffect } from "react";

import RandomBox from "../components/RandomBox";
import WordInfo from "../components/WordInfo";

import classes from '../resources/css/pages/home.module.css';
const allWords={
  "words": [
    {
      "id": 0,
      "word": "set",
      "isFavoriteWord": true,
      "results": [
        {
          "definition": "a group or collection of things that belong together",
          "partOfSpeech": "noun",
          "synonyms": [
            "collection",
            "group",
            "series",
            "assortment",
            "batch",
            "kit",
            "array"
          ],
          "examples": [
            "She bought a complete set of encyclopedias.",
            "He owns a full set of vintage trading cards."
          ],
          "antonyms": [
            "individual",
            "single",
            "unit"
          ],
          "isFavoriteDefinition": true,
          "note": ""
        },
        {
          "definition": "to put, lay, or stand something in a specified place or position",
          "partOfSpeech": "verb",
          "synonyms": [
            "place",
            "put",
            "position",
            "lay",
            "arrange",
            "deposit",
            "locate"
          ],
          "examples": [
            "She set the vase on the windowsill.",
            "He set his bag down and took a deep breath."
          ],
          "antonyms": [
            "remove",
            "lift",
            "take away",
            "displace"
          ],
          "isFavoriteDefinition": true,
          "note": ""
        },
        {
          "definition": "(of the sun or moon) to go below the horizon",
          "partOfSpeech": "verb",
          "synonyms": [
            "sink",
            "descend",
            "go down",
            "dip",
            "disappear"
          ],
          "examples": [
            "The sun set behind the mountains in a blaze of orange.",
            "They watched the moon set over the ocean."
          ],
          "antonyms": [
            "rise",
            "ascend",
            "climb",
            "appear"
          ],
          "isFavoriteDefinition": false,
          "note": ""
        },
        {
          "definition": "fixed or established in advance; not changing",
          "partOfSpeech": "adjective",
          "synonyms": [
            "fixed",
            "established",
            "predetermined",
            "rigid",
            "firm",
            "scheduled",
            "definite"
          ],
          "examples": [
            "The meeting starts at a set time every Monday.",
            "She followed a set routine every morning without fail."
          ],
          "antonyms": [
            "flexible",
            "variable",
            "changeable",
            "fluid",
            "open"
          ],
          "isFavoriteDefinition": false,
          "note": ""
        },
        {
          "definition": "the scenery and props used in a theatrical or film production",
          "partOfSpeech": "noun",
          "synonyms": [
            "scenery",
            "backdrop",
            "stage",
            "setting",
            "scene",
            "décor"
          ],
          "examples": [
            "The set was designed to look like a 1920s New York apartment.",
            "The entire cast gathered on set for the final scene."
          ],
          "antonyms": [],
          "isFavoriteDefinition": false,
          "note": ""
        }
      ],
      "syllables": 1,
      "pronunciation": "set"
    },
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
          "isFavoriteDefinition": true,
          "note": ""
        }
      ],
      "syllables": 4,
      "pronunciation": "b\u0259\u02c8nev\u0259l\u0259nt",
      "isFavoriteWord": true
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
          "isFavoriteDefinition": true,
          "note": ""
        }
      ],
      "syllables": 2,
      "pronunciation": "k\u0259n\u02c8sa\u026as",
      "isFavoriteWord": true
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
    const [index, setIndex] = useState(0);
    const [checkBoxes, setCheckBoxes] = useState({"examples": false, "synonyms": false, "antonyms": false});
    const [showWord, setShowWord] = useState(false);

    const handleClickGo = () => {
        let ran;
        do {  
            ran = Math.floor(Math.random() * allWords.words.length);
        } while (ran === index);

        setIndex(ran);

        setShowWord(true);
    }

    const wordData = allWords.words[index];

    const handleChangeCheckBox = (e) => {
        const toggleBool = !checkBoxes[e.target.value];
        setCheckBoxes(checkBoxes => ({...checkBoxes, [e.target.value]: toggleBool}));
    }

    return (
        <div className={classes.homeContainer}>
            <RandomBox onClick={handleClickGo} onChange={handleChangeCheckBox} checked={checkBoxes}/>
            {showWord && <WordInfo wordData={wordData} checkBoxes={checkBoxes}/>}
        </div>
    )
}

export default Home;