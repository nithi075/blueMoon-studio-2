import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Awards.css";

const awardsData = [
  {
    tag: "PRESENTED BY ANNUAL FILM ACADEMY GALA 2024",
    title: "BEST AD BACKGROUND SCORE",
    stars: "★★★",
    sub: "AD PLUS CONTEST-2023",
  },
  {
    tag: "OFFICIAL SELECTION",
    title: "BEST AD FILM",
    stars: "★★★★★",
    sub: "AD PLUS CONTEST-2023",
  },
];

const Award = () => {
  const [index, setIndex] = useState(0);

  // 20 Seconds Auto Slide Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % awardsData.length);
    }, 20000); // 20 Seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="award-section">
      {/* Overall Section Title */}
      <div className="section-header">
        <p className="header-subtitle">ACCOLADES & RECOGNITION</p>
        <h2 className="header-title">PROUD MOMENTS</h2>
        <div className="header-line"></div>
      </div>

      <div className="slider-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="award-card-wrapper"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div className="laurel left">❧</div>
            
            <div className="award-content">
              <p className="award-tag">{awardsData[index].tag}</p>
              <h2 className="main-title">
                <span className="text-highlight">{awardsData[index].title}</span>
              </h2>
              <div className="accent-line"></div>
              <div className="stars">{awardsData[index].stars}</div>
              <p className="sub-title">{awardsData[index].sub}</p>
            </div>

            <div className="laurel right">☙</div>
          </motion.div>
        </AnimatePresence>

        {/* Slider Navigation Dots (Optional - visual indicators) */}
        <div className="slider-dots">
          {awardsData.map((_, i) => (
            <div 
              key={i} 
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Award;