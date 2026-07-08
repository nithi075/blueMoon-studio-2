import React from "react";
import { motion } from "framer-motion";
import "./Packages.css";

const packagesData = [
  {
    title: "Growth Package",
    subtitle: "CLOTHING & SAREE BRANDS",
    price: "₹1,40,000",
    duration: "/3 months",
    shoot: "1 Day Shoot",
    features: [
      "3 Months Content",
      "45 Premium Reels",
      "Creative Direction",
      "Professional Model Shoots",
      "Make Up Artist",
      "Social Media Posting Management",
      "Fast and Quick Video Post Deliverables",
    ],
  },
  {
    title: "Annual Growth Package",
    subtitle: "CLOTHING & SAREE BRANDS",
    price: "₹5 LAKHS",
    duration: "/per year",
    shoot: "4 Days Shoot",
    badge: "MOST POPULAR",
    features: [
      "12 Months Content Retainer",
      "183 Premium Reels",
      "Creative Direction",
      "Professional Model Shoots",
      "Make Up Artist",
      "Social Media Posting Management",
      "Fast and Quick Video Post Deliverables",
    ],
  },
];

export default function Packages() {
  return (
    <section className="packages" id="packages">
      <div className="packages-bg-text">
        PRICING
      </div>

      <div className="packages-header">
        <p>CONTENT RETAINER PLANS</p>

        <h2>
          Built To Scale <span>Fashion Brands</span>
        </h2>

        <span className="packages-subtext">
          Premium reel production and strategic content systems
          designed to help fashion brands attract attention,
          build trust, and drive consistent sales across social
          media. From clothing stores and saree brands to
          boutiques and fashion labels, we create content that
          turns viewers into loyal customers.
        </span>
      </div>

      <div className="packages-container">
        {packagesData.map((item, index) => (
          <motion.div
            key={index}
            className={`package-card ${
              item.badge ? "featured" : ""
            }`}
            whileHover={{ y: -10 }}
          >
            {item.badge && (
              <div className="badge">
                {item.badge}
              </div>
            )}

            <div className="package-top">
              <span className="package-mini-title">
                {item.subtitle}
              </span>

              <h3>{item.title}</h3>
            </div>

            <div className="price-box">
              <h1>{item.price}</h1>

              <span className="event-text">
                {item.duration}
              </span>

              <p className="shoot-text">
                {item.shoot}
              </p>
            </div>

            <div className="features">
              {item.features.map((feature, i) => (
                <div
                  key={i}
                  className="feature-item"
                >
                  <span className="feature-dot">
                    ✦
                  </span>

                  <p>{feature}</p>
                </div>
              ))}
            </div>

            <button className="package-btn">
              Get Started ↗
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}