import MovieCard from './components/MovieCard' 
import './App.css'

function App() {
  const movieNumber = 1;
  return (
    <>
    {movieNumber === 1 ? (
      <MovieCard movie={{title: "stranger things", release_date: "25 dec 2025"}}/>
      ) : (
      <MovieCard movie={{title: "the matrix", release_date: "25 dec 2025"}}/>
      )}
   </>
  )
}

export default App
