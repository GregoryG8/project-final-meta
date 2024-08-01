import React from "react";
import NavBar from "../components/Navbar/NavBar";
import Hero from "../components/Hero/Hero";
import Highlights from "../components/Highlights/Highlights";
import Testimonials from "../components/Testimonials/Testimonials";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <Highlights/>
      <Testimonials/>
      <About/>
      <Footer/>
    </>
  );
}

export default Home;
