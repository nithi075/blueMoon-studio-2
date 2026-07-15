import "./App.css";

import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Packages from "./components/packages/Packages";
import Instagram from "./components/instagram/Instagram";
import Footer from "./components/footer/footer";
import Gallery from "./pages/Gallery";
import Location from "./components/location/Location";
import Featured from "./components/featured/featured";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";
import Awards from "./components/award/Awards";
import FloatingChat from "./components/floating/floating";
import WhyChooseUs from "./components/why/why";
import BTS from "./components/bts/bts";
import Team from "./components/Team/Team";
import Services from "./components/services/Services";



function HomePage() {
  return (
    <>
      <Navbar />

      <section id="home">
        <Hero />
      </section>
     

        <section id="portfolio">
        <Portfolio />
      </section>



    

      <section id="about">
        <About />
      </section>
         <section id="awards">
        <Awards/>
      </section>

    
   <section id="featured">
        <Featured />
      </section> 

      <WhyChooseUs />
            <section id="services">
        <Services />
      </section>
      <BTS  />
      <Team/>
    

      <section id="packages">
        <Packages />
      </section>
        <section id="instagram">
        <Instagram />
      </section>
{/* 
      <section id="contact">
        <Contact />
      </section> */}


      {/* <section id="location">
        <Location />
      </section> */}
      <FloatingChat/>

      <Footer />
    </>
  );
}

function App() {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  );
}

export default App;
