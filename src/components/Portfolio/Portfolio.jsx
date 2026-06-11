import React, { useState, useEffect, useRef } from "react";
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

/* JEWELLERY VIDEOS */
import Jewel1 from "../../assets/jewel1.mp4";
import Jewel2 from "../../assets/jewel2.mp4";
import Jewel3 from "../../assets/jewel3.mp4";
import Jewel4 from "../../assets/jewel4.mp4";
import Jewel5 from "../../assets/jewel5.mp4";
import Jewel6 from "../../assets/jewel6.mp4";
import Jewel7 from "../../assets/jewel7.mp4";
import Jewel8 from "../../assets/jewel8.mp4";

/* PRODUCT IMAGES */
import ProductImg1 from "../../assets/product1.jpg";
import ProductImg2 from "../../assets/product2.jpg";
import ProductImg3 from "../../assets/product3.jpg";
import ProductImg4 from "../../assets/product4.jpg";
import ProductImg5 from "../../assets/product5.jpg";
import ProductImg6 from "../../assets/product6.jpg";
import ProductImg7 from "../../assets/product7.jpg";
import ProductImg8 from "../../assets/product8.jpg";
import ProductImg9 from "../../assets/product9.jpg";
import ProductImg10 from "../../assets/product10.jpg";

/* BTS VIDEOS */
import Bts1 from "../../assets/hero.mp4";
import Bts2 from "../../assets/bts2.mp4";
import Bts3 from "../../assets/bts3.mp4";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("fashion-shoots");
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  // Reference for the filter wrapper to handle horizontal scroll
  const filterWrapperRef = useRef(null);

  // Auto-scroll active filter button to start
  useEffect(() => {
    if (filterWrapperRef.current) {
      const activeButton = filterWrapperRef.current.querySelector('.filter-btn.active');
      if (activeButton) {
        activeButton.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start'
        });
      }
    }
  }, [activeCategory]);

  /* BODY SCROLL LOCK */
  useEffect(() => {
    document.body.style.overflow = selectedVideo ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [selectedVideo]);

  const portfolioItems = [
    { id: 1, title: "Small Butta Silk Sarees", subtitle: "Editorial Fashion", category: "fashion-shoots", tag: "SAREE", year: "2026", orientation: "horizontal", video: Fashion1, type: "video" },
    { id: 2, title: "Anjali Silk Sarees", subtitle: "Luxury Bridal Shoot", category: "fashion-shoots", tag: "BRIDAL", year: "2026", orientation: "horizontal", video: Fashion2, type: "video" },
    { id: 3, title: "Anuska Silk Sarees", subtitle: "Designer Collection", category: "fashion-shoots", tag: "TRADITIONAL", year: "2026", orientation: "horizontal", video: Fashion3, type: "video" },
    { id: 4, title: "Muga Cotton Sarees", subtitle: "Premium Campaign", category: "fashion-shoots", tag: "SILK", year: "2026", orientation: "horizontal", video: Fashion4, type: "video" },
    { id: 19, title: "Mangalagiri Cotton Sarees", subtitle: "Premium Saree Reel", category: "fashion-shoots", tag: "SAREE", year: "2026", orientation: "horizontal", video: Fashion5, type: "video" },
    { id: 20, title: "Ambani Silk Sarees", subtitle: "Luxury Fashion Film", category: "fashion-shoots", tag: "BRIDAL", year: "2026", orientation: "horizontal", video: Fashion6, type: "video" },
    { id: 21, title: "Urvi Sarees", subtitle: "Designer Showcase", category: "fashion-shoots", tag: "SILK", year: "2026", orientation: "horizontal", video: Fashion7, type: "video" },
    { id: 22, title: "Pure Pochampally Cotton Sarees", subtitle: "Fashion Campaign", category: "fashion-shoots", tag: "TRADITIONAL", year: "2026", orientation: "horizontal", video: Fashion8, type: "video" },
    { id: 23, title: "Ikat Cotton Sarees", subtitle: "Premium Saree Shoot", category: "fashion-shoots", tag: "EDITORIAL", year: "2026", orientation: "horizontal", video: Fashion9, type: "video" },

    { id: 5, title: "Importannce of Chalk Piece", subtitle: "Advertisement Showcase", category: "commercials", tag: "TV COMMERCIAL", year: "2026", orientation: "vertical", video: Commercial1, type: "video" },
    { id: 6, title: "Digital TV Campaign", subtitle: "Modern Advertisement", category: "commercials", tag: "TV AD", year: "2026", orientation: "vertical", video: Commercial2, type: "video" },
    { id: 7, title: "Lifestyle of Fisherman", subtitle: "Director's Cut", category: "commercials", tag: "PROMO", year: "2026", orientation: "vertical", video: Commercial3, type: "video" },
    { id: 8, title: "Shoot at Kanyakumari", subtitle: "Cinematic Visuals", category: "commercials", tag: "FILM", year: "2026", orientation: "vertical", video: Commercial4, type: "video" },

    { id: 9, title: "Anarkali Kurties Set", subtitle: "Premium Brand Film", category: "clothing-shoots", tag: "BRAND REEL", year: "2026", orientation: "horizontal", video: Clothing1, type: "video" },
    { id: 10, title: "Chanderi Floral Print Kurties Set", subtitle: "Urban Fashion Reel", category: "clothing-shoots", tag: "STREETWEAR", year: "2026", orientation: "horizontal", video: Clothing2, type: "video" },
    { id: 11, title: "Floral Printed Cotton Kurties Set", subtitle: "Designer Showcase", category: "clothing-shoots", tag: "APPAREL", year: "2026", orientation: "horizontal", video: Clothing3, type: "video" },
    { id: 12, title: "Gomathi Cotton Kurties", subtitle: "Creative Direction", category: "clothing-shoots", tag: "FASHION FILM", year: "2026", orientation: "horizontal", video: Clothing4, type: "video" },
    { id: 17, title: "Karicraft Cotton Kurties", subtitle: "Premium Clothing Film", category: "clothing-shoots", tag: "BRAND", year: "2026", orientation: "horizontal", video: Clothing5, type: "video" },
    { id: 18, title: "Cosmo Simmer Kurties Set", subtitle: "Creative Direction", category: "clothing-shoots", tag: "FASHION", year: "2026", orientation: "horizontal", video: Clothing6, type: "video" },

    { id: 24, title: "Royal Gold Heritage", subtitle: "Traditional Jewellery Film", category: "jewellery-shoots", tag: "GOLD", year: "2026", orientation: "vertical", video: Jewel1, type: "video" },
    { id: 25, title: "Diamond Symphony", subtitle: "Premium Diamond Promo", category: "jewellery-shoots", tag: "DIAMOND", year: "2026", orientation: "vertical", video: Jewel2, type: "video" },
    { id: 26, title: "Bridal Choker Legacy", subtitle: "Luxury Wedding Collection", category: "jewellery-shoots", tag: "BRIDAL", year: "2026", orientation: "horizontal", video: Jewel3, type: "video" },
    { id: 27, title: "Antique Kundan Art", subtitle: "Vintage Royal Showcase", category: "jewellery-shoots", tag: "KUNDAN", year: "2026", orientation: "horizontal", video: Jewel4, type: "video" },
    { id: 28, title: "Minimalist Silver Ad", subtitle: "Modern Daily Wear Look", category: "jewellery-shoots", tag: "SILVER", year: "2026", orientation: "vertical", video: Jewel5, type: "video" },
    { id: 29, title: "The Emerald Story", subtitle: "High-End Luxury Branding", category: "jewellery-shoots", tag: "EMERALD", year: "2026", orientation: "horizontal", video: Jewel6, type: "video" },
    { id: 30, title: "Temple Jewelry Cinematic", subtitle: "Cultural Classic Commercial", category: "jewellery-shoots", tag: "TEMPLE", year: "2026", orientation: "horizontal", video: Jewel7, type: "video" },
    { id: 31, title: "Modern Platinum Vows", subtitle: "Signature Couple Collection", category: "jewellery-shoots", tag: "PLATINUM", year: "2026", orientation: "vertical", video: Jewel8, type: "video" },

    { id: 13, title: "Cosmetic Flatlay", subtitle: "E-commerce Product Photography", category: "product-shoots", tag: "COSMETIC", year: "2026", orientation: "horizontal", image: ProductImg1, type: "image" },
    { id: 14, title: "Luxury Perfume Glow", subtitle: "Commercial Studio Shoot", category: "product-shoots", tag: "PERFUME", year: "2026", orientation: "vertical", image: ProductImg2, type: "image" },
    { id: 15, title: "Premium Watch Focus", subtitle: "Editorial Concept Art", category: "product-shoots", tag: "WATCH", year: "2026", orientation: "horizontal", image: ProductImg3, type: "image" },
    { id: 16, title: "Smart Gadgets Pack", subtitle: "Minimal Technical Setup", category: "product-shoots", tag: "TECH", year: "2026", orientation: "vertical", image: ProductImg4, type: "image" },
    { id: 32, title: "Organic Skincare Line", subtitle: "Brand Identity Shoot", category: "product-shoots", tag: "BEAUTY", year: "2026", orientation: "horizontal", image: ProductImg5, type: "image" },
    { id: 33, title: "Footwear Studio Pack", subtitle: "Commercial Urban Styling", category: "product-shoots", tag: "FASHION", year: "2026", orientation: "horizontal", image: ProductImg6, type: "image" },
    { id: 34, title: "Artisan Coffee Blend", subtitle: "Minimalist Food Styling", category: "product-shoots", tag: "LIFESTYLE", year: "2026", orientation: "vertical", image: ProductImg7, type: "image" },
    { id: 35, title: "Leather Wallet Edit", subtitle: "Premium Accessory Shoot", category: "product-shoots", tag: "FASHION", year: "2026", orientation: "horizontal", image: ProductImg8, type: "image" },
    { id: 36, title: "Gold Jewelry Spark", subtitle: "Editorial Macro Shot", category: "product-shoots", tag: "LUXURY", year: "2026", orientation: "vertical", image: ProductImg9, type: "image" },
    { id: 37, title: "Modern Home Decor", subtitle: "Interior Concept Shoot", category: "product-shoots", tag: "DECOR", year: "2026", orientation: "horizontal", image: ProductImg10, type: "image" },

    { id: 38, title: "Fashion Setup BTS", subtitle: "Saree Shoot", category: "bts", tag: "BTS", year: "2026", orientation: "horizontal", video: Bts1, type: "video" },
    { id: 39, title: "Studio Lighting Process", subtitle: "Commercial Studio", category: "bts", tag: "BTS", year: "2026", orientation: "vertical", video: Bts2, type: "video" },
    { id: 40, title: "The Creative Making Of", subtitle: "Jewellery Shoot", category: "bts", tag: "BTS", year: "2026", orientation: "horizontal", video: Bts3, type: "video" }
  ];

  const categories = [
    { id: "fashion-shoots", label: "SAREE COMMERCIALS" },
    { id: "commercials", label: "TV COMMERCIALS" },
    { id: "clothing-shoots", label: "CLOTHING BRAND REELS" },
    { id: "jewellery-shoots", label: "JEWELLERY BRAND REELS" },
    { id: "product-shoots", label: "PRODUCT SHOOTS" },
    { id: "bts", label: "BTS" }
  ];

  const filteredItems = portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <section className="portfolio-section" id="portfolio">
        <div className="portfolio-container">
          <div className="portfolio-top">
            <div className="portfolio-heading">
              <span className="portfolio-label">FEATURED PROJECTS</span>
              <h2 className="portfolio-title">Cinematic <br /><span>Visual Poetry.</span></h2>
            </div>
            <div className="portfolio-right-content">
              <p>Premium videography and luxury visuals crafted with cinematic storytelling.</p>
              <div className="portfolio-filter-wrapper" ref={filterWrapperRef}>
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
                    {item.type === "video" ? (
                      <video src={item.video} className="portfolio-video" muted autoPlay loop playsInline />
                    ) : (
                      <img src={item.image} alt={item.title} className="portfolio-video" />
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

      <AnimatePresence>
        {selectedVideo && (
          <motion.div className="video-modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="video-backdrop" onClick={() => setSelectedVideo(null)} />
            <motion.div className="video-modal-content" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} transition={{ duration: 0.35 }}>
              <button className="close-video-btn" onClick={() => setSelectedVideo(null)}>✕</button>
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