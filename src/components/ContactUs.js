import React from 'react'
import { Col, Container, Form, Row ,Button } from 'react-bootstrap'

const ContactUs = () => {
  return (
    <div>
        <Container>
        <Row className='d-flex justify-content-center my-5'>
            <Col lg={6} md={12} sm={12}>
            <h1 className="text-center text_header">Contact Us</h1>
            <p className='text-center contact_par mt-4'>You can contact with admin for any problem you have with using web sit and we will 
            work to solve it To ensure a better user experience.
            <br/> Thank You.</p>
            </Col>
        </Row>

        <Row className='d-flex justify-content-center my-5'>
        <Col lg={7} md={12} sm={12}>
        <Form className='mb-5'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" className="me-2 form-control"/>

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" className="me-2 form-control"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicTextarea">
        <textarea rows="10" cols="30" placeholder="Your Massage" className="me-2 form-control textarea"></textarea>
      </Form.Group>

      <Button className='send' variant="info">Send</Button>
    </Form>
        </Col>
        </Row>
        </Container>

    </div>
  )
}

export default ContactUs