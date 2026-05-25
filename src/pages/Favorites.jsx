import CheckFavorite from '../components/CheckFavorite';
import FavoriteBox from '../components/FavoriteBox';
import classes from '../resources/css/pages/favorites.module.css';

import { useState, useEffect } from 'react';
import { getAllWords, updateWord } from '../api/words';

function Favorites () {
    const [showEdit, setShowEdit] = useState(false);
    const [allWords, setAllWords] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const [note, setNote] = useState("");
    const [favDefIndex, setFavDefIndex] = useState(null);
    const [favIndex, setFavIndex] = useState(null);
    const [favError, setFavError] = useState(false);
    const [deleteError, setDeleteError] = useState(false);

    useEffect(()=>{
        async function loadWords() {
            try{
                const data = await getAllWords();
                setAllWords(data);
            } catch (e) {
                setError(e.message);
            } finally {
                setIsLoading(false);
            }
        }
        loadWords();
    },[])

    const filteredWords = allWords.filter(word => word.isFavoriteWord);

    const handleSubmit = async (word) => {
        setDeleteError(false);
        setFavError(false);
        try {
            const updated = await updateWord(word.id, word);
            setAllWords(prev => prev.map(w => (w.id === word.id ? updated : w)));
            return true;
        } catch (e) {
            return false;
        }
    }

    const handleClickEdit = (e) => {
        if (deleteError) {
            setDeleteError(false);
            setShowEdit(true);
            setFavDefIndex(e.currentTarget.value.split("_")[0]);
            setFavIndex(e.currentTarget.value.split("_")[1]);
        }
       
        if(!showEdit && !favIndex){
            setShowEdit(true);
            setFavDefIndex(e.currentTarget.value.split("_")[0]);
            setFavIndex(e.currentTarget.value.split("_")[1]);
        }
    }

    const handleChangeNote = (e) => {
        setNote(e.target.value);
    }
    
    const handleDeleteWord = async (e) => {
        setDeleteError(false);

        const defIndex = e.currentTarget.value.split("_")[0];
        const wordIndex = e.currentTarget.value.split("_")[1]
        setFavDefIndex(defIndex);
        setFavIndex(wordIndex);

        const wordData = filteredWords.filter(word => word.id == wordIndex)[0];

        let changedWord;
            
        const changedDef = {
            ...wordData.results[defIndex],
            isFavoriteDefinition: false,
            note: ""
        };

        let hasAnotherFav = false;
        let counter = 0;
        wordData.results.forEach(def => {
            if (def.isFavoriteDefinition){
                counter++;
            }
        })
        if(counter > 1) {
            hasAnotherFav = true;
        }
        
        if (hasAnotherFav) {
            changedWord = {
                ...wordData,
            isFavoriteWord: true,
            results: wordData.results.map((def, i) => (i == defIndex ? changedDef : def))
            };
        } else {
            changedWord = {
                ...wordData,
            isFavoriteWord: false,
            results: wordData.results.map((def, i) => (i == defIndex ? changedDef : def))
            };
        }

        const success = await handleSubmit(changedWord);

        if(!success){
            setDeleteError(true);
        } else {
            setFavDefIndex(null);
            setFavIndex(null);
        }
    }

    const handleCloseFav = () => {
        setShowEdit(false);
        setNote("");
        setFavDefIndex(null);
        setFavIndex(null);
        setFavError(false);
    }

    const handleSaveNote = async (e) => {
        e.preventDefault();

        const word = filteredWords.filter(word => word.id === favIndex)[0];

        const changedDef = {
            ...word.results[favDefIndex],
            note: note
        };

        const changedWord = {
            ...word,
        results: word.results.map((def, i) => (i == favDefIndex ? changedDef : def))
        };

        const success = await handleSubmit(changedWord);

        if (success) {
            setFavDefIndex(null);
            setShowEdit(false);
            setNote("");
            setFavIndex(null);
            setFavError(false);
        } else {
            setFavError(true);
        }
    }

    if(isLoading){
        return (
            <p>I'm still loading</p>
        )
    }

    if(error){
        return(
            <div>
                <p style={{marginBottom:1 + "rem"}}>
                    Error: {error}
                </p>
                <button 
                onClick={() => window.location.reload()}>
                    Try again
                </button>
            </div>
        )
    }

    return(
        <div className={classes.favContainer}>
            {filteredWords.map((word) => {

                if(word.isFavoriteWord){
                    return word.results.map((def, i) => {
                        if(def.isFavoriteDefinition){
                            return (
                                <FavoriteBox 
                                def={def} 
                                word={word.word} 
                                key={`favbox_${i}${word.id}`} 
                                onClickDelete={handleDeleteWord} 
                                onClickEdit={handleClickEdit}
                                defIndex={i}
                                wordIndex={word.id}
                                deleteError={word.id == favIndex && i == favDefIndex ? deleteError : false}/>
                            )
                        } else {
                            return null;
                        }
                    })
                }
            })}
            { showEdit && 
            <CheckFavorite 
            onClickClose={handleCloseFav} 
            def={filteredWords.filter(word => word.id === favIndex)[0].results[favDefIndex]}
            word={filteredWords.filter(word => word.id === favIndex)[0].word}
            onSubmit={handleSaveNote}
            note={note}
            onChange={handleChangeNote}
            error={favError}/>}
        </div>
    )
}

export default Favorites;