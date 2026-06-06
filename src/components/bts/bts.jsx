import React from "react";
import { motion } from "framer-motion";
import "./bts.css";
import btsVideo from "../../assets/hero.mp4";

const BTS = () => {
  return (
    <section className="bts-section" id="bts">
      <div className="bts-container">
        <motion.span
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          BEHIND THE SCENES
        </motion.span>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          The Process Behind
          <span className="text-highlight">
            {" "}The Magic
          </span>
        </motion.h2>

        <motion.p
          className="bts-description"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Every cinematic frame begins with
          creativity, collaboration, and attention
          to detail. Take a look behind the scenes
          of how we bring ideas to life.
        </motion.p>

        <motion.div
          className="bts-video-wrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <video
            src={btsVideo}
            autoPlay
            muted
            loop
            playsInline
            controls
          />
        </motion.div>
      </div>
    </section>
  );
};

export default BTS;