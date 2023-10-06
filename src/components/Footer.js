import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Logo from '../images/logo.png';
import { AiFillInstagram ,AiOutlineTwitter } from "react-icons/ai";
import {FaFacebookF} from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
    <Container>
    <Row className='foot'>
            <Col lg="3" sm="6" md="6"  className='mt-4'>
            <Card className='footer_card list pt-3 mt-3' style={{ width: '18rem' }}>
      <Card.Img variant="top" className='footer_log' src={Logo}/>
      <Card.Body>
        <Card.Title className='footer_title'>AMDB</Card.Title>
        <p>You will found more than 500 movies in this Web Sit</p>
      </Card.Body>
    </Card>

            </Col>

            <Col lg="3" sm="6" md="6" className='mt-4'>
            <div className='list  mt-5'>
            <h4>OVERVIEW</h4>
                <ul> 
                    <li><a href='/Movies_DB_App'>Home</a></li>
                    <li><a href='/movies'>Movies</a></li>
                    <li><a href='/contact'>ContactUs</a></li>
                    <li><a href='/about'>About AMDB</a></li>

                </ul>
            </div>
            </Col> 

            <Col lg="3" sm="6" md="6" className='mt-4'>
            <div className='list mt-5'>
            <h4>COMMUNITY</h4>
                <ul> 
                    <li><a href=' '>Community Central</a></li>
                    <li><a href=' '>Support</a></li>
                    <li><a href=' '>Help</a></li>
                    <li><a href=' '>Leaderboard</a></li>


                </ul>
            </div>

            </Col> 
            <Col lg="3" sm="6" md="6" className='mt-4'>
            <Card className='footer_card list mt-3' >
      <Card.Body>
        <Card.Title className='footer_title'>Summery</Card.Title> 
        <p className='text'>
        Amazing Movie Database is a movie database website that provides users with the latest movies and TV shows information. It also allows you to search for your favorite
        </p>
        <p className=""> 
        <FaFacebookF className='icons facebook' />
        <AiFillInstagram className='icons instagram'/>
        <AiOutlineTwitter className='icons twitter'/>
          </p><br/>
      </Card.Body>
    </Card>
            </Col>

        </Row>
    </Container>
    <Row className='end text-center pt-3'>
            <p>&copy; 2023 - All Rights Reserved Designed With &#128151; by Abdelrahman Abdelaziz</p>
        </Row>

        
    </div>
  )
}

export default Footer