import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./About.css";
import aboutimage from "../../assets/about1.jpg";

const About = () => {
  const sectionRef = useRef(null);

  /* PARALLAX EFFECTS */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const bgTextY = useTransform(scrollYProgress, [0, 1], [0, -150]);

  /* ANIMATIONS VARIANTS */
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } },
  };

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      {/* BACKGROUND TEXT */}
      <motion.div className="about-bg-text" style={{ y: bgTextY }}>
        STORYTELLING
      </motion.div>

      <div className="about-container">
        {/* LEFT: VISUAL SIDE */}
        <motion.div 
          className="about-visual-side"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          style={{ y: imageY }}
        >
          <div className="image-frame-wrapper">
            <div className="floating-orb"></div>
            <motion.img 
              src={aboutimage} 
              alt="Brand Strategy" 
              className="about-display-img"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.6 }}
            />
            <div className="frame-ambient-glow"></div>
            
            {/* EXPERIENCE BADGE */}
            <motion.div 
              className="experience-badge"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.5 }}
            >
              <span className="badge-number">5+</span>
              <span className="badge-text">Years Building Modern Brands</span>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT: CONTENT SIDE */}
        <motion.div 
          className="about-content-side"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.span variants={itemVariants} className="section-subtitle">WHO WE ARE</motion.span>
          
          <motion.h2 variants={itemVariants} className="section-title">
            We Build Brands <span className="text-highlight">People Remember.</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="about-description">
            We blend cinematic storytelling, modern aesthetics, and social-first strategy to create content engineered for attention.
          </motion.p>

          <motion.p variants={itemVariants} className="about-description">
            Every frame is crafted to elevate perception, build audience connection, and make brands impossible to ignore.
          </motion.p>

          {/* STATS GRID */}
          <motion.div variants={itemVariants} className="about-stats-grid">
            {[
              { num: "120M+", label: "Views Generated" },
              { num: "10+", label: "Brands Managed" },
              { num: "3M+", label: "Monthly Reach" },
            ].map((stat, i) => (
              <div key={i} className="stat-card">
                <h3 className="stat-number">{stat.num}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;