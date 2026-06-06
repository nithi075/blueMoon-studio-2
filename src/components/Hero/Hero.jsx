import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Hero.css";

// Import both videos
import videoDesktop from "../../assets/video1.mp4";
import videoMobile from "../../assets/hero.mp4"; // Ensure this file exists
import Overlay from "../Overlay/Overlay";

const awards = [
  { title: "BEST BACKGROUND SCORE", stars: "★★★", sub: "WINNER OF THE SEASON" },
  { title: "BEST CINEMATOGRAPHY", stars: "★★★★★", sub: "WINNER FOR VISUAL EXCELLENCE" },
];

const Hero = () => {
  const [modalType, setModalType] = useState(null);
  const [currentAward, setCurrentAward] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Responsive video logic
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Awards auto-slider logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAward((prev) => (prev + 1) % awards.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-main-wrapper">
      <section className="hero-section" id="hero">
        <div className="hero-video-wrapper">
          <video 
            className="hero-video" 
            autoPlay 
            muted 
            loop 
            playsInline 
            preload="auto"
            key={isMobile ? "mobile" : "desktop"} 
          >
            <source src={isMobile ? videoMobile : videoDesktop} type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>

        <motion.div 
          className="hero-content" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          <motion.div className="hero-tag" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
            <span className="pulse-dot"></span> BLUE MOON MEDIA
          </motion.div>

          <motion.h1 className="hero-title" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
            We Capture <span className="gradient-text">Visual Poetry</span><br /> Beyond Ordinary Frames.
          </motion.h1>

          <motion.div className="hero-quote" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1 }}>
            <p>"A man who stops advertising to save money is like a man who stops a clock to save time."</p>
          </motion.div>

          <motion.div className="hero-buttons" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.1 }}>
            <a href="#portfolio" className="hero-btn">Watch Showreel</a>
            
            <button className="hero-btn outline" onClick={() => setModalType('project')}>
              Book a Project
            </button>
            <button className="hero-btn outline" onClick={() => setModalType('appointment')}>
              Book an Appointment
            </button>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={currentAward} 
              className="hero-awards" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              transition={{ duration: 0.8 }}
            >
              <div className="award-showcase">
                <div className="award-title">{awards[currentAward].title}</div>
                <div className="award-stars">{awards[currentAward].stars}</div>
                <div className="award-subtitle">{awards[currentAward].sub}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </section>

      <Overlay
        type={modalType}
        isOpen={modalType !== null}
        onClose={() => setModalType(null)}
      />
    </div>
  );
};

export default Hero;