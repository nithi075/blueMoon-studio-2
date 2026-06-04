import React from "react";

import { motion } from "framer-motion";
import "./footer.css";



import logo from "../../assets/logo.png";

const Footer = () => {

  const currentYear =
    new Date().getFullYear();

  return (

    <footer className="footer-canvas">

      {/* HUGE BG TEXT */}

    

      {/* AMBIENT GLOW */}

      <motion.div

        className="footer-ambient-glow"

        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.25, 0.5, 0.25],
        }}

        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="footer-container">

        {/* ================= BRAND ================= */}

        <motion.div

          className="footer-brand-block"

          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          {/* LOGO */}

          <div className="footer-logo-wrapper">

            <motion.img

              src={logo}

              alt="Blue Moon Logo"

              className="footer-logo-img"

              whileHover={{
                rotate: -4,
                scale: 1.05,
              }}
            />

            <div className="footer-brand-text">

              <span className="footer-brand-name">
                BLUE MOON
              </span>

              <span className="footer-brand-sub">
                SOCIAL-FIRST CREATIVE AGENCY
              </span>

            </div>

          </div>

          {/* TAGLINE */}

          <p className="footer-tagline">

            Building scroll-stopping content systems,
            cinematic brand storytelling,
            and social-first digital experiences
            for modern businesses.

          </p>

          {/* EMAIL */}

          <a
            href="mailto:hello@bluemoon.com"

            className="footer-email-link"
          >

            hello@bluemoon.com

          </a>

        </motion.div>

        {/* ================= NAVIGATION ================= */}

        <motion.div

          className="footer-links-block"

          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 1,
            delay: 0.15,
          }}
        >

          <h4 className="footer-block-title">
            NAVIGATION
          </h4>

          <ul className="footer-links-list">

            {[
              "Home",
              "About",
              "Portfolio",
              
              "Awards",
              "Instagram",
              "Contact",
            ].map((item, i) => (

              <motion.li

                key={i}

                whileHover={{
                  x: 5,
                }}
              >

                <a

                  href={`#${item.toLowerCase()}`}

                  className="footer-link"
                >

                  {item}

                </a>

              </motion.li>

            ))}

          </ul>

        </motion.div>

        {/* ================= SOCIALS ================= */}

        <motion.div

          className="footer-socials-block"

          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 1,
            delay: 0.25,
          }}
        >

        

          {/* STATUS */}

         

          {/* CTA */}

          <motion.a

            href="#contact"

            className="footer-cta-btn"

            whileHover={{
              scale: 1.03,
            }}

            whileTap={{
              scale: 0.97,
            }}
          >

            Work With Us ↗

          </motion.a>

        </motion.div>

      </div>

      {/* DIVIDER */}

      <div className="footer-divider-line"></div>

      {/* ================= BOTTOM BAR ================= */}

      <div className="footer-bottom-bar">

        <div className="footer-bottom-container">

          <p className="copyright-text">

            © {currentYear} Blue Moon Studio.
            All Rights Reserved.

          </p>

         

        </div>

      </div>

    </footer>
  );
};

export default Footer;
