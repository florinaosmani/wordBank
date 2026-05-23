import FavoriteBox from '../components/FavoriteBox';
import classes from '../resources/css/pages/favorites.module.css';

function Favorites () {
    return(
        <div className={classes.favContainer}>
            <FavoriteBox />
            <FavoriteBox />
        </div>
    )
}

export default Favorites;