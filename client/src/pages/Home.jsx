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
          Empowering job seekers and companies to connect seamlessly. Whether
          you're hiring or hunting, HireMeNow makes the process simple, fast,
          and efficient.
        </p>
      </section>

      <section className="py-20 bg-blue-50">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h2 className="text-xl font-semibold mb-2">🔍 For Job Seekers</h2>
            <p>
              Browse thousands of job listings, filter by skills, and apply
              directly with your profile.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">🏢 For Employers</h2>
            <p>
              Post jobs in minutes, view applications, and hire the best talent
              for your team.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">⚡ Fast & Simple</h2>
            <p>
              Minimal steps. Maximum results. Say goodbye to long forms and
              outdated platforms.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to find your next opportunity?</h2>
        <p className="mb-6">Join thousands of users already hiring and getting hired on HireMeNow.</p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Find a Job
          </button>
          <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300">
            Post a Job
          </button>
        </div>
      </section>

      
      <Container-fluid>
        <Footer />
      </Container-fluid>
    </div>
  );
}
