import React, {
  useState,
  useEffect,
} from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  ArrowUpRight,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

import "./Portfolio.css";

/* VIDEOS */

// Saree Commercials
import Fashion1 from "../../assets/saree1.mp4";
import Fashion2 from "../../assets/saree2.mp4";
import Fashion3 from "../../assets/saree3.mp4";
import Fashion4 from "../../assets/saree4.mp4";

// TV Commercials
import Commercial1 from "../../assets/video3.mp4";
import Commercial2 from "../../assets/video4.mp4";
import Commercial3 from "../../assets/video2.mp4";
import Commercial4 from "../../assets/video1.mp4";

// Clothing Brand Reels
import Brand1 from "../../assets/clothing1.mp4";
import Brand2 from "../../assets/clothing2.mp4";
import Brand3 from "../../assets/clothing3.mp4";
import Brand4 from "../../assets/clothing4.mp4";

// Product Shoots
import Product1 from "../../assets/video3.mp4";
import Product2 from "../../assets/video4.mp4";
import Product3 from "../../assets/video2.mp4";
import Product4 from "../../assets/video1.mp4";

const Portfolio = () => {

  const [activeCategory, setActiveCategory] =
    useState("all");

  const [selectedVideo, setSelectedVideo] =
    useState(null);

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

  /* PORTFOLIO ITEMS */

  const portfolioItems = [

    /* SAREE COMMERCIALS */

    {
      id: 1,
      title: "Luxury Saree Campaign",
      subtitle: "Editorial Fashion",
      category: "fashion-shoots",
      tag: "SAREE",
      year: "2026",
      orientation: "horizontal",
      video: Fashion1,
    },

    {
      id: 2,
      title: "Bridal Saree Reel",
      subtitle: "Luxury Bridal Shoot",
      category: "fashion-shoots",
      tag: "BRIDAL",
      year: "2026",
      orientation: "horizontal",
      video: Fashion2,
    },

    {
      id: 3,
      title: "Traditional Elegance",
      subtitle: "Designer Collection",
      category: "fashion-shoots",
      tag: "TRADITIONAL",
      year: "2026",
      orientation: "horizontal",
      video: Fashion3,
    },

    {
      id: 4,
      title: "Silk Saree Showcase",
      subtitle: "Premium Campaign",
      category: "fashion-shoots",
      tag: "SILK",
      year: "2026",
      orientation: "horizontal",
      video: Fashion4,
    },

    /* TV COMMERCIALS */

    {
      id: 5,
      title: "Luxury Brand Ad",
      subtitle: "Premium TV Commercial",
      category: "commercials",
      tag: "TV COMMERCIAL",
      year: "2026",
      orientation: "vertical",
      video: Commercial1,
    },

    {
      id: 6,
      title: "Digital TV Campaign",
      subtitle: "Modern Advertisement",
      category: "commercials",
      tag: "TV AD",
      year: "2026",
      orientation: "vertical",
      video: Commercial2,
    },

    {
      id: 7,
      title: "Premium Promo",
      subtitle: "Luxury Branding",
      category: "commercials",
      tag: "PROMO",
      year: "2026",
      orientation: "vertical",
      video: Commercial3,
    },

    {
      id: 8,
      title: "Commercial Reel",
      subtitle: "Cinematic Production",
      category: "commercials",
      tag: "FILM",
      year: "2026",
      orientation: "vertical",
      video: Commercial4,
    },

    /* CLOTHING BRAND REELS */

    {
      id: 9,
      title: "Luxury Clothing Reel",
      subtitle: "Premium Brand Film",
      category: "jewelry-shoots",
      tag: "BRAND REEL",
      year: "2026",
      orientation: "horizontal",
      video: Brand1,
    },

    {
      id: 10,
      title: "Streetwear Campaign",
      subtitle: "Urban Fashion Reel",
      category: "jewelry-shoots",
      tag: "STREETWEAR",
      year: "2026",
      orientation: "horizontal",
      video: Brand2,
    },

    {
      id: 11,
      title: "Luxury Apparel",
      subtitle: "Designer Showcase",
      category: "jewelry-shoots",
      tag: "APPAREL",
      year: "2026",
      orientation: "horizontal",
      video: Brand3,
    },

    {
      id: 12,
      title: "Modern Clothing Ad",
      subtitle: "Creative Direction",
      category: "jewelry-shoots",
      tag: "FASHION FILM",
      year: "2026",
      orientation: "horizontal",
      video: Brand4,
    },

    /* PRODUCT SHOOTS */

    {
      id: 13,
      title: "Product Commercial",
      subtitle: "Ads Production",
      category: "product-shoots",
      tag: "PRODUCT",
      year: "2025",
      orientation: "horizontal",
      video: Product1,
    },

    {
      id: 14,
      title: "Cosmetic Reel",
      subtitle: "Beauty Product",
      category: "product-shoots",
      tag: "COSMETIC",
      year: "2026",
      orientation: "vertical",
      video: Product2,
    },

    {
      id: 15,
      title: "Tech Product",
      subtitle: "Modern Branding",
      category: "product-shoots",
      tag: "TECH",
      year: "2026",
      orientation: "horizontal",
      video: Product3,
    },

    {
      id: 16,
      title: "Perfume Campaign",
      subtitle: "Luxury Commercial",
      category: "product-shoots",
      tag: "PERFUME",
      year: "2026",
      orientation: "vertical",
      video: Product4,
    },
  ];

  /* FILTERS */

  const categories = [
    { id: "all", label: "ALL WORK" },

    {
      id: "fashion-shoots",
      label: "SAREE COMMERCIALS",
    },

    {
      id: "commercials",
      label: "TV COMMERCIALS",
    },

    {
      id: "jewelry-shoots",
      label: "CLOTHING BRAND REELS",
    },

    {
      id: "product-shoots",
      label: "PRODUCT SHOOTS",
    },
  ];

  /* FILTER LOGIC */

  const filteredItems =
    activeCategory === "all"
      ? [
          portfolioItems.find(
            (item) =>
              item.category === "fashion-shoots"
          ),

          portfolioItems.find(
            (item) =>
              item.category === "commercials"
          ),

          portfolioItems.find(
            (item) =>
              item.category === "jewelry-shoots"
          ),

          portfolioItems.find(
            (item) =>
              item.category === "product-shoots"
          ),
        ]
      : portfolioItems.filter(
          (item) =>
            item.category === activeCategory
        );

  return (
    <>
      <section
        className="portfolio-section"
        id="portfolio"
      >

        <div className="portfolio-container">

          {/* HEADER */}

          <div className="portfolio-top">

            <div className="portfolio-heading">

              <span className="portfolio-label">
                FEATURED PROJECTS
              </span>

              <h2 className="portfolio-title">
                Cinematic <br />
                <span>Visual Poetry.</span>
              </h2>

            </div>

            <div className="portfolio-right-content">

              <p>
                Premium videography and luxury visuals
                crafted with cinematic storytelling.
              </p>

              {/* FILTERS */}

              <div className="portfolio-filter-wrapper">

                {categories.map((cat) => (

                  <button
                    key={cat.id}

                    className={`filter-btn ${
                      activeCategory === cat.id
                        ? "active"
                        : ""
                    }`}

                    onClick={() =>
                      setActiveCategory(cat.id)
                    }
                  >
                    {cat.label}
                  </button>

                ))}

              </div>

            </div>

          </div>

          {/* GRID */}

          <motion.div
            layout
            className="portfolio-grid"
          >

            <AnimatePresence mode="popLayout">

              {filteredItems.map((item) => (

                <motion.div
                  key={item.id}

                  layout

                  initial={{
                    opacity: 0,
                    scale: 0.95,
                    y: 30,
                  }}

                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }}

                  exit={{
                    opacity: 0,
                    scale: 0.95,
                  }}

                  transition={{
                    duration: 0.5,
                  }}

                  className={`p-card ${item.orientation}`}
                >

                  <div
                    className="p-card-link"

                    onClick={() =>
                      setSelectedVideo(item)
                    }
                  >

                    <div className="p-video-box">

                      <video
                        src={item.video}

                        className="portfolio-video"

                        muted
                        autoPlay
                        loop
                        playsInline
                        preload="auto"
                      />

                      {/* OVERLAY */}

                      <div className="p-card-overlay">

                        <div className="p-card-meta">

                          <span className="p-tag">
                            {item.tag}
                          </span>

                          <span className="p-year">
                            {item.year}
                          </span>

                        </div>

                        <div className="p-card-info">

                          <h3>
                            {item.title}
                          </h3>

                          <p>
                            {item.subtitle}
                          </p>

                          {/* VIEW MORE */}

                          <Link
                            to="/gallery"

                            className="view-btn"

                            onClick={(e) =>
                              e.stopPropagation()
                            }
                          >

                            View More

                            <ArrowUpRight size={14} />

                          </Link>

                        </div>

                      </div>

                    </div>

                  </div>

                </motion.div>

              ))}

            </AnimatePresence>

          </motion.div>

        </div>

      </section>

      {/* VIDEO MODAL */}

      <AnimatePresence>

        {selectedVideo && (

          <motion.div
            className="video-modal"

            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}

            exit={{
              opacity: 0,
            }}
          >

            {/* BACKDROP */}

            <div
              className="video-backdrop"

              onClick={() =>
                setSelectedVideo(null)
              }
            />

            {/* MODAL */}

            <motion.div
              className="video-modal-content"

              initial={{
                scale: 0.8,
                opacity: 0,
              }}

              animate={{
                scale: 1,
                opacity: 1,
              }}

              exit={{
                scale: 0.8,
                opacity: 0,
              }}

              transition={{
                duration: 0.35,
              }}
            >

              {/* CLOSE */}

              <button
                className="close-video-btn"

                onClick={() =>
                  setSelectedVideo(null)
                }
              >
                ✕
              </button>

              {/* VIDEO */}

              <video
                src={selectedVideo.video}

                controls
                autoPlay

                className="popup-video"
              />

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
};

export default Portfolio;