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
      <section className="py-16 px-6 text-center bg-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to HireMeNow</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Empowering job seekers and companies to connect seamlessly. Whether you're hiring or hunting, HireMeNow makes the process simple, fast, and efficient.
        </p>
      </section>
      <Container-fluid>
        <Footer />
      </Container-fluid>
    </div>
  );
}
