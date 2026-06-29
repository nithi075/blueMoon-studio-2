import { motion } from "framer-motion";
import "./Services.css";

const services = [
  "Premium Reel Production",
  "Fashion Campaign Shoots",
  "Creative Direction",
  "Social Media Strategy ",
  "Photography",
  "Copywriting",
  "TV Commercials",
  "Brand Styling",
  "Model Coordination",
  "UGC Campaings",
  "Social Media Management",
  "Meta Ads Management",
  "Community Management",
];

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">
            Services Built For
            <span> Fashion Brands</span>
          </h2>

          <p className="services-subtext">
            Premium content production and strategic systems
            designed to help fashion brands attract attention,
            build authority, and generate consistent growth
            across social media platforms.
          </p>
        </div>

        <div className="services-pills">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-pill"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              whileHover={{
                y: -4,
              }}
            >
              <span className="pill-icon"></span>
              {service}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}