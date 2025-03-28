import React from 'react'
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import 'remixicon/fonts/remixicon.css'

export default function Footer() {
  return (
   <footer className='footer'>
    <Container>
      <Row>
        <Col lg='4'  md="4" sm="12">
        <div className='logo footer__logo'>
          <h1>
          <i className="ri-hotel-line"></i>
          <span>Hire<br />Me<br/>Now</span>
          </h1>
        </div>
        </Col>
      </Row>
    </Container>
   </footer>
  )
}
