import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbarr from "../components/Navbarr";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Container-fluid>
        <Navbarr />
      </Container-fluid>

      <Container-fluid>
        <Footer />
      </Container-fluid>
    </div>
  );
}
