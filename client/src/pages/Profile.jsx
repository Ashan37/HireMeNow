import React from 'react'
import Navbarr from '../components/Navbarr'
import Footer from '../components/Footer'
import { Container,Row,Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
  const navigate=useNavigate();
  const handleChange=()=>{
    navigate('/addjob')
  }
  return (
   <div>
    <Navbarr/>
    <div>
      <button onClick={handleChange}>Post a Job</button> 
    </div>
     {/* Categories part */}
     <Container className="categories">
        <div className="categories_head">
          <h1>Job Categories</h1>
        </div>

        <Row className="categories_row">
          <Col className="category_col">
            <h4>Healthcare</h4>
          </Col>
          <Col className="category_col">
            <h4>Information Technology</h4>
          </Col>
          <Col className="category_col">
            <h4>Education</h4>
          </Col>
          <Col className="category_col">
            <h4>Finance</h4>
          </Col>
        </Row>

        <Row className="categories_row">
          <Col className="category_col">
            <h4>Hospitality & Tourism</h4>
          </Col>
          <Col className="category_col">
            <h4>Engineering</h4>
          </Col>
          <Col className="category_col">
            <h4>Construction</h4>
          </Col>
          <Col className="category_col">
            <h4>Retail</h4>
          </Col>
        </Row>

        <Row className="categories_row">
          <Col className="category_col">
            <h4>Marketing</h4>
          </Col>
          <Col className="category_col">
            <h4>Manufacturing</h4>
          </Col>
          <Col className="category_col">
            <h4>Legal</h4>
          </Col>
          <Col className="category_col">
            <h4>Transportation & Logistics</h4>
          </Col>
        </Row>
      </Container>

    <Footer/>
   </div>
  )
}
