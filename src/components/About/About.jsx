import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./About.css";

const About = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgTextY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -150]
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };

  return (
    <section
      className="about-section"
      id="about"
      ref={sectionRef}
    >
      {/* Background Text */}
      <motion.div
        className="about-bg-text"
        style={{ y: bgTextY }}
      >
        STORYTELLING
      </motion.div>

      <div
        className="about-container"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <motion.div
          className="about-content-side"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          style={{
            maxWidth: "1000px",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <motion.span
            variants={itemVariants}
            className="section-subtitle"
          >
            ABOUT BLUEMOONMEDIA ADS
          </motion.span>

          <motion.div
            variants={itemVariants}
            className="accent-line"
          />

          <motion.h2
            variants={itemVariants}
            className="section-title"
          >
           Driven By Creativity.{" "}
            <span className="text-highlight">
           Defined By Results
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="about-description"
          >
            Founded in 2023, Bluemoonmedia Ads was
            established with a clear vision—to create
            advertising that goes beyond visuals and
            delivers lasting brand value through
            powerful storytelling. From a
            passion-driven creative venture to an
            award-winning advertising agency, we have
            earned recognition for producing impactful
            television commercials, commercial reels,
            and premium brand campaigns that drive
            measurable business growth.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="about-description"
          >
            Our success is powered by a talented team,
            efficient workflows, and a commitment to
            quality, innovation, and timely delivery.
            In a short span, our dedication to cinematic
            excellence and strategic brand communication
            has earned prestigious accolades, including
            Best Ad Film of the Season 2023, Best Ad
            Background Score of the Season 2023, and
            recognition at the Adplus Ad Film Contest
            2023.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="about-description"
          >
            At Bluemoonmedia Ads, we combine creativity,
            strategy, and speed to create memorable
            campaigns that inspire audiences,
            strengthen brands, and deliver meaningful
            results.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="about-stats-grid"
          >
            {[
              {
                num: "2023",
                label: "Founded",
              },
              {
                num: "50+",
                label: "Brand Campaigns",
              },
              {
                num: "3",
                label: "Industry Awards",
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="stat-card"
              >
                <h3 className="stat-number">
                  {stat.num}
                </h3>

                <p className="stat-label">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;