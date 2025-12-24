import MovieCard from './components/MovieCard' 
import Home from './pages/Home'
import Favourites from './pages/Favourites'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import './css/App.css'

function App() {
  
  return (
    <div>
      <Navbar/>
   <main className="main-content">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/favourites" element={<Favourites/>}/>
    </Routes>
   </main>
   </div>
  )
}

export default App
