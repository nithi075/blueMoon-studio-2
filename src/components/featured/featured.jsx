import React from "react";
import { motion } from "framer-motion";
import "./featured.css";

/* VIDEOS */
import SareeVid from "../../assets/saree1.mp4";
import TVVid from "../../assets/video1.mp4";
import ClothingVid from "../../assets/clothing1.mp4";
import JewelVid from "../../assets/jewel1.mp4";

const Featured = () => {
  const items = [
    {
      id: 1,
      title: "Small Butta Silk Sarees",
      subtitle: "Editorial Fashion",
      class: "item-1",
      video: SareeVid,
      type: "video",
    },
    {
      id: 2,
      title: "Importance of Chalk Piece",
      subtitle: "TV Commercial",
      class: "item-2",
      video: TVVid,
      type: "video",
    },
    {
      id: 3,
      title: "Anarkali Kurties Set",
      subtitle: "Clothing Brand Reel",
      class: "item-3",
      video: ClothingVid,
      type: "video",
    },
    {
      id: 4,
      title: "Royal Gold Heritage",
      subtitle: "Jewellery Collection",
      class: "item-4",
      video: JewelVid,
      type: "video",
    },
  ];

  return (
    <section className="featured-section">
      <div className="portfolio-header">
        <motion.span
          className="tagline"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          FEATURED PRODUCTIONS
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Stories In <span className="text-highlight">Motion</span>
        </motion.h2>

        <motion.p
          className="portfolio-description"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Explore a collection of impactful campaigns,
          television commercials, and brand stories crafted
          to inspire, engage, and deliver results.
        </motion.p>
      </div>

      <div className="bento-container">
        <div className="bento-grid">
          {items.map((item) => (
            <motion.div
              key={item.id}
              className={`bento-item ${item.class}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="img-wrapper">
                {item.type === "video" ? (
                  <video
                    src={item.video}
                    className="featured-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img
                    src={item.image}
                    className="featured-video"
                    alt={item.title}
                  />
                )}
              </div>

              <div className="overlay">
                <div className="text-content">
                  <h4>{item.title}</h4>
                  <p>{item.subtitle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;