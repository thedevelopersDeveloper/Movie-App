import {useState,useEffect} from 'react'
import Navbar from './components/Navbar'
import Search from './components/Search'
import Card from './components/Card'
import {getPopularMovies} from './services/api'
const App = () => {
  const [allMovies,setAllMovies] = useState([])
  useEffect(()=>{
    const loadAllMovies = async() => {
      try {
        const data = await getPopularMovies()
        setAllMovies(data)
      } catch (error) {
        console.log(error)
      }
    } 
    loadAllMovies()
  },[])
  return(
    <div className="container">
      <Navbar />
      <Search />
      <div className='movie-gallery'>
        {allMovies.map((e,i)=>(
          <Card key={i} url={e.primaryImage} title={e.originalTitle} date={e.releaseDate}/>
        ))}
      </div>
    </div>
  )
}

export default App