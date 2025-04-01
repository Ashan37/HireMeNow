import React from "react";
import Navbarr from "../components/Navbarr";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import "remixicon/fonts/remixicon.css";

export default function Signin() {
  return (
    <div>
      <Container-fluid>
        <Navbarr />
      </Container-fluid>
      <Container>
        <Row>
          <Col lg='6' md='12'csm='12'>
            <div className="login_form">
              <form className="form">
                <div className="head">
                  <div className="input__head">
                    <h1>Enter Email</h1>
                  </div>

                  <div className="inputs">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="ri-mail-line"></i>
                      </span>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                </div>

                <div className="head">
                  <div className="input__head">
                    <h1>Enter Password</h1>
                  </div>

                  <div className="inputs">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i class="ri-lock-line"></i>{" "}
                      </span>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                </div>
                <div className="">
                  <Link to="#">
                    <p>Forgotten password</p>
                  </Link>
                </div>
                <div className="buttons">
                  <button>Login</button>
                  <button>Register</button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
      <Container-fluid>
        <Footer />
      </Container-fluid>
    </div>
  );
}
