import React from "react";
import "/src/styles/footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

export default function Footer() {

  const year = new Date().getFullYear();

  const quickLinks = [
    { path: "/about", display: "About" },
    { path: "/services", display: "Services" },
    { path: "/contact", display: "Contact" },
  ];

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo d-flex">
              <h1>
                <i className="ri-briefcase-line"></i>
                <span>HireMeNow</span>
              </h1>
            </div>
            <p className="footer__logo-content">
              BiverseHotel is a luxury getaway offering elegant accommodations,
              fine dining, and top-notch amenities. Whether for business or
              leisure, our hotel ensures a comfortable and memorable stay.
            </p>
          </Col>

           <Col lg="2" md="4" sm="6">
                      <div className="mb-4">
                        <h5 className="footer__link-title">Quick Links</h5>
                        <ListGroup>
                          {quickLinks.map((item, index) => (
                            <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                               <Link to={item.path} className="no-underline">{item.display}</Link>
                            </ListGroupItem>
                          ))}
                        </ListGroup>
                      </div>
                    </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Head Office</h5>
              <p className="office__info">
                221/3, Barmen Road, Colombo 10, Sri Lanka
              </p>
              <p className="office__info">Phone: 011-0897631</p>
              <p className="office__info">Email: biversehotel@gmail.com</p>
              <p className="office__info">Open: 24h</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Newsletter</h5>
              <p className="section__description">
                Subscribe to our newsletter
              </p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i className="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i className="ri-copyright-line"></i> Copyright {year},
                Developed by Ashan Ekanayake.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
