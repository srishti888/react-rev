import "../css/MovieCard.css"

function MovieCard({movie}){

    function onFavClick(){
        alert("clicked")
    } 
    return (
        <div className="movie-card">
            <div className="movie-poster">
                {/* <img src={movie.url} alt={movie.title}/> */}
                <img src={movie.url || "https://via.placeholder.com/300x450"} alt={movie.title}/>

                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={onFavClick}>
                        ♡🤍
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>
        </div>
    )
}

export default MovieCard;