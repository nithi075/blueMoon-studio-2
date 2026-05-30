
"use client";

import React, {
  useState,
  useEffect,
} from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import { Plus } from "lucide-react";

import "./Gallery.css";

/* COMPONENTS */

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/footer";

/* FASHION VIDEOS */

import Fashion1 from "../assets/saree1.mp4";
import Fashion2 from "../assets/saree2.mp4";
import Fashion3 from "../assets/saree3.mp4";
import Fashion4 from "../assets/saree4.mp4";
import Fashion5 from "../assets/saree5.mp4";
import Fashion6 from "../assets/saree6.mp4";
import Fashion7 from "../assets/saree7.mp4";
import Fashion8 from "../assets/saree8.mp4";
import Fashion9 from "../assets/saree9.mp4";

/* COMMERCIAL VIDEOS */

import Commercial1 from "../assets/video1.mp4";
import Commercial2 from "../assets/video2.mp4";
import Commercial3 from "../assets/video3.mp4";
import Commercial4 from "../assets/video4.mp4";

/* CLOTHING VIDEOS */

import Clothing1 from "../assets/clothing1.mp4";
import Clothing2 from "../assets/clothing2.mp4";
import Clothing3 from "../assets/clothing3.mp4";
import Clothing4 from "../assets/clothing4.mp4";
import Clothing5 from "../assets/clothing5.mp4";
import Clothing6 from "../assets/clothing6.mp4";

/* PRODUCT VIDEOS */

import Product1 from "../assets/video1.mp4";
import Product2 from "../assets/video2.mp4";
import Product3 from "../assets/video3.mp4";
import Product4 from "../assets/video4.mp4";

const Gallery = () => {

  const [activeCategory, setActiveCategory] =
    useState("all");

  const [visibleItems, setVisibleItems] =
    useState(8);

  const [selectedVideo, setSelectedVideo] =
    useState(null);

  /* BODY SCROLL LOCK */

  useEffect(() => {

    if (selectedVideo) {
      document.body.style.overflow =
        "hidden";
    } else {
      document.body.style.overflow =
        "auto";
    }

    return () => {
      document.body.style.overflow =
        "auto";
    };

  }, [selectedVideo]);

  /* CATEGORIES */

  const categories = [

    {
      id: "all",
      label: "ALL WORKS",
    },

    {
      id: "fashion-shoots",
      label: "FASHION",
    },

    {
      id: "commercials",
      label: "COMMERCIALS",
    },

    {
      id: "clothing-shoots",
      label: "CLOTHING",
    },

    {
      id: "product-shoots",
      label: "PRODUCTS",
    },

  ];

  /* GALLERY ITEMS */

  const galleryItems = [

    /* FASHION */

    {
      id: 1,
      title: "Luxury Saree Campaign",
      subtitle: "Editorial Fashion",
      category: "fashion-shoots",
      type: "FASHION",
      client: "Silk Studio",
      orientation: "horizontal",
      video: Fashion1,
    },

    {
      id: 2,
      title: "Bridal Saree Reel",
      subtitle: "Luxury Bridal Shoot",
      category: "fashion-shoots",
      type: "BRIDAL",
      client: "Wedding Couture",
      orientation: "horizontal",
      video: Fashion2,
    },

    {
      id: 3,
      title: "Traditional Elegance",
      subtitle: "Designer Collection",
      category: "fashion-shoots",
      type: "TRADITIONAL",
      client: "Royal Drapes",
      orientation: "horizontal",
      video: Fashion3,
    },

    {
      id: 4,
      title: "Silk Saree Showcase",
      subtitle: "Premium Campaign",
      category: "fashion-shoots",
      type: "SILK",
      client: "Heritage Silks",
      orientation: "horizontal",
      video: Fashion4,
    },

    {
      id: 5,
      title: "Luxury Fashion Reel",
      subtitle: "Premium Fashion",
      category: "fashion-shoots",
      type: "FASHION",
      client: "Elite Wear",
      orientation: "horizontal",
      video: Fashion5,
    },

    {
      id: 6,
      title: "Modern Saree Reel",
      subtitle: "Creative Direction",
      category: "fashion-shoots",
      type: "MODERN",
      client: "Noir Fashion",
      orientation: "horizontal",
      video: Fashion6,
    },

    {
      id: 7,
      title: "Traditional Reel",
      subtitle: "Classic Look",
      category: "fashion-shoots",
      type: "CLASSIC",
      client: "Royal Silk",
      orientation: "horizontal",
      video: Fashion7,
    },

    {
      id: 8,
      title: "Designer Saree",
      subtitle: "Premium Shoot",
      category: "fashion-shoots",
      type: "DESIGNER",
      client: "Vogue House",
      orientation: "horizontal",
      video: Fashion8,
    },

    {
      id: 9,
      title: "Luxury Collection",
      subtitle: "Editorial Campaign",
      category: "fashion-shoots",
      type: "EDITORIAL",
      client: "Aura Studio",
      orientation: "horizontal",
      video: Fashion9,
    },

    /* COMMERCIALS */

    {
      id: 10,
      title: "TV Commercial",
      subtitle: "Brand Promotion",
      category: "commercials",
      type: "COMMERCIAL",
      client: "Vision Media",
      orientation: "vertical",
      video: Commercial1,
    },

    {
      id: 11,
      title: "Digital Ad",
      subtitle: "Creative Commercial",
      category: "commercials",
      type: "TV AD",
      client: "Pixel Studios",
      orientation: "vertical",
      video: Commercial2,
    },

    {
      id: 12,
      title: "Luxury Promo",
      subtitle: "Modern Branding",
      category: "commercials",
      type: "PROMO",
      client: "Luxe Agency",
      orientation: "vertical",
      video: Commercial3,
    },

    {
      id: 13,
      title: "Brand Campaign",
      subtitle: "Premium Ad Film",
      category: "commercials",
      type: "FILM",
      client: "Motion House",
      orientation: "vertical",
      video: Commercial4,
    },

    /* CLOTHING */

    {
      id: 14,
      title: "Streetwear Reel",
      subtitle: "Urban Fashion",
      category: "clothing-shoots",
      type: "CLOTHING",
      client: "Street Core",
      orientation: "horizontal",
      video: Clothing1,
    },

    {
      id: 15,
      title: "Luxury Apparel",
      subtitle: "Designer Showcase",
      category: "clothing-shoots",
      type: "APPAREL",
      client: "Elite Wear",
      orientation: "horizontal",
      video: Clothing2,
    },

    {
      id: 16,
      title: "Modern Clothing",
      subtitle: "Creative Direction",
      category: "clothing-shoots",
      type: "FASHION",
      client: "Noir Studios",
      orientation: "horizontal",
      video: Clothing3,
    },

    {
      id: 17,
      title: "Fashion Brand Reel",
      subtitle: "Luxury Visuals",
      category: "clothing-shoots",
      type: "BRAND",
      client: "Urban Vogue",
      orientation: "horizontal",
      video: Clothing4,
    },

    {
      id: 18,
      title: "Premium Collection",
      subtitle: "Luxury Clothing",
      category: "clothing-shoots",
      type: "PREMIUM",
      client: "Mode House",
      orientation: "horizontal",
      video: Clothing5,
    },

    {
      id: 19,
      title: "Designer Wear",
      subtitle: "Fashion Campaign",
      category: "clothing-shoots",
      type: "DESIGNER",
      client: "Elite Fashion",
      orientation: "horizontal",
      video: Clothing6,
    },

    /* PRODUCTS */

    {
      id: 20,
      title: "Product Commercial",
      subtitle: "Ads Production",
      category: "product-shoots",
      type: "PRODUCT",
      client: "Glow Cosmetics",
      orientation: "horizontal",
      video: Product1,
    },

    {
      id: 21,
      title: "Cosmetic Reel",
      subtitle: "Beauty Product",
      category: "product-shoots",
      type: "COSMETIC",
      client: "Beauty Lab",
      orientation: "vertical",
      video: Product2,
    },

    {
      id: 22,
      title: "Tech Product",
      subtitle: "Modern Branding",
      category: "product-shoots",
      type: "TECH",
      client: "Nova Tech",
      orientation: "horizontal",
      video: Product3,
    },

    {
      id: 23,
      title: "Perfume Campaign",
      subtitle: "Luxury Commercial",
      category: "product-shoots",
      type: "PERFUME",
      client: "Aura Fragrance",
      orientation: "vertical",
      video: Product4,
    },

  ];

  /* FILTER LOGIC */

  const filteredItems =
    activeCategory === "all"

      ? [

          galleryItems.find(
            (item) =>
              item.category ===
              "fashion-shoots"
          ),

          galleryItems.find(
            (item) =>
              item.category ===
              "commercials"
          ),

          galleryItems.find(
            (item) =>
              item.category ===
              "clothing-shoots"
          ),

          galleryItems.find(
            (item) =>
              item.category ===
              "product-shoots"
          ),

        ].filter(Boolean)

      : galleryItems.filter(
          (item) =>
            item.category ===
            activeCategory
        );

  return (
    <>
      <Navbar />

      <section className="gallery-section">

        {/* HERO */}

        <div className="gallery-hero">

          <div className="hero-content">

            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}
            >

              Selected <span>Works.</span>

            </motion.h1>

            <p className="gallery-subtitle">

              Crafting cinematic visual stories
              with luxury aesthetics and
              premium production.

            </p>

          </div>

        </div>

        {/* FILTERS */}

        <div className="gallery-tabs">

          {categories.map((cat) => (

            <button
              key={cat.id}

              className={
                activeCategory === cat.id
                  ? "active"
                  : ""
              }

              onClick={() =>
                setActiveCategory(cat.id)
              }
            >

              {cat.label}

              <span>

                (
                {cat.id === "all"
                  ? 4
                  : galleryItems.filter(
                      (i) =>
                        i.category === cat.id
                    ).length}
                )

              </span>

            </button>

          ))}

        </div>

        {/* GRID */}

        <motion.div
          layout
          className="gallery-grid"
        >

          <AnimatePresence mode="popLayout">

            {filteredItems
              .slice(0, visibleItems)
              .map((item) => (

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
                    scale: 0.9,
                  }}

                  transition={{
                    duration: 0.5,
                  }}

                  className={`gallery-card ${item.orientation}`}
                >

                  <div
                    className="video-wrap"

                    onClick={() =>
                      setSelectedVideo(item)
                    }
                  >

                    <video
                      src={item.video}

                      autoPlay
                      muted
                      loop
                      playsInline

                      className="gallery-video"
                    />

                    {/* OVERLAY */}

                    <div className="overlay-content">

                      <div className="top-meta">

                        <span className="tag">
                          {item.type}
                        </span>

                        <span className="client">
                          {item.client}
                        </span>

                      </div>

                      <div className="bottom-content">

                        <h3>
                          {item.title}
                        </h3>

                        <p>
                          {item.subtitle}
                        </p>

                      </div>

                    </div>

                  </div>

                </motion.div>

              ))}

          </AnimatePresence>

        </motion.div>

        {/* LOAD MORE */}

        {visibleItems <
          filteredItems.length && (

          <div className="gallery-footer">

            <button
              className="load-more"

              onClick={() =>
                setVisibleItems(
                  (prev) => prev + 4
                )
              }
            >

              Load More Projects

              <Plus size={18} />

            </button>

          </div>

        )}

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

            <div
              className="video-backdrop"

              onClick={() =>
                setSelectedVideo(null)
              }
            />

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
            >

              <button
                className="close-video-btn"

                onClick={() =>
                  setSelectedVideo(null)
                }
              >
                ✕
              </button>

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

      <Footer />

    </>
  );
};

export default Gallery;

