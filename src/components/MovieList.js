import React from 'react';
import {Container, Row  } from 'react-bootstrap';
import CardMovie from './CardMovies';
import PaginationComponent from './Pagination';
import Search from './Search';


const MovieList = ({movies , getAllPage , pagecount ,search}) => {
  

  return (
    <Container>

    <div className='movielist'>
    <Search search={search}/>
    <Row className='mt-3 d-flex justify-content-center '>
    <h2 className='popular head mt-2 ms-4 mb-5'>ALl Movies</h2>
      {
        movies.length>=1? (movies.map((move)=>{
            return(
                <CardMovie key={move.id} move={move} />

            )
        })):<h2 className='my-5'>Don't Available Eny Films To Show ......</h2>
    
    }

    </Row>
    {
      movies.length>=1? (<PaginationComponent getAllPage={getAllPage} pagecount={pagecount}/>
):null
    }

</div>
    </Container>

  )
}

export default MovieList;