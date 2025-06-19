import {useState,useEffect} from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import {getSearchedMovies} from './services/api'
const App = () => {
  const [allMovies,setAllMovies] = useState([])
  const [query,setQuery] = useState('')
  const [isClicked,setIsClicked] = useState(false)
  useEffect(()=>{
    const loadAllMovies = async() => {
      try {
        const data = await getSearchedMovies(query)
        if(data && Array.isArray(data.description)){
          setAllMovies(data.description)
        }
        else{
          setAllMovies([])
        }
        setIsClicked(false)
      } catch (error) {
        console.log("API error:",error)
        setAllMovies([])
      }
    } 
    if(isClicked){
      loadAllMovies()
    }
  },[isClicked])
  return(
    <div className="container">
      <Navbar />
      <div className="search-area">
            <div className="search-box">
                <input type='text' placeholder='Search for movies...' value={query} onChange={(e)=>setQuery(e.target.value)} />
                <button onClick={()=>setIsClicked(true)}>Search</button>
            </div>
        </div>
      <div className='movie-gallery'>
        {allMovies.map((e,i)=>{
          return(
          <Card key={i} url={e['#IMG_POSTER']} title={e['#TITLE']} date={e['#YEAR']} />
          )
        })}
      </div>
    </div>
  )
}

export default App