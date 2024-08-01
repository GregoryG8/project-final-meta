import React from "react";
import NavBar from "../components/Navbar/NavBar";
import Hero from "../components/Hero/Hero";
import Highlights from "../components/Highlights/Highlights";
import Testimonials from "../components/Testimonials/Testimonials";

function Home() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <Highlights/>
      <Testimonials/>
    </>
  );
}

export default Home;
