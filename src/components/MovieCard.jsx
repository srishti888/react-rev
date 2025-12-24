import "../css/MovieCard.css"
import {useMovieContext} from '../contexts/MovieContext'

function MovieCard({movie}){
    const {isFavourites, addToFavourites, removeFavourites} = useMovieContext()
    const favourite = isFavourites(movie.id)

    function onFavClick(e){
        e.preventDefault()
        e.stopPropagation()
        if(favourite) {
            removeFavourites(movie.id)
        } else {
            addToFavourites(movie)
        }
    } 
    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
                {/* <img src={movie.url || "https://via.placeholder.com/300x450"} alt={movie.title}/> */}

                <div className="movie-overlay">
                    <button className={`favorite-btn ${favourite ? "active" : ""}`} onClick={onFavClick}>
                        ♡
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split("-")[0]}</p>
            </div>
        </div>
    )
}

export default MovieCard;