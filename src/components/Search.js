import React from 'react'
import { FcSearch } from "react-icons/fc";
import {Row , Col } from 'react-bootstrap';

const Search = ({search}) => {
    const onsearch=(word)=>{
        search(word)
      }
  return (
    <Row className='justify-content-center mt-5'>
    <Col className sm='12' lg='12'>
        <div className='search d-flex'>
            <h3 className="fa-search"><FcSearch/></h3>
            <input type="text" onChange={(e)=>{onsearch(e.target.value)}} placeholder="Search ....." className="me-2 form-control"/>
        </div>
    </Col>
  </Row>  )
}

export default Search