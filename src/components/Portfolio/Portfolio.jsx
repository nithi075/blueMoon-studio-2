import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Portfolio.css";

/* VIDEOS */
import Fashion1 from "../../assets/saree1.mp4";
import Fashion2 from "../../assets/saree2.mp4";
import Fashion3 from "../../assets/saree3.mp4";
import Fashion4 from "../../assets/saree4.mp4";
import Fashion5 from "../../assets/saree5.mp4";
import Fashion6 from "../../assets/saree6.mp4";
import Fashion7 from "../../assets/saree7.mp4";
import Fashion8 from "../../assets/saree8.mp4";
import Fashion9 from "../../assets/saree9.mp4";

import Commercial1 from "../../assets/video1.mp4";
import Commercial2 from "../../assets/video2.mp4";
import Commercial3 from "../../assets/video3.mp4";
import Commercial4 from "../../assets/video4.mp4";

import Clothing1 from "../../assets/clothing1.mp4";
import Clothing2 from "../../assets/clothing2.mp4";
import Clothing3 from "../../assets/clothing3.mp4";
import Clothing4 from "../../assets/clothing4.mp4";
import Clothing5 from "../../assets/clothing5.mp4";
import Clothing6 from "../../assets/clothing6.mp4";

/* JEWELLERY VIDEOS (8 Videos) */
import Jewel1 from "../../assets/jewel1.mp4";
import Jewel2 from "../../assets/jewel2.mp4";
import Jewel3 from "../../assets/jewel3.mp4";
import Jewel4 from "../../assets/jewel4.mp4";
import Jewel5 from "../../assets/jewel5.mp4";
import Jewel6 from "../../assets/jewel6.mp4";
import Jewel7 from "../../assets/jewel7.mp4";
import Jewel8 from "../../assets/jewel8.mp4";

/* PRODUCT IMAGES (6 Images) */
import ProductImg1 from "../../assets/product1.jpg";
import ProductImg2 from "../../assets/product2.jpg";
import ProductImg3 from "../../assets/product3.jpg";
import ProductImg4 from "../../assets/product4.jpg";
import ProductImg5 from "../../assets/product5.jpg";
import ProductImg6 from "../../assets/product6.jpg";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("fashion-shoots");
  const [selectedVideo, setSelectedVideo] = useState(null);

  /* BODY SCROLL LOCK */
  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedVideo]);

  const portfolioItems = [
    /* SAREE COMMERCIALS */
    { id: 1, title: "Luxury Saree Campaign", subtitle: "Editorial Fashion", category: "fashion-shoots", tag: "SAREE", year: "2026", orientation: "horizontal", video: Fashion1, type: "video" },
    { id: 2, title: "Bridal Saree Reel", subtitle: "Luxury Bridal Shoot", category: "fashion-shoots", tag: "BRIDAL", year: "2026", orientation: "horizontal", video: Fashion2, type: "video" },
    { id: 3, title: "Traditional Elegance", subtitle: "Designer Collection", category: "fashion-shoots", tag: "TRADITIONAL", year: "2026", orientation: "horizontal", video: Fashion3, type: "video" },
    { id: 4, title: "Silk Saree Showcase", subtitle: "Premium Campaign", category: "fashion-shoots", tag: "SILK", year: "2026", orientation: "horizontal", video: Fashion4, type: "video" },
    { id: 19, title: "Designer Collection", subtitle: "Premium Saree Reel", category: "fashion-shoots", tag: "SAREE", year: "2026", orientation: "horizontal", video: Fashion5, type: "video" },
    { id: 20, title: "Bridal Collection", subtitle: "Luxury Fashion Film", category: "fashion-shoots", tag: "BRIDAL", year: "2026", orientation: "horizontal", video: Fashion6, type: "video" },
    { id: 21, title: "Premium Silk", subtitle: "Designer Showcase", category: "fashion-shoots", tag: "SILK", year: "2026", orientation: "horizontal", video: Fashion7, type: "video" },
    { id: 22, title: "Traditional Luxury", subtitle: "Fashion Campaign", category: "fashion-shoots", tag: "TRADITIONAL", year: "2026", orientation: "horizontal", video: Fashion8, type: "video" },
    { id: 23, title: "Luxury Editorial", subtitle: "Premium Saree Shoot", category: "fashion-shoots", tag: "EDITORIAL", year: "2026", orientation: "horizontal", video: Fashion9, type: "video" },

    /* TV COMMERCIALS */
    { id: 5, title: "Luxury Brand Ad", subtitle: "Premium TV Commercial", category: "commercials", tag: "TV COMMERCIAL", year: "2026", orientation: "vertical", video: Commercial1, type: "video" },
    { id: 6, title: "Digital TV Campaign", subtitle: "Modern Advertisement", category: "commercials", tag: "TV AD", year: "2026", orientation: "vertical", video: Commercial2, type: "video" },
    { id: 7, title: "Premium Promo", subtitle: "Luxury Branding", category: "commercials", tag: "PROMO", year: "2026", orientation: "vertical", video: Commercial3, type: "video" },
    { id: 8, title: "Commercial Reel", subtitle: "Cinematic Production", category: "commercials", tag: "FILM", year: "2026", orientation: "vertical", video: Commercial4, type: "video" },

    /* CLOTHING BRAND REELS */
    { id: 9, title: "Luxury Clothing Reel", subtitle: "Premium Brand Film", category: "clothing-shoots", tag: "BRAND REEL", year: "2026", orientation: "horizontal", video: Clothing1, type: "video" },
    { id: 10, title: "Streetwear Campaign", subtitle: "Urban Fashion Reel", category: "clothing-shoots", tag: "STREETWEAR", year: "2026", orientation: "horizontal", video: Clothing2, type: "video" },
    { id: 11, title: "Luxury Apparel", subtitle: "Designer Showcase", category: "clothing-shoots", tag: "APPAREL", year: "2026", orientation: "horizontal", video: Clothing3, type: "video" },
    { id: 12, title: "Modern Clothing Ad", subtitle: "Creative Direction", category: "clothing-shoots", tag: "FASHION FILM", year: "2026", orientation: "horizontal", video: Clothing4, type: "video" },
    { id: 17, title: "Luxury Brand Reel", subtitle: "Premium Clothing Film", category: "clothing-shoots", tag: "BRAND", year: "2026", orientation: "horizontal", video: Clothing5, type: "video" },
    { id: 18, title: "Fashion Campaign", subtitle: "Creative Direction", category: "clothing-shoots", tag: "FASHION", year: "2026", orientation: "horizontal", video: Clothing6, type: "video" },

    /* JEWELLERY BRAND REELS (8 Videos) */
    { id: 24, title: "Royal Gold Heritage", subtitle: "Traditional Jewellery Film", category: "jewellery-shoots", tag: "GOLD", year: "2026", orientation: "vertical", video: Jewel1, type: "video" },
    { id: 25, title: "Diamond Symphony", subtitle: "Premium Diamond Promo", category: "jewellery-shoots", tag: "DIAMOND", year: "2026", orientation: "vertical", video: Jewel2, type: "video" },
    { id: 26, title: "Bridal Choker Legacy", subtitle: "Luxury Wedding Collection", category: "jewellery-shoots", tag: "BRIDAL", year: "2026", orientation: "horizontal", video: Jewel3, type: "video" },
    { id: 27, title: "Antique Kundan Art", subtitle: "Vintage Royal Showcase", category: "jewellery-shoots", tag: "KUNDAN", year: "2026", orientation: "horizontal", video: Jewel4, type: "video" },
    { id: 28, title: "Minimalist Silver Ad", subtitle: "Modern Daily Wear Look", category: "jewellery-shoots", tag: "SILVER", year: "2026", orientation: "vertical", video: Jewel5, type: "video" },
    { id: 29, title: "The Emerald Story", subtitle: "High-End Luxury Branding", category: "jewellery-shoots", tag: "EMERALD", year: "2026", orientation: "horizontal", video: Jewel6, type: "video" },
    { id: 30, title: "Temple Jewelry Cinematic", subtitle: "Cultural Classic Commercial", category: "jewellery-shoots", tag: "TEMPLE", year: "2026", orientation: "horizontal", video: Jewel7, type: "video" },
    { id: 31, title: "Modern Platinum Vows", subtitle: "Signature Couple Collection", category: "jewellery-shoots", tag: "PLATINUM", year: "2026", orientation: "vertical", video: Jewel8, type: "video" },

    /* PRODUCT SHOOTS (6 Images instead of videos) */
    { id: 13, title: "Cosmetic Flatlay", subtitle: "E-commerce Product Photography", category: "product-shoots", tag: "COSMETIC", year: "2026", orientation: "horizontal", image: ProductImg1, type: "image" },
    { id: 14, title: "Luxury Perfume Glow", subtitle: "Commercial Studio Shoot", category: "product-shoots", tag: "PERFUME", year: "2026", orientation: "vertical", image: ProductImg2, type: "image" },
    { id: 15, title: "Premium Watch Focus", subtitle: "Editorial Concept Art", category: "product-shoots", tag: "WATCH", year: "2026", orientation: "horizontal", image: ProductImg3, type: "image" },
    { id: 16, title: "Smart Gadgets Pack", subtitle: "Minimal Technical Setup", category: "product-shoots", tag: "TECH", year: "2026", orientation: "vertical", image: ProductImg4, type: "image" },
    { id: 32, title: "Organic Skincare Line", subtitle: "Brand Identity Shoot", category: "product-shoots", tag: "BEAUTY", year: "2026", orientation: "horizontal", image: ProductImg5, type: "image" },
    { id: 33, title: "Footwear Studio Pack", subtitle: "Commercial Urban Styling", category: "product-shoots", tag: "FASHION", year: "2026", orientation: "horizontal", image: ProductImg6, type: "image" }
  ];

  const categories = [
    { id: "fashion-shoots", label: "SAREE COMMERCIALS" },
    { id: "commercials", label: "TV COMMERCIALS" },
    { id: "clothing-shoots", label: "CLOTHING BRAND REELS" },
    { id: "jewellery-shoots", label: "JEWELLERY BRAND REELS" },
    { id: "product-shoots", label: "PRODUCT SHOOTS" }
  ];

  const filteredItems = portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <section className="portfolio-section" id="portfolio">
        <div className="portfolio-container">
          {/* HEADER */}
          <div className="portfolio-top">
            <div className="portfolio-heading">
              <span className="portfolio-label">FEATURED PROJECTS</span>
              <h2 className="portfolio-title">Cinematic <br /><span>Visual Poetry.</span></h2>
            </div>
            <div className="portfolio-right-content">
              <p>Premium videography and luxury visuals crafted with cinematic storytelling.</p>
              
              {/* FILTERS */}
              <div className="portfolio-filter-wrapper">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    className={`filter-btn ${activeCategory === cat.id ? "active" : ""}`}
                    onClick={() => setActiveCategory(cat.id)}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* GRID */}
          <motion.div layout className="portfolio-grid">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className={`p-card ${item.orientation}`}
                >
                  <div className="p-video-box" onClick={() => setSelectedVideo(item)}>
                    {/* Render Video or Image based on asset type */}
                    {item.type === "video" ? (
                      <video
                        src={item.video}
                        className="portfolio-video"
                        muted
                        autoPlay
                        loop
                        playsInline
                    />
                    ) : (
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="portfolio-video" /* Same styling used for clean design consistency */
                      />
                    )}

                    <div className="p-card-overlay">
                      <div className="p-card-meta">
                        <span className="p-tag">{item.tag}</span>
                        <span className="p-year">{item.year}</span>
                      </div>
                      <div className="p-card-info">
                        <h3>{item.title}</h3>
                        <p>{item.subtitle}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* VIDEO / IMAGE MODAL */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div className="video-modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="video-backdrop" onClick={() => setSelectedVideo(null)} />
            <motion.div
              className="video-modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <button className="close-video-btn" onClick={() => setSelectedVideo(null)}>✕</button>
              
              {/* Conditional Modal View */}
              {selectedVideo.type === "video" ? (
                <video src={selectedVideo.video} controls autoPlay className="popup-video" />
              ) : (
                <img src={selectedVideo.image} alt={selectedVideo.title} className="popup-video" />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Portfolio;