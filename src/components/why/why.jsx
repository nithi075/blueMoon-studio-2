import React from "react";
import { motion } from "framer-motion";
import "./why.css";

const WhyChooseUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const features = [
    {
      title: "Cinematic Production",
      description:
        "High-end visuals that make your brand impossible to ignore.",
    },
    {
      title: "Seamless Turnaround",
      description:
        "Fast, efficient workflows with uncompromising standards.",
    },
    {
      title: "Creative Intelligence",
      description:
        "Strategic content designed for meaningful audience connection.",
    },
  ];

  return (
    <section className="why-section" id="why-us">
      <div className="why-container">
        <motion.div
          className="why-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.span
            variants={itemVariants}
            className="section-subtitle"
          >
            WHY CHOOSE US
          </motion.span>

          <motion.div
            variants={itemVariants}
            className="accent-line"
          />

          <motion.h2
            variants={itemVariants}
            className="section-title"
          >
            Creating Content That
            <span className="text-highlight">
              {" "}Moves Brands Forward
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="why-description"
          >
            We transform ideas into cinematic content
            that captivates audiences, strengthens
            brand presence, and creates lasting
            impressions.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="why-grid"
          >
            {features.map((item, index) => (
              <div
                key={index}
                className="why-card"
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;