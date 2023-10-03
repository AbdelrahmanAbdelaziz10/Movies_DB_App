import React from 'react'
import { Col } from "react-bootstrap";
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';


const CardMovie = ({move}) => {
  const rate=move.vote_average

  return (
      <Col xs="12" sm="12" md="6" lg="3" className="my-2 me-2 justify-content-center text-center"> 
        <Link className="link" to={`/movie/${move.id} `}>  
          <Card className="text-start border card" style={{ width: '18rem' }}>
          <div className="image-card">
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/`+move.poster_path} className="card_img"/>
</div>
            <Card.Body className="card_text">
              <Card.Title className="card_title">{move.title}</Card.Title>
              <p>
              {move.release_date}
              </p>
              <div className="rating">
              {rate.toFixed(1)}
              </div>
            </Card.Body>
          </Card>
        </Link> 
        </Col>
  );
};

export default CardMovie;