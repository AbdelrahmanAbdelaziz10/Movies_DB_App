import React from 'react'
import { Row ,Col, Container } from 'react-bootstrap';
import poster from '../images/mXLOHHc1Zeuwsl4xYKjKh2280oL.jpg';
import poster2 from '../images/poster2.jpg';
import poster3 from '../images/poster3.jpg';
import { Link } from 'react-router-dom';
import CardMovie from './CardMovies';
import mobile from '../images/mobile.png';
import { useState } from 'react';
import axios from 'axios';
import Slider from './slider';


const Home = ({movies}) => {
  let count=0;

  const [topMovies,setTopMovies]=useState([])
  const getAllPage=async(page)=>{
    const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=6d12041c9601ff557047a9f120c9a8eb&language=en');
    setTopMovies(response.data.results)

  }

  return (
    <>
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
  <div className="carousel-item active section" >
  <img className="header__image" src={poster} alt='...'/>
    <div className='card_slider'>
    <h2 className=' mt-3 ps-3  head_text'>Blue Beetle</h2>
    <p className='card-text-detail ps-4'>Jaime Reyes is a superhero whether he likes it or not.</p>
    <p className='card-text-detail ps-4'>2023-08-16 &nbsp; &nbsp;2h 8m</p>
    <p className="card-text-story ps-4">Recent college grad Jaime Reyes returns home full 
    of aspirations for his future, only to find that home is not quite as he left it. 
    As he searches to find his purpose in the world, fate intervenes when Jaime unexpectedly 
    finds himself in possession of an ancient relic of alien biotechnology: the Scarab.</p>


    <Row className='justify-content-center'>
          <Col lg='12' className='d-flex ms-5 bg-im mt-2 mb-5'>
            <Link to={'/movie/565770'}>
                <button
                    className="btn btn-primary me-4">
                    More Movies
                </button>
            </Link>

            </Col>
            </Row>
        </div>
    </div>
    <div className="carousel-item section" >
  <img className="header__image" src={poster2} alt='...'/>
    <div className='card_slider'>
    <h2 className=' mt-3 ps-3  head_text'>Gran Turismo</h2>
    <p className='card-text-detail ps-4'>From gamer to racer.</p>
    <p className='card-text-detail ps-4'>2023-08-9 &nbsp; &nbsp;2h 15m</p>
    <p className="card-text-story ps-4">The ultimate wish-fulfillment tale of a teenage Gran 
    Turismo player whose gaming skills won him a series of Nissan competitions to become an 
    actual professional racecar driver.</p>
    <Row className='justify-content-center'>
          <Col lg='12' className='d-flex ms-5 bg-im mt-2 mb-5'>
            <Link to={'/movie/565770'}>
                <button
                    className="btn btn-primary me-4">
                    More Movies
                </button>
            </Link>

            </Col>
            </Row>
        </div>
    </div>
    <div className="carousel-item section" >
  <img className="header__image" src={poster3} alt='...'/>
    <div className='card_slider'>
    <h2 className=' mt-3 ps-3  head_text'>Gran Turismo</h2>
    <p className='card-text-detail ps-4'>From gamer to racer.</p>
    <p className='card-text-detail ps-4'>2023-08-9 &nbsp; &nbsp;2h 15m</p>
    <p className="card-text-story ps-4">The ultimate wish-fulfillment tale of a teenage Gran 
    Turismo player whose gaming skills won him a series of Nissan competitions to become an 
    actual professional racecar driver.</p>
    <Row className='justify-content-center'>
          <Col lg='12' className='d-flex ms-5 bg-im mt-2 mb-5'>
            <Link to={'/movie/565770'}>
                <button
                    className="btn btn-primary me-4">
                    More Movies
                </button>
            </Link>

            </Col>
            </Row>
        </div>
    </div>


  </div>
  <button className="carousel-control-prev" type="button" 
  data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
  
  </button>
  <button className="carousel-control-next w-5" type="button" 
  data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
  </button>
</div>

<section className='pt-5'>
<Container>
<Row className='mt-3 mb-2 ms-3'>
<h2 className='popular ms-4 mb-5'>Popular Movies</h2>
{
        movies.length>=1? (movies.map((move)=>{
          count++;
          if(count<=8){
            return(
                <CardMovie key={move.id} move={move} className='ms-5'/>
            )
          }

        })):<h2 className='my-5'>Don't Available Eny Films To Show ......</h2>
    
    }

</Row>
</Container>
</section>

<section className=' download pt-5'>
<Container>
<Row className='mt-3 bg mb-5'>
<Col lg="6" md="12" sm="12" className=''>
  <div className='m-4'>
    <h3 className='download_head mt-5 mb-4'>Download Your Movies Watch Offline.
    Enjoy On Your Mobile</h3>
    <p className='download_par'>
    rem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries..
    </p>
    <Row className='d-flex justify-content-start mt-5'>
    <div className='text-center download_quality'>
      <p className='mt-2'>HD 4K</p>
    </div>
    <div className='text-center download_quality'>
      <p className='mt-2'>2K</p>
    </div>
    </Row>

  </div>
</Col>
<Col lg="6" md="12" sm="12" className=''>
    <img src={mobile} className='download_img' alt='....'/>
</Col>



</Row>
</Container>
</section>

<Slider movies={movies}/>

    </>
  )
}

export default Home