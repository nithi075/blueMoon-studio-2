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

return ( <section
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
        ABOUT BLUE MOON MEDIA
      </motion.span>

      <motion.div
        variants={itemVariants}
        className="accent-line"
      />

      <motion.h2
        variants={itemVariants}
        className="section-title"
      >
        Crafting{" "}
        <span className="text-highlight">
          Visual Stories
        </span>
        <br />
        That Leave A Lasting Impact.
      </motion.h2>

      <motion.p
        variants={itemVariants}
        className="about-description"
      >
        At Blue Moon Media, we believe every
        brand has a story worth telling.
        Through cinematic filmmaking,
        creative direction, and strategic
        marketing, we transform ideas into
        powerful visual experiences that
        capture attention and inspire action.
      </motion.p>

      <motion.p
        variants={itemVariants}
        className="about-description"
      >
        From commercial productions and
        brand films to digital campaigns and
        social content, we create work that
        not only looks exceptional but
        delivers meaningful results. Every
        frame is designed to build
        connection, strengthen identity, and
        make brands unforgettable.
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="about-stats-grid"
      >
        {[
          {
            num: "150+",
            label: "Projects Delivered",
          },
          {
            num: "50+",
            label: "Satisfied Clients",
          },
          {
            num: "5+",
            label: "Years Of Creativity",
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
