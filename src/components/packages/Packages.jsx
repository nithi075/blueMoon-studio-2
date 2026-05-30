import React from "react";
import { motion } from "framer-motion";
import "./Packages.css";

const packagesData = [
  { title: "Starter Presence", subtitle: "SOCIAL-FIRST CONTENT", price: "₹39K", features: ["Creative Direction", "1 Cinematic Shoot Day", "4 Edited Reels", "Premium Color Grading"] },
  { title: "Brand Accelerator", subtitle: "HIGH-GROWTH PACKAGE", price: "₹79K", badge: "MOST POPULAR", features: ["Multi-Camera Production", "8 Premium Reels", "Monthly Content Strategy", "Luxury Cinematic Editing", "Priority Delivery"] },
  { title: "Signature Identity", subtitle: "FULL CREATIVE EXPERIENCE", price: "₹129K", features: ["Full Brand Content System", "Luxury Production Workflow", "Drone & Cinematic Coverage", "Campaign Creative Direction", "Priority Creative Support"] }
];

export default function Packages() {
  return (
    <section className="packages" id="packages">
      <div className="packages-bg-text">PRICING</div>
      
      <div className="packages-header">
        <p>CREATIVE PARTNERSHIPS</p>
        <h2>Designed For <span>Modern Brands</span></h2>
        <span className="packages-subtext">Social-first content systems crafted for brands built to dominate attention.</span>
      </div>

      <div className="packages-container">
        {packagesData.map((item, index) => (
          <motion.div key={index} className={`package-card ${item.badge ? "featured" : ""}`} whileHover={{ y: -10 }}>
            {item.badge && <div className="badge">{item.badge}</div>}
            
            <div className="package-top">
              <span className="package-mini-title">{item.subtitle}</span>
              <h3>{item.title}</h3>
            </div>

            <div className="price-box">
              <h1>{item.price}</h1>
              <span className="event-text">/per project</span>
            </div>

            <div className="features">
              {item.features.map((feature, i) => (
                <div key={i} className="feature-item">
                  <span className="feature-dot">✦</span>
                  <p>{feature}</p>
                </div>
              ))}
            </div>

            <button className="package-btn">Choose Plan ↗</button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}