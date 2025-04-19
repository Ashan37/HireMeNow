import React from "react";
import Navbarr from "../components/Navbarr";
import Footer from "../components/Footer";
import Heroslider from "../components/Heroslider";

export default function Home() {
  return (
    <div>
      <Container-fluid>
        <Navbarr />
      </Container-fluid>
      <Heroslider />
      <Container-fluid>
        <Footer />
      </Container-fluid>
    </div>
  );
}
