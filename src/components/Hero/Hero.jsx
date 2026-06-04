import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import video from "../../assets/hero.mp4";

const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-video-wrapper">
        <video className="hero-video" autoPlay muted loop playsInline preload="auto">
          <source src={video} type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
      </div>

      <motion.div 
        className="hero-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.3 }} 
            className="hero-tag"
        >
          <span className="pulse-dot"></span> Cinematic Storytelling
        </motion.div>

        <motion.h1 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.5 }} 
            className="hero-title"
        >
          We Capture <span className="gradient-text">Visual Poetry</span><br />
          Beyond Ordinary Frames.
        </motion.h1>

        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.8, duration: 1 }} 
            className="hero-quote"
        >
          <p>"A man who stops advertising to save money is like a man who stops a clock to save time."</p>
          <span>— Henry Ford</span>
        </motion.div>

        <motion.div 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 1.1 }} 
            className="hero-buttons"
        >
          <a href="#portfolio" className="hero-btn">Watch Showreel</a>
          <a href="#contact" className="hero-btn outline">Book a Project</a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;