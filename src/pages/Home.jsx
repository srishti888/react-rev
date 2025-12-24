import MovieCard from '../components/MovieCard'
import {useState, useEffect} from "react"
import "../css/Home.css"
import {searchMovies, getPopularMovies} from '../services/api'

function Home(){
    const [searchQuery, setSearchQuery] = useState("");
    const movies = [
        {id: 1, title: "stranger things", release_date: "25 dec 2025"},
        {id: 2, title: "terminator", release_date: "1999"},
        {id: 3, title: "the sky is pink", release_date: "2018"},
        {id: 4, title: "dhurandar", release_date: "11 dec 2025"}
    ];

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
    }

    return  <div className="home">
        <form onSubmit={handleSearch} className="search-form">
         <input type="text" 
         placeholder="search for movies..." 
         className="search-input"
         value={searchQuery}
         onChange= {(e) => setSearchQuery(e.target.value)}/>

         <button type="submit"
         className="search-btn">search
         </button>

        </form>

        <div className="movie-grid"> 
        {movies.map( (movie) => 
          <MovieCard movie={movie} key={movie.id}/>)}
        </div>
    </div>
   
   
    
}
export default Home