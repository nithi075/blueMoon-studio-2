import React from "react";
import { motion } from "framer-motion";
import "./Instagram.css";

/* --- Video Imports --- */
import video1 from "../../assets/clothing1.mp4";
import video2 from "../../assets/video2.mp4";
import video3 from "../../assets/video3.mp4";
import video4 from "../../assets/saree2.mp4";
import video5 from "../../assets/video5.mp4";
import video6 from "../../assets/clothing5.mp4";

const videos = [
  { video: video1, tag: "REEL", link: "#" },
  { video: video2, tag: "CAMPAIGN", link: "#" },
  { video: video3, tag: "SOCIAL", link: "#" },
  { video: video4, tag: "CONTENT", link: "#" },
  { video: video5, tag: "BRAND", link: "#" },
  { video: video6, tag: "STORY", link: "#" },
];

export default function Instagram() {
  return (
    <section className="insta-container" id="social">
      <div className="insta-bg-text">SOCIAL</div>

      {/* Header */}
      <div className="insta-header">
        <span className="insta-tag">SOCIAL-FIRST STORYTELLING</span>
        <h2>Built For <span>Attention.</span></h2>
      </div>

      {/* Main Content Layout */}
      <div className="insta-main-content">
        
        {/* Masonry Grid */}
        <div className="insta-masonry-grid">
          {videos.map((item, i) => (
            <motion.a 
              key={i} 
              href={item.link} 
              className={`insta-card ${i % 2 === 0 ? "tall" : "short"}`}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <span className="card-tag">{item.tag}</span>
              <video src={item.video} autoPlay muted loop playsInline />
              <div className="card-overlay">
                <span>View Reel ↗</span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Sticky Sidebar CTA */}
        <div className="insta-cta-box">
          <div className="cta-content">
            <h3>Follow The Studio</h3>
            <p>Behind the scenes, cinematic campaigns, and trending reels updated weekly.</p>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="insta-btn">
              Follow on Instagram 📷
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}