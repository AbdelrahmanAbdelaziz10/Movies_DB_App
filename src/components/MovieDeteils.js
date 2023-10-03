import React, { useEffect, useState } from 'react'
import { Col, Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import {  useParams} from 'react-router-dom';
import axios from 'axios';




const MovieDeteils = () => {

  const[movie , setMovie]=useState([])
  const [years,setYears]=useState()
  let d=new Date();
  var year=d.getFullYear(movie.release_date)
  // const rating=rate.toFixed(1)
    const param=useParams();
    console.log(param)


    //get movie data
    const getMovie=async()=>{
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=6d12041c9601ff557047a9f120c9a8eb&language=en`);
        setMovie(response.data)
      }
      useEffect(()=>{
        getMovie()
        setYears(year)

      },[])
      console.log(years)

  return (
    <div className='bg_color'>
    
    <Row className='overflow_h'>
      <Col className='' ml='12' style={{position:"relative"}}>
      <div className='main_header' >
        <img className="header_image"  src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} alt={movie.title} />
        <Container>


        <Row className=''>
        <Col lg="4" md="6" sm="12" className=''>
        <div className='card_details mt-5 mb-3'>
        <img className="card_image"  src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} alt={movie.title} />

        </div>
        </Col>
        <Col  lg="8" md="6" sm="12">
        <div className='card_text_details mt-5 mb-3'>
        <div className=" card_textDetails mb-5 pt-4 pb-5">
                    <h2 className="card-text-title ">
                        {movie.title} 
                    </h2>
                    <p className="card-text-detail">
                       {movie.tagline}
                    </p>
                    <p className="card-text-detail">
                      {movie.release_date} &nbsp; &nbsp;{((movie.runtime)/60).toFixed(0)}h {(movie.runtime)%60}m
                    </p>

                    <p className="vote_average ">
                    {((movie.vote_average)%10).toFixed(1)} 
                    </p> 


                <div className="text-start  pt-1 ">
                    <p className="card-text-detail">Overview:</p>
                </div>
                <div className="text-start px-2">
                    <p className="card-text-story">{movie.overview}</p>
                </div>
                <p className="card-text-detail mt-3">
                    Status : {movie.status} &nbsp; Budget: {movie.budget} $ &nbsp;Revenue : {movie.revenue}
                    </p>
        <Row className="">
        <Col
            md="10"
            xs="12"
            sm="12"
            className=" d-flex mt-2 ms-5 ">
            <a href={movie.homepage} target="_blank" rel="noreferrer" >
                <button
                    
                    className="btn btn-primary">
                        Watch Trailer
                </button>
            </a>
        </Col>
    </Row>
            </div>
        </div>
        </Col>
      </Row>
      </Container>
      </div>
      </Col>
    </Row>
</div>
  )
}

export default MovieDeteils