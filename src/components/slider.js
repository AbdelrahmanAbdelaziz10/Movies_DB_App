import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../style/swiper.css'
import { Row } from 'react-bootstrap';
import CardMovie from './CardMovies';
import { Navigation } from 'swiper/modules';
import CardSlice from './cardSlider';

const Slider = ({movies}) => {
    let count=0
  return (

    <Row className='mt-3 mb-5 slider'>
<h2 className='popular ms-5 mb-5'>Top Rate</h2>
<Swiper 
      spaceBetween={1}
      slidesPerView={4} 
      rewind={true}
        navigation={true}
        modules={[Navigation]}
        className='swiper-container swiper text-center ps-4 '>
{
        movies.length>=1? (movies.map((move)=>{
            count++;
          if( 0!==count%4 && (move.vote_average)>=7.1  ){
            return(

      <SwiperSlide key={move.id} className='swiper-slider '>
      <CardSlice  move={move}  />

      </SwiperSlide>

          )
          }

        })):<h2 className='my-5'>Don't Available Eny Films To Show ......</h2>
    
    }
    </Swiper>  
</Row>

      )
}

export default Slider