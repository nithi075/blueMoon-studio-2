import React from "react";
import { motion } from "framer-motion";
import "./Packages.css";

const packagesData = [
{
title: "Growth Package",
subtitle: "CLOTHING & SAREE BRANDS",
price: "₹2 LAKHS",
features: [
"2 Months Content Retainer",
"12 Premium Reels",
"Creative Direction",
"Professional Model Shoots",
"Luxury Color Grading",
"Social Media Optimization",
"Suitable For Clothing & Saree Brands",
],
},
{
title: "Annual Brand Dominance",
subtitle: "CLOTHING & SAREE BRANDS",
price: "₹10 LAKHS",
badge: "MOST POPULAR",
features: [
"12 Months Content Retainer",
"72+ Premium Reels",
"Festival Campaign Coverage",
"Cinematic Brand Films",
"Monthly Strategy Planning",
"Priority Production Support",
"Suitable For Clothing & Saree Brands",
],
},
];

export default function Packages() {
return ( <section className="packages" id="packages"> <div className="packages-bg-text">
PRICING </div>


  <div className="packages-header">
    <p>CONTENT RETAINER PLANS</p>

    <h2>
      Built For{" "}
      <span>Fashion Brands</span>
    </h2>

    <span className="packages-subtext">
      Premium reel production and content
      systems designed for clothing stores,
      saree brands, boutiques and fashion
      businesses looking to dominate social
      media attention.
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
            {item.price === "₹10 LAKHS"
              ? "/per year"
              : "/2 months"}
          </span>
        </div>

        <div className="features">
          {item.features.map(
            (feature, i) => (
              <div
                key={i}
                className="feature-item"
              >
                <span className="feature-dot">
                  ✦
                </span>

                <p>{feature}</p>
              </div>
            )
          )}
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
