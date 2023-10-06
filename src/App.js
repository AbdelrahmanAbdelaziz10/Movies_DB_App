import { useEffect, useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import {BrowserRouter , Routes ,Route} from 'react-router-dom';
import MovieDeteils from './components/MovieDeteils';
import Home from './components/Home';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import Slider from './components/slider';

function App() {

  const [movies,setMovies]=useState([]);
  const [pagecount,setPagecount]=useState(0);

    //get page 1 movies
  const getAllMovies=async()=>{
    const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=6d12041c9601ff557047a9f120c9a8eb&language=en');
    setMovies(response.data.results)
    setPagecount(response.data.total_pages)

  }

    //get all page movies
    const getAllPage=async(page)=>{
      const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=6d12041c9601ff557047a9f120c9a8eb&language=en&page=${page}`);
      setMovies(response.data.results)
      setPagecount(response.data.total_pages)

    }

  useEffect(()=>{
    getAllMovies()
  },[])

  const search=async (word)=>{
    if(word===""){
      getAllMovies()
    } else{
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=6d12041c9601ff557047a9f120c9a8eb&query=${word}&language=en`)
      setMovies(res.data.results)
      setPagecount(res.data.total_pages)

    }

  }

  return (
    <div className="App">
        <BrowserRouter>

    <NavBar />
    
    <Routes>
    <Route path="/Movies_DB_App" element={<Home movies={movies}/>}/>
    <Route path="/contact" element={<ContactUs />}/>
      <Route path="/movies" element={<MovieList movies={movies} getAllPage={getAllPage} pagecount={pagecount} search={search} />}/>
      <Route path="/movie/:id" element={<MovieDeteils movies={movies} />} />
    </Routes>

    </BrowserRouter>

    <Footer />


    </div>
  );
}

export default App;
