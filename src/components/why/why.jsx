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
      title: "Cinematic Quality",
      description:
        "Premium visuals crafted to elevate your brand and capture attention.",
    },
    {
      title: "Fast Delivery",
      description:
        "Quick turnaround times without compromising creativity or quality.",
    },
    {
      title: "Creative Strategy",
      description:
        "Content designed to connect with audiences and drive results.",
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
            Built For Brands That
            <span className="text-highlight">
              {" "}Want Impact
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="why-description"
          >
            We combine cinematic storytelling,
            creative strategy, and fast execution
            to create content that connects,
            performs, and leaves a lasting impression.
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